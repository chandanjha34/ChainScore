import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface CampaignCardProps {
  brandName: string;
  brandLogo: string;
  prizePool: string;
  reviewCount?: number;
  rating?: number;
}

export const CampaignCard = ({ brandName, brandLogo, prizePool, reviewCount = 0, rating = 0 }: CampaignCardProps) => {
  return (
    <Card className="p-5 hover:shadow-card-hover transition-all group">
      <div className="flex items-start gap-4 mb-5">
        <div className="h-14 w-14 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center flex-shrink-0">
          <img src={brandLogo} alt={`${brandName} logo`} className="h-10 w-10 object-contain" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2 tracking-tight">{brandName}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.floor(rating) ? "fill-accent text-accent" : "text-muted-foreground/30"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 border border-accent/10 rounded-lg p-4 mb-5">
        <p className="text-xs text-muted-foreground mb-1.5">Prize Pool</p>
        <p className="text-xl font-bold text-accent">{prizePool}</p>
      </div>

      <Button className="w-full" size="sm">
        <Award className="mr-2 h-4 w-4" />
        Write Review
      </Button>
    </Card>
  );
};
