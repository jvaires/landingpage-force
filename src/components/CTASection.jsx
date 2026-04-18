import SectionLabel from './SectionLabel'

export default function CTASection() {
  return (
    <section className="py-24 text-center relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 700px 400px at 50% 50%, rgba(204,255,51,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[680px] mx-auto px-10 relative z-10">
        <SectionLabel>PRONTO PARA COMEÇAR</SectionLabel>

        <h2
          className="font-display font-black uppercase text-white leading-[1.0] mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 60px)' }}
        >
          <span className="text-[#CCFF33]">14 DIAS GRÁTIS.</span><br />SEM CARTÃO DE CRÉDITO.
        </h2>

        <p className="text-gray-400 text-base leading-[1.7] max-w-[520px] mx-auto mb-10">
          Teste o Forgee completo por duas semanas. Se não mudar a forma como você
          gerencia sua academia, você não paga nada.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a
            href="#"
            className="bg-[#CCFF33] text-[#0a0a0a] font-semibold text-base px-8 py-4 rounded-full
                       flex items-center gap-2 hover:bg-[#e0ff66] transition-all duration-200
                       hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(204,255,51,0.25)]"
          >
            Criar minha conta grátis →
          </a>
          <a
            href="#"
            className="bg-transparent text-white font-semibold text-base px-8 py-4 rounded-full
                       border border-[#3a3a3a] hover:border-[#666] hover:bg-white/5
                       transition-all duration-200 hover:-translate-y-px"
          >
            Falar com a equipe
          </a>
        </div>

        <p className="text-[#5a5a5a] text-xs tracking-wide">
          Sem taxa de setup · Sem contrato · Cancele quando quiser
        </p>
      </div>
    </section>
  )
}
