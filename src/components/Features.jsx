import SectionLabel from './SectionLabel'
import { Layout, UsersThree, CurrencyDollar, QrCode } from '@phosphor-icons/react'

const FEATURES = [
  {
    tag: 'DASHBOARD',
    icon: <Layout size={20} weight="regular" />,
    title: 'Tudo que importa em uma tela',
    desc: 'Métricas de retenção, inadimplência e frequência atualizadas em tempo real. Você sabe o que está acontecendo antes de precisar perguntar.',
  },
  {
    tag: 'GESTÃO DE ALUNOS',
    icon: <UsersThree size={20} weight="regular" />,
    title: 'Cada membro. Cada detalhe.',
    desc: 'Cadastro completo, histórico de frequência e status de plano em um perfil só. Filtros e busca para encontrar qualquer aluno em segundos.',
  },
  {
    tag: 'MENSALIDADES',
    icon: <CurrencyDollar size={20} weight="regular" />,
    title: 'Sem deixar dinheiro na mesa',
    desc: 'Controle de pagamentos, listagem de inadimplentes e histórico financeiro por aluno. Cobranças geradas antes do vencimento.',
  },
  {
    tag: 'MODO RECEPÇÃO',
    icon: <QrCode size={20} weight="regular" />,
    title: 'Check-in em 2 segundos',
    desc: 'QR Code por aluno. Acesso validado na hora. Interface otimizada para tablet na recepção — sem treinamento, sem margem para erro.',
  },
]

// Offset de top para cada card empilhado (cria o efeito de deck)
const CARD_TOP_OFFSET = 80 // px base
const CARD_STACK_STEP = 20  // px adicional por card

export default function Features() {
  return (
    <section id="funcionalidades" className="relative">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Sticky label + título + subtítulo ── */}
          <div className="lg:w-[38%] lg:sticky lg:top-24 py-24 flex-shrink-0">
            <SectionLabel align="left">FUNCIONALIDADES</SectionLabel>
            <h2
              className="font-display font-black uppercase text-white leading-[1.05] mt-1 mb-6"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              O SISTEMA QUE FAZ O <span className="text-[#CCFF33]">TRABALHO SUADO.</span>
            </h2>
            <p className="text-gray-400 text-[15px] leading-[1.7]">
              O Forgee foi construído para academias que querem crescer sem afundar em processos.
              Cada funcionalidade resolve um problema real — sem feature desnecessária.
            </p>
          </div>

          {/* ── RIGHT: Stacking sticky cards ── */}
          <div className="lg:w-[62%] flex flex-col pt-6 lg:pt-24 pb-32">
            {FEATURES.map((f, i) => (
              <div
                key={f.tag}
                className="sticky rounded-2xl bg-[#161616] border border-[#2a2a2a] p-8
                           transition-shadow duration-300
                           hover:border-[#CCFF33]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                style={{
                  top: `${CARD_TOP_OFFSET + i * CARD_STACK_STEP}px`,
                  zIndex: i + 1,
                  marginBottom: '16px',
                  // Sombra progressiva para dar profundidade ao empilhamento
                  boxShadow: `0 ${(i + 1) * 4}px ${(i + 1) * 12}px rgba(0,0,0,${0.2 + i * 0.1})`,
                }}
              >
                {/* Tag */}
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#5a5a5a] uppercase mb-5">
                  <span className="text-[#CCFF33]">{f.icon}</span>
                  {f.tag}
                </div>

                {/* Title */}
                <h3 className="font-display font-black uppercase text-white text-[25px] leading-tight mb-3 mt-1 tracking-wide">{f.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-[1.65]">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
