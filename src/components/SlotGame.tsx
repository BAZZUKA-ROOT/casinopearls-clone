"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const SYMBOLS = ["🍒", "🍋", "🍊", "🍇", "💎", "7️⃣", "🔔", "⭐"];
const REEL_COUNT = 5;
const ROW_COUNT = 3;
const SPIN_DURATION = 2000;
const REEL_DELAY = 300;

const INITIAL_GRID: string[][] = Array.from({ length: REEL_COUNT }, () =>
  Array.from({ length: ROW_COUNT }, () => SYMBOLS[0])
);

function getRandomSymbol() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

function generateReel(): string[][] {
  return Array.from({ length: REEL_COUNT }, () =>
    Array.from({ length: ROW_COUNT }, () => getRandomSymbol())
  );
}

interface SlotGameProps {
  title: string;
  provider: string;
}

export function SlotGame({ title, provider }: SlotGameProps) {
  const [grid, setGrid] = useState<string[][]>(INITIAL_GRID);
  const [spinning, setSpinning] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [lastWin, setLastWin] = useState(0);
  const [wins, setWins] = useState<{ symbol: string; count: number; payout: number }[]>([]);
  const [reelStates, setReelStates] = useState<boolean[]>(Array(REEL_COUNT).fill(false));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setGrid(generateReel());
  }, []);

  const checkWins = useCallback((finalGrid: string[][]) => {
    const newWins: { symbol: string; count: number; payout: number }[] = [];
    const payouts: Record<string, number> = {
      "🍒": 2, "🍋": 3, "🍊": 4, "🍇": 5,
      "💎": 10, "7️⃣": 15, "🔔": 8, "⭐": 20,
    };

    for (let row = 0; row < ROW_COUNT; row++) {
      let matchCount = 1;
      const firstSymbol = finalGrid[0][row];
      for (let col = 1; col < REEL_COUNT; col++) {
        if (finalGrid[col][row] === firstSymbol) {
          matchCount++;
        } else {
          break;
        }
      }
      if (matchCount >= 3) {
        const payout = (payouts[firstSymbol] || 2) * matchCount * (bet / 10);
        newWins.push({ symbol: firstSymbol, count: matchCount, payout });
      }
    }

    if (newWins.length > 0) {
      const totalWin = newWins.reduce((sum, w) => sum + w.payout, 0);
      setLastWin(totalWin);
      setBalance((prev) => +(prev + totalWin).toFixed(2));
      setWins(newWins);
    } else {
      setLastWin(0);
      setWins([]);
    }
  }, [bet]);

  const spin = useCallback(() => {
    if (spinning || balance < bet) return;
    setBalance((prev) => +(prev - bet).toFixed(2));
    setSpinning(true);
    setLastWin(0);
    setWins([]);
    setReelStates(Array(REEL_COUNT).fill(true));

    const intervals: NodeJS.Timeout[] = [];
    const tempGrids: string[][][] = Array.from({ length: REEL_COUNT }, () => []);

    for (let i = 0; i < REEL_COUNT; i++) {
      const interval = setInterval(() => {
        setGrid((prev) => {
          const next = prev.map((col) => [...col]);
          for (let r = 0; r < ROW_COUNT; r++) {
            next[i][r] = getRandomSymbol();
          }
          return next;
        });
      }, 80);
      intervals.push(interval);

      setTimeout(() => {
        clearInterval(interval);
        setReelStates((prev) => {
          const next = [...prev];
          next[i] = false;
          return next;
        });

        if (i === REEL_COUNT - 1) {
          const finalGrid = generateReel();
          setGrid(finalGrid);
          setSpinning(false);
          checkWins(finalGrid);
        }
      }, SPIN_DURATION + i * REEL_DELAY);
    }
  }, [spinning, balance, bet, checkWins]);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-[#0f172a] flex items-center justify-center">
        <div className="text-white text-lg animate-pulse">Carregando jogo...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#0f172a] rounded-[16px] flex flex-col overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-[#16213e] px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div>
          <h2 className="text-white font-bold text-base leading-tight">{title}</h2>
          <span className="text-gray-400 text-xs">{provider}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] text-gray-400 uppercase tracking-wide block">Saldo</span>
            <span className="text-green-400 font-bold text-lg">R$ {balance.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Reels */}
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="flex gap-2 max-w-full">
          {grid.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col gap-1.5 bg-[#0a0e1a] rounded-xl p-2 border-2 transition-all duration-200 ${
                reelStates[colIdx]
                  ? "border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                  : lastWin > 0 && !spinning
                  ? "border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.3)]"
                  : "border-white/10"
              }`}
            >
              {col.map((symbol, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl sm:text-4xl bg-[#1a1a2e] rounded-lg select-none ${
                    reelStates[colIdx] ? "animate-pulse opacity-70 blur-[1px]" : ""
                  }`}
                >
                  {symbol}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Win Display */}
      {lastWin > 0 && !spinning && (
        <div className="text-center py-3 bg-gradient-to-r from-yellow-500/20 via-yellow-400/30 to-yellow-500/20 border-y border-yellow-500/30">
          <span className="text-yellow-400 font-black text-2xl animate-bounce inline-block">
            🎉 GANHOU R$ {lastWin.toFixed(2)}! 🎉
          </span>
          <div className="flex justify-center gap-3 mt-1">
            {wins.map((w, i) => (
              <span key={i} className="text-xs text-yellow-300">
                {w.symbol}×{w.count} = R${w.payout.toFixed(2)}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="bg-[#16213e] p-4 flex items-center gap-3 flex-wrap border-t border-white/10">
        <div className="flex items-center gap-2 flex-1 min-w-[140px]">
          <button
            onClick={() => setBet(Math.max(1, bet - 1))}
            disabled={spinning}
            className="w-9 h-9 rounded-lg bg-[#2a3a4a] text-white font-bold text-lg border-none cursor-pointer hover:bg-[#3a4a5a] disabled:opacity-50 transition-colors"
          >
            −
          </button>
          <div className="flex flex-col items-center flex-1">
            <span className="text-[10px] text-gray-400 uppercase tracking-wide">Aposta</span>
            <span className="text-white font-bold text-xl">R$ {bet}</span>
          </div>
          <button
            onClick={() => setBet(Math.min(balance, bet + 1))}
            disabled={spinning}
            className="w-9 h-9 rounded-lg bg-[#2a3a4a] text-white font-bold text-lg border-none cursor-pointer hover:bg-[#3a4a5a] disabled:opacity-50 transition-colors"
          >
            +
          </button>
        </div>

        <div className="flex gap-1.5">
          {[5, 10, 25, 50, 100].map((v) => (
            <button
              key={v}
              onClick={() => setBet(Math.min(balance, v))}
              disabled={spinning}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border-none cursor-pointer transition-all ${
                bet === v
                  ? "bg-[#5170ff] text-white scale-105"
                  : "bg-[#2a3a4a] text-gray-300 hover:bg-[#3a4a5a]"
              } disabled:opacity-50`}
            >
              R${v}
            </button>
          ))}
        </div>

        <button
          onClick={spin}
          disabled={spinning || balance < bet}
          className={`px-10 py-3.5 rounded-xl font-black text-lg border-none cursor-pointer transition-all min-w-[160px] uppercase tracking-wider ${
            spinning
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : balance < bet
              ? "bg-red-900/50 text-red-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#5170ff] to-[#7a00df] text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(81,112,255,0.5)] active:scale-95"
          }`}
        >
          {spinning ? "GIRANDO..." : "GIRAR"}
        </button>
      </div>

      {/* Paytable hint */}
      <div className="bg-[#0a0e1a] px-4 py-2 flex items-center justify-center gap-4 text-[10px] text-gray-500 border-t border-white/5">
        <span>💎 10x</span>
        <span>7️⃣ 15x</span>
        <span>⭐ 20x</span>
        <span>🔔 8x</span>
        <span>🍇 5x</span>
        <span>Mínimo 3 iguais da esquerda</span>
      </div>
    </div>
  );
}