import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-28 px-6 text-center bg-black">
      
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto text-blue-300 ">
        Revolutionizing Early Detection of Chronic Kidney Disease
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        Healium Intelliscan's AI-PoCUS is a pioneering technology that non-invasively detects chronic kidney disease in its early stages and provides predictive insights.
      </p>

      <Button className="mt-8 mb-3 px-6 py-8 rounded-2xl text-2xl bg-blue-500">
        Request Demo
      </Button>
      <div className="flex-1 flex justify-center">
            <Image 
              src="/hero.gif"
              alt="hero"
              width={900}
              height={800}
              className="rounded-lg"
            />
        </div>
    </section>
  )
}