import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Award, DollarSign, TrendingUp } from "lucide-react";

const ConsumerDashboard = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Consumer Dashboard</h1>
          <p className="text-muted-foreground">
            Track your reviews and rewards
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Reviews Written</p>
                <p className="text-xl font-semibold">0</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Verified Reviews</p>
                <p className="text-xl font-semibold">0</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Earned</p>
                <p className="text-xl font-semibold">$0</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Empty State */}
        <Card className="p-16 text-center border-dashed">
          <div className="max-w-lg mx-auto">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/5 border border-accent/10 mb-8">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Start Earning Rewards</h2>
            
            <p className="text-sm text-muted-foreground mb-10">
              Write your first verified review and start earning cryptocurrency rewards. 
              Share your authentic experiences and help others make informed decisions.
            </p>

            <Button size="lg">Browse Featured Campaigns</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
