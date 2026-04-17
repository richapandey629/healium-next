import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        
        <div>
          <Image 
            src="/healium-intelliscan-logo.png" 
            alt="logo" 
            width={150} 
            height={40} 
          />

          <div className="mt-6 text-sm text-gray-400">
            <p className="font-semibold text-white">USA</p>
            <p>26 Broadway</p>

            <p className="mt-4 font-semibold text-white">Singapore</p>
            <p>23 West Coast Crescent</p>
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