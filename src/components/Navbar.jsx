import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-xl transition-all duration-300"
      style={{ background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 h-[60px] flex items-center justify-between gap-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/Logo Forgee.svg"
            alt="Force"
            className="w-8 h-8"
          />
          <span className="font-display text-[22px] font-black tracking-widest text-[#CCFF33]">
            FORCE
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Funcionalidades', id: 'funcionalidades' },
            { label: 'Preços', id: 'precos' },
            { label: 'Depoimentos', id: 'depoimentos' },
            { label: 'FAQ', id: 'faq' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <a
          href="#"
          className="hidden md:flex bg-[#CCFF33] text-[#0a0a0a] font-semibold text-sm px-6 py-2.5 rounded-full
                     hover:bg-[#e0ff66] transition-all duration-200 hover:-translate-y-px
                     hover:shadow-[0_8px_30px_rgba(204,255,51,0.25)] whitespace-nowrap"
        >
          Começar grátis
        </a>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white flex items-center justify-center p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-black z-40 flex flex-col items-center justify-center gap-10 p-6 overscroll-none h-screen">
          {[
            { label: 'Funcionalidades', id: 'funcionalidades' },
            { label: 'Preços', id: 'precos' },
            { label: 'Depoimentos', id: 'depoimentos' },
            { label: 'FAQ', id: 'faq' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-medium text-white transition-colors hover:text-[#CCFF33]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-[#CCFF33] text-[#0a0a0a] font-semibold text-lg px-10 py-4 rounded-full w-full text-center"
          >
            Começar grátis
          </a>
        </div>
      )}
    </header>
  )
}
