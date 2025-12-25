import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  return <nav className="fixed top-0 left-5 right-5 z-50 bg-background/100 backdrop-blur-md border-b border-border/50 op">
      <div className="container mx-auto px-6 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start">
            <span className="font-display text-2xl font-semibold text-foreground tracking-wide">
              Farida Lebanon
            </span>
            <span className="text-xs text-primary tracking-[0.3em] uppercase">
              Authentic Lebanese Cuisine
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+201234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <Button variant="gold" size="lg">
              Book Your Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>;
};
export default Navigation;