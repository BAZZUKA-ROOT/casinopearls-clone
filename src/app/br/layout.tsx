import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casino Pearls | Jogue Cassino Online Grátis | Ganhe Seu Bônus",
  description:
    "Casino Pearls é a plataforma de casino online gratuita #1 oferecendo uma grande variedade de jogos incluindo caça-níqueis, blackjack, roleta e códigos promocionais exclusivos.",
  alternates: {
    canonical: "https://casinopearls.com/br/",
  },
  openGraph: {
    title: "Casino Pearls | Jogue Cassino Online Grátis | Ganhe Seu Bônus",
    url: "https://casinopearls.com/br/",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}