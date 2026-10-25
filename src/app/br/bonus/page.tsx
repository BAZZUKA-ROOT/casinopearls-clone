import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const bonuses = [
  { title: "Bônus de Boas-Vindas", value: "100% até R$ 1.000", description: "Duplique seu primeiro depósito e comece com o dobro de saldo para jogar.", type: "Depósito" },
  { title: "Giros Grátis", value: "50 Giros Grátis", description: "Gire nos melhores slots sem gastar nada do seu saldo.", type: "Grátis" },
  { title: "Bônus Sem Depósito", value: "R$ 25 Grátis", description: "Experimente o cassino sem precisar depositar nenhum centavo.", type: "Sem Depósito" },
  { title: "Cashback Semanal", value: "10% Cashback", description: "Receba de volta uma porcentagem das suas perdas toda semana.", type: "Cashback" },
  { title: "Recarga de Saldo", value: "50% até R$ 500", description: "Bônus extra em cada recarga subsequente ao primeiro depósito.", type: "Recarga" },
  { title: "Torneio Semanal", value: "R$ 50.000 em Prêmios", description: "Competição entre jogadores com premiação em dinheiro real.", type: "Torneio" },
];

export const dynamic = "force-dynamic";

export default function BonusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Bônus de Cassino</h1>

          <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-[20px] p-10 max-md:p-6 mb-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">Melhores Bônus do Brasil 🎰</h2>
            <p className="text-base opacity-90 mb-6 max-w-[600px]">
              Aproveite os bônus mais generosos da rede. Cadastre-se agora e receba ofertas exclusivas diretamente no seu perfil.
            </p>
            <a href="/br/register/" className="inline-block bg-gradient-to-r from-[#5170ff] to-[#7a00df] text-white px-8 py-3 rounded-[30px] font-bold text-sm no-underline hover:-translate-y-0.5 transition-all">
              CADASTRAR E RECEBER BÔNUS
            </a>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
            {bonuses.map((bonus) => (
              <div key={bonus.title} className="bg-white rounded-[16px] p-6 shadow-[rgba(0,0,0,0.08)_0px_2px_8px] border border-[#f0f2f5]">
                <span className="inline-block px-3 py-1 bg-[#f0f2f5] rounded-[10px] text-xs font-semibold text-[#5170ff] mb-3">
                  {bonus.type}
                </span>
                <h3 className="font-bold text-lg text-[#333] mb-2">{bonus.title}</h3>
                <p className="text-2xl font-extrabold text-[#5170ff] mb-3">{bonus.value}</p>
                <p className="text-sm text-[#666] leading-relaxed">{bonus.description}</p>
                <button className="mt-4 w-full py-2.5 rounded-[20px] bg-[#f0f2f5] text-[#333] font-semibold text-sm border-none cursor-pointer hover:bg-[#5170ff] hover:text-white transition-colors">
                  RESGATAR AGORA
                </button>
              </div>
            ))}
          </div>

          <section className="mt-10 p-6 bg-white rounded-[16px] shadow-[rgba(0,0,0,0.05)_0px_2px_6px]">
            <h2 className="text-xl font-bold text-[#333] mb-4">Como Funcionam os Bônus?</h2>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              Os bônus de cassino são incentivos oferecidos pelas plataformas para atrair novos jogadores e recompensar os existentes.
              Cada bônus possui termos e condições específicos, incluindo requisitos de rollover (wagering) que determinam quantas vezes
              o valor do bônus deve ser apostado antes de poder ser sacado.
            </p>
            <ul className="list-disc list-inside text-sm text-[#555] space-y-2">
              <li>Leia sempre os termos e condições antes de ativar qualquer bônus</li>
              <li>Verifique o prazo de validade da oferta</li>
              <li>Confira quais jogos contribuem para o rollover</li>
              <li>Respeite o limite máximo de aposta enquanto cumpre os requisitos</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
      <MobileBottomNav />
      <LiveChat />
    </div>
  );
}