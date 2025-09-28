import { Anchor, Truck, FileCheck, Shield, Users, Award } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Anchor className="h-12 w-12" />,
      title: "Maritime Certificates",
      description: "Secure vessel certifications, crew credentials, and port documentation",
      industries: ["Shipping", "Port Operations", "Marine Insurance"],
      benefits: [
        "Instant vessel verification",
        "Crew credential validation", 
        "Compliance tracking",
        "Insurance claim processing"
      ]
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Supply Chain Tracking",
      description: "End-to-end product verification and provenance tracking",
      industries: ["Manufacturing", "Food & Beverage", "Pharmaceuticals"],
      benefits: [
        "Product authenticity",
        "Origin verification",
        "Quality assurance",
        "Regulatory compliance"
      ]
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "Academic Credentials",
      description: "Tamper-proof diplomas, certificates, and professional qualifications",
      industries: ["Education", "HR & Recruitment", "Professional Services"],
      benefits: [
        "Degree verification",
        "Skills certification",
        "Career validation",
        "Fraud prevention"
      ]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Legal Documents",
      description: "Secure contracts, agreements, and official documentation",
      industries: ["Legal Services", "Real Estate", "Government"],
      benefits: [
        "Contract integrity",
        "Document authenticity",
        "Legal compliance",
        "Dispute resolution"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Identity Verification",
      description: "Digital identity management and KYC compliance solutions",
      industries: ["Financial Services", "Healthcare", "Government"],
      benefits: [
        "KYC automation",
        "Identity fraud prevention",
        "Privacy protection",
        "Regulatory compliance"
      ]
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Professional Licensing",
      description: "Industry certifications and professional license validation",
      industries: ["Healthcare", "Engineering", "Finance"],
      benefits: [
        "License verification",
        "Continuing education",
        "Professional standards",
        "Public safety"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Transforming Industries with
            <span className="gradient-secondary bg-clip-text text-transparent"> Verified Trust</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From maritime operations to academic credentials, our blockchain solutions 
            bring security and transparency to diverse industries worldwide.
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

        {/* Statistics */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500M+</div>
              <div className="text-muted-foreground">Documents Secured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;