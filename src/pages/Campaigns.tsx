import { CampaignCard } from "@/components/CampaignCard";

const allCampaigns = [
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
  {
    brandName: "SmartHome Devices",
    brandLogo: "/placeholder.svg",
    prizePool: "$6,000",
    reviewCount: 456,
    rating: 4.7,
  },
  {
    brandName: "GreenEnergy Co",
    brandLogo: "/placeholder.svg",
    prizePool: "$4,800",
    reviewCount: 198,
    rating: 4.9,
  },
  {
    brandName: "CloudStore Plus",
    brandLogo: "/placeholder.svg",
    prizePool: "$3,200",
    reviewCount: 289,
    rating: 4.4,
  },
];

const Campaigns = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Featured Campaigns
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Write verified reviews and earn cryptocurrency rewards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCampaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
