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
      type: "Government Partner",
      status: "Active Project"
    },
    {
      name: "University of Cyprus", 
      type: "Research Partner",
      status: "Collaboration"
    },
    {
      name: "European Blockchain Alliance",
      type: "Technology Partner", 
      status: "Member"
    },
    {
      name: "Startup Cyprus",
      type: "Ecosystem Partner",
      status: "Member"
    }
  ];

  const achievements = [
    {
      icon: <Users className="h-10 w-10" />,
      metric: "50+",
      label: "Projects Delivered",
      description: "Successfully completed across industries"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      metric: "5",
      label: "Years Experience",
      description: "In blockchain and tech development"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      metric: "100%",
      label: "Security Record",
      description: "Zero security incidents to date"
    },
    {
      icon: <Award className="h-10 w-10" />,
      metric: "3",
      label: "Industry Awards",
      description: "Recognition for innovation and excellence"
    }
  ];

  return (
    <section id="trust" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Trusted by
            <span className="gradient-primary bg-clip-text text-transparent"> Partners & Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our commitment to excellence and innovation has earned us partnerships 
            with leading organizations and recognition in the tech industry.
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
            Key Partners & Collaborators
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
            Company Achievements
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
              Innovation with Integrity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Brainhub, we believe in building technology that not only pushes boundaries 
              but does so responsibly. Every project we undertake maintains the highest 
              standards of security, compliance, and ethical development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;