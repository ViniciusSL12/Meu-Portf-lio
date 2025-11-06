import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) {
        document.documentElement.classList.toggle('light', saved === 'light')
        document.documentElement.classList.toggle('dark', saved === 'dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    } catch (e) {}
  }, [])

  return <Component {...pageProps} />
}
