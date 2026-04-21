import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black to-blue-900 text-white py-20 md:py-28 px-6">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        
        {/* HEADING */}
        <h1 className="text-3xl md:text-5xl font-semibold leading-[1.2] max-w-3xl mx-auto">
          Revolutionizing Early{" "}
          <span className="text-[rgb(81,122,249)]">Detection of</span>{" "}
          <span className="text-sky-400">Chronic Kidney Disease</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-base md:text-lg">
          Healium Intelliscan's AI-PoCUS is a pioneering technology that non-invasively detects chronic kidney disease in its early stages and provides predictive insights.
        </p>

        {/* BUTTON */}
        <div className="mt-6 ">
          <Button className="bg-sky-400 hover:bg-[rgb(81,122,249)] text-black px-6 py-4">
            Request Demo
          </Button>
        </div>

        {/* IMAGE */}
        <div className="mt-12 flex justify-center w-full h-auto">
          <Image 
            src="/hero.gif"
            alt="hero"
            width={900}
            height={600}
            className="w-full max-w-3xl"
          />
        </div>

      </div>
    </section>
  )
}