import { useEffect, useState } from "react";

const PageReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Start reveal animation after a brief delay
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 1500);

    // Hide the overlay completely after animation
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 9000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Left curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-primary transition-transform duration-[1400ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealed ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      {/* Right curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-primary transition-transform duration-[1400ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealed ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {/* Center logo/text */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isRevealed ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground italic">
          Farida
        </h2>
      </div>
    </div>
  );
};

export default PageReveal;
