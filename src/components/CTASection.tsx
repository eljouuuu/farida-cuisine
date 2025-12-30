import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative overlay pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimatedSection className="max-w-3xl mx-auto text-center" animation="scale-in">
          <span className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Reserve Your Experience
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            Your Table Awaits
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-xl mx-auto">
            Premium ingredients. Thoughtful preparation. Elevated experience. 
            Tables fill quickly — reserve ahead.
          </p>

          {/* Quick Info */}
          <ScrollAnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-primary-foreground/80">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm">Open Daily: 12PM - 12AM</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm">New Cairo, Egypt</span>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* CTAs */}
          <ScrollAnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90 font-semibold uppercase tracking-widest">
                Book Your Table
              </Button>
<Button
  asChild
  variant="outline"
  size="xl"
  className="border-white text-white hover:bg-white hover:text-primary font-semibold uppercase tracking-widest"
>
  <a href="tel:+201234567890">
    Call Now
  </a>
</Button>

            </div>
          </ScrollAnimatedSection>
        </ScrollAnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
