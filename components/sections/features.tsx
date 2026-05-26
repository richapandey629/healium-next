import Image from "next/image"

export default function Features() {
  return (
    <section className="bg-black text-white py-20 px-6 center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] font-bold mb-12 bg-linear-to-r from-white to-[#a2a2a2] text-transparent bg-clip-text text-center  mx-auto leading-[1.2]">Developing Solutions for <br />
        <span className="bg-linear-90 from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-[56px] font-bold">
         Global CKD Epidemic</span> 
      </h2>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12   ">
    
        <div>
          <Image src="/innovative.png" alt="" width={450} height={450} className="mx-auto mb-4 w-full h-auto object-contain" />
          <div className="mt-6 space-y-2">
            <h3 className="font-semibold text-[20.8px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text text-center">
              Innovative AI-Driven Ultrasound
            </h3>
            <p className="mt-2 text-[#999] text-[16px] text-center mx-auto ">
              AI-powered Ultrasound offers real-time support and quality evaluation, enabling healthcare professionals of all skill levels to perform high-quality renal ultrasounds.
            </p>
          </div>
        </div>

        <div>
          <Image src="/revolutionizing.png" alt="" width={450} height={450} className="mx-auto mb-4 w-full h-auto object-contain" />
            <div className="mt-6 space-y-2">
            <h3 className="font-semibold text-[20.8px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text text-center">
              Revolutionizing Early CKD Detection
            </h3>
            <p className="mt-2 text-[#999] text-[16px] text-center mx-auto ">
              Detects Chronic Kidney Disease from its earliest stage but also identifies the root cause. By leveraging digital biomarkers.
            </p>
          </div>
        </div>

        <div>
          <Image src="/advanced.png" alt="" width={450} height={450} className="mx-auto mb-4 w-full h-auto object-contain" />
           <div className="mt-6 space-y-2">
            <h3 className="font-semibold text-[20.8px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text text-center">
              Advanced Renal Health Diagnostics
            </h3>
            <p className="mt-2 text-[#999] text-[16px] text-center mx-auto ">
              Generates patient-specific perfusion models and constructs three-dimensional representations of the kidney, enhancing precision and clarity in diagnosis.
            </p>
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}