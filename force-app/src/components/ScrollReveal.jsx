import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, className = '', threshold = 0.15, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Uma vez disparado, para de observar (anima só na descida)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  )
}
