import { useState, useEffect, useRef } from 'react'

/* Hook para animar os números */
function useCounter(endValue, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // Easing out quart: 1 - (1 - progress)^4
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeProgress * endValue))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(endValue)
      }
    }
    window.requestAnimationFrame(step)
  }, [isVisible, endValue, duration])

  return { count, ref }
}

/* Componente do KPI isolado */
function KPICard({ numValue, suffix = '', prefix = '', desc }) {
  const { count, ref } = useCounter(numValue, 2500)

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 py-8 md:py-12">
      <div className="font-display font-black text-[#0a0a0a] text-6xl md:text-7xl mb-2 tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <p className="text-[#0a0a0a]/70 font-semibold text-sm uppercase tracking-wide max-w-[180px]">
        {desc}
      </p>
    </div>
  )
}

export default function Metrics() {
  return (
    <section className="py-20 relative z-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        
        {/* Bloco verde sólido com os KPIs */}
        <div className="bg-[#CCFF33] rounded-lg shadow-[0_20px_50px_rgba(204,255,51,0.15)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0a0a0a]/15">
            
            <KPICard 
              numValue={15} 
              suffix=" min" 
              desc="para cadastrar sua academia e já operar" 
            />
            
            <KPICard 
              numValue={2} 
              suffix="s" 
              desc="para liberar o acesso de qualquer aluno" 
            />
            
            <KPICard 
              prefix="-"
              numValue={5} 
              suffix="h" 
              desc="por semana recuperadas de tarefas operacionais" 
            />
            
            <KPICard 
              numValue={100} 
              suffix="%" 
              desc="dos acessos registrados automaticamente na entrada" 
            />

          </div>
        </div>

      </div>
    </section>
  )
}
