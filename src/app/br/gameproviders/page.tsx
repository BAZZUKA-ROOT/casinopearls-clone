import Link from "next/link";
import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const providers = [
  { name: "Booming Games", count: 151 },
  { name: "Betsoft", count: 129 },
  { name: "Bgaming", count: 94 },
  { name: "Microgaming", count: 89 },
  { name: "Pragmatic Play", count: 78 },
  { name: "Playson", count: 67 },
  { name: "PG Soft", count: 65 },
  { name: "1x2 Gaming", count: 64 },
  { name: "Play'n Go", count: 45 },
  { name: "Booongo BNG", count: 44 },
  { name: "Playtech", count: 37 },
  { name: "Netent", count: 23 },
  { name: "Jogos Mystake", count: 22 },
  { name: "Stake Originals", count: 22 },
  { name: "Habanero", count: 20 },
  { name: "ISoftBet", count: 19 },
  { name: "Wazdan", count: 18 },
  { name: "Novomatic", count: 15 },
  { name: "Realtime Gaming", count: 13 },
  { name: "EGT Digital", count: 12 },
  { name: "Hacksaw Gaming", count: 11 },
  { name: "Red Tiger", count: 11 },
  { name: "Spribe", count: 11 },
  { name: "Galaxsys", count: 10 },
  { name: "Evolution Gaming", count: 8 },
  { name: "IGT", count: 8 },
  { name: "Nolimit City", count: 8 },
  { name: "Big Time Gaming", count: 7 },
  { name: "Relax Gaming", count: 7 },
  { name: "Yggdrasil", count: 7 },
  { name: "Onlyplay", count: 6 },
  { name: "Push Gaming", count: 6 },
  { name: "Blueprint Gaming", count: 5 },
  { name: "Inspired", count: 5 },
  { name: "ELK Studios", count: 4 },
  { name: "Quickspin", count: 4 },
  { name: "Thunderkick", count: 4 },
  { name: "WMS", count: 4 },
  { name: "TaDa Gaming", count: 3 },
  { name: "Endorphina", count: 2 },
  { name: "InOut Games", count: 2 },
  { name: "KA Gaming", count: 2 },
  { name: "NetGame Entertainment", count: 2 },
  { name: "Scientific Games", count: 2 },
  { name: "Stakelogic", count: 2 },
  { name: "WorldMatch", count: 2 },
  { name: "Funky Games", count: 1 },
  { name: "SmartSoft Gaming", count: 1 },
];

export const dynamic = "force-dynamic";

export default function GameProvidersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Softwares de Cassino Online</h1>
          <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
            {providers.map((provider) => (
              <Link
                key={provider.name}
                href={`/br/gameproviders/${provider.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/`}
                className="bg-white rounded-[16px] p-5 no-underline text-[#333] shadow-[rgba(0,0,0,0.08)_0px_2px_8px] hover:shadow-[rgba(81,112,255,0.15)_0px_4px_16px] hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-bold text-base mb-1 group-hover:text-[#5170ff] transition-colors">
                  {provider.name}
                </h3>
                <p className="text-sm text-[#888] m-0">{provider.count} Jogos</p>
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