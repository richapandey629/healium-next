import Image from "next/image"

export default function Features() {
  return (
    <section className="bg-black text-white py-20 md:py-28 px-6">
      
      <h2 className="text-xl md:text-2xl font-semibold mb-12 text-white text-center">Developing Solutions for{" "}
          <span className="text-[rgb(81,122,249)] text-3xl">
         Global {" "}
          <span className="text-sky-400 text-3xl text-center">CKD Epidemic</span> </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        
        <div>
          <Image src="/innovative.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <h3 className="font-semibold text-lg text-white text-center">
            Innovative AI-Driven Ultrasound
          </h3>
          <p className="mt-2 text-gray-400 text-sm text-center">
            AI-powered ultrasound offers real-time support and quality evaluation.
          </p>
        </div>

        <div>
          <Image src="/revolutionizing.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <h3 className="font-semibold text-lg text-white text-center">
            Revolutionizing Early CKD Detection
          </h3>
          <p className="mt-2 text-gray-400 text-sm text-center">
            Detects chronic kidney disease early and identifies root causes.
          </p>
        </div>

        <div>
          <Image src="/advanced.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <h3 className="font-semibold text-lg text-white text-center">
            Advanced Renal Health Diagnostics
          </h3>
          <p className="mt-2 text-gray-400 text-sm text-center">
            Generates patient-specific models and improves precision.
          </p>
        </div>

      </div>
    </section>
  )
}