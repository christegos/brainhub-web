import React from "react";
import { ArrowLeft, TrendingUp, Users, Target, Globe, Zap, Shield, Award, Briefcase, Scale, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <TrendingUp className="h-6 w-6" />, value: "Growing", label: "Company" },
    { icon: <Users className="h-6 w-6" />, value: "5+", label: "Team Members" },
    { icon: <Target className="h-6 w-6" />, value: "3", label: "Active Projects" },
    { icon: <Globe className="h-6 w-6" />, value: "Global", label: "Reach" }
  ];

  const expertise = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Technology",
      description: "Deep expertise in artificial intelligence, blockchain, and smart contract development with years of experience in practical applications."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business",
      description: "Proven business knowledge and extensive product development experience to bring solutions to market effectively."
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Legal & Compliance",
      description: "Comprehensive understanding of regulatory frameworks and legal requirements for blockchain and artificial intelligence implementations."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Finance",
      description: "Extensive financial knowledge in DeFi, tokenomics, and traditional finance to ensure sustainable business models."
    }
  ];

  const marketOpportunity = [
    { metric: "$2.3T", label: "Global artificial intelligence market by 2030" },
    { metric: "$1.4T", label: "Blockchain Market by 2030" },
    { metric: "85%", label: "Companies planning artificial intelligence integration" },
    { metric: "60%", label: "Blockchain adoption growth" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass shadow-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div className="gradient-primary text-primary-foreground font-bold text-xl px-3 py-1 rounded-md">
              Brainhub
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              About Brainhub
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Building the Future of
              <span className="block text-gradient-professional">AI & Blockchain</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Brainhub is an established technology company with deep expertise in creating practical blockchain solutions 
              that solve real-world problems. We combine years of technical experience with business knowledge 
              to deliver proven products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="professional" size="lg" className="group">
                View Our Projects
                <ArrowLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform rotate-180" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/certchain")}>
                See CertChain
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Market Opportunity
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The combination of artificial intelligence and blockchain represents significant growth potential
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {marketOpportunity.map((item, index) => (
                <div key={index} className="glass-enhanced rounded-2xl p-6 text-center hover-lift">
                  <div className="text-2xl font-bold mb-2 text-gradient-professional">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Our Approach
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe in building practical solutions that address real business needs. 
                  Our approach combines modern technology with proven business practices 
                  to create sustainable, scalable products.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  By focusing on specific use cases like certificate verification, we can deliver 
                  immediate value while building the foundation for broader blockchain adoption.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-foreground">Problem-first approach to product development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-foreground">Focus on practical blockchain applications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-foreground">Cross-functional team with diverse expertise</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-enhanced rounded-3xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Target className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Focused Innovation</h3>
                    <p className="text-muted-foreground">Technology + Business = Real Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A diverse team bringing together technical and business expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((area, index) => (
                <div key={index} className="glass-enhanced rounded-2xl p-8 text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Brainhub */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Why Choose Brainhub?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Proven technical expertise combined with extensive business, legal, and financial knowledge
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Practical Focus</h3>
                <p className="text-muted-foreground">
                  We build solutions that solve real problems, not just showcase technology
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Proven Approach</h3>
                <p className="text-muted-foreground">
                  Time-tested development process with focus on market validation and user needs
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Sustainable Growth</h3>
                <p className="text-muted-foreground">
                  Building for long-term success with scalable business models
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you implement blockchain solutions 
              that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg">
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/certchain")}>
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
