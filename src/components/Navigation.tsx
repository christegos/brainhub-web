import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About", href: "#about", isRoute: false },
    { label: "Our Work", href: "#work", isRoute: false },
    { label: "Projects", href: "/first-project", isRoute: true },
    { label: "Company", href: "/company-pitch", isRoute: true },
    { label: "Contact", href: "#contact", isRoute: false },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "glass shadow-medium backdrop-blur-xl bg-white/80 border-b border-white/20" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`font-bold text-2xl px-4 py-2 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                isScrolled 
                  ? "gradient-primary text-primary-foreground shadow-lg" 
                  : "text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              }`}>
                Brainhub
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? "text-foreground hover:text-primary hover:bg-primary/10" 
                      : "text-white hover:text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? "text-foreground hover:text-primary hover:bg-primary/10" 
                      : "text-white hover:text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant={isScrolled ? "professional" : "glass"}
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "hover:bg-primary/10" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden rounded-2xl mt-4 p-6 transition-all duration-300 ${
            isScrolled 
              ? "glass shadow-xl bg-white/90 backdrop-blur-xl border border-white/20" 
              : "bg-white/10 backdrop-blur-xl border border-white/20"
          }`}>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      isScrolled 
                        ? "text-foreground hover:text-primary hover:bg-primary/10" 
                        : "text-white hover:text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-left ${
                      isScrolled 
                        ? "text-foreground hover:text-primary hover:bg-primary/10" 
                        : "text-white hover:text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="pt-4 border-t border-white/20">
                <Button 
                  variant={isScrolled ? "professional" : "glass"}
                  size="sm"
                  onClick={() => {
                    scrollToSection("#contact");
                    setIsOpen(false);
                  }}
                  className="w-full group"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;