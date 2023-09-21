
import { Experience } from "./components/experience/experience"
import { Header } from "./components/header/header"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Experience/>
       
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
        
        
      
    </main>
  )
}
