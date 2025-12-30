import { useEffect, useState } from "react";

const PageReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 1500); // was 2200

    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 6000); // was 9000
    
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      
      {/* Bottom → Top reveal (shorter) */}
      <div
        className={`absolute inset-0 bg-primary transition-transform
        duration-[4500ms]
        ease-[cubic-bezier(0.77,0,0.18,1)]
        ${isRevealed ? "-translate-y-full" : "translate-y-0"}`}
      />

      {/* Decorative shapes */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000
        ${isRevealed ? "opacity-0" : "opacity-100"}`}
      >
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-primary-foreground/30" />
        <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-primary-foreground/30" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-primary-foreground/30" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-primary-foreground/30" />

        <div className="absolute w-[500px] h-[500px] rounded-full border border-primary-foreground/10 animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-primary-foreground/15 animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-primary-foreground/20 animate-[pulse_3s_ease-in-out_infinite_1s]" />
        <div className="absolute w-16 h-16 border border-primary-foreground/20 rotate-45 animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Center logo/text */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1800
        ${isRevealed ? "opacity-0" : "opacity-100"}`}
      >
        <div className="w-16 h-px bg-primary-foreground/40 mb-6" />

        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground italic">
          Farida
        </h2>

        <span className="font-sans text-sm md:text-base text-primary-foreground/80 tracking-[0.3em] uppercase mt-2">
          Cuisine
        </span>

        <div className="w-16 h-px bg-primary-foreground/40 mt-6" />
      </div>
    </div>
  );
};

export default PageReveal;
