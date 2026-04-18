import SectionLabel from './SectionLabel'
import ScrollReveal from './ScrollReveal'
import { Check } from '@phosphor-icons/react'

const PLANS = [
  {
    id: 'starter',
    badge: 'IDEAL PARA COMEÇAR',
    badgeStyle: 'border border-[#CCFF33] text-[#CCFF33]',
    name: 'Starter',
    price: '97',
    limit: 'Academias de até 100 alunos',
    features: [
      'Cadastro ilimitado de alunos (até 100)',
      'Controle de mensalidades',
      'Modo Recepção com QR Code',
      'Dashboard básico',
      'Suporte via chat',
    ],
    cta: 'Começar grátis por 14 dias',
    ctaStyle: 'border border-[#3a3a3a] text-white hover:border-[#666] hover:bg-white/5',
    featured: false,
  },
  {
    id: 'pro',
    badge: 'MAIS ESCOLHIDO',
    badgeStyle: 'bg-[#CCFF33] text-[#0a0a0a]',
    name: 'Pro',
    price: '197',
    limit: 'Academias de até 500 alunos',
    features: [
      'Tudo do Starter',
      'Alunos ilimitados (até 500)',
      'Relatórios financeiros avançados',
      'Alertas automáticos de inadimplência',
      'Histórico completo de frequência',
      'Suporte prioritário',
    ],
    cta: 'Começar grátis por 14 dias',
    ctaStyle: 'bg-[#CCFF33] text-[#0a0a0a] hover:bg-[#e0ff66]',
    featured: true,
  },
  {
    id: 'elite',
    badge: 'PARA GRANDES OPERAÇÕES',
    badgeStyle: 'border border-[#CCFF33] text-[#CCFF33]',
    name: 'Elite',
    price: '397',
    limit: 'Redes e academias com 500+ alunos',
    features: [
      'Tudo do Pro',
      'Alunos ilimitados',
      'Multi-unidade',
      'API para integrações',
      'Gerente de conta dedicado',
      'SLA de suporte garantido',
    ],
    cta: 'Falar com especialista',
    ctaStyle: 'border border-[#3a3a3a] text-white hover:border-[#666] hover:bg-white/5',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="precos" className="py-24 text-center">
      <ScrollReveal className="max-w-[1200px] mx-auto px-10">
        <SectionLabel>PLANOS</SectionLabel>
        <h2 className="font-display font-black uppercase text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}>
          <span className="text-[#CCFF33]">SIMPLES</span> DE ENTENDER.<br /><span className="text-[#CCFF33]">JUSTO</span> DE PAGAR.
        </h2>
        <p className="text-gray-400 text-[15px] leading-[1.7] max-w-[560px] mx-auto mb-14">
          Sem taxa de setup. Sem contrato anual obrigatório. Cancele quando quiser.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col h-full rounded-xl p-9 transition-all duration-200 hover:-translate-y-1
                ${plan.featured
                  ? 'border-[1.5px] border-[#CCFF33] bg-gradient-to-br from-[#161616] to-[#1a1f10] shadow-[0_0_60px_rgba(204,255,51,0.08)]'
                  : 'border border-[#2a2a2a] bg-[#161616]'
                }`}
            >
              {/* Badge */}
              <span className={`w-fit text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full inline-block mb-5 ${plan.badgeStyle}`}>
                {plan.badge}
              </span>

              {/* Name */}
              <h3 className="font-display font-black text-white text-3xl mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span className="text-white text-sm font-bold mb-1.5">R$</span>
                <span className="font-display font-black text-white leading-none text-[46px]">{plan.price}</span>
                <span className="text-gray-400 text-sm mb-1.5">/mês</span>
              </div>

              {/* Limit */}
              <p className="text-gray-400 text-sm mb-7">{plan.limit}</p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <span className="text-[#CCFF33] flex-shrink-0 mt-0.5"><Check size={16} weight="bold" /></span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block mt-auto w-full text-center font-semibold text-sm px-6 py-3.5 rounded-full
                            transition-all duration-200 hover:-translate-y-px ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
