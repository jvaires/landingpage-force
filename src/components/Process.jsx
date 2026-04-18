import SectionLabel from './SectionLabel'
import ScrollReveal from './ScrollReveal'
import { ChartLineUp, CheckCircle } from '@phosphor-icons/react'

/* ── Ícones decorativos ── */
const IconChart = ({ className }) => <ChartLineUp weight="regular" className={className} />
const IconRetain = ({ className }) => <CheckCircle weight="regular" className={className} />

export default function Process() {
  return (
    <section className="py-24">
      <ScrollReveal className="max-w-[1200px] mx-auto px-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <SectionLabel>PROCESSO</SectionLabel>
          <h2
            className="font-display font-black uppercase text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}
          >
            <span className="text-[#CCFF33]">TRÊS PASSOS</span> PARA LARGAR<br />AS PLANILHAS.
          </h2>
          <p className="text-gray-400 text-[15px] leading-[1.7] max-w-[480px] mx-auto">
            Sem migração complexa. Sem treinamento longo. Você começa a usar no mesmo dia.
          </p>
        </div>

        {/* ── Bento Grid ──
            Layout:
            [ Card 01 — grande ]  [ Card 03 ] [ Card 04 ]
            [ Card 01 — grande ]  [   Card 02 — largo   ]
        ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Card 01 — Grande, esquerda */}
          <div
            className="relative overflow-hidden rounded-2xl flex flex-col justify-end min-h-[500px]"
            style={{
              backgroundImage: `url(/card1-gym.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
              }}
            />
            <div className="relative z-10 p-8 text-center">
              <h3 className="font-display text-white font-black uppercase text-3xl mb-2 tracking-wide">Cadastre sua academia</h3>
              <p className="text-white/80 text-sm leading-[1.65]">Crie sua conta, configure seus planos e importe seus alunos. Em menos de 15 minutos, sua academia está dentro do Forgee.</p>
            </div>
          </div>

          {/* Coluna direita: Cards 03/04 (top) e Card 02 (bottom) */}
          <div className="flex flex-col gap-4">

            {/* Linha superior: Cards 03 e 04 lado a lado */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 03 */}
              <div className="relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0f0f0f] hover:border-[#CCFF33]/25 transition-colors duration-300 flex flex-col justify-between p-8 text-center min-h-[240px]">
                <div className="flex justify-center text-[#CCFF33]/40 mt-2">
                  <IconChart className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="font-display text-white font-black uppercase text-2xl mb-2 tracking-wide">Acompanhe</h3>
                  <p className="text-gray-400 text-[13px] leading-[1.65]">Dashboard em tempo real. Veja frequência, inadimplência e alertas em um lugar só.</p>
                </div>
              </div>

              {/* Card 04 */}
              <div
                className="relative overflow-hidden rounded-2xl border border-[#CCFF33]/20 bg-gradient-to-br from-[#141a09] to-[#0f0f0f] hover:border-[#CCFF33]/40 transition-colors duration-300 flex flex-col justify-between p-8 text-center min-h-[240px]"
                style={{ boxShadow: '0 0 40px rgba(204,255,51,0.04)' }}
              >
                <div className="flex justify-center text-[#CCFF33]/80 mt-2">
                  <IconRetain className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="font-display text-white font-black uppercase text-2xl mb-2 tracking-wide">Retenha</h3>
                  <p className="text-gray-400 text-[13px] leading-[1.65]">Identifique quem está sumindo antes que ele cancele. Aja com antecedência.</p>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-[#CCFF33]/5 blur-2xl pointer-events-none" />
              </div>

            </div>

            {/* Linha inferior: Card 02 largo */}
            <div
              className="relative overflow-hidden rounded-2xl flex flex-col justify-end h-[240px]"
              style={{
                backgroundImage: `url(/card2-gym.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top', /* Ajuste para focar no rosto da mulher */
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                }}
              />
              <div className="relative z-10 p-8 text-center">
                <h3 className="font-display text-white font-black uppercase text-3xl mb-2 tracking-wide">Ative a recepção</h3>
                <p className="text-white/80 text-sm leading-[1.65]">Abra o Modo Recepção no tablet da entrada. Cada aluno entra com seu QR Code — sem fila, sem papel, sem erro.</p>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
