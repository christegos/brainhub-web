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
        backgroundImage: `linear-gradient(rgba(0, 100, 200, 0.85), rgba(25, 35, 45, 0.75), rgba(0, 80, 80, 0.7)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10 pt-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent">
              Brainhub
            </span>
            <span className="block text-2xl md:text-4xl font-light text-white/95 mt-4 tracking-wide">
              Where AI meets Blockchain
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Building the next generation of decentralized applications powered by 
            <span className="text-blue-300 font-medium"> AI</span> and 
            <span className="text-teal-300 font-medium"> smart contracts</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="professional" 
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group shadow-2xl"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection("#about")}
              className="group border-white/30 hover:border-white/50"
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group border border-white/20 hover:border-blue-300/50">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                2024
              </div>
              <div className="text-white/90 font-medium">Founded</div>
            </div>
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group border border-white/20 hover:border-slate-300/50">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent group-hover:from-slate-200 group-hover:to-slate-300 transition-all">
                AI + Web3
              </div>
              <div className="text-white/90 font-medium">Focus</div>
            </div>
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group border border-white/20 hover:border-teal-300/50">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent group-hover:from-teal-200 group-hover:to-teal-300 transition-all">
                Global
              </div>
              <div className="text-white/90 font-medium">Reach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-300 to-teal-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;