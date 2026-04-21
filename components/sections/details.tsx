import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Details() {
  return (
    <section className="bg-black text-white py-20 md:py-28 px-6">
      
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-10">

        
        <h2 className="text-2xl md:text-4xl font-semibold max-w-3xl mx-auto leading-snug mb-6">
          State-of-the-art algorithms and{" "}
          <span className="text-[rgb(81,122,249)]">
            clinically</span>{" "}
          <span className="text-sky-400"> validated digital biomarkers
          </span>
        </h2>

        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px py-5 px-3 rounded-md text-sm">
            AI Powered CKD Biomarkers
          </span>
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px py-5 px-3 rounded-md text-sm">
            Personalized Perfusion Modelling
          </span>
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px py-5 px-3  rounded-md text-sm">
            Causality Prediction
          </span>
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px py-5 px-3 rounded-md text-sm">
            FDA 510(k) Pending
          </span>
        </div>

        
        <div className="mx-auto w-56 md:w-72 mt-6">
          <Image
            src="/device.png"
            alt="device"
            width={250}
            height={400}
          />
        </div>

        {/* DEVICE  */}
        <h3 className="mt-6 font-semibold text-lg">
          Healium Ultrasound Device for CKD Detection and Management
        </h3>

        <p className="text-gray-400 text-sm mt-2 max-w-2xl mx-auto">
          Optimize CKD detection and management with the Healium Ultrasound Device, merging superior AI technology with clinical precision
        </p>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">


          <div>
            <Image src="/icon1.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Enhanced Visualization</h4>
            <p className="text-xs md:text-sm text-gray-400">
              Leveraging AI to create detailed ultrasound images that reveal intricate kidney structures.
            </p>
          </div>

         
          <div>
            <Image src="/icon2.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Dynamic Scans Analysis</h4>
            <p className="text-xs md:text-sm text-gray-400">
              AI-driven scan analysis enables precise monitoring of kidney function.
            </p>
          </div>

          
          <div>
            <Image src="/icon3.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Predictive Analytics</h4>
            <p className="text-xs md:text-sm text-gray-400">
              Deep learning algorithms provide predictive insights for better outcomes.
            </p>
          </div>

         
          <div>
            <Image src="/icon4.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Scalable Screening</h4>
            <p className="text-xs md:text-sm text-gray-400">
              Enables large-scale screening for early CKD detection.
            </p>
          </div>

          
          <div>
            <Image src="/icon5.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Secure Data Handling</h4>
            <p className="text-xs md:text-sm text-gray-400">
              Ensures patient data privacy and security.
            </p>
          </div>

          
          <div>
            <Image src="/icon6.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Knowledge Empowerment</h4>
            <p className="text-xs md:text-sm text-gray-400">
              Provides actionable insights for healthcare professionals.
            </p>
          </div>

          
          <div>
            <Image src="/icon7.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Continuous Care</h4>
            <p className="text-xs md:text-sm text-gray-400">
              Enables continuous monitoring and care planning.
            </p>
          </div>

          
          <div>
            <Image src="/icon8.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold text-sm md:text-base">Intelligent Insights</h4>
            <p className="text-xs md:text-sm text-gray-400">
              AI-powered insights improve clinical decision-making.
            </p>
          </div>

        </div>

        {/* INVESTORS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-4">
            Backed by <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-3xl mb-4">Global Investors</span>
          </h3>

          <div className=" flex flex-col md:flex-row justify-between gap-12 opacity-80 hover:opacity-100">
            <Image src="/investor1.png" alt="" width={80} height={80} />
            <Image src="/investor2.png" alt="" width={80} height={80} />
            <Image src="/investor3.png" alt="" width={80} height={80} />
            <Image src="/investor4.png" alt="" width={80} height={80} />
            <Image src="/investor5.png" alt="" width={80} height={80} />
            <Image src="/investor6.png" alt="" width={80} height={80} />
            <Image src="/investor7.png" alt="" width={80} height={80} />
          </div>
        </div>

        
        <div className="mt-28 text-center bg-gradient-to-b from-black to-blue-900  ">
          <h3 className="text-2xl font-bold">
            Learn more about <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-3xl">Our Solution</span>
          </h3>

          <Image src="/body.png" alt="" width={300} height={300} className="mx-auto mt-6" />

          <Button variant="default" aria-label="Submit" className="mt-6 px-4 py-5 bg-sky-400 cursor-pointer hover:bg-[rgb(81,122,249)]">
            Request Demo
          </Button>
        </div>

      </div>
    </section>
  )
}