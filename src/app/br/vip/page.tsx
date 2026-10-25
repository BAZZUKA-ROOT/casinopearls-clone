import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const vipLevels = [
  { name: "Bronze", minDeposit: "R$ 100", cashback: "5%", bonus: "R$ 50", perks: ["Suporte por email", "Acesso a promoções semanais"] },
  { name: "Prata", minDeposit: "R$ 500", cashback: "8%", bonus: "R$ 200", perks: ["Gerente de conta dedicado", "Saques prioritários", "Bônus de aniversário"] },
  { name: "Ouro", minDeposit: "R$ 2.000", cashback: "12%", bonus: "R$ 500", perks: ["Cashback diário", "Limites de saque elevados", "Convites para eventos exclusivos"] },
  { name: "Platina", minDeposit: "R$ 10.000", cashback: "15%", bonus: "R$ 2.000", perks: ["Atendimento VIP 24/7", "Presentes personalizados", "Viagens e experiências exclusivas"] },
];

export const dynamic = "force-dynamic";

export default function VipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Programa VIP 👑</h1>

          <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-[20px] p-10 max-md:p-6 mb-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">Suba de nível e ganhe recompensas exclusivas</h2>
            <p className="text-base opacity-90 mb-6 max-w-[600px]">
              Quanto mais você joga, mais benefícios recebe. Cashback crescente, bônus personalizados e atendimento prioritário esperam por você.
            </p>
            <a href="/br/register/" className="inline-block bg-gradient-to-r from-[#5170ff] to-[#7a00df] text-white px-8 py-3 rounded-[30px] font-bold text-sm no-underline hover:-translate-y-0.5 transition-all">
              COMEÇAR AGORA
            </a>
          </div>

          <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mb-10">
            {vipLevels.map((level) => (
              <div key={level.name} className="bg-white rounded-[16px] p-6 shadow-[rgba(0,0,0,0.08)_0px_2px_8px] border border-[#f0f2f5] flex flex-col">
                <h3 className="font-bold text-xl text-[#333] mb-2">{level.name}</h3>
                <p className="text-sm text-[#888] mb-4">Depósito mínimo: {level.minDeposit}</p>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#666]">Cashback:</span>
                    <span className="font-bold text-[#5170ff]">{level.cashback}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#666]">Bônus:</span>
                    <span className="font-bold text-[#5170ff]">{level.bonus}</span>
                  </div>
                </div>
                <ul className="text-xs text-[#555] space-y-1.5 mt-auto">
                  {level.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-1.5">
                      <span className="text-[#5170ff] mt-0.5">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <section className="bg-white rounded-[16px] p-6 shadow-[rgba(0,0,0,0.05)_0px_2px_6px]">
            <h2 className="text-xl font-bold text-[#333] mb-4">Como funciona o programa VIP?</h2>
            <p className="text-sm text-[#555] leading-relaxed">
              O programa VIP do Casino Pearls recompensa automaticamente os jogadores mais ativos. Cada depósito e aposta contribui para sua progressão entre os níveis. Os pontos são acumulados automaticamente e você é notificado quando sobe de nível. Todos os benefícios são aplicados imediatamente após a promoção.
            </p>
          </section>
        </main>
      </div>
      <Footer />
      <MobileBottomNav />
      <LiveChat />
    </div>
  );
}