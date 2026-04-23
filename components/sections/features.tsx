import Image from "next/image"

export default function Features() {
  return (
    <section className="bg-black text-white py-20 md:py-28 px-6">
      
      <h2 className="text-5xl md:text-4xl font-semibold mb-12 text-white text-center">Developing Solutions for{" "}
          <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-5xl font-bold">
         Global CKD Epidemic</span> 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        
        <div>
          <Image src="/innovative.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <h3 className="font-semibold text-lg text-white text-center">
            Innovative AI-Driven Ultrasound
          </h3>
          <p className="mt-2 text-gray-400 text-sm text-center">
            AI-powered Ultrasound offers real-time support and quality evaluation, enabling healthcare professionals of all skill levels to perform high-quality renal ultrasounds.
          </p>
        </div>

        <div>
          <Image src="/revolutionizing.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <h3 className="font-semibold text-lg text-white text-center">
            Revolutionizing Early CKD Detection
          </h3>
          <p className="mt-2 text-gray-400 text-sm text-center">
            Detects Chronic Kidney Disease from its earliest stage but also identifies the root cause. By leveraging digital biomarkers.


          </p>
        </div>

        <div>
          <Image src="/advanced.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <h3 className="font-semibold text-lg text-white text-center">
            Advanced Renal Health Diagnostics
          </h3>
          <p className="mt-2 text-gray-400 text-sm text-center">
            Generates patient-specific perfusion models and constructs three-dimensional representations of the kidney, enhancing precision and clarity in diagnosis.
          </p>
        </div>

      </div>
    </section>
  )
}