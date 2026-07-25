import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { StackMarquee } from "@/components/StackMarquee";
import { Publication } from "@/components/Publication";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <StackMarquee />
      <Publication />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
