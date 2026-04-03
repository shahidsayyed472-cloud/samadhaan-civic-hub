import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, LogOut, Edit } from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-lg px-4 py-6 animate-fade-in">
        <h2 className="mb-6 text-2xl font-bold text-primary">My Profile</h2>

        <div className="govt-card flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <User className="h-10 w-10 text-primary" />
          </div>

          <div className="w-full space-y-4">
            <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Full Name</p>
                <p className="text-sm font-medium text-foreground">Rajesh Kumar</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">rajesh.kumar@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-3">
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
            <Button asChild variant="outline" className="flex-1 border-destructive text-destructive hover:bg-destructive/10">
              <Link to="/">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
