import Link from "next/link";

interface GameCardProps {
  title: string;
  provider: string;
  players: number;
  image: string;
  href: string;
  isNew?: boolean;
}

export function GameCard({
  title,
  provider,
  players,
  image,
  href,
  isNew,
}: GameCardProps) {
  return (
    <div className="game-item flex flex-col m-[5px] basis-[calc(20%-10px)] max-w-[calc(20%-10px)] min-w-[calc(20%-10px)] box-border max-lg:basis-[calc(33.333%-10px)] max-lg:max-w-[calc(33.333%-10px)] max-lg:min-w-[calc(33.333%-10px)] max-md:basis-[calc(50%-10px)] max-md:max-w-[calc(50%-10px)] max-md:min-w-[calc(50%-10px)]">
      <Link href={href} className="block no-underline">
        <div className="relative rounded-[4px] overflow-hidden aspect-[4/3] bg-[#eee] group">
          {isNew && (
            <span className="absolute -top-[5px] right-2 bg-[#ff4444] text-white px-2 py-[3px] rounded-[4px] text-[9px] font-bold italic z-[3]">
              NOVO
            </span>
          )}
          <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-0 rounded-[4px] text-[11px] font-semibold z-[2]">
            {provider}
          </span>
          <img
            src={image}
            alt={title}
            width={168}
            height={126}
            loading="lazy"
            className="w-full h-full object-cover brightness-[1.2] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-[4px] bg-black/50 flex justify-center items-center opacity-0 transition-opacity duration-300 z-[1] group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center px-[1px] pt-1 pb-2.5 gap-[1px] max-xs:flex-col max-xs:items-start max-xs:gap-1.5">
          <div className="flex-1 min-w-0">
            <span className="block truncate text-xs text-black max-xs:text-[11px]">
              {title}
            </span>
          </div>
          <div className="shrink-0">
            <span className="text-[10px] text-[#333] font-semibold whitespace-nowrap">
              {players.toLocaleString("pt-BR")} Jogando
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}