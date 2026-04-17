import Image from "next/image"

export default function Features() {
  return (
    <section className="py-20 px-6 text-center bg-black">
      
      <h2 className="text-2xl font-bold mb-12 text-white">Developing Solutions for{" "}
          <span className="text-[rgb(81,122,249)] text-3xl">
         Global {" "}
          <span className="text-sky-400 text-3xl">CKD Epidemic</span> </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        
        <div>
          <Image src="/innovative.png" alt="" width={450} height={450} className="mx-auto mb-4" />
          <h3 className="font-semibold text-lg text-white">
            Innovative AI-Driven Ultrasound
          </h3>
          <p className="mt-2 text-gray-600">
            AI-powered ultrasound offers real-time support and quality evaluation.
          </p>
        </div>

        <div>
          <Image src="/revolutionizing.png" alt="" width={450} height={450} className="mx-auto mb-4" />
          <h3 className="font-semibold text-lg text-white">
            Revolutionizing Early CKD Detection
          </h3>
          <p className="mt-2 text-gray-600">
            Detects chronic kidney disease early and identifies root causes.
          </p>
        </div>

        <div>
          <Image src="/advanced.png" alt="" width={450} height={450} className="mx-auto mb-4" />
          <h3 className="font-semibold text-lg text-white">
            Advanced Renal Health Diagnostics
          </h3>
          <p className="mt-2 text-gray-600">
            Generates patient-specific models and improves precision.
          </p>
        </div>

      </div>
    </section>
  )
}