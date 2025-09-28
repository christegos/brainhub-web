import { 
  Shield, 
  Eye, 
  Lightbulb, 
  Heart
} from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Trust",
      description: "We build secure, reliable blockchain solutions that organizations can depend on. Every system we create is designed with security and integrity at its core.",
      color: "text-blue-600"
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "Transparency",
      description: "Our blockchain solutions provide complete visibility into processes and data. We believe in open, auditable systems that build confidence and accountability.",
      color: "text-green-600"
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Innovation",
      description: "We continuously explore emerging technologies and push the boundaries of what's possible with blockchain. Our solutions are built for the future.",
      color: "text-purple-600"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Security",
      description: "Security is not an afterthought—it's the foundation of everything we build. We implement industry-leading security practices in all our solutions.",
      color: "text-red-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Core
            <span className="gradient-primary bg-clip-text text-transparent"> Values</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These fundamental principles guide everything we do, from the technology we build 
            to the partnerships we form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-medium h-full">
                <div className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className={`${value.color} group-hover:scale-110 transition-transform`}>
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle accent line */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our values-driven approach can help solve your blockchain challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;