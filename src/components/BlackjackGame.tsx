"use client";

import { useState, useCallback } from "react";

const SUITS = ["♠", "♥", "♦", "♣"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

interface Card {
 suit: string;
 value: string;
 numericValue: number;
}

function createDeck(): Card[] {
 const deck: Card[] = [];
 for (const suit of SUITS) {
   for (const value of VALUES) {
     let numericValue = parseInt(value);
     if (["J", "Q", "K"].includes(value)) numericValue = 10;
     if (value === "A") numericValue = 11;
     deck.push({ suit, value, numericValue });
   }
 }
 // Fisher-Yates shuffle avoids Math.random() in sort comparator
 for (let i = deck.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [deck[i], deck[j]] = [deck[j], deck[i]];
 }
 return deck;
}

function calculateHand(cards: Card[]): number {
 let total = cards.reduce((sum, c) => sum + c.numericValue, 0);
 let aces = cards.filter((c) => c.value === "A").length;
 while (total > 21 && aces > 0) {
   total -= 10;
   aces--;
 }
 return total;
}

function CardDisplay({ card }: { card: Card }) {
 const isRed = card.suit === "♥" || card.suit === "♦";
 return (
   <div className="w-14 h-20 bg-white rounded-lg shadow-md flex flex-col items-center justify-between p-1 select-none">
     <span className={`text-sm font-bold self-start ${isRed ? "text-red-600" : "text-gray-900"}`}>
       {card.value}
     </span>
     <span className={`text-2xl ${isRed ? "text-red-600" : "text-gray-900"}`}>{card.suit}</span>
     <span className={`text-sm font-bold self-end rotate-180 ${isRed ? "text-red-600" : "text-gray-900"}`}>
       {card.value}
     </span>
   </div>
 );
}

export function BlackjackGame() {
 const [balance, setBalance] = useState(1000);
 const [bet, setBet] = useState(10);
 const [deck, setDeck] = useState<Card[]>([]);
 const [playerHand, setPlayerHand] = useState<Card[]>([]);
 const [dealerHand, setDealerHand] = useState<Card[]>([]);
 const [gameState, setGameState] = useState<"idle" | "playing" | "dealerTurn" | "finished">("idle");
 const [message, setMessage] = useState("");
 const [winAmount, setWinAmount] = useState(0);

 const deal = () => {
   if (balance < bet) return;
   const newDeck = createDeck();
   const pHand = [newDeck.pop()!, newDeck.pop()!];
   const dHand = [newDeck.pop()!, newDeck.pop()!];
   setDeck(newDeck);
   setPlayerHand(pHand);
   setDealerHand(dHand);
   setBalance((prev) => prev - bet);
   setGameState("playing");
   setMessage("");
   setWinAmount(0);

   if (calculateHand(pHand) === 21) {
     setGameState("finished");
     const dealerTotal = calculateHand(dHand);
     if (dealerTotal === 21) {
       setBalance((prev) => prev + bet);
       setMessage("Empate! Ambos com Blackjack.");
     } else {
       const win = +(bet * 2.5).toFixed(2);
       setBalance((prev) => +(prev + win).toFixed(2));
       setWinAmount(win);
       setMessage(`Blackjack! Você ganhou R$ ${win.toFixed(2)}!`);
     }
   }
 };

 const hit = () => {
   if (gameState !== "playing") return;
   const newDeck = [...deck];
   const card = newDeck.pop()!;
   const newHand = [...playerHand, card];
   setDeck(newDeck);
   setPlayerHand(newHand);

   if (calculateHand(newHand) > 21) {
     setGameState("finished");
     setMessage("Estourou! Você perdeu.");
   }
 };

 const stand = () => {
   if (gameState !== "playing") return;
   setGameState("dealerTurn");

   let currentDealerHand = [...dealerHand];
   let currentDeck = [...deck];

   const drawDealerCards = () => {
     while (calculateHand(currentDealerHand) < 17) {
       currentDealerHand.push(currentDeck.pop()!);
     }
     setDealerHand(currentDealerHand);
     setDeck(currentDeck);
     resolveGame(playerHand, currentDealerHand);
   };

   setTimeout(drawDealerCards, 600);
 };

 const doubleDown = () => {
   if (gameState !== "playing" || playerHand.length !== 2 || balance < bet) return;
   const newDeck = [...deck];
   const card = newDeck.pop()!;
   const newHand = [...playerHand, card];
   setDeck(newDeck);
   setPlayerHand(newHand);
   setBalance((prev) => prev - bet);

   if (calculateHand(newHand) > 21) {
     setGameState("finished");
     setMessage("Estourou no Double Down! Você perdeu.");
   } else {
     setGameState("dealerTurn");
     let currentDealerHand = [...dealerHand];
     let currentDeck = [...deck];
     while (calculateHand(currentDealerHand) < 17) {
       currentDealerHand.push(currentDeck.pop()!);
     }
     setDealerHand(currentDealerHand);
     setDeck(currentDeck);
     resolveGame(newHand, currentDealerHand, true);
   }
 };

 const resolveGame = (pHand: Card[], dHand: Card[], doubled = false) => {
   const pTotal = calculateHand(pHand);
   const dTotal = calculateHand(dHand);
   const effectiveBet = doubled ? bet * 2 : bet;

   setGameState("finished");

   if (dTotal > 21) {
     const win = +(effectiveBet * 2).toFixed(2);
     setBalance((prev) => +(prev + win).toFixed(2));
     setWinAmount(win);
     setMessage(`Dealer estourou! Você ganhou R$ ${win.toFixed(2)}!`);
   } else if (pTotal > dTotal) {
     const win = +(effectiveBet * 2).toFixed(2);
     setBalance((prev) => +(prev + win).toFixed(2));
     setWinAmount(win);
     setMessage(`Você venceu! Ganhou R$ ${win.toFixed(2)}!`);
   } else if (pTotal === dTotal) {
     setBalance((prev) => +(prev + effectiveBet).toFixed(2));
     setMessage("Empate! Aposta devolvida.");
   } else {
     setMessage(`Dealer venceu com ${dTotal}. Você perdeu.`);
   }
 };

 return (
   <div className="w-full h-full bg-[#0a4d2e] rounded-[16px] flex flex-col overflow-hidden font-sans">
     {/* Table */}
     <div className="flex-1 p-4 flex flex-col items-center justify-center gap-6 relative">
       {/* Dealer Area */}
       <div className="text-center">
         <span className="text-xs text-green-300/70 uppercase tracking-widest mb-2 block">Dealer</span>
         <div className="flex items-center justify-center gap-2 min-h-[80px]">
           {dealerHand.map((card, i) => (
             <div key={i} className={gameState === "playing" && i === 1 ? "opacity-0 w-14" : ""}>
               {gameState === "playing" && i === 1 ? (
                 <div className="w-14 h-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg border-2 border-blue-700 shadow-md" />
               ) : (
                 <CardDisplay card={card} />
               )}
             </div>
           ))}
           {dealerHand.length > 0 && gameState !== "playing" && (
             <span className="ml-2 text-white font-bold text-lg">
               {calculateHand(dealerHand)}
             </span>
           )}
         </div>
       </div>

       {/* Message */}
       {message && (
         <div className={`px-6 py-3 rounded-xl font-bold text-base animate-in fade-in zoom-in duration-300 ${
           winAmount > 0 ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
           message.includes("perdeu") || message.includes("Estourou") ? "bg-red-500/20 text-red-400 border border-red-500/30" :
           "bg-white/10 text-white border border-white/20"
         }`}>
           {message}
         </div>
       )}

       {/* Player Area */}
       <div className="text-center">
         <div className="flex items-center justify-center gap-2 min-h-[80px]">
           {playerHand.map((card, i) => (
             <CardDisplay key={i} card={card} />
           ))}
           {playerHand.length > 0 && (
             <span className="ml-2 text-white font-bold text-lg">
               {calculateHand(playerHand)}
             </span>
           )}
         </div>
         <span className="text-xs text-green-300/70 uppercase tracking-widest mt-2 block">Sua Mão</span>
       </div>
     </div>

     {/* Controls */}
     <div className="bg-[#083d24] p-4 flex items-center gap-3 flex-wrap">
       {gameState === "idle" || gameState === "finished" ? (
         <>
           <div className="flex items-center gap-2 flex-1 min-w-[140px]">
             <button onClick={() => setBet(Math.max(1, bet - 5))} disabled={gameState === "playing"} className="w-8 h-8 rounded-lg bg-[#1a3a2a] text-white font-bold text-sm border-none cursor-pointer hover:bg-[#2a4a3a] disabled:opacity-50">−</button>
             <div className="flex flex-col items-center flex-1">
               <span className="text-[10px] text-gray-400 uppercase">Aposta</span>
               <span className="text-white font-bold text-lg">R$ {bet}</span>
             </div>
             <button onClick={() => setBet(Math.min(balance, bet + 5))} disabled={gameState === "playing"} className="w-8 h-8 rounded-lg bg-[#1a3a2a] text-white font-bold text-sm border-none cursor-pointer hover:bg-[#2a4a3a] disabled:opacity-50">+</button>
           </div>
           {[10, 25, 50, 100].map((v) => (
             <button key={v} onClick={() => setBet(Math.min(balance, v))} disabled={gameState === "playing"} className="px-3 py-1.5 rounded-lg bg-[#1a3a2a] text-white text-xs font-semibold border-none cursor-pointer hover:bg-[#2a4a3a] disabled:opacity-50">R${v}</button>
           ))}
           <button onClick={deal} disabled={balance < bet} className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-base border-none cursor-pointer hover:from-yellow-400 hover:to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all min-w-[140px]">
             DISTRIBUIR
           </button>
         </>
       ) : (
         <div className="flex items-center justify-center gap-3 w-full">
           <button onClick={hit} disabled={gameState !== "playing"} className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold text-sm border-none cursor-pointer hover:bg-green-500 disabled:opacity-50 transition-colors">PEDIR</button>
           <button onClick={stand} disabled={gameState !== "playing"} className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm border-none cursor-pointer hover:bg-red-500 disabled:opacity-50 transition-colors">PARAR</button>
           <button onClick={doubleDown} disabled={gameState !== "playing" || playerHand.length !== 2} className="px-6 py-3 rounded-xl bg-yellow-600 text-black font-bold text-sm border-none cursor-pointer hover:bg-yellow-500 disabled:opacity-50 transition-colors">DOBRAR</button>
         </div>
       )}

       <div className="ml-auto text-right">
         <span className="text-[10px] text-gray-400 uppercase block">Saldo</span>
         <span className="text-white font-bold text-lg">R$ {balance.toFixed(2)}</span>
       </div>
     </div>
   </div>
 );
}