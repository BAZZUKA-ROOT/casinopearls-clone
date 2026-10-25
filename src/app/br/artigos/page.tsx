import Link from "next/link";
import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const articles = [
  { title: "Jogos grátis incluem rodadas de bônus ou giros grátis?", date: "dezembro 31, 2025", excerpt: "Descubra se os jogos de cassino gratuitos oferecem recursos de bônus e giros grátis sem custo adicional." },
  { title: "Jogos de cassino grátis vs. jogos com dinheiro real: eles são iguais?", date: "dezembro 23, 2025", excerpt: "Entenda as diferenças e semelhanças entre jogar gratuitamente e apostar dinheiro real em cassinos online." },
  { title: "O que acontece quando o bônus do cassino expira?", date: "dezembro 18, 2025", excerpt: "Saiba o que fazer quando seus bônus estão prestes a expirar e como aproveitar ao máximo cada oferta." },
  { title: "Bônus de cassino não afetam suas chances de ganhar", date: "dezembro 10, 2025", excerpt: "Mitos e verdades sobre como os bônus influenciam (ou não) o RTP e suas probabilidades de vitória." },
  { title: "Por que os bônus de cassino podem valer a pena usar?", date: "dezembro 5, 2025", excerpt: "Análise completa dos benefícios de utilizar bônus de boas-vindas, giros grátis e cashback." },
  { title: "Reivindicando seu bônus de cassino: como fazer?", date: "novembro 26, 2025", excerpt: "Passo a passo simples para ativar e utilizar todos os bônus disponíveis na plataforma." },
  { title: "Como escolher o melhor slot online em 2026", date: "novembro 20, 2025", excerpt: "Guia completo sobre RTP, volatilidade e recursos especiais para encontrar o slot ideal para você." },
  { title: "Estratégias de blackjack: guia para iniciantes", date: "novembro 15, 2025", excerpt: "Aprenda as estratégias básicas de blackjack que reduzem a vantagem da casa e aumentam suas chances." },
  { title: "O que são crash games e como funcionam?", date: "novembro 10, 2025", excerpt: "Tudo sobre Aviator, JetX, Spaceman e outros jogos de crash que dominaram os cassinos online." },
];

export const dynamic = "force-dynamic";

export default function ArtigosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Artigos e Dicas</h1>

          <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-[20px] p-10 max-md:p-6 mb-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">Fique por dentro do mundo dos cassinos 📰</h2>
            <p className="text-base opacity-90 mb-6 max-w-[600px]">
              Dicas, estratégias, novidades e guias completos para melhorar sua experiência de jogo.
            </p>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
            {articles.map((article) => (
              <article key={article.title} className="bg-white rounded-[16px] p-6 shadow-[rgba(0,0,0,0.08)_0px_2px_8px] hover:shadow-[rgba(81,112,255,0.15)_0px_4px_16px] hover:-translate-y-0.5 transition-all flex flex-col">
                <time className="text-xs text-[#5170ff] font-semibold mb-2">{article.date}</time>
                <h3 className="font-bold text-lg text-[#333] mb-3 leading-snug">{article.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed flex-1">{article.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#5170ff] group-hover:underline">
                  Ler mais →
                </span>
              </article>
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