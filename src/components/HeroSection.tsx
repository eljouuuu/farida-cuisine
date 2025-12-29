import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("hasSeenHeroAnimation");
    if (seen) {
      setHasAnimated(true);
    } else {
      sessionStorage.setItem("hasSeenHeroAnimation", "true");
    }
  }, []);

  const getAnimationClass = (delay: string) => {
    if (hasAnimated) {
      return "opacity-100";
    }
    return `opacity-0 animate-fade-up [animation-delay:${delay}] [animation-fill-mode:forwards]`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Farida Lebanon - Luxury Lebanese Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Rating Badge */}
          <div className={`inline-flex items-center gap-2 mb-8 ${getAnimationClass("2500ms")}`}>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <span className="text-sm text-white/80 tracking-wide">
              Loved by thousands of guests
            </span>
          </div>

          {/* Headline */}
          <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight ${getAnimationClass("2700ms")}`}>
            Authentic Lebanese
            <br />
            <span className="italic text-primary-foreground">Cuisine.</span>
          </h1>

          {/* Subheadline */}
          <p className={`text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed ${getAnimationClass("2900ms")}`}>
            An award-loved Lebanese restaurant known for unforgettable flavors, 
            beautiful presentation, and exceptional hospitality.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 ${getAnimationClass("3100ms")}`}>
            <Button variant="gold" size="xl" onClick={() => navigate("/booking")}>
              Book Your Table
            </Button>
            <Button variant="goldOutline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              View Menu
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className={`flex flex-wrap gap-6 ${getAnimationClass("3300ms")}`}>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-white" />
              Premium Dining Experience
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-white" />
              Authentic Lebanese Recipes
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-white" />
              Garden Atmosphere
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
