import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
          Page Not Found
        </span>
        <h1 className="mb-4 font-display text-8xl text-foreground">404</h1>
        <p className="mb-8 text-xl text-cream-muted max-w-md mx-auto">
          The page you're looking for seems to have wandered off. Let us guide you back.
        </p>
        <Button variant="gold" size="lg" asChild>
          <a href="/">Return to Farida Lebanon</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
