import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-sky-500 text-gray-400">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-12">

          {/* LEFT */}
          <div className="min-w-0">
            <Image
              src="/healium-intelliscan-logo.png"
              width={170}
              height={60}
              alt="logo"
              className="w-[150px] sm:w-[170px] h-auto"
            />

            {/* ADDRESSES */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-16 mt-6 text-[15px] sm:text-[16px] text-white">

              <div className="flex gap-4 items-start">
                <div className="w-[34px] h-[34px] shrink-0 rounded-full bg-[#1b1b1b] flex items-center justify-center mt-1">
                    <MapPin size={20} className="text-[#999]" />
                  </div>
                <div className="min-w-0">  
                <p className="text-sky-500 text-[17.6px] font-medium">USA</p>
                <p>26 Broadway</p>
                <p>Suite 934-G68</p>
                <p>New York, NY 10004 USA</p>
              </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-[34px] h-[34px] shrink-0 rounded-full bg-[#1b1b1b] flex items-center justify-center mt-1">
                    <MapPin size={20} className="text-gray-300" />
                  </div>
                <div className="min-w-0"> 
                <p className="text-sky-500 text-[17.6px] font-medium">SINGAPORE</p>
                <p>23 West Coast Crescent</p>
                <p>#14-07 Blue Horizon</p>
                <p>Singapore 128046</p>
              </div>
              </div>

            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="text-[15px] sm:text-[16px] underline space-y-2 md:text-right">

            <Link href="/" className="block hover:text-white">Home</Link>

            <Link href="/about" className="block hover:text-white">About Us</Link>

            <Link href="/contact" className="block hover:text-white">Contact Us</Link>

            <Link href="/careers" className="block hover:text-white">Careers</Link>

            <Link href="/privacy-policy" className="block hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" className="block hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/support" className="block hover:text-white">
              Help & Support
            </Link>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">

          <p className="text-[14px] sm:text-[16px] text-[#999] order-2 sm:order-1 mb-0">
            © 2026 Healium Intelliscan
          </p>

          <a
            href="https://www.linkedin.com/company/healiumdigitalhealth/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              width={30}
              height={30}
              alt="linkedin"
              className="opacity-60 hover:opacity-100 fill-[#999] order-1 sm:order-2"
              
            />
          </a>

        </div>

        {/* FDA TEXT */}
        <p className="text-[14px] sm:text-[16px] text-[#999] mt-4 leading-relaxed">
          This device is pending FDA 510(k) clearance and is not yet available for sale in the United States.
        </p>

      </div>
    </footer>
  );
}