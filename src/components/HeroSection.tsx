import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Farida Lebanon - Luxury Lebanese Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-up">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-cream-muted tracking-wide">
              Loved by thousands of guests
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 leading-tight opacity-0 animate-fade-up delay-100">
            Authentic Lebanese
            <br />
            Cuisine.{" "}
            <span className="italic text-primary">Elevated.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream-muted max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
            An award-loved Lebanese restaurant known for unforgettable flavors, 
            beautiful presentation, and exceptional hospitality.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up delay-300">
            <Button variant="gold" size="xl">
              Book Your Table
            </Button>
            <Button variant="goldOutline" size="xl">
              View Menu
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 opacity-0 animate-fade-up delay-400">
            <div className="flex items-center gap-2 text-sm text-cream-muted">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Premium Dining Experience
            </div>
            <div className="flex items-center gap-2 text-sm text-cream-muted">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Authentic Lebanese Recipes
            </div>
            <div className="flex items-center gap-2 text-sm text-cream-muted">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Garden Atmosphere
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
