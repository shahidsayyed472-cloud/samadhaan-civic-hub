import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import StatusTimeline from "@/components/StatusTimeline";
import StatusBadge from "@/components/StatusBadge";
import { MapPin, Calendar, Tag, AlertTriangle, MessageSquare } from "lucide-react";

const TicketDetails = () => {
  const { ticketId } = useParams();

  return (
    <Layout>
      <div className="container mx-auto max-w-2xl px-4 py-6 animate-fade-in">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">{ticketId}</h2>
          <StatusBadge status="In Progress" />
        </div>

        {/* Issue Image Placeholder */}
        <div className="govt-card mb-4 flex h-48 items-center justify-center bg-muted">
          <span className="text-sm text-muted-foreground">Issue Image</span>
        </div>

        {/* Details Grid */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="govt-card flex items-center gap-3">
            <MapPin className="h-5 w-5 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">Sector 21, New Delhi</p>
            </div>
          </div>
          <div className="govt-card flex items-center gap-3">
            <Tag className="h-5 w-5 text-saffron" />
            <div>
              <p className="text-xs text-muted-foreground">Category</p>
              <p className="text-sm font-medium text-foreground">Road Damage</p>
            </div>
          </div>
          <div className="govt-card flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Submitted</p>
              <p className="text-sm font-medium text-foreground">15 Dec 2024, 10:30 AM</p>
            </div>
          </div>
          <div className="govt-card flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <div>
              <p className="text-xs text-muted-foreground">Priority</p>
              <p className="text-sm font-medium text-foreground">High</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="govt-card mb-6">
          <h3 className="mb-2 font-semibold text-primary">Description</h3>
          <p className="text-sm text-muted-foreground">
            Large pothole on the main road near the market area causing traffic congestion and posing risk to vehicles and pedestrians.
          </p>
        </div>

        {/* Timeline */}
        <div className="govt-card mb-6">
          <h3 className="mb-4 font-semibold text-primary">Status Timeline</h3>
          <StatusTimeline currentStep={3} />
        </div>

        {/* Admin Comments */}
        <div className="govt-card">
          <h3 className="mb-3 font-semibold text-primary flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> Authority Comments
          </h3>
          <div className="space-y-3">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs text-muted-foreground">Municipal Engineer — 16 Dec 2024</p>
              <p className="mt-1 text-sm text-foreground">Issue verified. Repair crew assigned to location.</p>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs text-muted-foreground">Ward Officer — 17 Dec 2024</p>
              <p className="mt-1 text-sm text-foreground">Work scheduled for 20 Dec 2024. Expected completion within 3 days.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TicketDetails;
