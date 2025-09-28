import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <UseCases />
      <Team />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
