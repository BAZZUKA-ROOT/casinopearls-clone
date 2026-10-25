import Link from "next/link";
import { ArrowLeft, Maximize2, Share2, Star } from "lucide-react";
import { GamePlayer } from "@/components/GamePlayer";

const GAMES_DB: Record<string, { title: string; provider: string; category: string; description: string }> = {
  "gates-olympus": { title: "Gates Of Olympus", provider: "Pragmatic Play", category: "Slots", description: "Entre no reino de Zeus e descubra tesouros divinos neste slot emocionante." },
  "sweet-bonanza": { title: "Sweet Bonanza", provider: "Pragmatic Play", category: "Slots", description: "Uma explosão de sabores e ganhos doces espera por você." },
  "aviator": { title: "Aviator", provider: "Spribe", category: "Crash Games", description: "O jogo de crash mais popular do mundo. Aposte e retire antes que o avião voe!" },
  "fortune-dragon": { title: "Fortune Dragon", provider: "PG Soft", category: "Slots", description: "A sorte do dragão dourado pode mudar sua vida." },
  "starburst": { title: "Starburst", provider: "Netent", category: "Slots", description: "O clássico absoluto dos slots online com joias brilhantes." },
  "mega-joker": { title: "Mega Joker", provider: "Netent", category: "Slots", description: "Slot retrô com supermeter e jackpot progressivo." },
  "dog-house-megaways": { title: "The Dog House Megaways", provider: "Pragmatic Play", category: "Slots", description: "Cães adoráveis e multiplicadores sticky wilds." },
  "big-bass-splash": { title: "Big Bass Splash", provider: "Pragmatic Play", category: "Slots", description: "Pesque grandes vitórias nesta aventura aquática." },
  "book-of-ra": { title: "Book Of Ra", provider: "Novomatic", category: "Slots", description: "A lenda egípcia que conquistou gerações de jogadores." },
  "reactoonz": { title: "Reactoonz", provider: "Play'n Go", category: "Slots", description: "Aliens fofos e reações em cadeia de ganhos." },
  "coin-rush": { title: "Coin Rush", provider: "Galaxsys", category: "Crash Games", description: "Corra atrás das moedas douradas neste jogo acelerado." },
  "jack-beanstalk": { title: "Jack And The Beanstalk", provider: "Netent", category: "Slots", description: "Suba o pé de feijão mágico em busca de tesouros gigantes." },
  "fortune-tiger": { title: "Fortune Tiger", provider: "PG Soft", category: "Slots", description: "O tigre da fortuna traz prosperidade e grandes prêmios." },
  "fortune-ox": { title: "Fortune Ox", provider: "PG Soft", category: "Slots", description: "O boi da fortuna carrega sacos de ouro para você." },
  "rooster-rumble": { title: "Rooster Rumble", provider: "PG Soft", category: "Slots", description: "Galinhas lutadoras em um slot cheio de ação e prêmios." },
  "alchemy-gold": { title: "Alchemy Gold", provider: "PG Soft", category: "Slots", description: "Transforme símbolos em ouro puro neste slot alquímico." },
  "oishi-delights": { title: "Oishi Delights", provider: "PG Soft", category: "Slots", description: "Sabores japoneses e ganhos deliciosos esperam por você." },
  "big-piggy-bank": { title: "Big Piggy Bank", provider: "Inspired", category: "Slots", description: "Quebre o cofrinho e descubra fortunas escondidas." },
  "lucky-leprechaun": { title: "Lucky Leprechaun", provider: "Microgaming", category: "Slots", description: "O duende irlandês guarda panelas de ouro no fim do arco-íris." },
  "raging-rhino": { title: "Raging Rhino", provider: "WMS", category: "Slots", description: "Rinocerontes furiosos em uma savana de grandes ganhos." },
  "hot-hot-fruit": { title: "Hot Hot Fruit", provider: "Habanero", category: "Slots", description: "Frutas quentes e multiplicadores escaldantes." },
  "fortune-snake": { title: "Fortune Snake", provider: "PG Soft", category: "Slots", description: "A serpente da fortuna desliza trazendo riquezas." },
  "dragon-hatch": { title: "Dragon Hatch", provider: "PG Soft", category: "Slots", description: "Choque ovos de dragão e libere poderes especiais." },
  "wild-bandito": { title: "Wild Bandito", provider: "PG Soft", category: "Slots", description: "Bandidos selvagens em um slot mexicano explosivo." },
  "lucky-neko": { title: "Lucky Neko", provider: "PG Soft", category: "Slots", description: "O gato da sorte japonês acena com patinhas douradas." },
  "caishen-wins": { title: "Caishen Wins", provider: "PG Soft", category: "Slots", description: "O deus da riqueza chinês abençoa seus giros." },
  "sugar-rush": { title: "Sugar Rush", provider: "Pragmatic Play", category: "Slots", description: "Doces cascata e multiplicadores que crescem sem parar." },
  "wolf-gold": { title: "Wolf Gold", provider: "Pragmatic Play", category: "Slots", description: "Lobos uivando sob a lua cheia com jackpots enormes." },
  "starlight-princess": { title: "Starlight Princess", provider: "Pragmatic Play", category: "Slots", description: "Uma princesa celestial multiplica seus ganhos nas estrelas." },
  "fruit-party": { title: "Fruit Party", provider: "Pragmatic Play", category: "Slots", description: "Festa de frutas com cluster pays e multiplicadores aleatórios." },
  "roleta": { title: "Roleta Europeia", provider: "Casino Pearls", category: "Roleta", description: "A clássica roleta europeia com um único zero e apostas variadas." },
  "blackjack": { title: "Blackjack Clássico", provider: "Casino Pearls", category: "Blackjack", description: "O jogo de cartas mais famoso do cassino. Chegue ao 21 sem estourar!" },
  "monopoly-live": { title: "Monopoly Live", provider: "Evolution Gaming", category: "Game Shows", description: "O clássico jogo de tabuleiro ganha vida com rodadas bônus interativas." },
  "gemstones-gold": { title: "Gemstones Gold", provider: "PG Soft", category: "Slots", description: "Pedras preciosas e barras de ouro em um slot reluzente." },
  "shaolin-soccer": { title: "Shaolin Soccer", provider: "PG Soft", category: "Slots", description: "Monges shaolin jogam futebol com habilidades extraordinárias." },
  "hip-hop-panda": { title: "Hip Hop Panda", provider: "PG Soft", category: "Slots", description: "Um panda estiloso faz rap e distribui prêmios." },
  "queen-of-bounty": { title: "Queen of Bounty", provider: "PG Soft", category: "Slots", description: "A rainha pirata lidera uma caça ao tesouro épica." },
  "jewels-of-prosperity": { title: "Jewels of Prosperity", provider: "PG Soft", category: "Slots", description: "Joias da prosperidade brilham com recompensas abundantes." },
  "cash-mania": { title: "Cash Mania", provider: "PG Soft", category: "Slots", description: "Loucura por dinheiro com símbolos empilhados e resgates." },
  "treasure-bowl": { title: "Treasure Bowl", provider: "JDB Gaming", category: "Slots", description: "Uma tigela transbordando de tesouros orientais." },
  "fortune-rabbit": { title: "Fortune Rabbit", provider: "PG Soft", category: "Slots", description: "O coelho da fortuna pula trazendo sorte e multiplicadores." },
  "fortune-mouse": { title: "Fortune Mouse", provider: "PG Soft", category: "Slots", description: "O rato da fortuna corre pelos rolos espalhando ouro." },
  "fortune-gems-2": { title: "Fortune Gems 2", provider: "TaDa Gaming", category: "Slots", description: "Segunda edição do sucesso com gemas ainda mais valiosas." },
  "fishin-frenzy": { title: "Fishin Frenzy", provider: "Blueprint Gaming", category: "Slots", description: "Pesca frenética com pescador como símbolo de bônus." },
  "le-bandit": { title: "Le Bandit", provider: "Hacksaw Gaming", category: "Slots", description: "Um bandido charmoso rouba corações e distribui prêmios." },
  "pirots-2": { title: "Pirots 2", provider: "ELK Studios", category: "Slots", description: "Papagaios piratas em uma aventura tropical cheia de tesouros." },
  "sizzling-hot-deluxe": { title: "Sizzling Hot Deluxe", provider: "Novomatic", category: "Slots", description: "O slot de frutas mais clássico em versão deluxe." },
  "zeus-vs-hades": { title: "Zeus vs Hades Gods of War", provider: "Pragmatic Play", category: "Slots", description: "Deuses gregos batalham nos rolos com poderes épicos." },
};

export const dynamic = "force-dynamic";

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = GAMES_DB[slug] || {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    provider: "Casino Pearls",
    category: "Demo",
    description: "Jogue este título incrível gratuitamente em nossa plataforma demo."
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#1a1a2e] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <Link href="/br/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors no-underline">
          <ArrowLeft size={18} />
          Voltar aos Jogos
        </Link>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Compartilhar">
            <Share2 size={18} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Favoritar">
            <Star size={18} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Tela cheia">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      {/* Game Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 max-w-[1400px] mx-auto w-full">
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
          <GamePlayer title={game.title} provider={game.provider} category={game.category} slug={slug} />
        </div>

        {/* Game Info */}
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-bold">Sobre o Jogo</h2>
            <p className="text-gray-400 leading-relaxed">{game.description}</p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">
                {game.category}
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">
                RTP: 96.5%
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10">
                Volatilidade: Alta
              </span>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-fit">
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Detalhes</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Provedor</dt>
                <dd className="font-medium">{game.provider}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Lançamento</dt>
                <dd className="font-medium">2024</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Linhas</dt>
                <dd className="font-medium">20-100</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Modo Demo</dt>
                <dd className="font-medium text-green-400">Disponível</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}