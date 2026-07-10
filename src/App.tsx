import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Works from "@/components/works/Works";
import Offer from "./components/offer/Offer";
import Footer from "@/components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Works />
        <Offer/>
      </main>
      <Footer />
    </>
  )
}