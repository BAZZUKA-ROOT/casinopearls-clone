import Link from "next/link";

const footerLinks = [
  {
    title: "Jogos",
    links: [
      { label: "Slots Grátis", href: "/br/jogos-cassino/slots-gratis/" },
      { label: "Crash Games", href: "/br/jogos-cassino/crash-games/" },
      { label: "Jogos de Mesa", href: "/br/jogos-cassino/jogos-de-mesa/" },
      { label: "Novos Jogos", href: "/br/jogos-cassino/novos/" },
    ],
  },
  {
    title: "Informações",
    links: [
      { label: "Sobre Nós", href: "/br/sobre/" },
      { label: "Termos de Uso", href: "/br/termos/" },
      { label: "Política de Privacidade", href: "/br/privacidade/" },
      { label: "Jogo Responsável", href: "/br/jogo-responsavel/" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "FAQ", href: "/br/faq/" },
      { label: "Contato", href: "/br/contato/" },
      { label: "Chat ao Vivo", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-auto">
      <div className="max-w-[1400px] mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/images/Casino_Pearl_150.webp"
              alt="Casino Pearls"
              width={130}
              height={60}
              className="h-10 w-auto block mb-4 brightness-200"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Casino Pearls é a melhor plataforma de jogos de cassino online gratuitos do Brasil.
              Mais de 5000 jogos dos melhores provedores do mundo.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-base mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2024 Casino Pearls. Todos os direitos reservados. Jogue com responsabilidade. 18+
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-500">🔒 SSL Seguro</span>
            <span className="text-xs text-gray-500">✅ Licenciado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}