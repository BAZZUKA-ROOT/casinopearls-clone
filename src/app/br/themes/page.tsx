import Link from "next/link";
import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LiveChat } from "@/components/LiveChat";

const themes = [
  { name: "Classic Slots", count: 103 },
  { name: "Animals Slots", count: 84 },
  { name: "Fantasy Slots", count: 83 },
  { name: "Asian Slots", count: 73 },
  { name: "Fruit Slots", count: 72 },
  { name: "Adventure Slots", count: 55 },
  { name: "Nature Slots", count: 47 },
  { name: "Egypt Slots", count: 41 },
  { name: "Ancient Slots", count: 40 },
  { name: "Gems Slots", count: 39 },
  { name: "Oriental Slots", count: 38 },
  { name: "Gold Slots", count: 36 },
  { name: "Mythology Slots", count: 35 },
  { name: "Food Slots", count: 32 },
  { name: "History Slots", count: 32 },
  { name: "High Life Slots", count: 31 },
  { name: "Party Slots", count: 29 },
  { name: "Retro Slots", count: 29 },
  { name: "Gods Slots", count: 25 },
  { name: "Magic Slots", count: 25 },
  { name: "Vegas Slots", count: 25 },
  { name: "Christmas Slots", count: 24 },
  { name: "Sea Life Slots", count: 23 },
  { name: "Irish Slots", count: 21 },
  { name: "Pharaohs Slots", count: 21 },
  { name: "Sea Slots", count: 21 },
  { name: "Candy Slots", count: 20 },
  { name: "Dragons Slots", count: 20 },
  { name: "Mystery Slots", count: 20 },
  { name: "Latino Slots", count: 19 },
  { name: "Sports Slots", count: 19 },
  { name: "Wild West Slots", count: 19 },
  { name: "Greek Empire Slots", count: 18 },
  { name: "Mexican Slots", count: 17 },
  { name: "Jungle Slots", count: 16 },
  { name: "Aztec Slots", count: 15 },
  { name: "Explorers Slots", count: 15 },
  { name: "Forest Slots", count: 15 },
  { name: "Horror Slots", count: 15 },
  { name: "Space Slots", count: 15 },
  { name: "Fishing Slots", count: 14 },
  { name: "Jewels Slots", count: 13 },
  { name: "Mines Slots", count: 13 },
  { name: "Music Slots", count: 13 },
  { name: "Pirates Slots", count: 13 },
  { name: "Winter Slots", count: 13 },
  { name: "Leprechaun Slots", count: 12 },
  { name: "Wolf Slots", count: 12 },
  { name: "Cops And Robbers Slots", count: 11 },
  { name: "Fairy Slots", count: 11 },
  { name: "Holidays Slots", count: 11 },
  { name: "Medieval Slots", count: 11 },
  { name: "TV Movies Slots", count: 11 },
  { name: "Celebrity Slots", count: 10 },
  { name: "Fortune Telling Slots", count: 10 },
  { name: "Jesters Slots", count: 10 },
  { name: "African Slots", count: 9 },
  { name: "Beach Slots", count: 9 },
  { name: "Monster Slots", count: 9 },
  { name: "Pig Slots", count: 9 },
  { name: "Wizard Slots", count: 9 },
  { name: "Heist Slots", count: 8 },
  { name: "Japanese Slots", count: 8 },
  { name: "Mafia Slots", count: 8 },
  { name: "Panda Slots", count: 8 },
  { name: "Anime Slots", count: 7 },
  { name: "Cars Slots", count: 7 },
  { name: "Cats Slots", count: 7 },
  { name: "Cowboys Slots", count: 7 },
  { name: "Day Of The Dead Slots", count: 7 },
  { name: "Dinosaurs Slots", count: 7 },
  { name: "Pets Slots", count: 7 },
  { name: "Romans Slots", count: 7 },
  { name: "Sagas Slots", count: 7 },
  { name: "Travel Slots", count: 7 },
  { name: "Aliens Slots", count: 6 },
  { name: "Board Games Slots", count: 6 },
  { name: "Farm Slots", count: 6 },
  { name: "Halloween Slots", count: 6 },
  { name: "Alchemy Slots", count: 5 },
  { name: "Gladiator Slots", count: 5 },
  { name: "King Slots", count: 5 },
  { name: "Science Slots", count: 5 },
  { name: "Tiger Slots", count: 5 },
  { name: "Vikings Slot", count: 5 },
  { name: "Arabian Slots", count: 4 },
  { name: "Easter Slots", count: 4 },
  { name: "Flowers Slots", count: 4 },
  { name: "Mermaid Slots", count: 4 },
  { name: "Ninja Slots", count: 4 },
  { name: "Norse Mythology Slots", count: 4 },
  { name: "Oktoberfest Slots", count: 4 },
  { name: "Romance Slots", count: 4 },
  { name: "Vampires Slots", count: 4 },
  { name: "War Slots", count: 4 },
  { name: "Zombie Slots", count: 4 },
  { name: "Carnival Slots", count: 3 },
  { name: "Comic Slots", count: 3 },
  { name: "Lion Slots", count: 3 },
  { name: "Naughty Slots", count: 3 },
  { name: "Steampunk Slots", count: 3 },
  { name: "Time Travel Slots", count: 3 },
  { name: "Zodiac Slots", count: 3 },
  { name: "Arctic Slots", count: 2 },
  { name: "Art Deco Slots", count: 2 },
  { name: "Circus Slots", count: 2 },
  { name: "Devil Slots", count: 2 },
  { name: "Genie Slots", count: 2 },
  { name: "Horses Slots", count: 2 },
  { name: "Martial Arts Slots", count: 2 },
  { name: "Soccer Slots", count: 2 },
  { name: "Summer Slots", count: 2 },
  { name: "Superheroes Slots", count: 2 },
  { name: "Underworld Slots", count: 2 },
  { name: "Video Games Slots", count: 2 },
  { name: "Aladdin Slots", count: 1 },
  { name: "Tarzan Slots", count: 1 },
  { name: "Tiki Slots", count: 1 },
];

export const dynamic = "force-dynamic";

export default function ThemesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 m-0 p-0 max-lg:block">
        <SidebarNav />
        <main className="flex-1 order-2 py-5 px-5 pl-2.5 max-w-none max-lg:order-0 max-lg:w-full max-lg:max-w-full max-lg:p-4">
          <h1 className="text-3xl font-bold text-[#333] mb-6">Temas de Slots</h1>
          <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
            {themes.map((theme) => (
              <Link
                key={theme.name}
                href={`/br/themes/${theme.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/`}
                className="bg-white rounded-[16px] p-5 no-underline text-[#333] shadow-[rgba(0,0,0,0.08)_0px_2px_8px] hover:shadow-[rgba(81,112,255,0.15)_0px_4px_16px] hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-bold text-base mb-1 group-hover:text-[#5170ff] transition-colors">
                  {theme.name}
                </h3>
                <p className="text-sm text-[#888] m-0">{theme.count} Jogos</p>
              </Link>
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