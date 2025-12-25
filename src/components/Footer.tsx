import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-display text-2xl font-semibold text-foreground tracking-wide">
                Farida Lebanon
              </span>
              <p className="text-xs text-primary tracking-[0.3em] uppercase mt-1">
                Authentic Lebanese Cuisine
              </p>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed">
              Where Lebanese flavor meets modern elegance. 
              A destination for those who appreciate 
              exceptional taste and warm hospitality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+201234567890" className="flex items-center gap-3 text-cream-muted hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +20 123 456 7890
              </a>
              <div className="flex items-start gap-3 text-cream-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Downtown New Cairo<br />
                  Cairo, Egypt
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-6">Hours</h3>
            <div className="space-y-3 text-cream-muted text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>12PM - 12AM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>11AM - 1AM</span>
              </div>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-cream-muted text-sm mt-4">
              @faridalebanon
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-muted text-sm">
            © 2025 Farida Lebanon. All rights reserved.
          </p>
          <div className="flex gap-6 text-cream-muted text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
