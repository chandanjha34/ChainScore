import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Shield, DollarSign, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CampaignCard } from "@/components/CampaignCard";
import { CompanyCard } from "@/components/CompanyCard";

const dummyCompanies = [
  {
    name: "Google",
    logo: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 1250,
    description: "Leading technology company specializing in search, cloud computing, and artificial intelligence"
  },
  {
    name: "Linear",
    logo: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 890,
    description: "Modern project management tool for software teams with streamlined workflows"
  },
  {
    name: "Ethereum",
    logo: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 2100,
    description: "Decentralized blockchain platform for smart contracts and decentralized applications"
  },
  {
    name: "Solana",
    logo: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 1680,
    description: "High-performance blockchain supporting fast and scalable decentralized applications"
  },
  {
    name: "Microsoft",
    logo: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 3200,
    description: "Global technology leader in software, cloud services, and enterprise solutions"
  },
];

const featuredCampaigns = [
  {
    brandName: "TechGadgets Pro",
    brandLogo: "/placeholder.svg",
    prizePool: "$5,000",
    reviewCount: 234,
    rating: 4.5,
  },
  {
    brandName: "EcoClean Solutions",
    brandLogo: "/placeholder.svg",
    prizePool: "$3,500",
    reviewCount: 189,
    rating: 4.8,
  },
  {
    brandName: "FitLife Nutrition",
    brandLogo: "/placeholder.svg",
    prizePool: "$4,200",
    reviewCount: 312,
    rating: 4.6,
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof dummyCompanies>([]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filtered = dummyCompanies.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Find Trustworthy
            <span className="block text-primary mt-2">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover verified reviews from real users. Search for any company or product.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10 h-11 text-base shadow-sm"
                />
              </div>
              <Button size="lg" onClick={handleSearch} className="px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-6">
              Search Results ({searchResults.length})
            </h2>
            <div className="space-y-4">
              {searchResults.map((company, index) => (
                <CompanyCard key={index} {...company} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="h-14 w-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-6">
                <Search className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Search</h3>
              <p className="text-sm text-muted-foreground">
                Find any company or product
              </p>
            </div>

            <div className="text-center">
              <div className="h-14 w-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Read Verified Reviews</h3>
              <p className="text-sm text-muted-foreground">
                Access AI-verified authentic reviews
              </p>
            </div>

            <div className="text-center">
              <div className="h-14 w-14 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Get crypto rewards for reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Trusting Us */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide">
            Brands Trusting OneReview
          </h3>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-secondary rounded flex items-center justify-center">
                <Star className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">Featured Campaigns</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.brandName} {...campaign} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
