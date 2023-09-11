"use client";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Why from "@/components/Why";
import React from "react";

export default function Home() {
  return (
    <div className="space-y-32">
      <Nav />
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Why />
      </section>
    </div>
  );
}
