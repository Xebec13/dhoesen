import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Works from "@/components/works/Works";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <About/>
      <Works/>
      <Footer/>
    </main>
  )
}