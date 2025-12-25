import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Real Lebanese taste that brought back memories of home. The fattoush alone is worth the trip. Absolutely exceptional.",
    author: "Sarah M.",
    role: "Food Enthusiast",
    rating: 5,
  },
  {
    text: "Hands down the best Lebanese food in Cairo. The lamb chops were cooked to perfection, and the service was impeccable.",
    author: "Ahmed K.",
    role: "Regular Guest",
    rating: 5,
  },
  {
    text: "Amazing service, beautiful presentation, unforgettable flavors. We celebrated our anniversary here and it was magical.",
    author: "Maria & John",
    role: "Celebrating Couple",
    rating: 5,
  },
  {
    text: "A place that feels like Lebanon. The garden ambiance, the food, the hospitality — everything was perfect.",
    author: "Nadia L.",
    role: "Lebanese Expat",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-charcoal-light to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Guest Experiences
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Words From Our Guests
          </h2>
          <p className="text-cream-muted max-w-2xl mx-auto text-lg">
            Hundreds of 5-star experiences. Loved by locals, expats, and visitors alike.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-lg p-8 md:p-12 shadow-elegant overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/20" />

            {/* Content with animation */}
            <div 
              className={`relative z-10 transition-all duration-300 ease-out ${
                isAnimating 
                  ? direction === "right" 
                    ? "opacity-0 -translate-x-8" 
                    : "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-foreground font-medium">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-cream-muted text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 absolute bottom-8 right-8 md:bottom-12 md:right-12">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted w-2 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
