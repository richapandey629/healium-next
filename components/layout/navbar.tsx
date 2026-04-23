"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-gray-800">

      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Image src="/healium-intelliscan-logo.png" width={140} height={40} alt="logo" />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/careers">Careers</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <Button className="hidden md:block bg-sky-400 hover:bg-[rgb(81,122,249)]">
            Request Demo
          </Button>

          {/* HAMBURGER */}
          <div onClick={()=>setOpen(!open)} className="md:hidden cursor-pointer text-2xl">
            ☰
          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/careers">Careers</Link>
        </div>
      )}

    </nav>
  )
}