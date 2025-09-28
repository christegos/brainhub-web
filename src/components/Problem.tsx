import { AlertTriangle, FileX, Eye, Clock, ArrowDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <FileX className="h-8 w-8" />,
      title: "Legacy Systems",
      description: "Many businesses still rely on outdated systems that lack transparency, security, and scalability for modern operations."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Trust Gaps",
      description: "Digital interactions often lack sufficient trust mechanisms, leading to disputes and inefficient verification processes."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Manual Processes",
      description: "Time-consuming manual workflows that are prone to human error and don't scale with growing business needs."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Data Silos",
      description: "Isolated systems that don't communicate effectively, creating bottlenecks and limiting data accessibility."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Challenge with
            <span className="gradient-primary bg-clip-text text-transparent"> Modern Business</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Businesses across industries face common challenges with legacy systems, 
            trust gaps, and inefficient processes that blockchain technology can solve.
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
            <span>That's where we come in...</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;