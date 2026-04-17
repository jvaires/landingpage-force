import { useState } from 'react'
import SectionLabel from './SectionLabel'

const FAQS = [
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. O Forgee é 100% web. Funciona no navegador — desktop, tablet ou celular. Sem instalação, sem atualização manual.',
  },
  {
    q: 'Posso importar minha lista de alunos atual?',
    a: 'Sim. Você importa via planilha CSV ou cadastra manualmente. Nossa equipe pode te ajudar na migração sem custo adicional.',
  },
  {
    q: 'O Modo Recepção funciona offline?',
    a: 'O Modo Recepção precisa de internet para validar o acesso em tempo real, mas consome pouquíssimo dado. Você pode usar até no 4G.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Todos os dados são armazenados com criptografia e backup automático. Você não perde nada.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. O Forgee é uma assinatura mensal sem contrato de fidelidade. Você pode cancelar quando quiser através do painel.',
  },
  {
    q: 'O Forgee funciona para estúdios pequenos?',
    a: 'Sim. O plano Starter foi feito para quem tem até 100 alunos e quer profissionalizar a operação sem gastar muito.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border rounded-xl overflow-hidden bg-[#161616] transition-colors duration-200
        ${open ? 'border-[#CCFF33]/30' : 'border-[#2a2a2a] hover:border-[#CCFF33]/20'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-5 px-6 py-[22px] text-left
                    font-medium text-[15px] transition-colors duration-200 cursor-pointer
                    ${open ? 'text-[#CCFF33]' : 'text-white hover:text-[#CCFF33]'}`}
      >
        {q}
        <svg
          className={`flex-shrink-0 transition-transform duration-200 text-gray-400 ${open ? 'rotate-180 text-[#CCFF33]' : ''}`}
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-[#2a2a2a] px-6 pt-4 pb-[22px] text-left">
          <p className="text-gray-400 text-sm leading-[1.7]">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 text-center">
      <div className="max-w-[720px] mx-auto px-10">
        <SectionLabel>DÚVIDAS</SectionLabel>
        <h2 className="font-display font-black uppercase text-white leading-[1.05] mb-10"
            style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}>
          PERGUNTAS QUE TODO GESTOR FAZ<br />ANTES DE ASSINAR.
        </h2>

        <div className="flex flex-col gap-1">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
