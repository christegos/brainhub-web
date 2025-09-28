import { Shield, Zap, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Immutable Security",
      description: "Blockchain technology ensures certificates cannot be altered or falsified"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Verification",
      description: "Real-time validation of documents and credentials with smart contracts"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Accessibility",
      description: "Access verification from anywhere in the world, 24/7"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Transparent Trust",
      description: "Complete audit trail and transparency for all stakeholders"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Document Creation",
      description: "Certificates are created and cryptographically signed"
    },
    {
      number: "02", 
      title: "Blockchain Storage",
      description: "Documents are stored immutably on the blockchain"
    },
    {
      number: "03",
      title: "Smart Verification",
      description: "Smart contracts automatically validate authenticity"
    },
    {
      number: "04",
      title: "Instant Access",
      description: "Stakeholders can verify documents instantly"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solution" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Blockchain-Powered
            <span className="gradient-secondary bg-clip-text text-transparent"> Verification</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our smart contract solutions create an unbreakable chain of trust for digital certificates 
            and verification systems.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover-lift text-center group"
            >
              <div className="text-secondary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("#features")}
          >
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;