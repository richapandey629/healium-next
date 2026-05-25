"use client";

import { type FormEvent, useEffect, useRef, useState } from "react"
import { Loader2, Upload, X } from "lucide-react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

type Job = {
  id: string
  slug: string
  title: string
  location: string
  employment_type: string
  tags: string[]
  description?: string | null
}

type ApplicationStatus = "idle" | "uploading" | "processing" | "success" | "error"

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedinUrl: "",
  portfolioUrl: "",
  coverLetter: "",
}

function formatEmploymentType(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
}

function ApplicationSection({
  open,
  onClose,
  jobs,
  selectedJobSlug,
  onSelectedJobSlugChange,
  formState,
  onFormStateChange,
  acceptedTerms,
  onAcceptedTermsChange,
  status,
  uploadProgress,
  errorMessage,
  setErrorMessage,
  resumeFile,
  setResumeFile,
  submitApplication,
  resumeInputRef,
}: {
  open: boolean
  onClose: () => void
  jobs: Job[]
  selectedJobSlug: string
  onSelectedJobSlugChange: (slug: string) => void
  formState: typeof initialFormState
  onFormStateChange: (key: keyof typeof initialFormState, value: string) => void
  acceptedTerms: boolean
  onAcceptedTermsChange: (value: boolean) => void
  status: ApplicationStatus
  uploadProgress: number
  errorMessage: string
  setErrorMessage: (value: string) => void
  resumeFile: File | null
  setResumeFile: (value: File | null) => void
  submitApplication: (event: FormEvent<HTMLFormElement>) => void
  resumeInputRef: React.RefObject<HTMLInputElement | null>
}) {
  const selectedJob = jobs.find((job) => job.slug === selectedJobSlug) ?? jobs[0] ?? null
  const isBusy = status === "uploading" || status === "processing"

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/65 backdrop-blur-[2px] px-4"
      onClick={() => {
        if (!isBusy) {
          onClose()
        }
      }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#d6deef] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-6 sm:px-8 pt-6 pb-7">
          <button
            type="button"
            onClick={onClose}
            disabled={isBusy}
            className="absolute right-4 top-3 text-[#6d7686] hover:text-[#111827] transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close application form"
          >
            <X className="h-8 w-8" />
          </button>

          <h2 className="text-[30px] sm:text-[36px] text-left font-bold leading-[1.1] text-[#0d1b2a]">
            Application Form
          </h2>
          <p className="text-left text-[14px] sm:text-[15px] text-[#6b7280] mt-2 mb-6">
            Tell us about yourself and why you are a good fit for this role.
          </p>

          {status === "success" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
              <p className="font-semibold">Application submitted.</p>
              <p className="mt-1 text-sm text-emerald-800">
                Your resume was uploaded and attached to the application record.
              </p>
              <div className="mt-5 flex justify-end">
                <Button type="button" onClick={onClose} className="h-11 px-5 rounded-lg text-[14px] font-semibold cursor-pointer">
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form className="w-full space-y-4" onSubmit={submitApplication}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                    Role
                  </label>
                  <select
                    value={selectedJobSlug}
                    onChange={(event) => onSelectedJobSlugChange(event.target.value)}
                    className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                  >
                    {jobs.map((job) => (
                      <option key={job.slug} value={job.slug}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(event) => onFormStateChange("email", event.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formState.firstName}
                    onChange={(event) => onFormStateChange("firstName", event.target.value)}
                    placeholder="John"
                    className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                  />
                </div>

                <div>
                  <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formState.lastName}
                    onChange={(event) => onFormStateChange("lastName", event.target.value)}
                    placeholder="Doe"
                    className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(event) => onFormStateChange("phone", event.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                  />
                </div>

                <div>
                  <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={formState.linkedinUrl}
                    onChange={(event) => onFormStateChange("linkedinUrl", event.target.value)}
                    placeholder="https://linkedin.com/in/your-handle"
                    className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  value={formState.portfolioUrl}
                  onChange={(event) => onFormStateChange("portfolioUrl", event.target.value)}
                  placeholder="https://your-portfolio.com"
                  className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                />
              </div>

              <div>
                <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                  Cover Letter
                </label>
                <textarea
                  value={formState.coverLetter}
                  onChange={(event) => onFormStateChange("coverLetter", event.target.value)}
                  placeholder="Write your cover letter here..."
                  rows={6}
                  className="w-full min-h-[170px] rounded-lg border border-[#d8dee9] px-3 py-2.5 text-[14px] text-[#1f2937] outline-none resize-y focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                />
              </div>

              <div>
                <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                  Resume
                </label>
                <label className="flex min-h-[96px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#cbd5e1] bg-[#f8fafc] px-4 py-5 text-center transition hover:border-[#3898ec] hover:bg-[#f1f7ff]">
                  <Upload className="h-5 w-5 text-[#3898ec]" />
                  <span className="mt-2 text-sm font-semibold text-[#0f172a]">
                    {resumeFile ? resumeFile.name : "Click to upload your resume"}
                  </span>
                  <span className="mt-1 text-xs text-[#64748b]">PDF, DOC, or DOCX up to 10 MB</span>
                  <input
                    ref={resumeInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null
                      setResumeFile(file)
                      setErrorMessage("")
                    }}
                  />
                </label>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-[#dbe4f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#475569]">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-[#cbd5e1] text-[#3898ec]"
                  checked={acceptedTerms}
                  onChange={(event) => onAcceptedTermsChange(event.target.checked)}
                />
                <span>I accept the Terms and Conditions and consent to be contacted about this application.</span>
              </div>

              {(status === "uploading" || status === "processing") && (
                <div className="rounded-xl border border-[#d8dee9] bg-[#f8fafc] p-4">
                  <div className="flex items-center justify-between text-[13px] font-medium text-[#475569]">
                    <span>{status === "processing" ? "Finalizing application" : "Uploading resume"}</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e2e8f0]">
                    <div
                      className="h-full rounded-full bg-[#3898ec] transition-[width] duration-200"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {errorMessage ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              ) : null}

              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-1">
                <Button
                  type="button"
                  onClick={onClose}
                  disabled={isBusy}
                  className="h-11 px-5 rounded-lg text-[14px] font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isBusy || jobs.length === 0 || !acceptedTerms}
                  className="h-11 px-6 text-[14px] font-semibold rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isBusy ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {status === "processing" ? "Submitting" : "Uploading"}
                    </span>
                  ) : selectedJob ? (
                    `Apply for ${selectedJob.title}`
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CareersPage() {
  const [open, setOpen] = useState(false)
  const [jobs, setJobs] = useState<Job[]>([])
  const [jobsError, setJobsError] = useState("")
  const [jobsLoading, setJobsLoading] = useState(true)
  const [selectedJobSlug, setSelectedJobSlug] = useState("")
  const [formState, setFormState] = useState(initialFormState)
  const [acceptedTerms, setAcceptedTerms] = useState(true)
  const [status, setStatus] = useState<ApplicationStatus>("idle")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const resumeInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadJobs() {
      setJobsLoading(true)
      setJobsError("")

      try {
        const response = await fetch("/api/jobs", { signal: controller.signal })

        if (!response.ok) {
          throw new Error("Unable to load open roles")
        }

        const payload = (await response.json()) as { jobs?: Job[] }
        const nextJobs = payload.jobs ?? []

        setJobs(nextJobs)
        setSelectedJobSlug((currentSlug) => currentSlug || nextJobs[0]?.slug || "")
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        setJobsError(error instanceof Error ? error.message : "Unable to load open roles")
      } finally {
        if (!controller.signal.aborted) {
          setJobsLoading(false)
        }
      }
    }

    loadJobs()

    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (!selectedJobSlug && jobs.length > 0) {
      setSelectedJobSlug(jobs[0].slug)
    }
  }, [jobs, selectedJobSlug])

  function resetApplicationState() {
    setFormState(initialFormState)
    setAcceptedTerms(true)
    setResumeFile(null)
    setUploadProgress(0)
    setStatus("idle")
    setErrorMessage("")

    if (resumeInputRef.current) {
      resumeInputRef.current.value = ""
    }
  }

  function openApplication(jobSlug?: string) {
    if (jobSlug) {
      setSelectedJobSlug(jobSlug)
    }

    setErrorMessage("")
    setUploadProgress(0)
    setStatus("idle")
    setOpen(true)
  }

  function closeApplication() {
    if (status === "uploading" || status === "processing") {
      return
    }

    setOpen(false)
    resetApplicationState()
  }

  function updateField(key: keyof typeof initialFormState, value: string) {
    setFormState((current) => ({ ...current, [key]: value }))
  }

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!selectedJobSlug) {
      setErrorMessage("Please select a role")
      return
    }

    if (!formState.firstName || !formState.lastName || !formState.email) {
      setErrorMessage("First name, last name, and email are required")
      return
    }

    if (!acceptedTerms) {
      setErrorMessage("You must accept the terms")
      return
    }

    if (!resumeFile) {
      setErrorMessage("Please upload your resume")
      return
    }

    setErrorMessage("")
    setStatus("uploading")
    setUploadProgress(1)

    const formData = new FormData()
    formData.append("job_slug", selectedJobSlug)
    formData.append("first_name", formState.firstName)
    formData.append("last_name", formState.lastName)
    formData.append("email", formState.email)
    formData.append("phone", formState.phone)
    formData.append("linkedin_url", formState.linkedinUrl)
    formData.append("portfolio_url", formState.portfolioUrl)
    formData.append("cover_letter", formState.coverLetter)
    formData.append("accepted_terms", String(acceptedTerms))
    formData.append("resume", resumeFile)

    try {
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open("POST", "/api/job-applications")
        xhr.responseType = "json"

        xhr.upload.onprogress = (event) => {
          if (!event.lengthComputable) {
            return
          }

          const nextProgress = Math.min(90, Math.max(5, Math.round((event.loaded / event.total) * 90)))
          setUploadProgress(nextProgress)
        }

        xhr.upload.onload = () => {
          setStatus("processing")
          setUploadProgress(94)
        }

        xhr.onload = () => {
          const response = xhr.response as { error?: string } | null

          if (xhr.status >= 200 && xhr.status < 300) {
            setUploadProgress(100)
            resolve()
            return
          }

          reject(new Error(response?.error ?? "Unable to submit application"))
        }

        xhr.onerror = () => reject(new Error("Network error while submitting the application"))
        xhr.send(formData)
      })

      setStatus("success")
      setErrorMessage("")
      setFormState(initialFormState)
      setAcceptedTerms(true)
      setResumeFile(null)

      if (resumeInputRef.current) {
        resumeInputRef.current.value = ""
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit application")
    }
  }

  return (
    <div className="bg-black text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1e45d5cc_0%,#2848a3_18%,#152b58_32%,#0a1732_44%,#040d1d_54%,#02070f_62%,#010304_68%,#010304_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(125%_88%_at_50%_0%,rgba(182,206,255,0.28)_0%,rgba(96,131,238,0.14)_34%,rgba(0,0,0,0)_72%)]"></div>
            <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:120px] opacity-24 mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:58px] opacity-10 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 px-6 pt-12 md:pt-14 pb-10 md:pb-12">
            <h1 className="text-[34px] md:text-[62px] leading-[1.1] bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text font-bold max-w-7xl mx-auto">
              Build the Future of Healthcare With
              <br className="hidden md:block" />
              Us
            </h1>

            <p className="mt-5 text-[#9ea6b4] max-w-4xl mx-auto text-[15px] md:text-[16px] leading-[1.55] font-medium">
              Join our mission to transform kidney disease detection through AI-powered ultrasound technology. We&apos;re looking for passionate innovators ready to make a real impact.
            </p>
          </div>

          <div className="relative z-10 py-10 md:py-14 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center">
              <div>
                <p className="text-[44px] md:text-[58px] leading-none font-bold bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text">11-50</p>
                <p className="text-[#9aa0ac] text-[15px] md:text-[16px]">Team Members</p>
              </div>

              <div>
                <p className="text-[44px] md:text-[58px] leading-none font-bold bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text">2020</p>
                <p className="text-[#9aa0ac] text-[15px] md:text-[16px]">Founded</p>
              </div>

              <div>
                <p className="text-[44px] md:text-[58px] leading-none font-bold bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text">NYC</p>
                <p className="text-[#9aa0ac] text-[15px] md:text-[16px]">Headquarters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 md:py-20 px-6 text-center text-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1e45d5cc_0%,#2a4caf_30%,#19326f_56%,#0e1d43_74%,#050f24_88%,#010304_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(125%_90%_at_50%_0%,rgba(180,205,255,0.3)_0%,rgba(95,130,236,0.14)_35%,rgba(0,0,0,0)_72%)]"></div>
            <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:120px] opacity-22 mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:58px] opacity-10 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-[34px] md:text-[56px] leading-[1.1] bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text font-bold mb-4">
              Why Join Healium IntelliScan?
            </h2>

            <p className="text-[#98a2b5] text-[15px] md:text-[16px] max-w-3xl mx-auto">
              Be part of a team that&apos;s dedicated to saving lives through early detection technology
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-5 max-w-6xl mx-auto text-left">
              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] font-semibold bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text">Meaningful Impact</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                  Work on technology that directly impacts patient outcomes. Help detect chronic kidney disease before it becomes life-threatening.
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Cutting-Edge Technology</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                  Work with AI, machine learning, and computer vision to develop next-generation point-of-care ultrasound diagnostics.
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Growth Opportunities</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                  Join an early-stage startup where your contributions matter. Grow with us as we scale our technology globally.
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Collaborative Culture</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                  Work alongside experts in healthcare, AI, and medical devices. We value diverse perspectives and open communication.
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Innovation First</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                  We encourage experimentation and creative problem-solving. Your ideas can shape the future of diagnostic healthcare.
                </p>
              </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Healthcare Benefits</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                  Comprehensive health coverage, flexible work arrangements, and competitive compensation packages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <h2 className="text-[56px] font-bold mb-5">Open Positions</h2>
          <p className="text-[#999] text-[16px] mt-2">Find your next opportunity to make a difference</p>

          <div className="mt-6 max-w-[940px] mx-auto text-left">
            {jobsLoading ? (
              <div className="rounded-xl border border-[#908b8b] px-5 md:px-10 py-10 text-[#999]">
                Loading roles from Supabase...
              </div>
            ) : jobsError ? (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 md:px-10 py-10 text-red-200">
                {jobsError}
              </div>
            ) : jobs.length === 0 ? (
              <div className="rounded-xl border border-[#908b8b] px-5 md:px-10 py-10 text-[#999]">
                No active openings are available right now.
              </div>
            ) : (
              <div className="space-y-6">
                {jobs.map((job) => (
                  <div key={job.id} className="border border-[#908b8b] rounded-xl px-5 md:px-10 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-sky-400 transition">
                    <div className="w-full min-w-0">
                      <h3 className="text-[20px] md:text-[24px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text mb-4 font-bold">
                        {job.title}
                      </h3>

                      <p className="text-[#999] text-[16px] font-normal mt-1 mb-4 flex gap-8 flex-wrap">
                        <span>{job.location}</span>
                        <span>{formatEmploymentType(job.employment_type)}</span>
                      </p>

                      <div className="flex gap-5 mt-3 flex-wrap">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#183548] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full transition"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => openApplication(job.slug)}
                      className="font-semibold cursor-pointer text-[16px] md:text-[19.2px] px-6 py-3 w-full md:w-[147px] h-[48px] md:h-[52.78px] rounded-md"
                    >
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-8 px-4 text-center">
          <h2 className="text-[56px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text font-bold mb-5 font-stretch-100%">
            Don&apos;t See the Right Role?
          </h2>

          <p className="text-[#999] mb-4 text-[16px] max-w-4xl mx-auto">
            We&apos;re always looking for talented people who share our passion. Send us your resume and we&apos;ll reach out when a matching opportunity arises.
          </p>

          <Button
            onClick={() => openApplication()}
            className="mt-5 mb-4 text-[19.2px] w-[216.5px] h-[52.8px] font-semibold cursor-pointer px-6 py-3"
          >
            Send Your Resume
          </Button>
        </section>
      </main>

      <ApplicationSection
        open={open}
        onClose={closeApplication}
        jobs={jobs}
        selectedJobSlug={selectedJobSlug}
        onSelectedJobSlugChange={setSelectedJobSlug}
        formState={formState}
        onFormStateChange={updateField}
        acceptedTerms={acceptedTerms}
        onAcceptedTermsChange={setAcceptedTerms}
        status={status}
        uploadProgress={uploadProgress}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        resumeFile={resumeFile}
        setResumeFile={setResumeFile}
        submitApplication={submitApplication}
        resumeInputRef={resumeInputRef}
      />

      <Footer />
    </div>
  )
}