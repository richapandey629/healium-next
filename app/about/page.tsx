import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { ArrowUpRight, Lightbulb, DollarSign, ThumbsUp, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="py-20 md:py-28 px-6 text-center bg-gradient-to-b from-black to-[#0d1b3d]">
        <div className="max-w-5xl mx-auto space-y-6">

          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            Shaping the Future of Health: Pioneering AI in the Fight Against CKD
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Unveiling the potential of AI to transform kidney care, we are dedicated to advancing CKD detection and management for a healthier tomorrow.
          </p>

          {/* IMAGE */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/about.png"
              alt="About collage"
              width={900}
              height={600}
              className="rounded-lg object-contain"
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
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Let's embark on the journey of <br />
              <span className="text-[rgb(81,122,249)]">How it all started...</span>
            </h2>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative space-y-12">

            {/* vertical line */}
            <div className="absolute left-5 top-0 h-full w-[1px] bg-gray-700"></div>

            {/* ITEM 1 */}
            <div className="flex gap-6 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <ArrowUpRight className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">2020</p>
                <h3 className="text-white font-semibold">
                  The Dawn of Innovation
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  In the heart of 2020, our company was born from the shared vision of Dr. Biju Jacob and Neeraj Kumar. Their journeys merged at the prestigious Entrepreneur First (EF) program in Singapore.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-6 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <Lightbulb className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">2021</p>
                <h3 className="text-white font-semibold">
                  Setting New Standards
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  We unveiled our groundbreaking AI prototype for precise CKD detection, setting a new benchmark in early disease prediction.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-6 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <DollarSign className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">2022</p>
                <h3 className="text-white font-semibold">
                  Seizing Success
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  We secured seed funding, strengthening our commitment to advancing CKD care solutions globally.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex gap-6 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <ThumbsUp className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">2023</p>
                <h3 className="text-white font-semibold">
                  Pioneering Precision
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Introduced our advanced AI-integrated Ultrasound Device, transforming CKD detection and care.
                </p>
              </div>
            </div>

            {/* ITEM 5 */}
            <div className="flex gap-6 items-start relative">
              <div className="bg-zinc-900 p-3 rounded-lg z-10">
                <Award className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">2024</p>
                <h3 className="text-white font-semibold">
                  Achieving Milestones & Commitment
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Submitted our AI-enhanced Ultrasound Device for FDA 510(k) clearance, marking a major regulatory milestone.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base">
          <h3 className="text-[rgb(81,122,249)] font-semibold mb-2">Our Vision</h3>
          <p>
            At the core of our endeavors lies a commitment to integrating artificial intelligence with medical expertise, propelling the fight against chronic kidney disease into a new era. We strive to craft pioneering AI-ultrasound technologies that transcend conventional boundaries, offering breakthrough precision in CKD detection and management that enhances patient care and outcomes.
          </p>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/dSPP_CSJFQo"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/ZR_puROj5qo"
            allowFullScreen
          ></iframe>

        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-12">
          The Leadership Team
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">

          {/* CARD 1 */}
          <div className="bg-zinc-900 p-8 rounded-xl w-72">
            <Image
              src="/dr_biju.png"
              alt="Dr Biju"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 w-40 h-40 object-cover"
            />
            <h3 className="font-semibold">Dr. Biju Jacob</h3>
            <p className="text-gray-400 text-sm">CEO, Co-Founder</p>
            <Image src="/linkedin.png" alt="" width={30} height={30} className="mx-auto mt-4" />
          </div>

          {/* CARD 2 */}
          <div className="bg-zinc-900 p-8 rounded-xl w-72">
            <Image
              src="/neeraj_kumar.png"
              alt="Neeraj Kumar"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 w-40 h-40 object-cover"
            />
            <h3 className="font-semibold">Neeraj Kumar</h3>
            <p className="text-gray-400 text-sm">CTO, Co-Founder</p>
            <Image src="/linkedin.png" alt="" width={30} height={30} className="mx-auto mt-4" />
          </div>

        </div>
      </section>

      <Footer />

    </div>
  )
}