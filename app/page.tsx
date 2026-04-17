import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import Details from "@/components/sections/details"
import Features from "@/components/sections/features"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Details />
      <Footer />
    </>
  )
}