"use client";
import Hero from "../components/Hero.jsx";
import Nav from "../components/Nav.jsx";
import Services from "../components/Services.jsx";
import Why from "../components/Why.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <main className="md:space-y-32 space-y-10">
      <Nav />
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why">
        <Why />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
