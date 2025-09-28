import { Shield, Award, Users, FileCheck, Globe, Zap } from "lucide-react";

const Trust = () => {
  const credentials = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "ISO 27001 Certified",
      description: "Information security management system certification"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "SOC 2 Type II",
      description: "Security and availability controls validation"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cyprus EU Member",
      description: "Regulated under European Union blockchain frameworks"
    }
  ];

  const partners = [
    {
      name: "Cyprus Maritime Authority",
      type: "Regulatory Partner",
      status: "Pilot Program"
    },
    {
      name: "Limassol Port Authority", 
      type: "Implementation Partner",
      status: "Active"
    },
    {
      name: "European Blockchain Alliance",
      type: "Technology Partner", 
      status: "Member"
    },
    {
      name: "Maritime Cyprus",
      type: "Industry Partner",
      status: "Active"
    }
  ];

  const achievements = [
    {
      icon: <Users className="h-10 w-10" />,
      metric: "10,000+",
      label: "Verified Certificates",
      description: "Successfully processed and validated"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      metric: "99.9%",
      label: "System Uptime",
      description: "Reliable 24/7 service availability"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      metric: "Zero",
      label: "Security Breaches",
      description: "Maintained since inception"
    },
    {
      icon: <Award className="h-10 w-10" />,
      metric: "3",
      label: "Industry Awards",
      description: "Recognition for innovation"
    }
  ];

  return (
    <section id="trust" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Trusted by Industry
            <span className="gradient-primary bg-clip-text text-transparent"> Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our commitment to security, compliance, and reliability has earned the trust 
            of maritime authorities and industry partners across Europe.
          </p>
        </div>

        {/* Credentials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {credential.icon}
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">
                  {credential.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Strategic Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover-lift"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-card-foreground">
                    {partner.name}
                  </h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    partner.status === 'Active' 
                      ? 'bg-secondary/20 text-secondary' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    {partner.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {partner.type}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Proven Track Record
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {achievement.metric}
                </div>
                <div className="font-semibold text-card-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-soft">
            <h3 className="text-xl font-bold mb-4 text-card-foreground">
              Security First Approach
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every aspect of our platform is designed with security as the foundation. 
              From our development practices to our infrastructure, we maintain the highest 
              standards of cybersecurity to protect your sensitive data and ensure the 
              integrity of your verification systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;