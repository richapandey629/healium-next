import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">
          About Us
        </h1>
      </section>

      <Footer />
    </>
  )
}