import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoCeoImage from "@/assets/team-ceo.jpg";
import ctoImage from "@/assets/team-cto.jpg";
import devImage from "@/assets/team-dev.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI researcher with 10+ years in machine learning. Passionate about building the future of decentralized AI.",
      expertise: ["AI Research", "Blockchain Strategy", "Leadership"],
              social: {
                linkedin: "#",
                twitter: "#",
                email: "alex@brainhub.ltd"
              }
    },
    {
      name: "Sarah Kim",
      role: "CTO", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Blockchain architect with expertise in Ethereum, Solana, and AI integration. Led development at multiple DeFi protocols.",
      expertise: ["Blockchain Architecture", "Smart Contracts", "AI Integration"],
              social: {
                linkedin: "#",
                twitter: "#", 
                email: "sarah@brainhub.ltd"
              }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "AI researcher specializing in neural networks and autonomous systems. PhD in Computer Science from Stanford.",
      expertise: ["Machine Learning", "Neural Networks", "Autonomous Systems"],
              social: {
                linkedin: "#",
                twitter: "#",
                email: "marcus@brainhub.ltd"
              }
    },
    {
      name: "Emma Thompson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with expertise in Web3 technologies and AI model deployment. Built scalable dApps for major protocols.",
      expertise: ["Web3 Development", "AI Deployment", "Full-Stack"],
              social: {
                linkedin: "#",
                twitter: "#",
                email: "emma@brainhub.ltd"
              }
    },
    {
      name: "David Park",
      role: "Blockchain Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Smart contract specialist with deep knowledge of DeFi protocols and cross-chain interoperability solutions.",
      expertise: ["Smart Contracts", "DeFi", "Cross-Chain"],
              social: {
                linkedin: "#",
                twitter: "#",
                email: "david@brainhub.ltd"
              }
    },
    {
      name: "Lisa Wang",
      role: "AI Research Scientist",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Research scientist focused on AI agent development and blockchain consensus mechanisms. Published in top-tier AI conferences.",
      expertise: ["AI Agents", "Consensus Mechanisms", "Research"],
              social: {
                linkedin: "#",
                twitter: "#",
                email: "lisa@brainhub.ltd"
              }
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      bio: "Product strategist with experience in fintech and Web3. Bridges the gap between complex technology and user experience.",
      expertise: ["Product Strategy", "Web3 UX", "Fintech"],
              social: {
                linkedin: "#",
                twitter: "#",
                email: "james@brainhub.ltd"
              }
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet the
            <span className="gradient-primary bg-clip-text text-transparent"> Team</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our world-class team combines cutting-edge AI research with deep blockchain expertise 
            to build the future of decentralized technology.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 team-scroll">
          <div className="flex gap-8 min-w-max px-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift group w-80 flex-shrink-0"
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-4">
                  {member.role}
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To build a more trusted digital world by providing secure, transparent, 
              and accessible blockchain verification solutions that empower businesses 
              and protect consumers worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Established</div>
                <div className="text-muted-foreground">Company</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Cyprus</div>
                <div className="text-muted-foreground">Headquarters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">Global Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;