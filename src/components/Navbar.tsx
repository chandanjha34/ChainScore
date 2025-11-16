import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary shadow-sm group-hover:shadow-glow transition-all">
            <span className="text-base font-bold text-primary-foreground">O</span>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">OneReview</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/campaigns" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Campaigns
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link to="/brands" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Brands
          </Link>
        </div>

        <Button asChild size="sm" className="shadow-sm">
          <Link to="/auth">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};
