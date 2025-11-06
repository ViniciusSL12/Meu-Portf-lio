import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <section className="card">
          <h2 className="section-title">Sobre este projeto</h2>
          <p className="meta">Este portfólio foi construído com foco em clareza, performance e experiência do usuário. Abaixo estão as tecnologias e módulos usados para desenvolvê-lo:</p>
          <ul className="tech-list">
            <li>Next.js 14 (React 18) - SSR/SSG, rotas e renderização no servidor</li>
            <li>JavaScript (ES2022) - linguagem principal</li>
            <li>CSS moderno - design responsivo com transições e hovers</li>
            <li>getServerSideProps - obtenção dos dados do GitHub no servidor</li>
            <li>GitHub REST API - consumo de perfil e repositórios</li>
            <li>localStorage - persistência da escolha de tema (dark/light)</li>
            <li>Componentização React - Header/Footer/Pages</li>
            <li>Deploy sugerido: Vercel</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
