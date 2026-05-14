import About from "./about/About";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Works from "./works/Works";

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