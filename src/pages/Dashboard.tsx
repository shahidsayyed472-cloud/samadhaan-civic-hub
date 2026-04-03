import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { FileText, MapPin, AlertTriangle, Trash2, Droplets, Lightbulb, ShowerHead, CircleDot, CheckCircle2, Clock } from "lucide-react";

const categories = [
  { label: "Garbage", icon: Trash2, color: "bg-saffron/10 text-saffron" },
  { label: "Road Damage", icon: AlertTriangle, color: "bg-destructive/10 text-destructive" },
  { label: "Water Leakage", icon: Droplets, color: "bg-primary/10 text-primary" },
  { label: "Streetlight", icon: Lightbulb, color: "bg-saffron/10 text-saffron" },
  { label: "Sanitation", icon: ShowerHead, color: "bg-accent/10 text-accent" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 animate-fade-in">
        <h2 className="mb-6 text-2xl font-bold text-primary">Welcome, Citizen 👋</h2>

        {/* Main Action Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Link to="/report" className="govt-card flex flex-col items-center gap-3 text-center hover:border-saffron">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron/10">
              <FileText className="h-7 w-7 text-saffron" />
            </div>
            <span className="font-semibold text-primary">Report an Issue</span>
          </Link>
          <Link to="/my-tickets" className="govt-card flex flex-col items-center gap-3 text-center hover:border-primary">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CircleDot className="h-7 w-7 text-primary" />
            </div>
            <span className="font-semibold text-primary">My Tickets</span>
          </Link>
          <Link to="/nearby" className="govt-card flex flex-col items-center gap-3 text-center hover:border-accent">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <MapPin className="h-7 w-7 text-accent" />
            </div>
            <span className="font-semibold text-primary">Nearby Issues</span>
          </Link>
        </div>

        {/* Categories */}
        <h3 className="mb-3 text-lg font-semibold text-primary">Quick Categories</h3>
        <div className="mb-8 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {categories.map(c => (
            <Link key={c.label} to="/report" className="govt-card flex flex-col items-center gap-2 py-4 text-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${c.color}`}>
                <c.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-foreground">{c.label}</span>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="govt-card flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron/10">
              <Clock className="h-6 w-6 text-saffron" />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Active Tickets</p>
            </div>
          </div>
          <div className="govt-card flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Resolved Tickets</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
