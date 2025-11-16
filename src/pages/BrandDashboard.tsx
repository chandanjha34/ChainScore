import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, TrendingUp, Users, DollarSign, Star } from "lucide-react";

const BrandDashboard = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Brand Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your review campaigns and engage with customers
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Reviews</p>
                <p className="text-xl font-semibold">--</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Active Users</p>
                <p className="text-xl font-semibold">--</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Avg. Rating</p>
                <p className="text-xl font-semibold">--</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Budget Left</p>
                <p className="text-xl font-semibold">$--</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Empty State */}
        <Card className="p-16 text-center border-dashed">
          <div className="max-w-lg mx-auto">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 mb-8">
              <Plus className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Create Your First Campaign</h2>
            
            <p className="text-sm text-muted-foreground mb-10">
              Launch a review campaign to collect authentic feedback from verified customers. 
              Build trust and improve your brand reputation with AI-verified reviews.
            </p>

            <Button size="lg">Create Campaign</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BrandDashboard;
