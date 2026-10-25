"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Trophy, User, Gamepad2 } from "lucide-react";
import { Suspense } from "react";

const navItems = [
  { label: "Início", href: "/br/", icon: Home },
  { label: "Jogos", href: "/br/jogos-cassino/", icon: Gamepad2 },
  { label: "Ranking", href: "/br/ranking/", icon: Trophy },
  { label: "Buscar", href: "/br/buscar/", icon: Search },
  { label: "Perfil", href: "/br/login/", icon: User },
];

function MobileBottomNavInner() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-[#eee] lg:hidden safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 p-1.5 rounded-lg no-underline transition-colors min-w-[56px] ${
                isActive ? "text-[#5170ff]" : "text-[#999]"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function MobileBottomNav() {
  return (
    <Suspense fallback={null}>
      <MobileBottomNavInner />
    </Suspense>
  );
}