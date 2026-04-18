import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-4 md:px-10 pt-[120px] pb-20 overflow-hidden bg-[position:65%_center] md:bg-[position:right_center]"
      style={{
        backgroundImage: `url(/img-hero.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay: gradiente escuro muito mais agressivo na esquerda para pixel perfect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.6) 60%, transparent 100%)',
        }}
      />
      {/* Mobile background overlay para manter o texto branco legível com bg centralizado */}
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden bg-black/60" />

      {/* Conteúdo alinhado à esquerda no desktop e centro no mobile */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto text-center md:text-left">
        <ScrollReveal className="max-w-[700px] mx-auto md:mx-0">
          {/* Eyebrow label */}
          <p className="text-[11px] font-bold tracking-[3px] text-gray-400 uppercase mb-5">
            GESTÃO DE ACADEMIA. SIMPLES ASSIM.
          </p>

          {/* Main Heading */}
          <h1
            className="font-display font-black uppercase text-white leading-[0.95] tracking-tight mb-7"
            style={{ fontSize: 'clamp(56px, 9vw, 100px)' }}
          >
            FORJE RESULTADOS.<br />NÃO PLANILHAS.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-[17px] leading-relaxed max-w-[660px] mb-10">
            O Force cuida da operação para você focar no que importa: seus alunos. Controle de mensalidades, check-in e retenção em um só lugar.
          </p>

          {/* Actions */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center md:justify-start w-full items-stretch md:items-center">
            <a
              href="#"
              className="bg-[#CCFF33] text-[#0a0a0a] font-semibold text-base px-8 py-4 rounded-full
                         flex items-center justify-center gap-2 hover:bg-[#e0ff66] transition-all duration-200
                         hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(204,255,51,0.25)]"
            >
              Começar agora →
            </a>
            <a
              href="#funcionalidades"
              className="bg-transparent text-white font-semibold text-base px-8 py-4 rounded-full
                         border border-[#3a3a3a] hover:border-[#666] hover:bg-white/5
                         transition-all duration-200 hover:-translate-y-px"
            >
              Ver como funciona
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
