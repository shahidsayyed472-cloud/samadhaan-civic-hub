import { useState } from "react";
import Layout from "@/components/Layout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StatusBadge, { type Status } from "@/components/StatusBadge";
import { MapPin } from "lucide-react";

const mockPins: { id: string; category: string; status: Status; location: string; top: string; left: string }[] = [
  { id: "SAM-2024-00127", category: "Road Damage", status: "In Progress", location: "Sector 21", top: "30%", left: "40%" },
  { id: "SAM-2024-00098", category: "Water Leakage", status: "Verified", location: "Block C", top: "55%", left: "65%" },
  { id: "SAM-2024-00065", category: "Garbage", status: "Resolved", location: "Main Market", top: "70%", left: "25%" },
  { id: "SAM-2024-00042", category: "Streetlight", status: "Submitted", location: "Park Road", top: "20%", left: "75%" },
];

const NearbyIssues = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [catFilter, setCatFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = mockPins.filter(p => {
    if (catFilter !== "all" && p.category !== catFilter) return false;
    if (statusFilter !== "all" && p.status !== statusFilter) return false;
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 animate-fade-in">
        <h2 className="mb-4 text-2xl font-bold text-primary">Nearby Issues</h2>

        {/* Filters */}
        <div className="mb-4 flex gap-3">
          <Select value={catFilter} onValueChange={setCatFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Road Damage">Road Damage</SelectItem>
              <SelectItem value="Water Leakage">Water Leakage</SelectItem>
              <SelectItem value="Garbage">Garbage</SelectItem>
              <SelectItem value="Streetlight">Streetlight</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Submitted">Submitted</SelectItem>
              <SelectItem value="Verified">Verified</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mock Map */}
        <div className="govt-card relative h-[500px] overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-6xl font-bold text-foreground">MAP</span>
          </div>
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          {filtered.map(pin => (
            <button
              key={pin.id}
              onClick={() => setSelected(selected === pin.id ? null : pin.id)}
              className="absolute z-10 transition-transform hover:scale-110"
              style={{ top: pin.top, left: pin.left }}
            >
              <MapPin className="h-8 w-8 text-destructive drop-shadow-md" fill="hsl(var(--destructive))" />
            </button>
          ))}

          {/* Preview Card */}
          {selected && (() => {
            const pin = mockPins.find(p => p.id === selected);
            if (!pin) return null;
            return (
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-lg bg-card p-4 shadow-lg border sm:left-auto sm:right-4 sm:w-72">
                <p className="font-semibold text-primary">{pin.id}</p>
                <p className="text-sm text-muted-foreground">{pin.category} · {pin.location}</p>
                <div className="mt-2">
                  <StatusBadge status={pin.status} />
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </Layout>
  );
};

export default NearbyIssues;
