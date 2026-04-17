import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Details() {
  return (
    <section className="bg-black text-white py-24 px-6">
      
      
      <div className="max-w-6xl mx-auto text-center">

        
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          State-of-the-art algorithms and{" "}
          <span className="text-[rgb(81,122,249)]">
            clinically</span>{" "}
          <span className="text-sky-400"> validated digital biomarkers
          </span>
        </h2>

        
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-600 px-4 py-6 rounded-md text-sm">
            AI Powered CKD Biomarkers
          </span>
          <span className="bg-blue-600 px-4 py-6 rounded-md text-sm">
            Personalized Perfusion Modelling
          </span>
          <span className="bg-blue-600 px-4 py-6 rounded-md text-sm">
            Causality Prediction
          </span>
          <span className="bg-blue-600 px-4 py-6 rounded-md text-sm">
            FDA 510(k) Pending
          </span>
        </div>

        
        <div className="mt-12 flex justify-center">
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

        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">


          <div>
            <Image src="/icon1.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Enhanced Visualization</h4>
            <p className="text-sm text-gray-400 mt-2">
              Leveraging AI to create detailed ultrasound images that reveal intricate kidney structures.
            </p>
          </div>

         
          <div>
            <Image src="/icon2.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Dynamic Scans Analysis</h4>
            <p className="text-sm text-gray-400 mt-2">
              AI-driven scan analysis enables precise monitoring of kidney function.
            </p>
          </div>

          
          <div>
            <Image src="/icon3.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Predictive Analytics</h4>
            <p className="text-sm text-gray-400 mt-2">
              Deep learning algorithms provide predictive insights for better outcomes.
            </p>
          </div>

         
          <div>
            <Image src="/icon4.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Scalable Screening</h4>
            <p className="text-sm text-gray-400 mt-2">
              Enables large-scale screening for early CKD detection.
            </p>
          </div>

          
          <div>
            <Image src="/icon5.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Secure Data Handling</h4>
            <p className="text-sm text-gray-400 mt-2">
              Ensures patient data privacy and security.
            </p>
          </div>

          
          <div>
            <Image src="/icon6.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Knowledge Empowerment</h4>
            <p className="text-sm text-gray-400 mt-2">
              Provides actionable insights for healthcare professionals.
            </p>
          </div>

          
          <div>
            <Image src="/icon7.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Continuous Care</h4>
            <p className="text-sm text-gray-400 mt-2">
              Enables continuous monitoring and care planning.
            </p>
          </div>

          
          <div>
            <Image src="/icon8.png" alt="" width={50} height={50} className="mx-auto mb-4" />
            <h4 className="font-semibold">Intelligent Insights</h4>
            <p className="text-sm text-gray-400 mt-2">
              AI-powered insights improve clinical decision-making.
            </p>
          </div>

        </div>

        {/* INVESTORS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold">
            Backed by <span className="text-blue-500 text-3xl">Global Investors</span>
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Image src="/investor1.png" alt="" width={80} height={80} />
            <Image src="/investor2.png" alt="" width={80} height={80} />
            <Image src="/investor3.png" alt="" width={80} height={80} />
            <Image src="/investor4.png" alt="" width={80} height={80} />
            <Image src="/investor5.png" alt="" width={80} height={80} />
            <Image src="/investor6.png" alt="" width={80} height={80} />
            <Image src="/investor7.png" alt="" width={80} height={80} />
          </div>
        </div>

        
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold">
            Learn more about <span className="text-[rgb(81,122,249)] text-3xl">Our Solution</span>
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