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
      title: "Cryptographic Security",
      description: "Advanced encryption ensures your certificates are tamper-proof and secure against unauthorized access.",
      benefits: ["256-bit encryption", "Digital signatures", "Hash verification"]
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Real-Time Verification",
      description: "Instant validation of documents with smart contracts that process verification requests in seconds.",
      benefits: ["Sub-second response", "24/7 availability", "Automated processing"]
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Accessibility",
      description: "Access your verification system from anywhere in the world with our distributed blockchain network.",
      benefits: ["Worldwide access", "Multi-language support", "Cross-border compatibility"]
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Immutable Storage",
      description: "Documents stored on the blockchain cannot be modified, deleted, or corrupted, ensuring permanent records.",
      benefits: ["Permanent storage", "Version control", "Audit trails"]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Multi-Party Trust",
      description: "Enable multiple stakeholders to trust the same verification system without intermediaries.",
      benefits: ["Decentralized trust", "Stakeholder transparency", "Reduced disputes"]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Ready",
      description: "Native mobile applications and responsive web interfaces for verification on any device.",
      benefits: ["iOS & Android apps", "Offline capability", "QR code scanning"]
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard to track verification usage, trends, and system performance.",
      benefits: ["Usage analytics", "Custom reports", "Performance metrics"]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Easy Integration",
      description: "RESTful APIs and SDKs make it simple to integrate our verification system into existing workflows.",
      benefits: ["REST APIs", "SDK libraries", "Documentation"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features for
            <span className="gradient-primary bg-clip-text text-transparent"> Modern Verification</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Built with enterprise-grade security and designed for scalability, 
            our platform delivers the tools you need for reliable document verification.
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
              Ready to Transform Your Verification Process?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the blockchain revolution and bring unbreakable trust to your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;