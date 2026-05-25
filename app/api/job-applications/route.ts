import { NextResponse } from "next/server"
import { getResumeBucketName, getSupabaseAdminClient } from "@/lib/supabase/admin"

export const runtime = "nodejs"

function getString(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function getResumeExtension(file: File) {
  const nameExtension = file.name.split(".").pop()?.toLowerCase()

  if (nameExtension && nameExtension.length <= 5) {
    return nameExtension
  }

  if (file.type === "application/pdf") return "pdf"
  if (file.type === "application/msword") return "doc"
  if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") return "docx"

  return "pdf"
}

export async function POST(request: Request) {
  let uploadedPath: string | null = null

  try {
    const formData = await request.formData()
    const jobSlug = getString(formData, "job_slug")
    const firstName = getString(formData, "first_name")
    const lastName = getString(formData, "last_name")
    const email = getString(formData, "email")
    const phone = getString(formData, "phone")
    const linkedinUrl = getString(formData, "linkedin_url")
    const portfolioUrl = getString(formData, "portfolio_url")
    const coverLetter = getString(formData, "cover_letter")
    const acceptedTerms = getString(formData, "accepted_terms") === "true"
    const resumeFile = formData.get("resume")

    if (!jobSlug) {
      return NextResponse.json({ error: "Role is required" }, { status: 400 })
    }

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "First name, last name, and email are required" }, { status: 400 })
    }

    if (!acceptedTerms) {
      return NextResponse.json({ error: "You must accept the terms" }, { status: 400 })
    }

    if (!(resumeFile instanceof File) || resumeFile.size === 0) {
      return NextResponse.json({ error: "Resume file is required" }, { status: 400 })
    }

    const supabase = getSupabaseAdminClient()
    const bucketName = getResumeBucketName()

    const { data: job, error: jobError } = await supabase
      .from("jobs")
      .select("id, slug, title, is_active")
      .eq("slug", jobSlug)
      .eq("is_active", true)
      .maybeSingle()

    if (jobError) {
      throw jobError
    }

    if (!job) {
      return NextResponse.json({ error: "Selected role is not available" }, { status: 400 })
    }

    const fileExtension = getResumeExtension(resumeFile)
    const filePath = `applications/${job.slug}/${Date.now()}-${crypto.randomUUID()}.${fileExtension}`
    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer())

    const { error: uploadError } = await supabase.storage.from(bucketName).upload(filePath, fileBuffer, {
      contentType: resumeFile.type || "application/octet-stream",
      upsert: false,
    })

    if (uploadError) {
      throw uploadError
    }

    uploadedPath = filePath

    const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(filePath)
    const resumeUrl = publicUrlData.publicUrl

    if (!resumeUrl) {
      throw new Error("Unable to create resume URL")
    }

    const { data: applicationId, error: applicationError } = await supabase.rpc("rpc_submit_job_application", {
      p_job_id: job.id,
      p_first_name: firstName,
      p_last_name: lastName,
      p_email: email,
      p_phone: phone || null,
      p_linkedin_url: linkedinUrl || null,
      p_portfolio_url: portfolioUrl || null,
      p_resume_url: resumeUrl,
      p_cover_letter: coverLetter || null,
      p_accepted_terms: true,
    })

    if (applicationError) {
      throw applicationError
    }

    return NextResponse.json({
      applicationId,
      resumeUrl,
      job,
    })
  } catch (error) {
    if (uploadedPath) {
      try {
        const supabase = getSupabaseAdminClient()
        await supabase.storage.from(getResumeBucketName()).remove([uploadedPath])
      } catch {
        // Best-effort cleanup only.
      }
    }

    const message = error instanceof Error ? error.message : "Unable to submit application"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}