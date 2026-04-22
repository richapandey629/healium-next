import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"


export default function CareersPage() {
  return (
    <div className="bg-black text-white">
  <Navbar />

  <main className="space-y-6">

      {/* HERO */}
      <section className="text-center py-28 md:py-32 px-6 bg-gradient-to-b from-[#517af9] via-[#1e45d5cc] to-black">
        
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
          Build the Future of Healthcare With Us
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Join our mission to transform kidney disease detection through AI-powered ultrasound technology. We're looking for passionate innovators ready to make a real impact.
        </p>

        {/* STATS */}
        <div className="mt-10 flex justify-center gap-12 text-center">
          <div>
            <p className="text-xl font-bold">11-50</p>
            <p className="text-gray-400 text-sm">Team Members</p>
          </div>

          <div>
            <p className="text-xl font-bold">2020</p>
            <p className="text-gray-400 text-sm">Founded</p>
          </div>

          <div>
            <p className="text-xl font-bold">NYC</p>
            <p className="text-gray-400 text-sm">Headquarters</p>
          </div>
        </div>

      </section>
       {/* WHY JOIN */}
      <section className="py-20 px-6 bg-linear-to-b bg-gradient-to-b from-[#517af9] via-[#1e45d5cc] to-black text-center">
        
        <h2 className="text-5xl font-bold">
          Why Join Healium IntelliScan?
        </h2>

        <p className="mt-2 text-gray-300 text-sm">
          Be part of a team that's dedicated to saving lives through early detection technology
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="border border-gray-600 p-6 rounded-lg text-left">
            <h3 className="font-semibold">Meaningful Impact</h3>
            <p className="text-sm text-gray-400 mt-2">
            Work on technology that directly impacts patient outcomes and enables early detection of chronic kidney disease.
            </p>
        </div>

        <div className="border border-gray-600 p-6 rounded-lg text-left">
            <h3 className="font-semibold">Cutting-Edge Technology</h3>
            <p className="text-sm text-gray-400 mt-2">
            Work with AI, machine learning, and advanced ultrasound technologies to build next-generation healthcare solutions.
            </p>
        </div>

        <div className="border border-gray-600 p-6 rounded-lg text-left">
            <h3 className="font-semibold">Growth Opportunities</h3>
            <p className="text-sm text-gray-400 mt-2">
            Join a fast-growing startup where your contributions directly shape the company and your career trajectory.
            </p>
        </div>

        <div className="border border-gray-600 p-6 rounded-lg text-left">
            <h3 className="font-semibold">Collaborative Culture</h3>
            <p className="text-sm text-gray-400 mt-2">
            Work alongside experts in healthcare, AI, and engineering in a highly collaborative environment.
            </p>
        </div>

        <div className="border border-gray-600 p-6 rounded-lg text-left">
            <h3 className="font-semibold">Innovation First</h3>
            <p className="text-sm text-gray-400 mt-2">
            Be encouraged to experiment, innovate, and bring new ideas to life in a fast-paced environment.
            </p>
        </div>

        <div className="border border-gray-600 p-6 rounded-lg text-left">
            <h3 className="font-semibold">Healthcare Benefits</h3>
            <p className="text-sm text-gray-400 mt-2">
            Comprehensive benefits package supporting your health, well-being, and professional growth.
            </p>
        </div>

        </div>
        </section>
            {/* OPEN POSITIONS */}
      <section className="py-20 px-6 text-center">

    <h2 className="text-3xl font-bold">Open Positions</h2>
    <p className="text-gray-400 text-sm mt-2">
        Find your next opportunity to make a difference
    </p>

    <div className="mt-10 space-y-6 max-w-3xl mx-auto">

    {/* CARD 1 */}
    <div className="border border-gray-700 p-8 rounded-lg flex justify-between items-center">
      <div className="text-left">
        <h3 className="font-semibold">Senior Machine Learning Engineer</h3>
        <p className="text-gray-400 text-sm">
          New York, NY (Hybrid) | Full-time | $150K - $200K
        </p>
      </div>
      <Button className="bg-sky-400 text-black hover:text-white">
        Apply Now
      </Button>
    </div>

    {/* CARD 2 */}
    <div className="border border-gray-700 p-8 rounded-lg flex justify-between items-center">
      <div className="text-left ">
        <h3 className="font-semibold">Project Manager & Product Owner Intern</h3>
        <p className="text-gray-400 text-sm">
          India (Remote) | Internship | 3 - 6 months
        </p>
      </div>
      <Button className="bg-sky-400 text-black hover:text-white">
        Apply Now
      </Button>
    </div>

    {/* CARD 3 */}
    <div className="border border-gray-700 p-8 rounded-lg flex justify-between items-center">
      <div className="text-left">
        <h3 className="font-semibold">Clinical Research Associate</h3>
        <p className="text-gray-400 text-sm">
          New York, NY | Full-time | $80K - $110K
        </p>
      </div>
      <Button className="bg-sky-400 text-black hover:text-white">
        Apply Now
      </Button>
    </div>

    {/* CARD 4 */}
    <div className="border border-gray-700 p-8 rounded-lg flex justify-between items-center">
      <div className="text-left">
        <h3 className="font-semibold">Full Stack Developer</h3>
        <p className="text-gray-400 text-sm">
          Remote (US) | Full-time | $120K - $160K
        </p>
      </div>
      <Button className="bg-sky-400 text-black hover:text-white">
        Apply Now
      </Button>
    </div>

     </div>

    </section>
            {/* FINAL CTA */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-2xl font-bold">
          Don't See the Right Role?
        </h2>

        <p className="text-gray-400 mt-2 text-sm max-w-xl mx-auto">
          We're always looking for talented people who share our passion. Send us your resume and we'll reach out when a matching opportunity arises.
        </p>

        <Button className="mt-6 bg-sky-400 text-black hover:text-white cursor-pointer px-3 py-4">
          Send Your Resume
        </Button>

      </section>
        </main>
    <Footer />
    </div>
  )
}