import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoCeoImage from "@/assets/team-ceo.jpg";
import ctoImage from "@/assets/team-cto.jpg";
import devImage from "@/assets/team-dev.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Angelos Hadjistavri",
      role: "CPO / Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Product strategist with deep understanding of blockchain applications and user experience. Drives product vision and market strategy.",
      expertise: ["Product Strategy", "Blockchain UX", "Market Analysis"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "angelos@brainhub.ltd"
      }
    },
    {
      name: "Christos Tegos",
      role: "CTO / Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Technical architect with extensive experience in blockchain systems and AI integration. Leads the development of our core technology infrastructure.",
      expertise: ["System Architecture", "Blockchain Technology", "AI Integration"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "christos@brainhub.ltd"
      }
    },
    {
      name: "Stavros Mariannis",
      role: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Legal expert specializing in blockchain regulations and compliance. Ensures our solutions meet all regulatory requirements.",
      expertise: ["Blockchain Law", "Compliance", "Regulatory Affairs"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "stavros@brainhub.ltd"
      }
    },
    {
      name: "Demos Petropoulos",
      role: "Professor / Business - Economics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Academic expert in economics and business strategy. Provides strategic guidance on economic models and business development.",
      expertise: ["Economics", "Business Strategy", "Academic Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "demos@brainhub.ltd"
      }
    },
    {
      name: "Antonis",
      role: "Business Expert",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      bio: "Business development specialist with extensive experience in technology commercialization and market expansion strategies.",
      expertise: ["Business Development", "Market Strategy", "Commercialization"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "antonis@brainhub.ltd"
      }
    },
    {
      name: "Katerina Hadjistavri",
      role: "Researcher / Legal",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Research specialist with dual expertise in legal frameworks and blockchain technology. Bridges the gap between law and innovation.",
      expertise: ["Legal Research", "Blockchain Research", "Compliance"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "katerina@brainhub.ltd"
      }
    },
    {
      name: "Angelo Christopher Agathangelou",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with expertise in blockchain applications and smart contract development. Builds robust and scalable solutions.",
      expertise: ["Smart Contracts", "Full-Stack Development", "Blockchain Apps"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "angelo@brainhub.ltd"
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
            Our experienced team combines technical expertise with business knowledge, legal compliance, 
            and academic research to build practical blockchain solutions.
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
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;