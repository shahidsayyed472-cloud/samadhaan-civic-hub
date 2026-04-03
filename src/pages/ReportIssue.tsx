import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin } from "lucide-react";

const categories = ["Garbage", "Road Damage", "Water Leakage", "Streetlight", "Sanitation", "Other"];

const ReportIssue = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `SAM-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 99999)).padStart(5, "0")}`;
    navigate(`/ticket-confirmation/${ticketId}`);
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-lg px-4 py-6 animate-fade-in">
        <h2 className="mb-6 text-2xl font-bold text-primary">Report an Issue</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Photo Upload */}
          <div className="space-y-2">
            <Label>Upload Photo</Label>
            <label className="govt-card flex cursor-pointer flex-col items-center gap-2 border-dashed py-8">
              <Camera className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {photo ? photo.name : "Tap to upload or take photo"}
              </span>
              <input type="file" accept="image/*" capture="environment" className="hidden" onChange={e => setPhoto(e.target.files?.[0] || null)} />
            </label>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label>Location</Label>
            <div className="govt-card flex items-center gap-3 py-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Auto-detecting location…</span>
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Issue Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Describe the issue in detail…" rows={4} value={description} onChange={e => setDescription(e.target.value)} />
          </div>

          {/* Timestamp */}
          <div className="space-y-2">
            <Label>Timestamp</Label>
            <Input readOnly value={new Date().toLocaleString("en-IN")} className="bg-muted" />
          </div>

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" size="lg">
            Submit Issue
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default ReportIssue;
