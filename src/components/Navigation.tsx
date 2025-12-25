import { useState } from "react";
import { Phone, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start">
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-wide">
              Farida Lebanon
            </span>
            <span className="text-[10px] md:text-xs text-primary tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Authentic Lebanese Cuisine
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#menu" className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
              Menu
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
              Experience
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
              Reviews
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+201234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <Button variant="gold" size="lg">
              Book Your Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="flex flex-col py-6 px-4 gap-4">
              <a 
                href="#menu" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Menu
              </a>
              <a 
                href="#experience" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Experience
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                Contact
              </a>
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
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