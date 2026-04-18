import { Barbell } from '@phosphor-icons/react'

export default function SectionLabel({ children, align = 'center' }) {
  const alignmentClass = align === 'left' ? 'justify-start' : 'justify-center'

  return (
    <div className={`flex ${alignmentClass} mb-6`}>
      <div className="inline-flex items-center gap-2 border border-[#333333] rounded-full px-4 py-1.5 bg-transparent">
        <Barbell size={18} color="#CCFF33" weight="regular" />
        <span className="text-[11px] font-bold tracking-[2.5px] text-[#CCFF33] uppercase leading-none mt-px">
          {children}
        </span>
      </div>
    </div>
  )
}
