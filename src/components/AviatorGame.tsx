"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function AviatorGame() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [multiplier, setMultiplier] = useState(1.0);
  const [isFlying, setIsFlying] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const [cashOutPoint, setCashOutPoint] = useState<number | null>(null);
  const [crashPoint, setCrashPoint] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const generateCrashPoint = () => {
    const r = Math.random();
    if (r < 0.3) return +(1 + Math.random() * 0.5).toFixed(2);
    if (r < 0.6) return +(1.5 + Math.random() * 1.5).toFixed(2);
    if (r < 0.85) return +(3 + Math.random() * 4).toFixed(2);
    if (r < 0.95) return +(7 + Math.random() * 8).toFixed(2);
    return +(15 + Math.random() * 20).toFixed(2);
  };

  const startRound = () => {
    if (balance < bet) return;
    setBalance((prev) => prev - bet);
    setMultiplier(1.0);
    setIsFlying(true);
    setCrashed(false);
    setCashOutPoint(null);
    const cp = generateCrashPoint();
    setCrashPoint(cp);
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - (startTimeRef.current || Date.now())) / 1000;
      const newMult = +(1 + elapsed * 0.8 + elapsed * elapsed * 0.15).toFixed(2);

      if (newMult >= cp) {
        setMultiplier(cp);
        setIsFlying(false);
        setCrashed(true);
        setHistory((prev) => [cp, ...prev].slice(0, 10));
        return;
      }

      setMultiplier(newMult);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
  };

  const cashOut = () => {
    if (!isFlying || crashed) return;
    cancelAnimationFrame(requestRef.current!);
    setCashOutPoint(multiplier);
    setIsFlying(false);
    const winnings = +(bet * multiplier).toFixed(2);
    setBalance((prev) => +(prev + winnings).toFixed(2));
    setHistory((prev) => [multiplier, ...prev].slice(0, 10));
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const getMultiplierColor = (val: number) => {
    if (val < 2) return "text-blue-400";
    if (val < 5) return "text-green-400";
    if (val < 10) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="w-full h-full bg-[#0f1923] rounded-[16px] flex flex-col overflow-hidden font-sans">
      {/* History Bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a2733] overflow-x-auto scrollbar-hide">
        {history.map((h, i) => (
          <span
            key={i}
            className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold ${
              h < 2 ? "bg-blue-500/20 text-blue-400" : h < 5 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
            }`}
          >
            {h}x
          </span>
        ))}
        {history.length === 0 && <span className="text-[10px] text-gray-500">Sem histórico</span>}
      </div>

      {/* Game Area */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Plane / Multiplier Display */}
        <div className="text-center z-10">
          <div
            className={`text-6xl font-black transition-colors duration-200 ${
              crashed ? "text-red-500" : cashOutPoint ? "text-green-400" : getMultiplierColor(multiplier)
            }`}
          >
            {crashed ? `${crashPoint}x` : `${multiplier.toFixed(2)}x`}
          </div>
          {crashed && (
            <div className="mt-2 text-red-400 font-bold text-lg animate-pulse">CRASHED!</div>
          )}
          {cashOutPoint && !crashed && (
            <div className="mt-2 text-green-400 font-bold text-lg">
              Ganhou R$ {(bet * cashOutPoint).toFixed(2)}!
            </div>
          )}
          {!isFlying && !crashed && !cashOutPoint && (
            <div className="mt-2 text-gray-500 text-sm">Faça sua aposta e clique em APOSTAR</div>
          )}
        </div>

        {/* Animated curve background */}
        {isFlying && (
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
              <path
                d={`M 0 200 Q ${Math.min(multiplier * 30, 350)} ${200 - Math.min(multiplier * 15, 180)} ${Math.min(multiplier * 40, 400)} ${Math.max(200 - multiplier * 20, 10)}`}
                fill="none"
                stroke="#5170ff"
                strokeWidth="3"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-[#1a2733] p-4 flex items-center gap-3 max-md:flex-wrap">
        <div className="flex items-center gap-2 flex-1 min-w-[140px]">
          <button
            onClick={() => setBet(Math.max(1, bet - 1))}
            disabled={isFlying}
            className="w-8 h-8 rounded-lg bg-[#2a3a4a] text-white font-bold text-sm border-none cursor-pointer hover:bg-[#3a4a5a] disabled:opacity-50"
          >
            −
          </button>
          <div className="flex flex-col items-center flex-1">
            <span className="text-[10px] text-gray-400 uppercase tracking-wide">Aposta</span>
            <span className="text-white font-bold text-lg">R$ {bet}</span>
          </div>
          <button
            onClick={() => setBet(Math.min(balance, bet + 1))}
            disabled={isFlying}
            className="w-8 h-8 rounded-lg bg-[#2a3a4a] text-white font-bold text-sm border-none cursor-pointer hover:bg-[#3a4a5a] disabled:opacity-50"
          >
            +
          </button>
        </div>

        <div className="flex gap-1.5">
          {[5, 10, 50, 100].map((v) => (
            <button
              key={v}
              onClick={() => setBet(Math.min(balance, v))}
              disabled={isFlying}
              className="px-3 py-1.5 rounded-lg bg-[#2a3a4a] text-white text-xs font-semibold border-none cursor-pointer hover:bg-[#3a4a5a] disabled:opacity-50"
            >
              R${v}
            </button>
          ))}
        </div>

        <button
          onClick={isFlying ? cashOut : startRound}
          disabled={!isFlying && balance < bet}
          className={`px-8 py-3 rounded-xl font-bold text-base border-none cursor-pointer transition-all min-w-[140px] ${
            isFlying
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : crashed || cashOutPoint
                ? "bg-[#5170ff] hover:bg-[#4060ee] text-white"
                : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isFlying
            ? `SACAR ${(bet * multiplier).toFixed(0)}`
            : crashed || cashOutPoint
              ? "APOSTAR"
              : "APOSTAR"}
        </button>

        <div className="ml-auto text-right">
          <span className="text-[10px] text-gray-400 uppercase tracking-wide block">Saldo</span>
          <span className="text-white font-bold text-lg">R$ {balance.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}