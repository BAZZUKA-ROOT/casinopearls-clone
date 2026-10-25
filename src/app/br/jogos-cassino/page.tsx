import Link from "next/link";
import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const categories = [
  { title: "Caça-Níqueis", count: 896, href: "/br/jogos-cassino/caca-niqueis/" },
  { title: "Slots Grátis", count: 590, href: "/br/jogos-cassino/slots-gratis/" },
  { title: "Slots Populares", count: 228, href: "/br/jogos-cassino/slots-populares/" },
  { title: "Slots Recomendados", count: 198, href: "/br/jogos-cassino/slots-recomendados/" },
  { title: "Jogos de Mesa", count: 137, href: "/br/jogos-cassino/jogos-de-mesa/" },
  { title: "Movel Slots", count: 99, href: "/br/jogos-cassino/movel-slots/" },
  { title: "Jogos de Cartas", count: 82, href: "/br/jogos-cassino/jogos-de-cartas/" },
  { title: "Mini Games", count: 66, href: "/br/jogos-cassino/mini-games/" },
  { title: "Blackjack", count: 53, href: "/br/jogos-cassino/blackjack/" },
  { title: "Crash Games", count: 52, href: "/br/jogos-cassino/crash-games/" },
  { title: "Blackjack Grátis", count: 50, href: "/br/jogos-cassino/blackjack-gratis/" },
  { title: "Roleta", count: 48, href: "/br/jogos-cassino/roleta/" },
  { title: "Roleta Grátis", count: 47, href: "/br/jogos-cassino/roleta-gratis/" },
  { title: "Novos Slots", count: 36, href: "/br/jogos-cassino/novos-slots/" },
  { title: "Slots Desbloqueados", count: 32, href: "/br/jogos-cassino/slots-desbloqueados/" },
  { title: "Video Poker", count: 25, href: "/br/jogos-cassino/video-poker/" },
  { title: "Cassino ao Vivo", count: 18, href: "/br/jogos-cassino/cassino-ao-vivo/" },
  { title: "Raspadinha Online", count: 17, href: "/br/jogos-cassino/raspadinha/" },
  { title: "VIP Slots", count: 17, href: "/br/jogos-cassino/vip-slots/" },
  { title: "Loteria", count: 16, href: "/br/jogos-cassino/loteria/" },
  { title: "Poker", count: 16, href: "/br/jogos-cassino/poker/" },
  { title: "Baccarat", count: 12, href: "/br/jogos-cassino/baccarat/" },
  { title: "Slots Jackpot Progressivo", count: 9, href: "/br/jogos-cassino/jackpot-progressivo/" },
  { title: "Bingo", count: 8, href: "/br/jogos-cassino/bingo/" },
  { title: "Keno", count: 8, href: "/br/jogos-cassino/keno/" },
  { title: "Texas Holdem", count: 8, href: "/br/jogos-cassino/texas-holdem/" },
  { title: "Game Shows", count: 7, href: "/br/jogos-cassino/game-shows/" },
  { title: "Roleta ao Vivo", count: 7, href: "/br/jogos-cassino/roleta-ao-vivo/" },
  { title: "Caribbean Stud", count: 5, href: "/br/jogos-cassino/caribbean-stud/" },
  { title: "Dice Games", count: 5, href: "/br/jogos-cassino/dice-games/" },
  { title: "Sic Bo", count: 5, href: "/br/jogos-cassino/sic-bo/" },
  { title: "Fish Table Games", count: 4, href: "/br/jogos-cassino/fish-table/" },
  { title: "Blackjack Live", count: 2, href: "/br/jogos-cassino/blackjack-live/" },
  { title: "Craps", count: 1, href: "/br/jogos-cassino/craps/" },
  { title: "Pai Gow Poker", count: 1, href: "/br/jogos-cassino/pai-gow/" },
  { title: "Rummy", count: 1, href: "/br/jogos-cassino/rummy/" },
  { title: "Slots 1 Real", count: 1, href: "/br/jogos-cassino/slots-1-real/" },
];

export default function JogosCassinoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Jogos de Cassino</h1>

          <div className="mb-6">
            <p className="text-sm text-[#666] mb-3">Ordenar por:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#f0f2f5] rounded-[10px] text-xs text-[#555] cursor-pointer hover:bg-[#e8eaed]">
                número de jogos (maior para menor)
              </span>
              <span className="px-3 py-1.5 bg-[#f0f2f5] rounded-[10px] text-xs text-[#555] cursor-pointer hover:bg-[#e8eaed]">
                número de jogos (menor para maior)
              </span>
              <span className="px-3 py-1.5 bg-[#f0f2f5] rounded-[10px] text-xs text-[#555] cursor-pointer hover:bg-[#e8eaed]">
                nome (A-Z)
              </span>
              <span className="px-3 py-1.5 bg-[#f0f2f5] rounded-[10px] text-xs text-[#555] cursor-pointer hover:bg-[#e8eaed]">
                nome (Z-A)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-white rounded-[16px] p-5 no-underline text-[#333] shadow-[rgba(0,0,0,0.08)_0px_2px_8px] hover:shadow-[rgba(81,112,255,0.15)_0px_4px_16px] hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-bold text-base mb-1 group-hover:text-[#5170ff] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#888] m-0">{cat.count} Jogos</p>
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