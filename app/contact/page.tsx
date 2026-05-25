"use client"

import { type FormEvent, useEffect, useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import CTA from "@/components/cta"

type ToastState = {
  visible: boolean
  message: string
}

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
}

export default function ContactPage() {
  const [formState, setFormState] = useState(initialFormState)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [toast, setToast] = useState<ToastState>({ visible: false, message: "" })

  useEffect(() => {
    if (!toast.visible) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setToast({ visible: false, message: "" })
    }, 3500)

    return () => window.clearTimeout(timeoutId)
  }, [toast.visible])

  function updateField(key: keyof typeof initialFormState, value: string) {
    setFormState((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formState.firstName || !formState.lastName || !formState.email || !formState.message) {
      setErrorMessage("Please complete all required fields.")
      return
    }

    if (!acceptedTerms) {
      setErrorMessage("Please accept the terms and conditions.")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const formData = new FormData()
      formData.append("first_name", formState.firstName)
      formData.append("last_name", formState.lastName)
      formData.append("email", formState.email)
      formData.append("phone", formState.phone)
      formData.append("message", formState.message)
      formData.append("accepted_terms", String(acceptedTerms))

      const response = await fetch("/api/contact-messages", {
        method: "POST",
        body: formData,
      })

      const payload = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to submit message")
      }

      setFormState(initialFormState)
      setAcceptedTerms(false)
      setToast({ visible: true, message: "Message sent successfully. We will contact you soon." })
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-black text-white">
      <Navbar />

      {toast.visible ? (
        <div className="fixed right-4 top-4 z-[400] w-[min(92vw,420px)] rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-100 shadow-2xl backdrop-blur-md">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
            <div>
              <p className="text-sm font-semibold">Success</p>
              <p className="text-sm text-emerald-100/90">{toast.message}</p>
            </div>
          </div>
        </div>
      ) : null}

      {/* HERO */}
      <section className="px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text">
            Request Demo
          </h1>

          <p className="text-[18px] text-[#999]">
            Provide us with your details and we will contact you to arrange a demo.
          </p>

          {/* FORM */}
          <section className="px-6 pb-20 text-left">
            <form className="mx-auto space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-400">First name</label>
                  <input
                    value={formState.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                    className="mt-2 w-full rounded-md bg-[#0b0d10] p-3"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Last name</label>
                  <input
                    value={formState.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                    className="mt-2 w-full rounded-md bg-[#0b0d10] p-3"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="mt-2 w-full rounded-md bg-[#0b0d10] p-3"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Phone number</label>
                  <input
                    value={formState.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className="mt-2 w-full rounded-md bg-[#0b0d10] p-3"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows={5}
                  value={formState.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="mt-2 w-full rounded-md bg-[#0b0d10] p-3"
                  placeholder="Type your message.."
                />
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                />
                I accept the Terms and Conditions
              </label>

              {errorMessage ? (
                <div className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {errorMessage}
                </div>
              ) : null}

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-[42px] w-[149.4px] cursor-pointer text-[16px] font-normal disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}