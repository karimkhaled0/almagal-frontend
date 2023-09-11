"use client";
import Hero from "../components/Hero.jsx";
import Nav from "../components/Nav.jsx";
import Services from "../components/Services.jsx";

export default function Home() {
  return (
    <div className="md:space-y-32 space-y-10">
      <Nav />
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>
    </div>
  );
}
