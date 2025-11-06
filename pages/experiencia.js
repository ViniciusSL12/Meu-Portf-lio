import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Experiencia() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <section className="card">
          <h2 className="section-title">Experiência Acadêmica</h2>
          <div className="entry">
            <strong>Sistemas para Internet - Universidade Católica de Pernambuco (UNICAP)</strong>
            <p className="meta">Atualmente curso Sistemas para Internet, uma graduação focada no desenvolvimento de aplicações web modernas, capazes de unir tecnologia, design e experiência do usuário. O curso me proporciona uma base sólida tanto no Front-End quanto no Back-End, passando por temas essenciais como APIs, bancos de dados, versionamento, segurança e deploy de sistemas completos.

Durante minha formação, venho trabalhando com tecnologias amplamente utilizadas no mercado, entre elas:

HTML, CSS e JavaScript

React e Next.js para interfaces dinâmicas e responsivas

Node.js e Express para construção de APIs e aplicações server-side

MySQL, PostgreSQL e MongoDB para armazenamento e modelagem de dados

Git e GitHub para versionamento e colaboração em equipe

Metodologias ágeis, como Scrum e Kanban

Princípios de UX/UI, acessibilidade, responsividade e boas práticas de código

A proposta do curso vai além da teoria: cada período inclui a construção de projetos reais, desafios práticos e integração com o ecossistema profissional da web, o que tem reforçado minha capacidade de planejar, desenvolver e publicar soluções que realmente funcionam na prática.

Mais do que aprender a programar, estou desenvolvendo uma visão completa de como software, design, pessoas e negócios se conectam, e isso tem guiado meu crescimento como desenvolvedor — sempre buscando criar aplicações úteis, escaláveis e bem construídas, do layout ao servidor.</p>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Experiência Profissional</h2>
          <div className="entry">
            <strong>Tutor - Centro de Estudos e Sistemas Avançados do Recife (CESAR)</strong>
            <div className="meta">Atuo como tutor, auxiliando alunos no desenvolvimento de habilidades em programação, lógica computacional e construção de projetos práticos. Meu trabalho envolve não apenas esclarecer dúvidas técnicas, mas também orientar estudantes na organização de estudos, na resolução de problemas reais e na aplicação correta de conceitos fundamentais da área de tecnologia.

Como tutor, busco sempre transformar conteúdos complexos em explicações claras, acessíveis e contextualizadas, utilizando exemplos práticos, analogias e reforço progressivo do aprendizado. Também incentivo a autonomia do aluno — ajudando não só a encontrar respostas, mas a desenvolver a capacidade de pensar como programador.

Além do suporte individual, elaboro materiais, exercícios e mini-projetos. Essa vivência me permite acompanhar de perto o processo de evolução dos estudantes, entender diferentes ritmos de aprendizagem e adaptar minha abordagem de acordo com cada necessidade.

Ser tutor reforça diariamente minhas habilidades de comunicação, liderança, empatia e domínio técnico — e se tornou uma parte importante da minha trajetória profissional, pois me permite aprender ensinando e crescer ao mesmo tempo que contribuo para a formação de novos desenvolvedores.</div>
          </div>
          <div className="entry" style={{marginTop:12}}>
            <strong>Desenvolvedor Front‑End - APONTI</strong>
            <div className="meta">Durante meu período como desenvolvedor front-end na APONTI, atuei diretamente na criação e manutenção de interfaces web modernas, responsivas e alinhadas com as melhores práticas de usabilidade. Minha rotina envolvia a implementação de layouts complexos utilizando React, TypeScript e CSS puro, garantindo que os produtos fossem intuitivos e acessíveis em diferentes dispositivos.

Também participei ativamente do ciclo de desenvolvimento, desde a análise de requisitos e planejamento até o deploy das aplicações, colaborando com equipes de design e back-end para entregar soluções consistentes e eficientes. Essa experiência me proporcionou sólido conhecimento em componentização, gestão de estados e integração com APIs, além de fortalecer minhas habilidades em resolução de problemas, atenção a detalhes e trabalho colaborativo.</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
