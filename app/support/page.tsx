import PageHeader from "@/components/pageheader";
import CTA from "@/components/cta";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { MapPin, Mail, Phone } from "lucide-react";

export default function Support() {
  return (
    <>
    <Navbar/>
      <PageHeader
        title="Help & Support"
        subtitle="Whether you have inquiries, require support, or wish to discover how our innovations can elevate your operations, our team stands ready to assist."
      />

      <section className="bg-black px-6 py-20 text-white">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* ================= CARDS ================= */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-linear-135 from-[#0e0e18] to-[#060610] border-[1px] border-[#ffffff1a] p-6 rounded-xl text-center hover:border-blue-500 transition">

              <div className="flex justify-center mb-4">
                <div className="w-18 h-18 rounded-full bg-[#111933] flex items-center justify-center">
                  <MapPin size={20} className="text-blue-400" />
                </div>
              </div>

              <p className="text-sm text-gray-400">Main Address</p>

              <p className="mt-3 text-sm leading-relaxed">
                26 Broadway Suite 934-G68 <br />
                New York, NY 10004 USA
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-linear-135 from-[#0e0e18] to-[#060610] border-[1px] border-[#ffffff1a] p-6 rounded-xl text-center hover:border-blue-500 transition">

              <div className="flex justify-center mb-4">
                <div className="w-18 h-18 rounded-full bg-[#111933] flex items-center justify-center">
                  <Mail size={20} className="text-blue-400" />
                </div>
              </div>

              <p className="text-sm text-gray-400">Email Address</p>

              <p className="mt-3 text-sm">
                info@healiumintelliscan.com
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-linear-135 from-[#0e0e18] to-[#060610] border-[1px] border-[#ffffff1a] p-6 rounded-xl text-center hover:border-blue-500 transition">

              <div className="flex justify-center mb-4">
                <div className="w-18 h-18 rounded-full bg-[#111933] flex items-center justify-center">
                  <Phone size={20} className="text-blue-400" />
                </div>
              </div>

              <p className="text-sm text-gray-400">Need Help Urgent</p>

              <p className="mt-3 text-sm">
                Call: +1 (302) 310-4257
              </p>
            </div>

          </div>

          {/* ================= FAQ SECTION ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-5xl font-medium leading-snug">
                Frequently Asked <br /> Questions
              </h2>

              <p className="mt-4 text-[14px] text-gray-400 leading-[22px]">
                Got a question about our device? We’ve probably answered it here. If not, please call us:
              </p>

              <Button className="mt-6 h-10 px-4 text-sm flex items-center gap-2">
                <Phone size={16} />
                +1 (302) 310-4257
              </Button>
            </div>

            {/* RIGHT SIDE (ACCORDION) */}
            <div>

              <Accordion type="single" collapsible className="space-y-3 ">

                {[
                  {
                    q: "Why does the device performance decrease over time?",
                    a: "Performance may decrease due to long-term usage, environmental factors, or battery wear. Regular maintenance and proper storage can help maintain optimal performance.",
                  },
                  {
                    q: "How can I check the device information for maintenance or repair?",
                    a: "Refer to the device label or system information section to find details such as serial number and model for support and repair requests.",
                  },
                  {
                    q: "What should I do if the device is physically damaged?",
                    a: "Stop using the device immediately. Do not attempt to repair it yourself. Contact authorized support for inspection and repair.",
                  },
                  {
                    q: "Why does the probe feel warm during operation?",
                    a: "It is normal for the probe to generate some heat during use. However, if it becomes excessively hot, stop using it and allow it to cool down.",
                  },
                  {
                    q: "Can the probe be used continuously for long scanning sessions?",
                    a: "The probe is designed for regular use but should not be used continuously for extended periods without breaks. Allow cooling intervals to maintain performance and safety.",
                  },
                  {
                    q: "How do I properly clean the probe?",
                    a: "Clean the probe using approved disinfectant wipes or solutions. Do not immerse it in liquid or use harsh chemicals that may damage the surface.",
                  },
                  {
                    q: "How should I store the probe when not in use?",
                    a: "Store the probe in a clean, dry environment at room temperature. Avoid direct sunlight, high humidity, or extreme temperatures.",
                  },
                  {
                    q: "Why does the device shut down automatically?",
                    a: "Automatic shutdown can happen when the battery is low or when the device reaches a high temperature threshold. Recharge the device or allow it to cool before reuse.",
                  },
                  {
                    q: "Why is the probe not powering on?",
                    a: "This may be due to a depleted battery or charging issue. Charge the device for at least 30 minutes and try again. If it still does not power on, check the charger or contact support.",
                  },
                  {
                    q: "What does the LED indicator status mean?",
                    a: "The LED indicator shows device status such as power on, charging, or fault conditions. Continuous or abnormal flashing may indicate an error or low battery.",
                  },
                  {
                    q: "Why is the probe overheating during use?",
                    a: "Overheating may occur due to prolonged scanning, high ambient temperature, or restricted airflow. Allow the probe to rest between sessions and use it in a well-ventilated area.",
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="  bg-[#090913] border border-[#1c1c22] rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-[16px] text-linear-to-r from-[white] to-[#a2a2a2] text-left font-sans cursor-pointer">
                      {item.q}
                    </AccordionTrigger>

                    <AccordionContent className=" text-[14px] text-[#999] font-normal  leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
                

              </Accordion>

            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer/>
    </>
  );
}