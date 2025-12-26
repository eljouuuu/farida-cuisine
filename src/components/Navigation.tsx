import { useState, useEffect } from "react";
import { Phone, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start">
            <span className={`font-display text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            }`}>
              Farida Lebanon
            </span>
            <span className={`text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white/80 drop-shadow-md"
            }`}>
              Authentic Lebanese Cuisine
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#menu" className={`text-sm hover:text-primary transition-colors tracking-wide uppercase ${
              isScrolled ? "text-muted-foreground" : "text-white/90 drop-shadow-md"
            }`}>
              Menu
            </a>
            <a href="#experience" className={`text-sm hover:text-primary transition-colors tracking-wide uppercase ${
              isScrolled ? "text-muted-foreground" : "text-white/90 drop-shadow-md"
            }`}>
              Experience
            </a>
            <a href="#testimonials" className={`text-sm hover:text-primary transition-colors tracking-wide uppercase ${
              isScrolled ? "text-muted-foreground" : "text-white/90 drop-shadow-md"
            }`}>
              Reviews
            </a>
            <a href="#contact" className={`text-sm hover:text-primary transition-colors tracking-wide uppercase ${
              isScrolled ? "text-muted-foreground" : "text-white/90 drop-shadow-md"
            }`}>
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+201234567890" className={`flex items-center gap-2 text-sm hover:text-primary transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-white/90 drop-shadow-md"
            }`}>
              <Phone className="w-4 h-4" />
            </a>
            <Button variant="gold" size="lg">
              Book Your Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-fade-in shadow-lg">
            <div className="flex flex-col py-6 px-4 gap-4">
              <a 
                href="#menu" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Menu
              </a>
              <a 
                href="#experience" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Experience
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Contact
              </a>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a href="tel:+201234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </div>
              <Button variant="gold" size="lg" className="w-full mt-2">
                Book Your Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
