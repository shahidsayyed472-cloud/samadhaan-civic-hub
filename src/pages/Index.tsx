import { Link } from "react-router-dom";
import emblem from "@/assets/emblem.png";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-2 bg-saffron" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" />
      </div>

      <div className="z-10 flex flex-col items-center gap-6 animate-fade-in px-4 text-center">
        <img src={emblem} alt="Government of India Emblem" className="h-28 w-auto drop-shadow-lg" />

        <div className="saffron-stripe w-32 rounded-full" />

        <h1 className="text-4xl font-bold tracking-wider text-primary-foreground md:text-5xl">
          SAMADHAAN
        </h1>
        <p className="max-w-md text-sm text-primary-foreground/70 md:text-base">
          Citizen Support & Civic Issue Resolution Platform
        </p>

        <div className="mt-4 flex gap-4">
          <Button asChild size="lg" className="bg-saffron text-primary-foreground hover:bg-saffron/90 font-semibold px-8">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
            <Link to="/signup">Create Account</Link>
          </Button>
        </div>

        <p className="mt-8 text-xs text-primary-foreground/50">
          A Public Service Initiative — Government of India
        </p>
      </div>
    </div>
  );
};

export default Index;
