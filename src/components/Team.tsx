import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoCeoImage from "@/assets/team-ceo.jpg";
import ctoImage from "@/assets/team-cto.jpg";
import devImage from "@/assets/team-dev.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Dimitriou",
      role: "CEO & Co-Founder",
      image: ceoCeoImage,
      bio: "Former maritime industry executive with 15+ years of experience in shipping and logistics. Expert in blockchain technology and digital transformation.",
      expertise: ["Maritime Operations", "Blockchain Strategy", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@brainhub.cy"
      }
    },
    {
      name: "Maria Constantinou",
      role: "CTO & Co-Founder", 
      image: ctoImage,
      bio: "Blockchain architect and smart contract specialist. Previously led development teams at major fintech companies across Europe.",
      expertise: ["Smart Contracts", "System Architecture", "Cybersecurity"],
      social: {
        linkedin: "#",
        twitter: "#", 
        email: "maria@brainhub.cy"
      }
    },
    {
      name: "Nikos Stavrou",
      role: "Lead Developer",
      image: devImage,
      bio: "Full-stack developer with expertise in blockchain protocols and web3 technologies. Passionate about creating user-friendly verification systems.",
      expertise: ["Web3 Development", "Frontend Engineering", "API Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "nikos@brainhub.cy"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet the Team Behind
            <span className="gradient-primary bg-clip-text text-transparent"> Brainhub</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our diverse team combines deep maritime industry knowledge with cutting-edge 
            blockchain expertise to deliver trusted solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift group"
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
                <div className="text-3xl font-bold text-primary mb-2">2019</div>
                <div className="text-muted-foreground">Company Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Cyprus</div>
                <div className="text-muted-foreground">Headquarters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
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