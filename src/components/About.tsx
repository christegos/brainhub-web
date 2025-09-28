import { Building2, MapPin, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Tech-First",
      description: "We're a technology-first company building cutting-edge solutions at the intersection of AI and blockchain."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation Focus",
      description: "We focus on breakthrough technologies that solve complex problems and create new possibilities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Elite Team",
      description: "Our team combines world-class engineering talent with deep expertise in AI, blockchain, and Web3."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Cyprus-Based, Global Reach",
      description: "Operating from Cyprus with a global remote team, we serve clients worldwide while leveraging Cyprus's strategic business environment."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About
            <span className="gradient-primary bg-clip-text text-transparent"> Brainhub</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            A cutting-edge technology startup pushing the boundaries of AI and blockchain. 
            We're building the infrastructure for the next generation of decentralized applications.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our mission is to create intelligent, autonomous systems that operate on blockchain networks, 
            combining AI with the security and transparency of decentralized technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-medium h-full">
                <div className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary group-hover:text-secondary transition-colors">
                        {highlight.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle accent line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;