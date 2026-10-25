import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function LoginPage() {
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
 <h1 className="text-2xl font-bold text-[#333]">Entrar</h1>
 <p className="text-sm text-[#666] mt-2">Acesse sua conta para jogar</p>
 </div>

 <form className="space-y-4" action="#" method="post">
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
 className="w-full px-4 py-3 rounded-[12px] border border-[#ddd] bg-[#f8f9fa] text-sm text-[#333] outline-none focus:border-[#5170ff] focus:bg-white transition-all"
 placeholder="••••••••"
 />
 </div>

 <div className="flex items-center justify-between text-sm">
 <label className="flex items-center gap-2 cursor-pointer">
 <input type="checkbox" className="rounded border-[#ddd]" />
 <span className="text-[#666]">Lembrar-me</span>
 </label>
 <Link href="/br/recuperar-senha/" className="text-[#5170ff] hover:underline no-underline">
 Esqueceu a senha?
 </Link>
 </div>

 <button
 type="submit"
 className="w-full py-3.5 rounded-[30px] text-white font-bold text-base bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-none cursor-pointer hover:opacity-90 transition-opacity"
 >
 ENTRAR
 </button>
 </form>

 <p className="text-center text-sm text-[#666] mt-6">
 Não tem uma conta?{" "}
 <Link href="/br/register/" className="text-[#5170ff] font-semibold hover:underline no-underline">
 Cadastre-se grátis
 </Link>
 </p>
 </div>
 </main>
 <Footer />
 </div>
 );
}