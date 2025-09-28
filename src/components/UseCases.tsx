import { Anchor, Truck, FileCheck, Shield, Users, Award } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Anchor className="h-12 w-12" />,
      title: "Maritime Verification",
      description: "Blockchain-based certificate verification system for the maritime industry",
      industries: ["Shipping", "Port Operations", "Maritime Insurance"],
      benefits: [
        "Instant vessel verification",
        "Crew credential validation", 
        "Compliance automation",
        "Fraud prevention"
      ],
      status: "Live Production"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Supply Chain Platform",
      description: "End-to-end traceability solution for manufacturing and logistics",
      industries: ["Manufacturing", "Food & Beverage", "Automotive"],
      benefits: [
        "Product authenticity",
        "Origin verification",
        "Quality tracking",
        "Regulatory compliance"
      ],
      status: "In Development"
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "Digital Credentials",
      description: "Secure academic and professional certification platform",
      industries: ["Education", "HR & Recruitment", "Professional Services"],
      benefits: [
        "Degree verification",
        "Skills certification",
        "Career validation",
        "Instant verification"
      ],
      status: "Pilot Phase"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "DeFi Protocol",
      description: "Decentralized finance solutions for modern banking needs",
      industries: ["Banking", "Fintech", "Investment"],
      benefits: [
        "Smart contracts",
        "Automated lending",
        "Yield farming",
        "Governance tokens"
      ],
      status: "Research"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Identity Management",
      description: "Self-sovereign identity solutions for privacy-first verification",
      industries: ["Healthcare", "Government", "Financial Services"],
      benefits: [
        "Privacy protection",
        "KYC automation",
        "Identity sovereignty",
        "Zero-knowledge proofs"
      ],
      status: "Prototype"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "NFT Marketplace",
      description: "Custom marketplace for digital assets and collectibles",
      industries: ["Gaming", "Art", "Entertainment"],
      benefits: [
        "Digital ownership",
        "Royalty automation",
        "Cross-chain support",
        "Creator tools"
      ],
      status: "Planning"
    }
  ];

  return (
    <section id="use-cases" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our
            <span className="gradient-secondary bg-clip-text text-transparent"> Projects & Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to deployment, we work across diverse industries to create 
            innovative blockchain solutions that solve real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover-lift group"
            >
              <div className="text-primary group-hover:text-secondary transition-smooth mb-6 flex justify-center">
                {useCase.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-card-foreground text-center">
                {useCase.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                {useCase.description}
              </p>
              {/* Status Badge */}
              <div className="mb-6">
                <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                  useCase.status === 'Live Production' 
                    ? 'bg-secondary/20 text-secondary-dark border border-secondary/30' 
                    : useCase.status === 'In Development'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-accent-dark/20 text-accent-foreground border border-accent-dark/30'
                }`}>
                  {useCase.status}
                </span>
              </div>
              
              {/* Industries */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Industries:</h4>
                <div className="flex flex-wrap gap-2">
                  {useCase.industries.map((industry, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Benefits */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li 
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Solutions Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;