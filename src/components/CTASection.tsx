import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative overlay pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Reserve Your Experience
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 leading-tight">
            Your Table Awaits
          </h2>
          <p className="text-cream-muted text-lg mb-4 max-w-xl mx-auto">
            Premium ingredients. Thoughtful preparation. Elevated experience. 
            Tables fill quickly — reserve ahead.
          </p>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-cream-muted">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">Open Daily: 12PM - 12AM</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">New Cairo, Egypt</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              Book Your Table
            </Button>
            <Button variant="elegant" size="xl">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
