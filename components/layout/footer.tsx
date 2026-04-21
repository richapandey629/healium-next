import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 md:py-28 px-6">
      
      <div className="xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        
        <div>
          <Image 
            src="/healium-intelliscan-logo.png" 
            alt="logo" 
            width={150} 
            height={40} 
          />

          <div className="space-y-6 text-sm text-gray-400">

          <div>
            <p className="text-white font-semibold">USA</p>
            <p>26 Broadway</p>
            <p>Suite 934-G68</p>
            <p>New York, NY 10004 USA</p>
          </div>

          <div>
            <p className="text-white font-semibold">SINGAPORE</p>
            <p>23 West Coast Crescent</p>
            <p>#14-07 Blue Horizon</p>
            <p>Singapore 128046</p>
          </div>

        </div>
        </div>

        {/* RIGHT */}
        <div className="text-sm">
          <a className="block mb-2">Home</a>
          <a className="block mb-2">About Us</a>
          <a className="block mb-2">Contact Us</a>
          <a className="block mb-2">Careers</a>
          <a className="block mb-2">Privacy Policy</a>
          <a className="block mb-2">Terms & Conditions</a>
          <a className="block mb-2">Help & Support</a>
        </div>

      </div>

    </footer>
  )
}