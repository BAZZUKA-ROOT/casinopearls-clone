"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "agent";
}

const AUTO_REPLIES = [
  "Olá! Bem-vindo ao Casino Pearls! 🎰 Como posso ajudar?",
  "Temos mais de 5000 jogos disponíveis! Qual você gostaria de jogar?",
  "Para depósitos e saques, acesse a área de caixa no seu perfil.",
  "Nosso bônus de boas-vindas é de 100% até R$ 1.000! 🎉",
  "Se precisar de ajuda com algum jogo, estou aqui para auxiliar!",
  "O tempo médio de resposta é de 2 minutos. Aguarde um momento!",
];

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      setMessages([
        {
          id: 1,
          text: "Olá! 👋 Sou o assistente virtual do Casino Pearls. Como posso ajudar você hoje?",
          sender: "agent",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
      const agentMsg: ChatMessage = {
        id: Date.now() + 1,
        text: reply,
        sender: "agent",
      };
      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 lg:bottom-6 right-4 z-[200] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600 rotate-90"
            : "bg-gradient-to-r from-[#5170ff] to-[#7a00df] hover:scale-110 animate-bounce"
        }`}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Unread Badge */}
      {!isOpen && (
        <span className="fixed bottom-[76px] lg:bottom-[62px] right-4 z-[201] w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">1</span>
        </span>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 lg:bottom-24 right-4 z-[200] w-[340px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5170ff] flex items-center justify-center text-white font-bold text-sm">
              CP
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Suporte Casino Pearls</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-xs">Online agora</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 h-[320px] overflow-y-auto p-4 space-y-3 bg-[#f8f9fa]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#5170ff] text-white rounded-br-md"
                      : "bg-white text-[#333] border border-gray-200 rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2.5 rounded-full border border-gray-300 text-sm outline-none focus:border-[#5170ff] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="w-9 h-9 rounded-full bg-[#5170ff] text-white flex items-center justify-center hover:bg-[#4060ee] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              Powered by Casino Pearls Support
            </p>
          </div>
        </div>
      )}
    </>
  );
}