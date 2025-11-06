import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const avatar = "https://github.com/ViniciusSL12.png"
  return (
    <div className="page">
      <Header />
      <main className="container">
        <section className="hero card">
          <div>
            <h1 className="hero-title">Olá, eu sou <span className="accent">Vinicius</span>.</h1>
            <p className="lead">Professor e desenvolvedor Full Stack. Eu crio interfaces responsivas, acessíveis e com atenção aos detalhes.</p>
            <div className="actions">
              <a className="btn" href="/projects">Meus projetos</a>
              <a className="btn ghost" href="/about">Sobre</a>
            </div>
          </div>
          <aside className="profileCard">
            <div className="avatarWrap">
              <img src={avatar} alt="Vinicius" className="avatarImg" />
            </div>
            <div className="profileInfo">
              <h3>Vinicius S. Lima</h3>
              <p className="meta">Desenvolvedor Full Stack • Sistemas para Internet</p>
              <div className="skillPills">
                <span>React</span><span>Next.js</span><span>JavaScript</span><span>CSS</span>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  )
}
