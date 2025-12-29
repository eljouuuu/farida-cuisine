import { useEffect, useState } from "react";

const PageReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasSeenReveal, setHasSeenReveal] = useState(false);

  useEffect(() => {
    // Check if user has already seen the reveal
    const seen = sessionStorage.getItem("hasSeenPageReveal");
    if (seen) {
      setHasSeenReveal(true);
      setIsHidden(true);
      return;
    }

    // Mark as seen
    sessionStorage.setItem("hasSeenPageReveal", "true");

    // Start reveal animation after a brief delay
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 2200);

    // Hide the overlay completely after animation
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 5000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden || hasSeenReveal) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Left curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-primary transition-transform duration-[5000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealed ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      {/* Right curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-primary transition-transform duration-[5000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealed ? "translate-x-full" : "translate-x-0"
        }`}
      />
      
      {/* Decorative shapes */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          isRevealed ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Corner ornaments */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-primary-foreground/30" />
        <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-primary-foreground/30" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-primary-foreground/30" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-primary-foreground/30" />
        
        {/* Animated circles */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-primary-foreground/10 animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-primary-foreground/15 animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-primary-foreground/20 animate-[pulse_3s_ease-in-out_infinite_1s]" />
        
        {/* Diamond shape */}
        <div className="absolute w-16 h-16 border border-primary-foreground/20 rotate-45 animate-[spin_20s_linear_infinite]" />
        
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary-foreground/30 animate-[bounce_2s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary-foreground/25 animate-[bounce_2.5s_ease-in-out_infinite_0.3s]" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary-foreground/20 animate-[bounce_2s_ease-in-out_infinite_0.6s]" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary-foreground/30 animate-[bounce_2.2s_ease-in-out_infinite_0.9s]" />
      </div>

      {/* Center logo/text */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-2000 ${
          isRevealed ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Decorative line above */}
        <div className="w-16 h-px bg-primary-foreground/40 mb-6" />
        
        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground italic">
          Farida
        </h2>
        <span className="font-sans text-sm md:text-base text-primary-foreground/80 tracking-[0.3em] uppercase mt-2">
          Cuisine
        </span>
        
        {/* Decorative line below */}
        <div className="w-16 h-px bg-primary-foreground/40 mt-6" />
      </div>
    </div>
  );
};

export default PageReveal;
