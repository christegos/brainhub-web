import { 
  Lock, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Smartphone,
  BarChart,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Blockchain Expertise",
      description: "Deep knowledge in blockchain protocols, smart contracts, and decentralized systems architecture.",
      benefits: ["Smart contracts", "DeFi solutions", "Custom blockchains"]
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Agile Development",
      description: "Fast, iterative development cycles that deliver working solutions quickly and efficiently.",
      benefits: ["Rapid prototyping", "Weekly sprints", "Continuous delivery"]
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from backend infrastructure to user-friendly frontend interfaces.",
      benefits: ["Frontend & backend", "Mobile apps", "Web platforms"]
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Architecture",
      description: "Robust data management solutions that ensure scalability, security, and performance.",
      benefits: ["Database design", "API development", "Data migration"]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "User Experience",
      description: "Creating intuitive interfaces that make complex blockchain technology accessible to everyone.",
      benefits: ["UI/UX design", "User research", "Accessibility"]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile First",
      description: "Mobile-optimized solutions that work seamlessly across all devices and platforms.",
      benefits: ["iOS & Android", "Responsive design", "Cross-platform"]
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Analytics & Insights",
      description: "Data-driven solutions with comprehensive analytics to track performance and user behavior.",
      benefits: ["Real-time analytics", "Custom dashboards", "Business intelligence"]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "DevOps & Infrastructure",
      description: "Reliable deployment pipelines and cloud infrastructure that scales with your business.",
      benefits: ["CI/CD pipelines", "Cloud deployment", "Monitoring"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Core
            <span className="gradient-primary bg-clip-text text-transparent"> Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We combine technical expertise with innovative thinking to deliver 
            solutions that drive real business value and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover-lift group transition-all duration-300"
            >
              <div className="text-primary group-hover:text-secondary transition-smooth mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-1">
                {feature.benefits.map((benefit, idx) => (
                  <li 
                    key={idx} 
                    className="text-xs text-muted-foreground flex items-center"
                  >
                    <div className="w-1 h-1 bg-secondary rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and explore how we can bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;