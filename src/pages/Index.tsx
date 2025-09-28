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
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <OurWork />
      <div className="section-divider"></div>
      <Values />
      <div className="section-divider"></div>
      <Team />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
