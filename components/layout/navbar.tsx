import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-black">
      
      <div className="flex items-center gap-2">
        <Image src="/healium-logo.png" alt="logo" width={40} height={40} />
        <span className="font-semibold text-lg text-blue-300">Healium Intelliscan</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-400 text-white">Home</a>
        <a href="#" className="hover:text-gray-400 text-white">About Us</a>
        <a href="#" className="hover:text-gray-400 text-white">Contact Us</a>
        <a href="#" className="hover:text-gray-400 text-white">Careers</a>
      </div>

      <Button>Request Demo</Button>
    </nav>
  )
}