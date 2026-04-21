import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="py-20 md:py-28 px-6 text-center bg-gradient-to-b from-black to-blue-900">
        <div className="max-w-5xl mx-auto space-y-6">

          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            Shaping the Future of Health: Pioneering AI in the Fight Against CKD
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Unveiling the potential of AI to transform kidney care, we are dedicated to advancing CKD detection and management for a healthier tomorrow.
          </p>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-10">
            <div className="mt-10 flex h-screen w-screen items-center justify-center ">
            <Image
              src="/about.png"
              alt="About collage"
              width={900}
              height={800}
              className="max-h-full max-w-full object-center items-center justify-center"
            />
          </div>
          </div>
        </div>
      </section>
            {/* TIMELINE */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <h3 className = "text-[rgb(81,122,249)] text-2xl mb-2">Our Story</h3>
            <h2 className="text-3xl md:text-6xl font-bold">
              Let's embark on the journey of <br />
              <span className="text-[rgb(81,122,249)]">How it all started...</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-10 text-sm text-gray-400">

            <div>
              <h3 className="text-white font-semibold text-sm">2020 — The Dawn of Innovation</h3>
              <p className="text-gray-400 text-sm">In the heart of 2020, our company was born from the shared vision of Dr. Biju Jacob and Neeraj Kumar. Their journeys merged at the prestigious Entrepreneur First (EF) program in Singapore, fueled by a mutual passion to revolutionize global access to medical diagnostics via pioneering AI solutions.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm">2021 — Setting New Standards</h3>
              <p className="text-gray-400 text-sm">The year saw the unveiling of our groundbreaking AI prototype for precise CKD detection. This innovative launch set a new benchmark for early and accurate disease prediction.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm">2022 — Seizing Success</h3>
              <p className="text-gray-400 text-sm">A pivotal moment unfolded as we secured seed funding, strengthening our commitment to advancing CKD care solutions.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm">2023 — Pioneering Precision</h3>
              <p className="text-gray-400 text-sm">We took a giant leap forward in CKD detection and care with the introduction of our advanced AI-integrated Ultrasound Device.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm">2024 — Achieving Milestones</h3>
              <p className="text-gray-400 text-sm">We reached a significant regulatory milestone by submitting our AI-enhanced Ultrasound Device for FDA 510(k) clearance, striving to comply with rigorous safety and effectiveness standards. This submission echoes our unwavering commitment to offering trusted, clinically validated tools for comprehensive CKD management and patient care.</p>
            </div>

          </div>

        </div>
      </section>
            {/* VISION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base">
          <h3 className="text-[rgb(81,122,249)] font-semibold text-sm text-center">Our Vision</h3>
          <p>
        At the core of our endeavors lies a commitment to integrating artificial intelligence with medical expertise, propelling the fight against chronic kidney disease into a new era. We strive to craft pioneering AI-ultrasound technologies that transcend conventional boundaries, offering breakthrough precision in CKD detection and management that enhances patient care and outcomes.          </p>
        </div>
      </section>
            {/* VIDEOS */}
      <section className="py-20 px-6">
        <div className="xl mx-auto grid md:grid-cols-2 gap-6">

          <iframe 
          className="w-full aspect-video rounded-lg" 
          src="https://www.youtube.com/embed/dSPP_CSJFQo?si=wvUBAERlXtCjSMQN" 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>

          <iframe 
          className="w-full aspect-video rounded-lg" 
          src="https://www.youtube.com/embed/ZR_puROj5qo?si=91UiFYYNuHVx739O" 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>

        </div>
      </section>
            {/* TEAM */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          The Leadership Team
        </h2>

        <div className="flex flex-wrap justify-center gap-10">

          <div className="bg-zinc-900 p-6 rounded-xl w-64">
            <Image
            src="/dr_biju.png"
            alt="Dr Biju"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-4"
          />
            <h3 className="font-semibold">Dr. Biju Jacob</h3>
            <p className="text-gray-400 text-sm">CEO & Founder</p>
            <a 
            href="https://linkedin.com/in/actual-link"
            target="_blank"
            className="mt-2 inline-block"
          >
            <Image 
              src="/linkedin.png" 
              alt="linkedin" 
              width={30} 
              height={30} 
              className="mx-auto"
            />
          </a>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl w-64 ">
            <Image
            src="/neeraj_kumar.png"
            alt="Neeraj Kumar"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-4"
          />
            <h3 className="font-semibold">Neeraj Kumar</h3>
            <p className="text-gray-400 text-sm">CTO & Co-Founder</p>
            <a 
            href="https://linkedin.com/in/actual-link"
            target="_blank"
            className="mt-2 inline-block"
          >
            <Image 
              src="/linkedin.png" 
              alt="linkedin" 
              width={30} 
              height={30} 
              className="mx-auto"
            />
          </a>
          </div>

        </div>
      </section>
            <Footer />

    </div>
  )
}