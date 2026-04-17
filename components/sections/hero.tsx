import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-28 px-6 text-center bg-black">
      
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto text-white ">
        Revolutionizing Early {" "}
          <span className="text-[rgb(81,122,249)]">Detection of</span> {" "}
          <span className="text-sky-400">Chronic Kidney Disease</span>
      </h1>

      <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
        Healium Intelliscan's AI-PoCUS is a pioneering technology that non-invasively detects chronic kidney disease in its early stages and provides predictive insights.
      </p>

       <Button variant="default" aria-label="Submit" className="mt-6 px-4 py-5 bg-sky-400 cursor-pointer hover:bg-[rgb(81,122,249)]">
            Request Demo
      </Button>
      <div className="flex-1 flex justify-center">
            <Image 
              src="/hero.gif"
              alt="hero"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
        </div>
    </section>
  )
}