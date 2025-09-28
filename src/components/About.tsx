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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About
            <span className="text-gradient-professional"> Brainhub</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-light">
            An established technology company with proven expertise in practical applications of 
            <span className="text-primary font-medium"> artificial intelligence</span> and 
            <span className="text-secondary font-medium"> blockchain</span>. 
            We've been building solutions that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Our mission is to create intelligent systems that operate on blockchain networks, 
            combining AI with the security and transparency of decentralized technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft hover-lift border border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-medium h-full glass-enhanced">
                <div className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow">
                      <div className="text-primary group-hover:text-secondary transition-colors">
                        {highlight.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-gradient-primary transition-all">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      {highlight.description}
                    </p>
                  </div>
                </div>
                
                {/* Enhanced accent line */}
                <div className="mt-8 w-16 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;