import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import BendingImage from "@/components/ui/bending-image"
import { ArrowUpRight, Lightbulb, CircleDollarSign, ThumbsUp, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#010304] py-12 md:py-16 px-6 text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:60px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010304] from-[23%] to-[#1e45d5cc]"></div>
          <div className="absolute bottom-0 w-full h-full bg-[url('/hexagon.png')] bg-[length:69px] opacity-85"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[2rem] bg-[#0ebaf0] blur-[50px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">

          <h1 className="text-[40px] bg-linear-180 from-[white] to-[#a2a2a2] text-transparent bg-clip-text  mb-8 font-semibold leading-snug">
            Shaping the Future of Health: Pioneering AI in the Fight Against CKD
          </h1>

          <p className="text-[#999] max-w-[973px] text-center mx-auto text-[16px] font-bold ">
            Unveiling the potential of AI to transform kidney care, we are dedicated to advancing CKD detection and management for a healthier tomorrow.
          </p>

          {/* IMAGE */}
          <div className="mt-12 flex justify-center [perspective:1200px]">
            <BendingImage
              src="/about.png"
              alt="About collage"
              width={972}
              height={554.391}
              containerClassName="rounded-lg"
              imageClassName="rounded-lg object-contain"
            />
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <h3 className="text-[rgb(81,122,249)] text-lg mb-2">Our Story</h3>
            <h2 className="text-5xl font-bold leading-tight">
              Let's embark on the journey of <br />
              <span className="text-[rgb(81,122,249)] text-5xl">How it all started...</span>
            </h2>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative space-y-12">

            {/* vertical line */}
            <div className="absolute left-9 top-0 h-full w-[1px] bg-gray-700"></div>

            {/* ITEM 1 */}
            <div className="flex gap-10 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <ArrowUpRight className="w-12 h-12 text-[#999]" />
              </div>
              <div>
                <p className="text-gray-300 text-[16px] mb-2">2020</p>
                <h3 className="text-white font-bold text-[19.2px]">
                  The Dawn of Innovation
                </h3>
                <p className="text-[#999] text-[16px] mt-1">
                  In the heart of 2020, our company was born from the shared vision of Dr. Biju Jacob and Neeraj Kumar. Their journeys merged at the prestigious Entrepreneur First (EF) program in Singapore, fueled by a mutual passion to revolutionize global access to medical diagnostics via pioneering AI solutions.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-10 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <Lightbulb className="w-12 h-12 text-[#999]" />
              </div>
              <div>
                <p className="text-gray-300 text-[16px] mb-2">2021</p>
                <h3 className="text-white font-bold text-[19.2px]">
                  Setting New Standards
                </h3>
                <p className="text-[#999] text-[16px] mt-1">
                  The year saw the unveiling of our groundbreaking AI prototype for precise CKD detection. This innovative launch set a new benchmark for early and accurate disease prediction.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-10 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <CircleDollarSign className="w-12 h-12 text-[#999]" />
              </div>
              <div>
                <p className="text-gray-300 text-[16px] mb-2">2022</p>
                <h3 className="text-white font-bold text-[19.2px]">
                  Seizing Success
                </h3>
                <p className="text-[#999] text-[16px] mt-1">
                  A pivotal moment unfolded as we secured seed funding, strengthening our commitment to advancing CKD care solutions.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex gap-10 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <ThumbsUp className="w-12 h-12 text-[#999]" />
              </div>
              <div>
                <p className="text-gray-300 text-[16px] mb-2">2023</p>
                <h3 className="text-white font-bold text-[19.2px]">
                  Pioneering Precision
                </h3>
                <p className="text-[#999] text-[16px] mt-1">
                  We took a giant leap forward in CKD detection and care with the introduction of our advanced AI-integrated Ultrasound Device.
                </p>
              </div>
            </div>

            {/* ITEM 5 */}
            <div className="flex gap-10 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <Award className="w-12 h-12 text-[#999]" />
              </div>
              <div>
                <p className="text-gray-300 text-[16px] mb-2">2024</p>
                <h3 className="text-white font-bold text-[19.2px]">
                  Achieving Milestones & Commitment
                </h3>
                <p className="text-[#999] text-[16px] mt-1">
                  We reached a significant regulatory milestone by submitting our AI-enhanced Ultrasound Device for FDA 510(k) clearance, striving to comply with rigorous safety and effectiveness standards. This submission echoes our unwavering commitment to offering trusted, clinically validated tools for comprehensive CKD management and patient care.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto font-bold bg-linear-180 from-[white] to-[#a2a2a2] text-transparent bg-clip-text  text-[19.2px] ">
          <h3 className="text-[rgb(81,122,249)] font-semibold mb-2">Our Vision</h3>
          <p>
            At the core of our endeavors lies a commitment to integrating artificial intelligence with medical expertise, propelling the fight against chronic kidney disease into a new era. We strive to craft pioneering AI-ultrasound technologies that transcend conventional boundaries, offering breakthrough precision in CKD detection and management that enhances patient care and outcomes.
          </p>
        </div>
      </section>

        {/* VIDEOS */}
        {/* VIDEOS - EXACT WEBFLOW STYLE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          <iframe 
          className="w-full h-auto aspect-video rounded-lg" 
          src="https://www.youtube.com/embed/dSPP_CSJFQo?si=wvUBAERlXtCjSMQN" 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>

          <iframe 
          className="w-full h-auto aspect-video rounded-lg" 
          src="https://www.youtube.com/embed/ZR_puROj5qo?si=91UiFYYNuHVx739O" 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>

        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-[36px] font-bold mb-16">
          The Leadership Team
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-32">

          {/* CARD 1 */}
          <div className="bg-[#0b0d10] p-8 rounded-xl w-72 mr-10">
            <Image
              src="/dr_biju.png"
              alt="Dr Biju"
              width={250}
              height={250}
              className="rounded-full mx-auto mb-6 w-50 h-50 object-cover"
            />
            <h3 className="font-bold text-2xl">Dr. Biju Jacob</h3>
            <p className="text-gray-400 text-sm">CEO, Co-Founder</p>
            <a  href="https://www.linkedin.com/in/biju-jacob-803243a/" target = "blank" className="inline-block">
            <Image src="/linkedin.png" alt="" width={40} height={40} className="mx-auto mt-4" />
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0b0d10] p-8 rounded-xl w-72 ml-10 ">
            <Image
              src="/neeraj_kumar.png"
              alt="Neeraj Kumar"
              width={250}
              height={250}
              className="rounded-full mx-auto mb-6 w-50 h-50 object-cover"
            />
            <h3 className="font-bold text-2xl">Neeraj Kumar</h3>
            <p className="text-gray-400 text-sm">CTO, Co-Founder</p>
            <a  href="https://www.linkedin.com/in/neeraj-kumar-5960a5115/" target = "blank" className="inline-block">
            <Image src="/linkedin.png" alt=""  width={40} height={40} className="mx-auto mt-4" />
            </a>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  )
}