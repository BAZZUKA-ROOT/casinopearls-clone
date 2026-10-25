"use client";

import { SlotGame } from "./SlotGame";
import { AviatorGame } from "./AviatorGame";
import { RouletteGame } from "./RouletteGame";
import { BlackjackGame } from "./BlackjackGame";

interface GamePlayerProps {
  title: string;
  provider: string;
  category?: string;
  slug?: string;
}

const AVIATOR_SLUGS = ["aviator", "jetx", "spaceman", "coin-rush"];
const ROULETTE_SLUGS = ["roleta", "roulette", "roleta-ao-vivo", "lightning-roulette", "auto-roulette"];
const BLACKJACK_SLUGS = ["blackjack", "blackjack-live", "classic-blackjack", "european-blackjack", "pontoon"];

export function GamePlayer({ title, provider, category, slug }: GamePlayerProps) {
  const normalizedSlug = (slug || title).toLowerCase();
  const normalizedCategory = (category || "").toLowerCase();

  if (AVIATOR_SLUGS.some((s) => normalizedSlug.includes(s)) || normalizedCategory.includes("crash")) {
    return <AviatorGame />;
  }

  if (ROULETTE_SLUGS.some((s) => normalizedSlug.includes(s)) || normalizedCategory.includes("roleta") || normalizedCategory.includes("roulette")) {
    return <RouletteGame />;
  }

  if (BLACKJACK_SLUGS.some((s) => normalizedSlug.includes(s)) || normalizedCategory.includes("blackjack")) {
    return <BlackjackGame />;
  }

  return <SlotGame title={title} provider={provider} />;
}