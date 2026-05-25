import { NextResponse } from "next/server"
import { getSupabaseAdminClient } from "@/lib/supabase/admin"

export const runtime = "nodejs"

function getString(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const firstName = getString(formData, "first_name")
    const lastName = getString(formData, "last_name")
    const email = getString(formData, "email")
    const phone = getString(formData, "phone")
    const message = getString(formData, "message")
    const acceptedTerms = getString(formData, "accepted_terms") === "true"

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "All required fields must be filled out" }, { status: 400 })
    }

    if (!acceptedTerms) {
      return NextResponse.json({ error: "You must accept the terms" }, { status: 400 })
    }

    const supabase = getSupabaseAdminClient()

    const { data: messageId, error } = await supabase.rpc("rpc_submit_contact_message", {
      p_first_name: firstName,
      p_last_name: lastName,
      p_email: email,
      p_phone: phone || null,
      p_message: message,
      p_accepted_terms: true,
    })

    if (error) {
      throw error
    }

    return NextResponse.json({ messageId })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit contact message"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}