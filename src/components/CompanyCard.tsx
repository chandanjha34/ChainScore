import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompanyCardProps {
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  description: string;
}

export const CompanyCard = ({ name, logo, rating, reviewCount, description }: CompanyCardProps) => {
  return (
    <Card className="p-5 hover:shadow-card-hover transition-all">
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center flex-shrink-0">
          <img src={logo} alt={`${name} logo`} className="h-10 w-10 object-contain" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2 tracking-tight">{name}</h3>
          <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
            </div>
            <span className="text-xs text-muted-foreground">{reviewCount} verified reviews</span>
          </div>
          
          <Button size="sm">View Reviews</Button>
        </div>
      </div>
    </Card>
  );
};
