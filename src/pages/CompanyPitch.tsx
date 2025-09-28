import React from "react";
import { ArrowLeft, TrendingUp, Users, Target, Globe, Zap, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CompanyPitch = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <TrendingUp className="h-6 w-6" />, value: "2024", label: "Founded" },
    { icon: <Users className="h-6 w-6" />, value: "5+", label: "Team Members" },
    { icon: <Target className="h-6 w-6" />, value: "3", label: "Active Projects" },
    { icon: <Globe className="h-6 w-6" />, value: "Global", label: "Reach" }
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and blockchain technology, always staying ahead of the curve."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Trust",
      description: "Every solution we build prioritizes security, transparency, and user trust above all else."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to user experience."
    }
  ];

  const marketOpportunity = [
    { metric: "$2.3T", label: "Global AI Market by 2030" },
    { metric: "$1.4T", label: "Blockchain Market by 2030" },
    { metric: "85%", label: "Companies Planning AI Integration" },
    { metric: "60%", label: "Blockchain Adoption Growth" }
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
              Company Pitch
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              The Future of
              <span className="block text-gradient-professional">AI & Blockchain</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Brainhub is pioneering the convergence of artificial intelligence and blockchain technology, 
              creating intelligent decentralized systems that will power the next generation of applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="professional" size="lg" className="group">
                View Our Projects
                <ArrowLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform rotate-180" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/first-project")}>
                See NeuralChain
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
                Massive Market Opportunity
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The convergence of AI and blockchain represents one of the largest technological opportunities of our time
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

      {/* Our Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We envision a world where AI and blockchain work seamlessly together to create 
                  autonomous, intelligent systems that operate transparently and securely across 
                  decentralized networks.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our mission is to bridge the gap between artificial intelligence and blockchain 
                  technology, making it accessible and practical for businesses and developers worldwide.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-foreground">Democratize AI-powered blockchain solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-foreground">Build the infrastructure for Web3 AI applications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-foreground">Enable autonomous, self-improving smart contracts</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-enhanced rounded-3xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Zap className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">The Future is Here</h3>
                    <p className="text-muted-foreground">AI + Blockchain = Infinite Possibilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Brainhub
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="glass-enhanced rounded-2xl p-8 text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
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
                <h3 className="text-xl font-bold mb-4 text-foreground">Expert Team</h3>
                <p className="text-muted-foreground">
                  World-class engineers with deep expertise in AI, blockchain, and Web3 technologies
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">
                  We use the latest tools and frameworks to build robust, scalable solutions
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Successful delivery of complex AI and blockchain projects for global clients
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Future-Focused</h3>
                <p className="text-muted-foreground">
                  We're building the infrastructure for tomorrow's decentralized applications
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
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in building the future of AI and blockchain technology. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg">
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/first-project")}>
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPitch;
