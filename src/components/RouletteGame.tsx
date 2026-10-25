"use client";

import { useState, useRef } from "react";

const NUMBERS = Array.from({ length: 37 }, (_, i) => i); // 0-36
const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

type BetType = "number" | "red" | "black" | "even" | "odd" | "low" | "high";

interface Bet {
  type: BetType;
  value?: number;
  amount: number;
}

export function RouletteGame() {
  const [balance, setBalance] = useState(1000);
  const [bets, setBets] = useState<Bet[]>([]);
  const [chipValue, setChipValue] = useState(10);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [lastWin, setLastWin] = useState<{ amount: number; message: string } | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const getNumberColor = (n: number) => {
    if (n === 0) return "green";
    return RED_NUMBERS.includes(n) ? "red" : "black";
  };

  const placeBet = (type: BetType, value?: number) => {
    if (spinning || balance < chipValue) return;
    setBalance((prev) => prev - chipValue);
    setBets((prev) => [...prev, { type, value, amount: chipValue }]);
  };

  const clearBets = () => {
    if (spinning) return;
    const totalReturn = bets.reduce((sum, b) => sum + b.amount, 0);
    setBalance((prev) => prev + totalReturn);
    setBets([]);
    setLastWin(null);
  };

  const spin = () => {
    if (spinning || bets.length === 0) return;
    setSpinning(true);
    setLastWin(null);

    const winningNumber = Math.floor(Math.random() * 37);
    const rotation = 1440 + Math.random() * 360;

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)";
      wheelRef.current.style.transform = `rotate(${rotation}deg)`;
    }

    setTimeout(() => {
      setResult(winningNumber);
      setSpinning(false);

      let winnings = 0;
      const color = getNumberColor(winningNumber);

      for (const bet of bets) {
        let won = false;
        let multiplier = 0;

        switch (bet.type) {
          case "number":
            if (bet.value === winningNumber) { won = true; multiplier = 35; }
            break;
          case "red":
            if (color === "red") { won = true; multiplier = 1; }
            break;
          case "black":
            if (color === "black") { won = true; multiplier = 1; }
            break;
          case "even":
            if (winningNumber !== 0 && winningNumber % 2 === 0) { won = true; multiplier = 1; }
            break;
          case "odd":
            if (winningNumber !== 0 && winningNumber % 2 !== 0) { won = true; multiplier = 1; }
            break;
          case "low":
            if (winningNumber >= 1 && winningNumber <= 18) { won = true; multiplier = 1; }
            break;
          case "high":
            if (winningNumber >= 19 && winningNumber <= 36) { won = true; multiplier = 1; }
            break;
        }

        if (won) {
          winnings += bet.amount * (multiplier + 1);
        }
      }

      if (winnings > 0) {
        setBalance((prev) => +(prev + winnings).toFixed(2));
        setLastWin({ amount: winnings, message: `Ganhou R$ ${winnings.toFixed(2)}!` });
      } else {
        setLastWin({ amount: 0, message: "Não ganhou desta vez" });
      }

      setBets([]);
    }, 3000);
  };

  const getTotalBet = () => bets.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="w-full h-full bg-[#0a4d2e] rounded-[16px] flex flex-col overflow-hidden font-sans">
      {/* Wheel Display */}
      <div className="flex items-center justify-center py-6 bg-[#083d24]">
        <div className="relative w-48 h-48">
          <div
            ref={wheelRef}
            className="w-full h-full rounded-full border-4 border-yellow-600 bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.3)]"
          >
            <div className="text-center">
              {result !== null ? (
                <>
                  <div className={`text-5xl font-black ${
                    getNumberColor(result) === "red" ? "text-red-500" :
                    getNumberColor(result) === "green" ? "text-green-500" : "text-white"
                  }`}>
                    {result}
                  </div>
                  <div className="text-xs text-gray-400 uppercase mt-1">{getNumberColor(result)}</div>
                </>
              ) : (
                <div className="text-2xl font-bold text-yellow-500 animate-pulse">
                  {spinning ? "..." : "ROLET"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Result Message */}
      {lastWin && (
        <div className={`text-center py-2 font-bold text-sm ${lastWin.amount > 0 ? "text-green-400 bg-green-900/30" : "text-gray-400"}`}>
          {lastWin.message}
        </div>
      )}

      {/* Betting Board */}
      <div className="flex-1 p-3 overflow-y-auto">
        {/* Number Grid */}
        <div className="grid grid-cols-14 gap-0.5 mb-3 max-w-[500px] mx-auto">
          {/* Zero */}
          <button
            onClick={() => placeBet("number", 0)}
            disabled={spinning}
            className={`col-span-2 row-span-3 bg-green-700 hover:bg-green-600 text-white font-bold text-xs rounded-l-md border border-green-800 disabled:opacity-50 transition-colors`}
          >
            0
          </button>
          {/* Numbers 1-36 */}
          {NUMBERS.slice(1).map((n) => (
            <button
              key={n}
              onClick={() => placeBet("number", n)}
              disabled={spinning}
              className={`aspect-square text-white font-bold text-[10px] border border-white/10 hover:brightness-125 disabled:opacity-50 transition-all ${
                RED_NUMBERS.includes(n) ? "bg-red-700" : "bg-gray-900"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Outside Bets */}
        <div className="grid grid-cols-6 gap-1 max-w-[500px] mx-auto">
          {[
            { label: "1-18", type: "low" as BetType },
            { label: "PAR", type: "even" as BetType },
            { label: "VERMELHO", type: "red" as BetType, color: "bg-red-700" },
            { label: "PRETO", type: "black" as BetType, color: "bg-gray-900" },
            { label: "ÍMPAR", type: "odd" as BetType },
            { label: "19-36", type: "high" as BetType },
          ].map((bet) => (
            <button
              key={bet.label}
              onClick={() => placeBet(bet.type)}
              disabled={spinning}
              className={`py-2 px-1 rounded text-[10px] font-bold text-white border border-white/10 hover:brightness-125 disabled:opacity-50 transition-all ${
                bet.color || "bg-[#1a2733]"
              }`}
            >
              {bet.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-[#083d24] p-3 flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-gray-400 uppercase">Ficha:</span>
          {[5, 10, 25, 50, 100].map((v) => (
            <button
              key={v}
              onClick={() => setChipValue(v)}
              className={`w-8 h-8 rounded-full text-[10px] font-bold border-2 transition-all ${
                chipValue === v
                  ? "border-yellow-400 bg-yellow-500 text-black scale-110"
                  : "border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-400"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="flex-1 text-center">
          <span className="text-[10px] text-gray-400 block">Aposta Total</span>
          <span className="text-white font-bold">R$ {getTotalBet()}</span>
        </div>

        <button
          onClick={clearBets}
          disabled={spinning || bets.length === 0}
          className="px-4 py-2 rounded-lg bg-red-600/80 text-white text-xs font-bold border-none cursor-pointer hover:bg-red-600 disabled:opacity-50 transition-colors"
        >
          LIMPAR
        </button>

        <button
          onClick={spin}
          disabled={spinning || bets.length === 0}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-sm border-none cursor-pointer hover:from-yellow-400 hover:to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {spinning ? "GIRANDO..." : "GIRAR"}
        </button>

        <div className="ml-auto text-right">
          <span className="text-[10px] text-gray-400 uppercase block">Saldo</span>
          <span className="text-white font-bold text-lg">R$ {balance.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}