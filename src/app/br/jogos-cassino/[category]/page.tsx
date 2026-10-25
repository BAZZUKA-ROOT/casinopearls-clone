import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { GameCard } from "@/components/GameCard";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const CATEGORY_DATA: Record<string, { title: string; games: Array<{ title: string; provider: string; players: number; image: string; href: string }> }> = {
  "caca-niqueis": {
    title: "Caça-Níqueis",
    games: [
      { title: "Gates Of Olympus", provider: "Pragmatic Play", players: 1994, image: "/images/games/gates-olympus.webp", href: "/br/play/gates-olympus" },
      { title: "Sweet Bonanza", provider: "Pragmatic Play", players: 577, image: "/images/games/sweet-bonanza.jpg", href: "/br/play/sweet-bonanza" },
      { title: "Fortune Tiger", provider: "PG Soft", players: 2022, image: "/images/games/fortune-tiger.jpg", href: "/br/play/fortune-tiger" },
      { title: "Fortune Dragon", provider: "PG Soft", players: 623, image: "/images/games/fortune-dragon.jpg", href: "/br/play/fortune-dragon" },
      { title: "Starburst", provider: "Netent", players: 485, image: "/images/games/starburst.jpg", href: "/br/play/starburst" },
      { title: "Aviator", provider: "Spribe", players: 1957, image: "/images/games/aviator.jpg", href: "/br/play/aviator" },
      { title: "Hot Hot Fruit", provider: "Habanero", players: 38, image: "/images/games/hot-hot-fruit.jpg", href: "/br/play/hot-hot-fruit" },
      { title: "Fortune Ox", provider: "PG Soft", players: 152, image: "/images/games/fortune-ox.jpg", href: "/br/play/fortune-ox" },
      { title: "Coin Rush", provider: "Galaxsys", players: 212, image: "/images/games/coin-rush.webp", href: "/br/play/coin-rush" },
      { title: "Jack And The Beanstalk", provider: "Netent", players: 239, image: "/images/games/jack-beanstalk.jpg", href: "/br/play/jack-beanstalk" },
    ],
  },
  "slots-gratis": {
    title: "Slots Grátis",
    games: [
      { title: "Fortune Tiger", provider: "PG Soft", players: 2022, image: "/images/games/fortune-tiger.jpg", href: "/br/play/fortune-tiger" },
      { title: "Fortune Dragon", provider: "PG Soft", players: 623, image: "/images/games/fortune-dragon.jpg", href: "/br/play/fortune-dragon" },
      { title: "Gates Of Olympus", provider: "Pragmatic Play", players: 1994, image: "/images/games/gates-olympus.webp", href: "/br/play/gates-olympus" },
      { title: "Sweet Bonanza", provider: "Pragmatic Play", players: 577, image: "/images/games/sweet-bonanza.jpg", href: "/br/play/sweet-bonanza" },
      { title: "Aviator", provider: "Spribe", players: 1957, image: "/images/games/aviator.jpg", href: "/br/play/aviator" },
      { title: "Starburst", provider: "Netent", players: 485, image: "/images/games/starburst.jpg", href: "/br/play/starburst" },
      { title: "Fortune Ox", provider: "PG Soft", players: 152, image: "/images/games/fortune-ox.jpg", href: "/br/play/fortune-ox" },
      { title: "Hot Hot Fruit", provider: "Habanero", players: 38, image: "/images/games/hot-hot-fruit.jpg", href: "/br/play/hot-hot-fruit" },
    ],
  },
  "novos-slots": {
    title: "Novos Slots",
    games: [
      { title: "Coin Rush", provider: "Galaxsys", players: 212, image: "/images/games/coin-rush.webp", href: "/br/play/coin-rush" },
      { title: "Rooster Rumble", provider: "PG Soft", players: 52, image: "/images/games/rooster-rumble.webp", href: "/br/play/rooster-rumble" },
      { title: "Alchemy Gold", provider: "PG Soft", players: 14, image: "/images/games/alchemy-gold.webp", href: "/br/play/alchemy-gold" },
      { title: "Oishi Delights", provider: "PG Soft", players: 162, image: "/images/games/oishi-delights.webp", href: "/br/play/oishi-delights" },
      { title: "Jack And The Beanstalk", provider: "Netent", players: 239, image: "/images/games/jack-beanstalk.jpg", href: "/br/play/jack-beanstalk" },
      { title: "Big Piggy Bank", provider: "Inspired", players: 63, image: "/images/games/big-piggy-bank.jpg", href: "/br/play/big-piggy-bank" },
      { title: "Lucky Leprechaun", provider: "Microgaming", players: 104, image: "/images/games/lucky-leprechaun.jpg", href: "/br/play/lucky-leprechaun" },
      { title: "Raging Rhino", provider: "WMS", players: 144, image: "/images/games/raging-rhino.jpg", href: "/br/play/raging-rhino" },
    ],
  },
  "slots-populares": {
    title: "Slots Populares",
    games: [
      { title: "Gates Of Olympus", provider: "Pragmatic Play", players: 1994, image: "/images/games/gates-olympus.webp", href: "/br/play/gates-olympus" },
      { title: "Fortune Tiger", provider: "PG Soft", players: 2022, image: "/images/games/fortune-tiger.jpg", href: "/br/play/fortune-tiger" },
      { title: "Aviator", provider: "Spribe", players: 1957, image: "/images/games/aviator.jpg", href: "/br/play/aviator" },
      { title: "Sweet Bonanza", provider: "Pragmatic Play", players: 577, image: "/images/games/sweet-bonanza.jpg", href: "/br/play/sweet-bonanza" },
      { title: "Starburst", provider: "Netent", players: 485, image: "/images/games/starburst.jpg", href: "/br/play/starburst" },
      { title: "Fortune Dragon", provider: "PG Soft", players: 623, image: "/images/games/fortune-dragon.jpg", href: "/br/play/fortune-dragon" },
    ],
  },
  "crash-games": {
    title: "Crash Games",
    games: [
      { title: "Aviator", provider: "Spribe", players: 1743, image: "/images/games/aviator.jpg", href: "/br/play/aviator" },
      { title: "Coin Rush", provider: "Galaxsys", players: 202, image: "/images/games/coin-rush.webp", href: "/br/play/coin-rush" },
    ],
  },
};

const DEFAULT_GAMES = [
  { title: "Gates Of Olympus", provider: "Pragmatic Play", players: 1994, image: "/images/games/gates-olympus.webp", href: "/br/play/gates-olympus" },
  { title: "Sweet Bonanza", provider: "Pragmatic Play", players: 577, image: "/images/games/sweet-bonanza.jpg", href: "/br/play/sweet-bonanza" },
  { title: "Fortune Tiger", provider: "PG Soft", players: 2022, image: "/images/games/fortune-tiger.jpg", href: "/br/play/fortune-tiger" },
  { title: "Aviator", provider: "Spribe", players: 1957, image: "/images/games/aviator.jpg", href: "/br/play/aviator" },
  { title: "Starburst", provider: "Netent", players: 485, image: "/images/games/starburst.jpg", href: "/br/play/starburst" },
  { title: "Fortune Dragon", provider: "PG Soft", players: 623, image: "/images/games/fortune-dragon.jpg", href: "/br/play/fortune-dragon" },
  { title: "Hot Hot Fruit", provider: "Habanero", players: 38, image: "/images/games/hot-hot-fruit.jpg", href: "/br/play/hot-hot-fruit" },
  { title: "Fortune Ox", provider: "PG Soft", players: 152, image: "/images/games/fortune-ox.jpg", href: "/br/play/fortune-ox" },
];

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = CATEGORY_DATA[category];
  const title = data?.title ?? category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const games = data?.games ?? DEFAULT_GAMES;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">{title}</h1>
          <div className="flex flex-wrap gap-4">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
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