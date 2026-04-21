import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text ">
            Request Demo
          </h1>

          <p className="text-gray-400">
            Provide us with your details and we will contact you to arrange a demo.
          </p>

        </div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="text-sm text-gray-400">First name</label>
        <input className="w-full mt-2 p-3 bg-zinc-900 rounded-md" />
      </div>

      <div>
        <label className="text-sm text-gray-400">Last name</label>
        <input className="w-full mt-2 p-3 bg-zinc-900 rounded-md" />
      </div>
    </div>

    {/* ROW 2 */}
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="text-sm text-gray-400">Email</label>
        <input className="w-full mt-2 p-3 bg-zinc-900 rounded-md" />
      </div>

      <div>
        <label className="text-sm text-gray-400">Phone number</label>
        <input className="w-full mt-2 p-3 bg-zinc-900 rounded-md" />
      </div>
    </div>

    {/* MESSAGE */}
    <div>
      <label className="text-sm text-gray-400">Message</label>
      <textarea
        rows={5}
        className="w-full mt-2 p-3 bg-zinc-900 rounded-md"
        placeholder = "Type your message.."
      />
    </div>
          {/* TERMS */}
          <div className="text-sm text-gray-400">
            <input type="checkbox" className="mr-2" />
            I accept the Terms and Conditions
          </div>

          {/* BUTTON */}
          <div className = "flex justify-center">
          <Button variant = "default" className="bg-sky-400 px-6 py-6 items-center rounded-md text-black hover:bg-[rgb(81,122,249)] ">
            Submit
          </Button>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA (IMPORTANT) */}
      <section className="bg-gradient-to-b from-black to-blue-900 py-20 text-center">

        <h2 className="text-2xl md:text-4xl font-semibold">
          Learn more about <br />
          <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text">Our Solution</span>
        </h2>

        <div className="mt-10 flex justify-center">
          <Image
            src="/body.png"
            alt="body"
            width={400}
            height={400}
            className="w-64 md:w-96"
          />
        </div>

        <button className="mt-6 bg-sky-400 px-6 py-3 rounded-md text-black">
          Request Demo
        </button>

      </section>

      <Footer />
    </div>
  )
}