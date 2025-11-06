import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Projects({ user, repos, error }) {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <section className="card">
          <h2 className="section-title">Meus Projetos</h2>
          {error ? (
            <div className="loader">{error}</div>
          ) : (
            <>
              <div className="profileRow">
                <img src={user?.avatar_url} alt={user?.login} className="smallAvatar" />
                <div>
                  <div className="name">{user?.name || user?.login}</div>
                  <div className="meta">{user?.bio}</div>
                </div>
              </div>

              <div className="projectsGrid">
                {repos.map(r => (
                  <a key={r.id} className="projectCard" href={r.html_url} target="_blank" rel="noreferrer">
                    <h3>{r.name}</h3>
                    <p className="desc">{r.description || 'Sem descrição'}</p>
                    <div className="langRow">
                      {(r.languages || []).slice(0,4).map(l => <span className="lang" key={l}>{l}</span>)}
                    </div>
                    <div className="metaRow"><span>★ {r.stargazers_count}</span><span>Forks: {r.forks_count}</span></div>
                  </a>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const username = 'ViniciusSL12'
  const token = process.env.GITHUB_TOKEN || ''
  const headers = { Accept: 'application/vnd.github.v3+json' }
  if (token) headers.Authorization = 'token ' + token
  try {
    const repoList = [
      { owner: 'MatheusPablo', repo: 'Dashboard-PROGWEB' },
      { owner: 'ViniciusSL12', repo: 'Meu-JogoJS' },
      { owner: 'ViniciusSL12', repo: 'Quake-Parse-js' }
    ]
    const fetchRepo = async (o, r) => {
      const res = await fetch('https://api.github.com/repos/' + encodeURIComponent(o) + '/' + encodeURIComponent(r), { headers })
      if (!res.ok) return null
      const data = await res.json()
      const rl = await fetch('https://api.github.com/repos/' + encodeURIComponent(o) + '/' + encodeURIComponent(r) + '/languages', { headers })
      const langs = rl.ok ? await rl.json() : {}
      return { ...data, languages: Object.keys(langs) }
    }
    const fetched = await Promise.all(repoList.map(x => fetchRepo(x.owner, x.repo)))
    const valid = fetched.filter(Boolean)
    const uRes = await fetch('https://api.github.com/users/' + encodeURIComponent(username), { headers })
    const user = uRes.ok ? await uRes.json() : null
    return { props: { user, repos: valid } }
  } catch (e) {
    return { props: { error: String(e), user: null, repos: [] } }
  }
}
