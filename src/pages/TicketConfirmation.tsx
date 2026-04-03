import { useParams, Link } from "react-router-dom";
import emblem from "@/assets/emblem.png";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const TicketConfirmation = () => {
  const { ticketId } = useParams();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-fade-in text-center">
        <div className="govt-card flex flex-col items-center gap-5 py-10">
          <CheckCircle2 className="h-20 w-20 text-accent" />
          <img src={emblem} alt="Emblem" className="h-14 w-auto" loading="lazy" />
          <h2 className="text-xl font-bold text-primary">Issue Submitted Successfully!</h2>
          <p className="text-sm text-muted-foreground">
            Your issue has been successfully submitted
          </p>
          <div className="rounded-lg bg-muted px-6 py-3">
            <p className="text-xs text-muted-foreground">Ticket ID</p>
            <p className="text-lg font-bold text-primary">{ticketId}</p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to={`/ticket/${ticketId}`}>Track Ticket</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/dashboard">Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
