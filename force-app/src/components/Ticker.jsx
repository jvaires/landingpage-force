const ITEMS = [
  'ZERO PLANILHAS', 'CONTROLE FINANCEIRO', 'MODO RECEPÇÃO',
  'DASHBOARD EM TEMPO REAL', 'FORJE SUA ACADEMIA', 'RETENÇÃO DE ALUNOS',
  'CHECK-IN EM 2 SEGUNDOS',
]

function TickerTrack({ reverse = false }) {
  // Duplicate items for seamless loop
  const allItems = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div
      className="flex w-max"
      style={{ animation: `ticker-scroll 40s linear infinite${reverse ? ' reverse' : ''}` }}
    >
      {allItems.map((item, i) => (
        <span key={i} className="flex items-center font-display font-bold text-sm tracking-[2px] uppercase text-[#0a0a0a] px-6 whitespace-nowrap">
          {item}
          <span className="ml-6 text-[10px] opacity-60">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Ticker({ reverse = false }) {
  return (
    <div className="overflow-hidden bg-[#CCFF33] h-12 flex items-center">
      <TickerTrack reverse={reverse} />
    </div>
  )
}
