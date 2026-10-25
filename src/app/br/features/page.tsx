import Link from "next/link";
import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const features = [
  { name: "Bonus Buy", count: 45 },
  { name: "Free Spins", count: 380 },
  { name: "Megaways", count: 120 },
  { name: "Hold and Win", count: 85 },
  { name: "Cluster Pays", count: 62 },
  { name: "Cascading Reels", count: 78 },
  { name: "Expanding Wilds", count: 95 },
  { name: "Sticky Wilds", count: 48 },
  { name: "Multipliers", count: 210 },
  { name: "Scatter Symbols", count: 340 },
  { name: "Wild Symbols", count: 290 },
  { name: "Jackpot", count: 35 },
  { name: "Progressive Jackpot", count: 18 },
  { name: "Gamble Feature", count: 150 },
  { name: "Autoplay", count: 420 },
  { name: "Turbo Spin", count: 180 },
  { name: "Paylines Fixed", count: 250 },
  { name: "Ways to Win", count: 190 },
  { name: "Re-spin Feature", count: 72 },
  { name: "Pick Me Bonus", count: 55 },
  { name: "Wheel of Fortune", count: 30 },
  { name: "Mini Game", count: 68 },
  { name: "Level Up", count: 25 },
  { name: "Random Rewards", count: 42 },
];

export const dynamic = "force-dynamic";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Jogos por Recurso</h1>
          <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Link
                key={feature.name}
                href={`/br/features/${feature.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/`}
                className="bg-white rounded-[16px] p-5 no-underline text-[#333] shadow-[rgba(0,0,0,0.08)_0px_2px_8px] hover:shadow-[rgba(81,112,255,0.15)_0px_4px_16px] hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-bold text-base mb-1 group-hover:text-[#5170ff] transition-colors">
                  {feature.name}
                </h3>
                <p className="text-sm text-[#888] m-0">{feature.count} Jogos</p>
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
      <MobileBottomNav />
      <LiveChat />
    </div>
  );
}