import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 pt-[120px] pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(/img-hero.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center', // Foca no lado direito (imagem da mulher)
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

      {/* Conteúdo alinhado à esquerda */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <ScrollReveal className="max-w-[700px] text-left">
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
          <div className="flex flex-wrap gap-4 justify-start">
            <a
              href="#"
              className="bg-[#CCFF33] text-[#0a0a0a] font-semibold text-base px-8 py-4 rounded-full
                         flex items-center gap-2 hover:bg-[#e0ff66] transition-all duration-200
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
