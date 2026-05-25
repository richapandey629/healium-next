import Image from "next/image"
import { Button } from "@/components/ui/button"
import CTA from "@/components/cta";
import Footer from "@/components/layout/footer"


export default function Details() {
  return (
    <section className="bg-black text-white py-16p md:py-16 px-2">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-[36px] font-bold  mx-auto leading-relaxed mb-10">
          State-of-the-art algorithms and{" "}
          <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-[40px] font-bold">
            clinically validated digital biomarkers
          </span>
        </h2>

        
        <div className="mx-auto mt-14 flex flex-col w-min items-center justify-center gap-8 overflow-x-auto pb-1 md:flex-row">
          <span className="flex h-[100px] w-[200px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff] px-4 text-center text-[16px] font-semibold leading-tight">
            AI-Powered CKD Biomarkers
          </span>
          <span className="flex h-[100px] w-[200px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff] px-4 text-center text-[16px] font-semibold leading-tight">
            Personalised Perfusion Modelling
          </span>
          <span className="flex h-[100px] w-[200px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff] px-4 text-center text-[16px] font-semibold leading-tight">
            Causality Prediction
          </span>
          <span className="flex h-[100px] w-[200px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff] px-4 text-center text-[16px] font-semibold leading-tight">
            FDA 510(k) Pending
          </span>
        </div>

        
        <div className="bg-[#13131300] mx-auto w-56 md:w-72 mt-10">
          <Image
            src="/device.png"
            alt="device"
            width={382}
            height={514}
            
          />
        </div>

        <div className="space-y-2">
          {/* DEVICE  */}
          <h3 className=" font-bold text-[19.2px]">
            Healium Ultrasound Device for CKD Detection and Management
          </h3>

          <p className="text-[#999] font-normal mx-auto">
            Optimize CKD detection and management with the Healium Ultrasound Device, merging superior AI technology with clinical precision
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div>
            <Image src="/icon1.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Enhanced Visualization</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Leveraging AI to create detailed ultrasound images that reveal intricate kidney structures, facilitating the early detection of CKD.
            </p>
          </div>

          <div>
            <Image src="/icon2.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Dynamic Scans Analysis</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Utilizing AI for real-time processing of ultrasound videos, allowing nephrologists to observe kidney function and flow dynamics in action for precise CKD monitoring.
            </p>
          </div>

          
          <div>
            <Image src="/icon3.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Predictive Analytics</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Deep learning algorithms analyze ultrasound data to predict CKD progression, enabling proactive treatment adjustments and better patient outcomes.
            </p>
          </div>

         
          <div>
            <Image src="/icon4.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Scalable Screening</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Our technology scales to meet the needs of growing patient populations, ensuring that high-risk individuals receive timely CKD screening with AI-augmented ultrasound.
            </p>
          </div>

          
          <div>
            <Image src="/icon5.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Secure Data Handling</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              State-of-the-art encryption and privacy measures protect sensitive patient data generated from ultrasound scans, maintaining confidentiality in CKD diagnosis and treatment.
            </p>
          </div>

          
          <div>
            <Image src="/icon6.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Knowledge Empowerment</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Crafting specialized educational materials that elucidate the predictive capabilities of AI-powered ultrasounds in CKD, empowering patients with knowledge for proactive disease management.
            </p>
          </div>

          
          <div>
            <Image src="/icon7.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Continuous Care</h4>
            <p className="text-[16px] font-ubuntu font-normal text-gray-400">
              Utilizing AI to monitor CKD markers in ultrasound data, triggering timely alerts for critical changes, ensuring prompt intervention and individualized patient care plans.
            </p>
          </div>

          
          <div>
            <Image src="/icon8.png" alt="" width={80} height={61} className="mx-auto mb-4 h-auto w-[80px]" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Intelligent Insights</h4>
            <p className="text-[16px] font-ubuntu font-normal text-gray-400">
              Advanced AI algorithms process and analyze ultrasound imaging data to uncover hidden patterns and trends, providing deep insights into CKD detection and progression risk factors.
            </p>
          </div>

        </div>

        {/* INVESTORS */}
        <div className="mt-20">
          <h3 className="text-[40px] font-bold mb-10">
            Backed by <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-5xl font-bold mb-4">Global Investors</span>
          </h3>

          <div className= "flex flex-col items-center md:flex-row flex-wrap justify-center gap-10 opacity-80 hover:opacity-100 h-auto w-auto">
            <Image src="/investor1.png" alt="" width={140} height={120.69} />
            <Image src="/investor2.png" alt="" width={140} height={120.69} />
            <Image src="/investor3.png" alt="" width={140} height={120.69} />
            <Image src="/investor4.png" alt="" width={140} height={120.69} />
            <Image src="/investor5.png" alt="" width={140} height={120.69} />
            <Image src="/investor6.png" alt="" width={140} height={120.69} />
            <Image src="/investor7.png" alt="" width={140} height={120.69} />
          </div>
        </div>    
      </div>
    </section>
    

   

  )
}