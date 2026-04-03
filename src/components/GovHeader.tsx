import emblem from "@/assets/emblem.png";
import { Link } from "react-router-dom";

const GovHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="saffron-stripe" />
      <div className="container mx-auto flex items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={emblem} alt="Government Emblem" className="h-12 w-auto" />
          <div>
            <h1 className="text-xl font-bold tracking-wide text-primary-foreground md:text-2xl">
              SAMADHAAN
            </h1>
            <p className="text-xs text-primary-foreground/80 md:text-sm">
              Smart Civic Issue Reporting System
            </p>
          </div>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link to="/dashboard" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/my-tickets" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            My Tickets
          </Link>
          <Link to="/profile" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default GovHeader;
