import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Building2 } from "lucide-react";

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState<"consumer" | "brand" | null>(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role: "consumer" | "brand") => {
    setSelectedRole(role);
    // Simulate authentication
    setTimeout(() => {
      if (role === "consumer") {
        navigate("/consumer-dashboard");
      } else {
        navigate("/brand-dashboard");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-hero">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary mx-auto mb-6 shadow-sm">
            <span className="text-2xl font-bold text-primary-foreground">O</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Welcome to OneReview</h1>
          <p className="text-muted-foreground">
            Select your role to continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="p-8 cursor-pointer hover:shadow-card-hover transition-all hover:scale-[1.02] border-border/50"
            onClick={() => handleRoleSelect("consumer")}
          >
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3 tracking-tight">Consumer</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Read verified reviews and earn rewards for authentic experiences
              </p>
              <Button size="lg" className="w-full">
                Continue
              </Button>
            </div>
          </Card>

          <Card 
            className="p-8 cursor-pointer hover:shadow-card-hover transition-all hover:scale-[1.02] border-border/50"
            onClick={() => handleRoleSelect("brand")}
          >
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/5 border border-accent/10 mb-6">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-3 tracking-tight">Brand</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Create campaigns and get authentic feedback from verified customers
              </p>
              <Button size="lg" className="w-full" variant="outline">
                Continue
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
