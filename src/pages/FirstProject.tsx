import React from "react";
import { ArrowLeft, ExternalLink, Github, Shield, CheckCircle, FileCheck, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FirstProject = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Tamper-Proof",
      description: "Immutable certificate records on blockchain ensuring authenticity"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Instant Verification",
      description: "Real-time validation of certificates with smart contract automation"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Access",
      description: "Universal verification system accessible from anywhere"
    }
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
              <FileCheck className="h-4 w-4" />
              First Project
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              <span className="text-gradient-professional">CertChain</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A revolutionary blockchain-based certificate verification system that eliminates 
              fraud and ensures instant, tamper-proof validation of credentials.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="professional" size="lg" className="group">
                View Live Demo
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Github className="mr-2 h-4 w-4" />
                Join Early Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Secure Certificate Verification
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  CertChain addresses the critical need for reliable credential verification 
                  in today's digital world. By leveraging blockchain technology, we create 
                  an immutable record of certificates that cannot be forged or manipulated.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our smart contract-based system automates the verification process, 
                  providing instant validation while maintaining the highest security standards 
                  and reducing administrative overhead.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Immutable certificate records</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Automated verification process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Reduced fraud and administrative costs</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-enhanced rounded-3xl p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileCheck className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground">CertChain Demo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                CertChain provides secure, efficient, and reliable certificate verification
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-enhanced rounded-2xl p-8 text-center hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Technology Stack
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Solidity", "Ethereum", "IPFS", "React", "Node.js", "Web3.js", "MetaMask", "OpenZeppelin"].map((tech, index) => (
                <div key={index} className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                  <div className="text-foreground font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Secure Your Certificates?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the future of certificate verification with blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg">
                Enroll Your Organization
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/company")}>
                Learn More About Brainhub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstProject;
