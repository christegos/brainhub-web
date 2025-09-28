import { AlertTriangle, FileX, Eye, Clock, ArrowDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <FileX className="h-8 w-8" />,
      title: "Certificate Fraud",
      description: "Maritime certificates can be easily forged or tampered with, leading to safety risks and compliance issues."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Lack of Transparency",
      description: "Traditional verification systems are opaque, making it difficult to trace the authenticity of documents."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Slow Verification",
      description: "Manual verification processes are time-consuming and prone to human error, causing delays in operations."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Trust Issues",
      description: "Stakeholders struggle to trust the validity of certificates without a reliable, centralized verification system."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Trust Crisis in
            <span className="gradient-primary bg-clip-text text-transparent"> Digital Verification</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Industries worldwide struggle with document authenticity, verification delays, 
            and trust issues that blockchain technology can solve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-soft hover-lift group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-primary group-hover:text-secondary transition-smooth flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-lg font-medium text-primary">
            <span>But there's a better way...</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;