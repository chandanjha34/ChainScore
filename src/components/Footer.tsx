import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/50 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-sm font-bold text-primary-foreground">O</span>
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">OneReview</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/for-consumers" className="text-muted-foreground hover:text-foreground transition-colors">
              Consumers
            </Link>
            <Link to="/for-brands" className="text-muted-foreground hover:text-foreground transition-colors">
              Brands
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2024 OneReview
          </p>
        </div>
      </div>
    </footer>
  );
};
