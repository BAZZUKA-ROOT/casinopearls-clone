import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { GameCard } from "@/components/GameCard";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const newGames = [
  { title: "Coin Rush", provider: "Galaxsys", players: 205, image: "/images/games/coin-rush.webp", href: "/br/play/coin-rush" },
  { title: "Jack And The Beanstalk", provider: "Netent", players: 156, image: "/images/games/jack-beanstalk.jpg", href: "/br/play/jack-beanstalk" },
  { title: "Big Piggy Bank", provider: "Inspired", players: 36, image: "/images/games/big-piggy-bank.jpg", href: "/br/play/big-piggy-bank" },
  { title: "Lucky Leprechaun", provider: "Microgaming", players: 58, image: "/images/games/lucky-leprechaun.jpg", href: "/br/play/lucky-leprechaun" },
  { title: "Raging Rhino", provider: "WMS", players: 273, image: "/images/games/raging-rhino.jpg", href: "/br/play/raging-rhino" },
  { title: "Rooster Rumble", provider: "PG Soft", players: 105, image: "/images/games/rooster-rumble.webp", href: "/br/play/rooster-rumble", isNew: true },
  { title: "Alchemy Gold", provider: "PG Soft", players: 21, image: "/images/games/alchemy-gold.webp", href: "/br/play/alchemy-gold", isNew: true },
  { title: "Oishi Delights", provider: "PG Soft", players: 274, image: "/images/games/oishi-delights.webp", href: "/br/play/oishi-delights", isNew: true },
];

const popularGames = [
  { title: "Gates Of Olympus", provider: "Pragmatic Play", players: 2576, image: "/images/games/gates-olympus.webp", href: "/br/play/gates-olympus" },
  { title: "Sweet Bonanza", provider: "Pragmatic Play", players: 549, image: "/images/games/sweet-bonanza.jpg", href: "/br/play/sweet-bonanza" },
  { title: "Fortune Dragon", provider: "PG Soft", players: 484, image: "/images/games/fortune-dragon.jpg", href: "/br/play/fortune-dragon" },
  { title: "Starburst", provider: "Netent", players: 520, image: "/images/games/starburst.jpg", href: "/br/play/starburst" },
  { title: "Aviator", provider: "Spribe", players: 1768, image: "/images/games/aviator.jpg", href: "/br/play/aviator" },
  { title: "Fortune Tiger", provider: "PG Soft", players: 2022, image: "/images/games/fortune-tiger.jpg", href: "/br/play/fortune-tiger" },
  { title: "Fortune Ox", provider: "PG Soft", players: 499, image: "/images/games/fortune-ox.jpg", href: "/br/play/fortune-ox" },
  { title: "Hot Hot Fruit", provider: "Habanero", players: 439, image: "/images/games/hot-hot-fruit.jpg", href: "/br/play/hot-hot-fruit" },
];

const crashGames = [
  { title: "Aviator", provider: "Spribe", players: 2797, image: "/images/games/aviator.jpg", href: "/br/play/aviator" },
  { title: "Fortune Tiger", provider: "PG Soft", players: 2635, image: "/images/games/fortune-tiger.jpg", href: "/br/play/fortune-tiger" },
  { title: "Gates Of Olympus", provider: "Pragmatic Play", players: 2142, image: "/images/games/gates-olympus.webp", href: "/br/play/gates-olympus" },
  { title: "Sweet Bonanza", provider: "Pragmatic Play", players: 235, image: "/images/games/sweet-bonanza.jpg", href: "/br/play/sweet-bonanza" },
  { title: "Coin Rush", provider: "Galaxsys", players: 202, image: "/images/games/coin-rush.webp", href: "/br/play/coin-rush" },
];

function GameCarousel({ title, games }: { title: string; games: typeof newGames }) {
  return (
    <section className="mt-5 bg-white p-5 max-md:p-2.5 rounded-[20px] text-[#333] shadow-[rgba(0,0,0,0.1)_0px_4px_8px]">
      <div className="mb-4">
        <h2 className="font-bold font-[family-name:var(--font-sans)] text-2xl pl-2.5 leading-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap">
        {games.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </section>
  );
}

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-[20px] p-15 max-md:p-10 mb-7.5 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl max-md:text-3xl font-extrabold m-0 mb-3 leading-tight">
                Aposte, decole e fature!
              </h1>
              <p className="text-lg m-0 mb-6 opacity-90">
                Aviator, JetX, Dino… pronto pra quebrar recordes?
              </p>
              <a
                href="/br/play/"
                className="inline-block bg-gradient-to-r from-[#5170ff] to-[#7a00df] text-white px-9 py-3.5 rounded-[30px] font-bold text-base no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(81,112,255,0.4)]"
              >
                JOGAR AGORA
              </a>
            </div>
          </div>

          <GameCarousel title="Novos Jogos de Slots" games={newGames} />
          <GameCarousel title="Slots Grátis" games={popularGames} />
          <GameCarousel title="Crash Games" games={crashGames} />

          {/* SEO Content */}
          <section className="mt-10 p-5">
            <h2 className="text-2xl font-bold mb-4">
              Os melhores jogos de Cassino Online Gratuitos
            </h2>
            <p className="text-base leading-relaxed text-[#333]">
              Casino Pearls eleva sua experiência de jogo ao oferecer acesso a mais de 5000 jogos
              de cassino envolventes, incluindo slots online gratuitos, diretamente do seu dispositivo
              digital. Seja você um fã de jogos de mesa clássicos como blackjack online, craps, poker
              e roleta online, ou prefira as dinâmicas rodas das máquinas de slot, nossa plataforma
              atende a todos os tipos de entusiastas no Brasil.
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