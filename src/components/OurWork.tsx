import { Shield, Zap, Globe, CheckCircle, Ship, FileText, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurWork = () => {
  const projectCategories = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "AI Agents",
      description: "Autonomous AI agents that operate on blockchain networks, making intelligent decisions in real-time."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Smart Contracts",
      description: "Self-executing contracts powered by AI that adapt and optimize based on real-world conditions."
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: "DeFi Protocols",
      description: "Decentralized finance protocols enhanced with AI for automated trading and risk management."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Web3 Infrastructure",
      description: "Next-generation blockchain infrastructure that scales with AI-powered optimization."
    }
  ];

  const currentProjects = [
    {
      title: "Maritime Verification Platform",
      status: "In Development",
      description: "Blockchain-based certificate verification system for the maritime industry, ensuring authenticity and compliance."
    },
    {
      title: "Real Estate Tokenization",
      status: "Research Phase",
      description: "Innovative platform for tokenizing real estate assets, making property investment more accessible and liquid."
    },
    {
      title: "AI Trend Prediction Engine",
      status: "Planning",
      description: "Real-time trend prediction system that analyzes market patterns and predicts future movements across blockchain and web platforms."
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our
            <span className="gradient-secondary bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pioneering the convergence of AI and blockchain technology, creating intelligent 
            systems that operate autonomously on decentralized networks.
          </p>
        </div>

        {/* Project Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {projectCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift text-center border border-border/50 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-medium h-full">
                {/* Icon with background */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary group-hover:text-secondary transition-colors">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                
                {/* Subtle accent line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Projects */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-foreground">
              Current
              <span className="gradient-secondary bg-clip-text text-transparent"> Initiatives</span>
            </h3>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Building the future, one project at a time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-medium">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                        {project.status}
                      </span>
                    </div>
                    <div className="text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {index === 0 && "🚢"}
                      {index === 1 && "🏠"}
                      {index === 2 && "📈"}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ 
                          width: index === 0 ? '75%' : index === 1 ? '45%' : '25%' 
                        }}
                      ></div>
                    </div>
                    <span className="font-medium">
                      {index === 0 ? '75%' : index === 1 ? '45%' : '25%'}
                    </span>
                  </div>
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
              Learn About Our Values
            </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;