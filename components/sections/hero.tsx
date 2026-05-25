"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imageWrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let rafId = 0

    const updateMotion = () => {
      const section = sectionRef.current
      const imageWrap = imageWrapRef.current
      if (!section || !imageWrap) return

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        imageWrap.style.transform = "none"
        return
      }

      const rect = section.getBoundingClientRect()

      // 0 -> section at top (most bent), 1 -> section scrolled through (straight).
      const travelRange = Math.max(1, rect.height * 0.9)
      const rawProgress = -rect.top / travelRange
      const progress = Math.max(0, Math.min(1, rawProgress))

      // Ease-out makes the card straighten earlier and stay straight longer on down-scroll.
      const easedProgress = 1 - Math.pow(1 - progress, 2)

      const rotateX = 32 - easedProgress * 32
      const scale = 0.82 + easedProgress * 0.18
      const translateY = 66 - easedProgress * 66

      imageWrap.style.transform = `perspective(1200px) rotateX(${rotateX}deg) translateY(${translateY}px) scale(${scale})`
    }

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateMotion)
    }

    updateMotion()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#010304] pt-10 pb-16">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010304] from-[23%] to-[#1e45d5cc]"></div>
        <div className="absolute bottom-0 w-full h-full bg-[url('/hexagon.png')] bg-[length:69px] opacity-85"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[2rem] bg-[#0ebaf0] blur-[50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-2 md:px-6 text-center flex flex-col items-center">
        <h1 className="leading-relaxed md:leading-normal text-[36px] md:text-[56px] font-bold bg-gradient-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text mb-4  leading-[1.1]">
          Revolutionizing Early <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-[#517af9] to-[#0ebaf0] text-transparent bg-clip-text">
            Detection of Chronic Kidney Disease
          </span>
        </h1>
        
        <p className="text-[#999] text-lg max-w-[1000px] font-normal mb-8 leading-relaxed">
          Healium Digital Healthcare's AI-PoCUS is a pioneering technology in clinical practice, as it non-invasively detects chronic kidney disease in its early stages and provides predictive insights into its causality.
        </p>
        
        <Link href="/contact">
          <Button className="h-[50px] w-[157.406px] cursor-pointer text-[16px] font-normal">
            Request Demo
          </Button>
        </Link>
        
        <div
          ref={imageWrapRef}
          className=" w-full h-auto rounded-md overflow-hidden shadow-2xl mt-5 relative"
          style={{
            transform: "perspective(1200px) rotateX(32deg) translateY(66px) scale(0.82)",
            transformOrigin: "top center",
            willChange: "transform",
          }}
        >
          <Image 
            src="/hero.gif" 
            alt="AI-PoCUS Interface" 
            width={1000} 
            height={563.3} 
            className="w-full h-full  object-cover relative z-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
