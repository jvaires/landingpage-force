const COLS = [
  {
    title: 'PRODUTO',
    links: ['Funcionalidades', 'Planos e Preços', 'Novidades', 'Roadmap'],
  },
  {
    title: 'EMPRESA',
    links: ['Sobre a Force', 'Blog', 'Imprensa', 'Contato'],
  },
  {
    title: 'SUPORTE',
    links: ['Central de Ajuda', 'Status do sistema', 'Política de Privacidade', 'Termos de Uso'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#CCFF33]">
      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 pt-14 pb-12 flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        {/* Brand */}
        <div className="flex-shrink-0 min-w-[160px]">
          <div className="flex items-center gap-2 mb-2">
            {/* SVG tem cor #CCFF33 — filtro para deixar escuro sobre fundo lima */}
            <img
              src="/Logo Forgee.svg"
              alt="Force"
              className="w-8 h-8"
              style={{ filter: 'brightness(0)' }}
            />
            <span className="font-display font-black text-[#0a0a0a] text-2xl tracking-widest">
              FORCE
            </span>
          </div>
          <p className="text-[#0a0a0a]/60 text-sm font-medium">Forje sua academia.</p>
        </div>

        {/* Columns */}
        <div className="flex flex-wrap gap-12 flex-1 md:justify-end">
          {COLS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-bold tracking-[2px] text-[#0a0a0a]/50 uppercase mb-5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0a0a0a]/15 max-w-[1200px] mx-auto px-4 md:px-10 py-5 flex justify-center">
        <p className="text-[12px] text-[#0a0a0a]/50">
          © 2026 Force. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
