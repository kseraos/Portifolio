
import { Header } from "./components/header/header"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <div className="experience">
          <h3>Experiência</h3>
          <p>Com dois anos de experiência, tenho atuado tanto no desenvolvimento back-end quanto no front-end, utilizando tecnologias como PHP, jQuery, HTML/CSS3 e MySQL. Atualmente, 	estou expandindo meu conhecimento estudando Python e React.</p>
          <div className="experience-time">
            <div className="infos">
                <h3>Linguagens</h3>
                <div className="language-infos">
                  <span>🇺🇸 EN</span>
                  <span>🇧🇷 PT-BR</span>
                </div>
                <h3>Educação</h3>
                <div className="education-info">
                  <span>🎓</span>
                  <span>Ciência da Computação - UNIP</span>
              </div>
              <div className="buttons">
                <div className="social"></div>
                <button>Contato</button>
              </div>
            </div>
          </div>
        </div>
        
      
    </main>
  )
}
