export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="socials">
        <a href="https://github.com/ViniciusSL12" target="_blank" rel="noreferrer" aria-label="GitHub" className="social github">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M12 .5C5.73.5.95 5.28.95 11.55c0 4.7 3.04 8.67 7.27 10.07.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.95.64-3.57-1.13-3.57-1.13-.48-1.23-1.17-1.56-1.17-1.56-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.61 2.47 1.15 3.07.88.09-.69.37-1.15.67-1.41-2.36-.27-4.84-1.18-4.84-5.24 0-1.16.41-2.1 1.08-2.84-.11-.27-.47-1.36.1-2.83 0 0 .88-.28 2.88 1.08a9.98 9.98 0 0 1 2.62-.35c.89 0 1.79.12 2.62.35 2-.37 2.88-1.08 2.88-1.08.57 1.47.21 2.56.1 2.83.67.74 1.08 1.68 1.08 2.84 0 4.07-2.49 4.96-4.86 5.22.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .28.19.62.73.51 4.24-1.4 7.27-5.37 7.27-10.07C23.05 5.28 18.27.5 12 .5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/vinicius-simas-lima-9048b6314/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social linkedin">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.65V24h-5V15.1c0-2.15-.04-4.92-3-4.92-3 0-3.45 2.33-3.45 4.76V24h-5V8z"/></svg>
        </a>
        <a href="https://www.instagram.com/limaviniciussimas/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social instagram">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm8 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 8.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM12 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>
        </a>
        <a href="mailto:viniciussimaslima19@gmail.com" aria-label="Email" className="social mail">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Vinicius S. Lima</div>
    </footer>
  )
}
