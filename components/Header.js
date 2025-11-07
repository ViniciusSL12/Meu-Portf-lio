'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [theme, setTheme] = useState('dark')
  const pathname = usePathname()

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) {
        setTheme(saved)
        document.documentElement.classList.toggle('light', saved === 'light')
        document.documentElement.classList.toggle('dark', saved === 'dark')
      } else {
        setTheme('dark')
        document.documentElement.classList.add('dark')
      }
    } catch (e) {}
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
      document.documentElement.classList.toggle('light', next === 'light')
      document.documentElement.classList.toggle('dark', next === 'dark')
    } catch (e) {}
  }

  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo">VS</div>
        <div>
          <div className="name">Vinicius S. Lima</div>
          <div className="role">Desenvolvedor Full Stack</div>
        </div>
      </div>

      <nav className="main-nav">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>Sobre</Link>
        <Link href="/experiencia" className={pathname === '/experiencia' ? 'active' : ''}>Experiência</Link>
        <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projetos</Link>
      </nav>

      <div style={{ marginLeft: 'auto' }} />

      <div className="header-controls">
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

