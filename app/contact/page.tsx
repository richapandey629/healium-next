import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="bg-[#010304] text-white min-h-screen">
      <Navbar />

      {/* HERO / HEADER */}
      <section className="pt-20 pb-12 px-6 text-center">
        <div className="max-w-[48rem] mx-auto space-y-4">
          <h2 className="text-[3rem] font-bold bg-linear-90 from-[#517af9] to-[#0ebaf0] text-transparent bg-clip-text">
            Request Demo
          </h2>
          <p className="text-[#999] text-[16px]">
            Provide us with your details and we will contact you to arrange a demo.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-20">
        <div className="max-w-[48rem] mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#999] mb-2 text-[16px] font-normal">First name</label>
                <input className="w-[194px] h-[44px] px-3 py-2 bg-[#0b0d10] border border-[#202032] rounded-[8px] focus:border-[#3898ec] focus:outline-none text-[16px]" required />
              </div>
              <div>
                <label className="block text-[#999] mb-2 text-[14px] font-normal">Last name</label>
                <input className="w-[194px] h-[44px] px-3  py-2 bg-[#0b0d10] border border-[#202032] rounded-[8px] focus:border-[#3898ec] focus:outline-none text-[14px]" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#999] mb-2 text-[16px] font-normal">Email</label>
                <input type="email" className="w-[194px] h-[44px] py-2 px-3 bg-[#0b0d10] border border-[#202032] rounded-[8px] focus:border-[#3898ec] focus:outline-none text-[14px]" required />
              </div>
              <div>
                <label className="block text-[#999] mb-2 text-[16px] font-normal">Phone number</label>
                <input type="tel" className="w-[194px] h-[44px] py-2 px-3 bg-[#0b0d10] border border-[#202032] rounded-[8px] focus:border-[#3898ec] focus:outline-none text-[14px]" required />
              </div>
            </div>

            <div>
              <label className="block text-[#999] mb-2 text-[16px] font-normal">Message</label>
              <textarea rows={5} className="w-full min-h-[11.25rem]  p-3 bg-[#0b0d10] border border-[#202032] rounded-[8px] focus:border-[#3898ec] focus:outline-none text-[14px] resize-y" placeholder="Type your message..." required />
            </div>

            <div className="flex items-center mt-2">
              <input type="checkbox" className="w-[1.125rem] h-[1.125rem] mr-2 bg-[#000] border border-[#242424] cursor-pointer" required />
              <span className="text-sm text-[#999]">
                I accept the <a href="/terms-and-condition" className="underline hover:text-white transition-colors">Terms and Conditions</a>
              </span>
            </div>

            <div className="text-center mt-6">
              <Button type="submit" className="bg-[#3898ec] hover:bg-[#517af9] text-white px-[24px] py-[12px] h-[49.488px] w-[100.87px] text-[14px] font-normal rounded border-none transition-colors">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden pt-20 pb-20">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:75px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010304] from-[26%] to-[#1e45d5cc]"></div>
          <div className="absolute inset-auto bottom-0 w-full h-[70%] bg-[url('/hexagon.png')] bg-[length:69px] opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[48rem] mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-[2.5rem] font-bold mb-8 leading-snug">
            <span className="text-white">Learn more about </span><br />
            <span className="bg-gradient-to-r from-[#517af9] to-[#0ebaf0] text-transparent bg-clip-text">
              Our Solution
            </span>
          </h2>
          
          <div className="flex justify-center mb-8">
            <Image
              src="/body.png"
              alt="Kidney line art image"
              width={500}
              height={500}
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-[#3898ec] hover:bg-[#517af9] text-white px-[15px] py-[9px] h-auto text-[14px] font-normal rounded-none border-none transition-colors">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}