import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Hero />
      <Philosophy />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
