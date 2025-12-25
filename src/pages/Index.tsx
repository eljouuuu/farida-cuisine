import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SignatureDishes from "@/components/SignatureDishes";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Farida Lebanon | Authentic Lebanese Cuisine in New Cairo</title>
        <meta 
          name="description" 
          content="Experience authentic Lebanese cuisine at Farida Lebanon - Cairo's premier Lebanese restaurant. Award-loved dining with exceptional flavors, beautiful presentation, and warm hospitality. Book your table today." 
        />
        <meta name="keywords" content="Lebanese restaurant, Cairo restaurant, New Cairo dining, authentic Lebanese food, premium dining Cairo, hummus, fattoush, mixed grill, Lebanese cuisine" />
        <link rel="canonical" href="https://faridalebanon.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Farida Lebanon | Authentic Lebanese Cuisine" />
        <meta property="og:description" content="An award-loved Lebanese restaurant known for unforgettable flavors, beautiful presentation, and exceptional hospitality." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="en_EG" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Farida Lebanon",
            "description": "Authentic Lebanese cuisine with exceptional flavors and warm hospitality",
            "servesCuisine": "Lebanese",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New Cairo",
              "addressCountry": "Egypt"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "500"
            },
            "openingHours": [
              "Mo-Fr 12:00-00:00",
              "Sa-Su 11:00-01:00"
            ]
          })}
        </script>
      </Helmet>

      <main className="bg-background min-h-screen">
        <Navigation />
        <HeroSection />
        <SignatureDishes />
        <ExperienceSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
