import dishFattoush from "@/assets/dish-fattoush.jpg";
import dishGrills from "@/assets/dish-grills.jpg";
import dishHummus from "@/assets/dish-hummus.jpg";
import dishKunafa from "@/assets/dish-kunafa.jpg";

const dishes = [
  {
    name: "Famous Fattoush",
    description: "Crispy bread dome, fresh garden vegetables, tangy sumac dressing, pomegranate jewels",
    image: dishFattoush,
  },
  {
    name: "Signature Hummus",
    description: "Silky smooth, tahini perfection, golden olive oil, warm artisan bread",
    image: dishHummus,
  },
  {
    name: "Mixed Grills",
    description: "Premium lamb chops, tender kebabs, perfectly charred, aromatic spices",
    image: dishGrills,
  },
  {
    name: "Golden Kunafa",
    description: "Crispy vermicelli, stretchy cheese, orange blossom syrup, crushed pistachios",
    image: dishKunafa,
  },
];

const SignatureDishes = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Our Signature
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Dishes That Define Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fresh, bold flavors. Perfectly balanced. Beautifully plated. 
            Each dish tells a story of Lebanese tradition.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div 
              key={dish.name}
              className="group relative overflow-hidden bg-card rounded-lg border border-border opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-2xl text-white mb-2">
                  {dish.name}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dish.description}
                </p>
              </div>

              {/* Teal accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors uppercase tracking-widest text-sm font-medium group"
          >
            Explore Full Menu
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
