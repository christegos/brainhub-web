import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 43, 90, 0.8), rgba(17, 43, 90, 0.6)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Brainhub</span>
            <span className="block text-2xl md:text-3xl font-normal text-white/90 mt-2">
              Where AI meets Blockchain
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Building the next generation of decentralized applications powered by 
            AI and smart contracts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection("#about")}
              className="group"
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300 group">
              <div className="text-3xl font-bold mb-2 group-hover:text-secondary transition-colors">2024</div>
              <div className="text-white/80">Founded</div>
            </div>
            <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300 group">
              <div className="text-3xl font-bold mb-2 group-hover:text-secondary transition-colors">AI + Web3</div>
              <div className="text-white/80">Focus</div>
            </div>
            <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300 group">
              <div className="text-3xl font-bold mb-2 group-hover:text-secondary transition-colors">Global</div>
              <div className="text-white/80">Reach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;