"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

type BendingImageProps = {
  src: string
  alt: string
  width: number
  height: number
  containerClassName?: string
  imageClassName?: string
  priority?: boolean
}

export default function BendingImage({
  src,
  alt,
  width,
  height,
  containerClassName,
  imageClassName,
  priority,
}: BendingImageProps) {
  const imageWrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let rafId = 0

    const updateMotion = () => {
      const imageWrap = imageWrapRef.current
      if (!imageWrap) return

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        imageWrap.style.transform = "none"
        return
      }

      const rect = imageWrap.getBoundingClientRect()
      const travelRange = Math.max(1, rect.height * 0.9)
      const rawProgress = -rect.top / travelRange
      const progress = Math.max(0, Math.min(1, rawProgress))

      const easedProgress = 1 - Math.pow(1 - progress, 2)
      const rotateX = 4 - easedProgress * 4
      const scale = 0.985 + easedProgress * 0.015
      const translateY = 6 - easedProgress * 6

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
    <div
      ref={imageWrapRef}
      className={containerClassName}
      style={{
        transform: "perspective(1200px) rotateX(4deg) translateY(6px) scale(0.985)",
        transformOrigin: "top center",
        willChange: "transform",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        priority={priority}
      />
    </div>
  )
}
