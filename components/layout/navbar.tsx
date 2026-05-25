"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinkClass = (path: string) =>
  `${
    pathname === path
      ? "text-white"
      : "text-[#999]"
  } hover:text-white transition-colors `

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])
  
  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black border-black border-b fixed top-0 left-0 w-full z-[100]">

        <div className="flex justify-between items-center ml-4 px-6 py-4">

          {/* LOGO */}
          <Image
            src="/healium-intelliscan-logo.png"
            width={140}
            height={40}
            alt="logo"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-[16px] font-normal">

            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            <Link href="/about" className={navLinkClass("/about")}>
              About Us
            </Link>

            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact Us
            </Link>

            <Link href="/careers" className={navLinkClass("/careers")}>
              Careers
            </Link>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            
            <Link href="/contact">
              <Button className="hidden md:block h-[50px] w-[157.406px] cursor-pointer text-[16px] font-normal">
                Request Demo
              </Button>
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-300 hover:text-white transition"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </nav>

      {/* NAVBAR OFFSET */}
      <div className="h-[58px]" />

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 md:hidden bg-black z-[120] transform transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-5">
          <Image
            src="/healium-intelliscan-logo.png"
            width={128}
            height={36}
            alt="logo"
            className="w-[128px] h-auto"
          />

          <button
            onClick={() => setOpen(false)}
            className="text-[#0ebaf0] hover:text-[#34c8f3] transition"
            aria-label="Close menu"
          >
            <X size={34} strokeWidth={2.1} />
          </button>
        </div>

        <div className="flex flex-col px-5 pt-9 gap-7 text-[18px] leading-none font-normal">
          <Link href="/" onClick={() => setOpen(false)} className={navLinkClass("/")}>
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)} className={navLinkClass("/about")}>
            About us
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)} className={navLinkClass("/contact")}>
            Contact us
          </Link>

          <Link href="/careers" onClick={() => setOpen(false)} className={navLinkClass("/careers")}>
            Careers
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)} className="self-center mt-2">
            <Button className="h-[52px] w-[148px] text-[16px] font-normal">
              Request Demo
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}