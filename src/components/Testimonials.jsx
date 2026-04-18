import SectionLabel from './SectionLabel'
import ScrollReveal from './ScrollReveal'

const TESTIMONIALS = [
  {
    quote: '"Antes eu ficava sabendo que o aluno tinha ido embora só quando via que ele parou de pagar. Com o Forgee, o dashboard me mostrou que três alunos tinham sumido antes de cancelar. Consegui recuperar dois deles."',
    author: 'Ricardo Mendes',
    place: 'Force Gym — São Paulo, SP',
  },
  {
    quote: '"A recepção era um caos. Lista em papel, confusão no acesso, aluno esperando. Agora é QR Code e pronto. A equipe adorou e os alunos nem percebem mais que existe uma recepção."',
    author: 'Camila Souza',
    place: 'Studio CS — Belo Horizonte, MG',
  },
  {
    quote: '"Eu administrava tudo em planilha. Depois de uma semana no Forgee, joguei a planilha fora. Não por obrigação — porque não fazia mais sentido manter."',
    author: 'Paulo Antônio',
    place: 'Iron House — Porto Alegre, RS',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 text-center">
      <ScrollReveal className="max-w-[1200px] mx-auto px-4 md:px-10">
        <SectionLabel>QUEM JÁ USA</SectionLabel>
        <h2 className="font-display font-black uppercase text-white leading-[1.05] mb-14"
            style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}>
          ACADEMIAS QUE <span className="text-[#CCFF33]">PARARAM<br />DE ADIVINHAR.</span>
        </h2>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-left">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="flex-shrink-0 snap-start w-[80vw] max-w-[320px] md:w-auto relative rounded-2xl bg-[#0f0f0f] border border-[#2a2a2a] p-8 md:p-10 flex flex-col justify-between"
            >
              {/* Quote mark */}
              <div className="text-[#CCFF33] font-serif text-5xl leading-none mb-5">"</div>

              {/* Text */}
              <p className="text-gray-400 text-sm leading-[1.7] mb-6">{t.quote}</p>

              {/* Divider */}
              <div className="h-px bg-[#2a2a2a] mb-5" />

              {/* Author */}
              <p className="text-white font-bold text-[15px] mb-1">{t.author}</p>
              <p className="text-[#5a5a5a] text-xs mb-5">{t.place}</p>

              {/* Color bar */}
              <div className="h-1.5 w-24 rounded-full bg-[#CCFF33]" />
            </div>
          ))}
          <div className="w-2 flex-shrink-0 md:hidden" />
        </div>
      </ScrollReveal>
    </section>
  )
}
