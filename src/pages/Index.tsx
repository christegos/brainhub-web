import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurWork from "@/components/OurWork";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <OurWork />
      <Values />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
