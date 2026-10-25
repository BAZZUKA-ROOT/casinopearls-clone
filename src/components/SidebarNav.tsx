import Link from "next/link";
import {
  Home,
  Play,
  Gamepad2,
  Trophy,
  Star,
  Sparkles,
  Monitor,
  Palette,
  Zap,
  Spade,
  CircleDot,
  Radio,
  Tv,
  Dices,
  Ticket,
  Gift,
  Smartphone,
  Crown,
  FileText,
} from "lucide-react";

const menuItems = [
  { href: "/br/", label: "Casino Pearls", icon: Home },
  { href: "/br/play/", label: "Jogar Agora", icon: Play },
  { href: "/br/jogos-cassino/", label: "Jogos Cassino Grátis", icon: Gamepad2 },
  { href: "/br/jogos-cassino/slots-gratis/", label: "Slots Grátis", icon: Trophy },
  { href: "/br/jogos-cassino/caca-niqueis/", label: "Caça-Níqueis", icon: Star },
  { href: "/br/jogos-cassino/novos-slots/", label: "Novos Slots", icon: Sparkles },
  { href: "/br/jogos-cassino/slots-populares/", label: "Slots Populares", icon: Monitor },
  { href: "/br/gameproviders/", label: "Softwares", icon: Palette },
  { href: "/br/themes/", label: "Por temas", icon: Zap },
  { href: "/br/features/", label: "Por recurso", icon: Zap },
  { href: "/br/jogos-cassino/blackjack/", label: "Blackjack", icon: Spade },
  { href: "/br/jogos-cassino/roleta/", label: "Roleta", icon: CircleDot },
  { href: "/br/jogos-cassino/cassino-ao-vivo/", label: "Cassino ao Vivo", icon: Radio },
  { href: "/br/jogos-cassino/video-poker/", label: "Video Poker", icon: Tv },
  { href: "/br/jogos-cassino/jogos-de-mesa/", label: "Jogos de Mesa", icon: Dices },
  { href: "/br/jogos-cassino/jogos-de-cartas/", label: "Jogos de Cartas", icon: Spade },
  { href: "/br/jogos-cassino/poker/", label: "Poker", icon: Spade },
  { href: "/br/bonus/", label: "Bônus", icon: Gift },
  { href: "/br/movel/", label: "Móvel", icon: Smartphone },
  { href: "/br/vip/", label: "VIP", icon: Crown },
  { href: "/br/artigos/", label: "Artigos", icon: FileText },
];

export function SidebarNav() {
  return (
    <aside className="w-[20%] bg-[#f0f2f5] shrink-0 max-lg:hidden">
      <nav
        className="sticky top-5 h-[calc(100vh-40px)] overflow-y-auto bg-[#f0f2f5] scroll-smooth scrollbar-hide"
        role="navigation"
        aria-label="Gaming Navigation"
      >
        <div className="h-full py-4">
          <div className="h-full flex flex-col px-1">
            <ul className="flex flex-col list-none m-0 p-0 gap-0 flex-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isFirst = index === 0;
                const isLast = index === menuItems.length - 1;
                return (
                  <li key={item.href} className="relative w-full">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 text-[#333] no-underline font-medium text-sm w-full box-border bg-white transition-colors hover:bg-gradient-to-br hover:from-[#f8f9ff] hover:to-[#fff8ff] hover:text-[#5170ff] ${
                        isFirst
                          ? "rounded-t-[20px] shadow-[rgba(0,0,0,0.05)_-2px_0px_4px,rgba(0,0,0,0.05)_2px_0px_4px,rgba(0,0,0,0.05)_0px_-2px_4px]"
                          : ""
                      } ${
                        isLast
                          ? "rounded-b-[20px] mb-5"
                          : ""
                      } ${
                        !isFirst && !isLast
                          ? "shadow-[rgba(0,0,0,0.05)_-2px_0px_4px_-2px]"
                          : ""
                      }`}
                    >
                      <span className="inline-flex items-center shrink-0 w-5 h-5">
                        <Icon size={20} />
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}