import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-[#f0f2f5]">
        <div className="w-full max-w-[420px] bg-white rounded-[20px] shadow-[rgba(0,0,0,0.1)_0px_4px_8px] p-8">
          <div className="text-center mb-8">
            <img
              src="/images/Casino_Pearl_150.webp"
              alt="Casino Pearls"
              width={130}
              height={60}
              className="h-10 w-auto block mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-[#333]">Criar Conta</h1>
            <p className="text-sm text-[#666] mt-2">Cadastre-se grátis e comece a jogar</p>
          </div>

          <form className="space-y-4" action="#" method="post">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#333] mb-1.5">
                Nome de Usuário
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-[12px] border border-[#ddd] bg-[#f8f9fa] text-sm text-[#333] outline-none focus:border-[#5170ff] focus:bg-white transition-all"
                placeholder="Seu nome de usuário"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#333] mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-[12px] border border-[#ddd] bg-[#f8f9fa] text-sm text-[#333] outline-none focus:border-[#5170ff] focus:bg-white transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#333] mb-1.5">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={8}
                className="w-full px-4 py-3 rounded-[12px] border border-[#ddd] bg-[#f8f9fa] text-sm text-[#333] outline-none focus:border-[#5170ff] focus:bg-white transition-all"
                placeholder="Mínimo 8 caracteres"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-semibold text-[#333] mb-1.5">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                minLength={8}
                className="w-full px-4 py-3 rounded-[12px] border border-[#ddd] bg-[#f8f9fa] text-sm text-[#333] outline-none focus:border-[#5170ff] focus:bg-white transition-all"
                placeholder="Repita a senha"
              />
            </div>

            <label className="flex items-start gap-2 cursor-pointer pt-2">
              <input type="checkbox" required className="rounded border-[#ddd] mt-0.5" />
              <span className="text-xs text-[#666] leading-relaxed">
                Li e concordo com os{" "}
                <Link href="/br/termos/" className="text-[#5170ff] hover:underline no-underline">
                  Termos de Uso
                </Link>{" "}
                e a{" "}
                <Link href="/br/privacidade/" className="text-[#5170ff] hover:underline no-underline">
                  Política de Privacidade
                </Link>
                . Tenho mais de 18 anos.
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3.5 rounded-[30px] text-white font-bold text-base bg-gradient-to-r from-[#5170ff] to-[#7a00df] border-none cursor-pointer hover:opacity-90 transition-opacity"
            >
              CADASTRAR
            </button>
          </form>

          <p className="text-center text-sm text-[#666] mt-6">
            Já tem uma conta?{" "}
            <Link href="/br/login/" className="text-[#5170ff] font-semibold hover:underline no-underline">
              Entrar
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}