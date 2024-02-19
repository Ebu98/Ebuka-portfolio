import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory z-0  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        <Head>
          <title>Ebuka Portfolio</title>
        </Head>
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section className="snap-start" id="skills">
          <Skills />
        </section>
        <section className="snap-start" id="projects">
          <Projects />
        </section>
        <section id="contactme" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                className="w-10 h-10 rounded-full grayscale hover:grayscale-0"
                src="./images/decagon.jpg" alt="img"
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}
