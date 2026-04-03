import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import StatusBadge, { type Status } from "@/components/StatusBadge";
import { FileText } from "lucide-react";

const mockTickets: { id: string; category: string; status: Status; date: string }[] = [
  { id: "SAM-2024-00127", category: "Road Damage", status: "In Progress", date: "2024-12-15" },
  { id: "SAM-2024-00098", category: "Water Leakage", status: "Verified", date: "2024-12-10" },
  { id: "SAM-2024-00065", category: "Garbage", status: "Resolved", date: "2024-11-28" },
  { id: "SAM-2024-00042", category: "Streetlight", status: "Submitted", date: "2024-11-20" },
  { id: "SAM-2024-00031", category: "Sanitation", status: "Assigned", date: "2024-11-15" },
];

const MyTickets = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-2xl px-4 py-6 animate-fade-in">
        <h2 className="mb-6 text-2xl font-bold text-primary">My Tickets</h2>
        <div className="space-y-3">
          {mockTickets.map(t => (
            <Link key={t.id} to={`/ticket/${t.id}`} className="govt-card flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-primary">{t.id}</p>
                <p className="text-sm text-muted-foreground">{t.category} · {t.date}</p>
              </div>
              <StatusBadge status={t.status} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyTickets;
