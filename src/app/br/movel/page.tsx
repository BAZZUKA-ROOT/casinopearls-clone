import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

export const dynamic = "force-dynamic";

export default function MovelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Cassino Móvel</h1>

          <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-[20px] p-10 max-md:p-6 mb-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">Jogue em Qualquer Lugar 📱</h2>
            <p className="text-base opacity-90 mb-6 max-w-[600px]">
              Acesse mais de 5000 jogos diretamente do seu celular ou tablet. Sem downloads, sem apps — tudo no navegador.
            </p>
            <a href="/br/play/" className="inline-block bg-gradient-to-r from-[#5170ff] to-[#7a00df] text-white px-8 py-3 rounded-[30px] font-bold text-sm no-underline hover:-translate-y-0.5 transition-all">
              JOGAR AGORA NO CELULAR
            </a>
          </div>

          <section className="bg-white rounded-[16px] p-6 shadow-[rgba(0,0,0,0.08)_0px_2px_8px] mb-6">
            <h2 className="text-xl font-bold text-[#333] mb-4">Por que jogar no Casino Pearls Móvel?</h2>
            <ul className="list-disc list-inside text-sm text-[#555] space-y-3 leading-relaxed">
              <li><strong>Sem download necessário:</strong> Jogue diretamente pelo navegador do seu dispositivo móvel.</li>
              <li><strong>Compatível com todos os dispositivos:</strong> iPhone, Android, tablets e smartphones.</li>
              <li><strong>Jogos otimizados:</strong> Todos os slots e jogos de mesa adaptados para telas menores.</li>
              <li><strong>Mesma conta:</strong> Seu saldo, progresso e favoritos sincronizam entre desktop e celular.</li>
              <li><strong>Jogue via Wi-Fi:</strong> Economize dados móveis jogando conectado ao Wi-Fi.</li>
            </ul>
          </section>

          <section className="bg-white rounded-[16px] p-6 shadow-[rgba(0,0,0,0.08)_0px_2px_8px] mb-6">
            <h2 className="text-xl font-bold text-[#333] mb-4">Jogos Populares no Celular</h2>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              Os melhores jogos de cassino funcionam perfeitamente no mobile. Experimente Gates of Olympus, Sweet Bonanza, Fortune Tiger, Aviator e centenas de outros títulos otimizados para toque.
            </p>
          </section>

          <section className="bg-white rounded-[16px] p-6 shadow-[rgba(0,0,0,0.08)_0px_2px_8px]">
            <h2 className="text-xl font-bold text-[#333] mb-4">Como Começar</h2>
            <ol className="list-decimal list-inside text-sm text-[#555] space-y-3 leading-relaxed">
              <li>Abra o navegador do seu celular (Chrome, Safari, etc.)</li>
              <li>Acesse casinopearls.com/br/</li>
              <li>Faça login ou crie uma conta gratuita</li>
              <li>Escolha qualquer jogo e comece a jogar instantaneamente</li>
            </ol>
          </section>
        </main>
      </div>
      <Footer />
      <MobileBottomNav />
      <LiveChat />
    </div>
  );
}