import Image from "next/image"

export default function Features() {
  return (
    <section className="bg-black text-white py-10 px-2">
      
      <h2 className="text-[36px] leading-relaxed md:leading-normal font-[700] mb-16 text-center">Developing Solutions for{" "}
          <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-[50px] font-bold">
         Global CKD Epidemic</span> 
      </h2>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 px-4">
        
        <div>
          <Image src="/innovative.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <div className="mt-6 space-y-2">
            <h3 className="font-semibold text-[20.8px] text-white text-center">
              Innovative AI-Driven Ultrasound
            </h3>
            <p className="mt-2 text-gray-400 text-[16px] text-center mx-auto ml-3 mr-3">
              AI-powered Ultrasound offers real-time support and quality evaluation, enabling healthcare professionals of all skill levels to perform high-quality renal ultrasounds.
            </p>
          </div>
        </div>

        <div>
          <Image src="/revolutionizing.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <div className="mt-6 space-y-2">
            <h3 className="font-semibold text-[20.8px] text-white text-center">
              Revolutionizing Early CKD Detection
            </h3>
            <p className="mt-2 text-gray-400 text-[16px] text-center mx-auto ml-3 mr-3">
              Detects Chronic Kidney Disease from its earliest stage but also identifies the root cause. By leveraging digital biomarkers.
            </p>
          </div>
        </div>

        <div>
          <Image src="/advanced.png" alt="" width={450} height={450} className="mx-auto mb-4 w-auto h-auto" />
          <div className="mt-6 space-y-2">
            <h3 className="font-semibold text-[20.8px] text-white text-center">
              Advanced Renal Health Diagnostics
            </h3>
            <p className="mt-2 text-gray-400 text-[16px] text-center mx-auto ml-3 mr-3">
              Generates patient-specific perfusion models and constructs three-dimensional representations of the kidney, enhancing precision and clarity in diagnosis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}