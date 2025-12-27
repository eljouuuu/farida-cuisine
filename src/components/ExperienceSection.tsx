import { Users, Music, Star, Utensils } from "lucide-react";
import ambianceGarden from "@/assets/ambiance-garden.jpg";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

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
    <section id="experience" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <ScrollAnimatedSection animation="slide-right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={ambianceGarden} 
                  alt="Farida Lebanon Garden Terrace - Outdoor Dining Experience"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-lg shadow-elegant max-w-xs hidden lg:block">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                  ))}
                </div>
                <p className="text-primary-foreground italic font-display text-lg">
                  "A place that feels like Lebanon."
                </p>
                <p className="text-primary-foreground/80 text-sm mt-2">— Loyal Guest</p>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Content Side */}
          <ScrollAnimatedSection animation="slide-left" delay={200}>
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
              The Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              More Than a Meal.
              <br />
              <span className="italic text-primary">A Destination.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              At Farida Lebanon, every detail is designed to transport you. 
              From the moment you enter, you're enveloped in warm Lebanese 
              hospitality, elegant ambiance, and the intoxicating aromas 
              of authentic cuisine.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollAnimatedSection 
                  key={feature.title}
                  animation="fade-up"
                  delay={300 + index * 100}
                >
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-border">
                      <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimatedSection>
              ))}
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
