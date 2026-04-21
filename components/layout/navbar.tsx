import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-black">
      
      <div className="flex items-center gap-2">
        <Image 
        src="/healium-intelliscan-logo.png" 
        alt="Healium Logo" 
        width={140} 
        height={40}
        className ="cursor-pointer"/>
        
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="/" className="hover:text-gray-400 text-white">Home</a>
        <a href="/about" className="hover:text-gray-400 text-white">About Us</a>
        <a href="/contact" className="hover:text-gray-400 text-white">Contact Us</a>
        <a href="/careers" className="hover:text-gray-400 text-white">Careers</a>
      </div>
      <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>

       <Button variant="default" aria-label="Submit" className=" px-3 py-3 bg-sky-400 cursor-pointer hover:bg-[rgb(81,122,249)]">
            Request Demo
          </Button>
    </nav>
  )
}