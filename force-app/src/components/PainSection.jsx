import SectionLabel from './SectionLabel'
import ScrollReveal from './ScrollReveal'
import { TrendDown, UsersThree, ClockCountdown } from '@phosphor-icons/react'

const CARDS = [
  {
    icon: <TrendDown size={32} weight="regular" />,
    title: 'Inadimplência invisível',
    desc: 'Você só descobre que o aluno não pagou quando ele já sumiu.',
  },
  {
    icon: <UsersThree size={32} weight="regular" />,
    title: 'Evasão silenciosa',
    desc: 'Sem frequência monitorada, não há como agir antes que seja tarde.',
  },
  {
    icon: <ClockCountdown size={32} weight="regular" />,
    title: 'Recepção lenta',
    desc: 'Check-in manual gera fila, erro e má impressão logo na entrada.',
  },
]

export default function PainSection() {
  return (
    <section className="py-24 text-center">
      <ScrollReveal className="max-w-[1200px] mx-auto px-10">
        <SectionLabel>POR QUE ACADEMIAS PERDEM ALUNOS</SectionLabel>
        <h2 className="font-display font-black uppercase text-white text-center leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}>
          A ACADEMIA CHEIA NÃO GARANTE<br />O MÊS SEGUINTE.
        </h2>
        <p className="text-gray-400 text-[15px] leading-[1.7] max-w-[670px] mx-auto mb-14">
          Aluno que some silenciosamente. Mensalidade que vence e ninguém avisa. Recepção
          que não sabe se o acesso está ativo. Você gerencia tudo isso na cabeça — e ainda treina gente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-8 text-left
                         hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                         transition-all duration-200"
            >
              <div className="text-[#CCFF33] mb-5">{card.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
