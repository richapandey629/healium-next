import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LEFT */}
          <div>

            <Image
              src="/healium-intelliscan-logo.png"
              width={170}
              height={60}
              alt="logo"
            />

            {/* ADDRESSES SIDE BY SIDE */}
            <div className="flex gap-16 mt-6 text-sm text-white">

              <div>
                <p className="text-sky-500 font-semibold">USA</p>
                <p>26 Broadway</p>
                <p>Suite 934-G68</p>
                <p>New York, NY 10004 USA</p>
              </div>

              <div>
                <p className="text-sky-500 font-semibold">SINGAPORE</p>
                <p>23 West Coast Crescent</p>
                <p>#14-07 Blue Horizon</p>
                <p>Singapore 128046</p>
              </div>

            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="text-sm space-y-2">
            {["Home","About Us","Contact Us","Careers","Privacy Policy","Terms & Conditions","Help & Support"].map((item)=>(
              <p key={item} className="underline hover:text-white cursor-pointer">
                {item}
              </p>
            ))}
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex justify-between items-center">

          <p className="text-sm text-gray-500">
            © 2026 Healium Intelliscan
          </p>

          {/* GREY LINKEDIN */}
          <Image
            src="/linkedin.png"
            width={28}
            height={28}
            alt="linkedin"
            className="opacity-60 hover:opacity-100"
          />

        </div>

        {/* FDA TEXT */}
        <p className="text-xs text-gray-500 mt-4">
          This device is pending FDA 510(k) clearance and is not yet available for sale in the United States.
        </p>

      </div>
    </footer>
  )
}