import { Users, Music, Star, Utensils } from "lucide-react";
import ambianceGarden from "@/assets/ambiance-garden.jpg";

const features = [
  {
    icon: Users,
    title: "Warm Hospitality",
    description: "Professional, multilingual staff who treat every guest like family",
  },
  {
    icon: Music,
    title: "Perfect Ambiance",
    description: "Relaxed music, elegant setting, comfortable conversations",
  },
  {
    icon: Utensils,
    title: "Garden Dining",
    description: "Beautiful outdoor terrace under the stars with lush greenery",
  },
  {
    icon: Star,
    title: "Celebrations",
    description: "Perfect for families, friends, and special occasions",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src={ambianceGarden} 
                alt="Farida Lebanon Garden Terrace - Outdoor Dining Experience"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-secondary p-6 rounded-sm shadow-elegant max-w-xs hidden lg:block">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-cream italic font-display text-lg">
                "A place that feels like Lebanon."
              </p>
              <p className="text-cream-muted text-sm mt-2">— Loyal Guest</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="opacity-0 animate-fade-up delay-200" style={{ animationFillMode: 'forwards' }}>
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
              The Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              More Than a Meal.
              <br />
              <span className="italic text-primary">A Destination.</span>
            </h2>
            <p className="text-cream-muted text-lg mb-10 leading-relaxed">
              At Farida Lebanon, every detail is designed to transport you. 
              From the moment you enter, you're enveloped in warm Lebanese 
              hospitality, elegant ambiance, and the intoxicating aromas 
              of authentic cuisine.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-cream-muted text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
