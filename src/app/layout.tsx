import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casino Pearls | Jogue Cassino Online Grátis | Ganhe Seu Bônus",
  description:
    "Casino Pearls é a plataforma de casino online gratuita #1 oferecendo uma grande variedade de jogos incluindo caça-níqueis, blackjack, roleta e códigos promocionais exclusivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}