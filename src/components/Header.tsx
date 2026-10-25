import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-[#eee]" aria-label="Site">
      <div className="max-w-[1400px] mx-auto px-5 py-2.5 flex items-center justify-between gap-5 max-md:px-4">
        <div className="flex-shrink-0">
          <Link href="/br/" rel="home">
            <img
              src="/images/Casino_Pearl_150.webp"
              alt="Casino Pearls"
              width={130}
              height={60}
              className="h-10 w-auto block"
            />
          </Link>
        </div>

        <div className="flex-1 max-w-[400px] max-md:hidden">
          <form action="/br/" method="get" className="flex items-center relative w-[250px] bg-[#f0f2f5] rounded-[20px] px-3 py-1.5 ml-auto">
            <input
              type="text"
              name="s"
              placeholder="Pesquise seu Jogo"
              className="w-full border-none bg-transparent outline-none text-sm text-[#333]"
            />
            <input type="hidden" name="post_type" value="games" />
            <button type="submit" className="bg-none border-none cursor-pointer text-[#666] flex items-center p-0" aria-label="Buscar">
              <Search size={20} />
            </button>
          </form>
        </div>

        <div className="flex gap-2.5 items-center">
          <Link
            href="/br/login/"
            className="px-5 py-2 rounded-[20px] text-sm font-semibold no-underline text-[#333] hover:opacity-85 transition-opacity"
          >
            Entrar
          </Link>
          <Link
            href="/br/register/"
            className="px-5 py-2 rounded-[20px] text-sm font-semibold no-underline text-white bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:opacity-85 transition-opacity"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </header>
  );
}