
import { Experience } from "./components/experience/experience"
import { Header } from "./components/header/header"
import { EmailIcon } from "./components/icons/email-icon"
import Info from "./components/information/information"
import "./styles/home.scss"
import Start from "./components/start/start"



export default function Home() {
  return (
    <main className="container">

     
        <Start/>
        <Header/>
        <Experience/>
        <Info/>
    
                 <div className="buttons">
                    <div className="social">

                    </div>
                   
                    <a className="btn-primary" href="mailto:kseraos@outlook.com">Entre em Contato<EmailIcon/>
                    </a>
                </div>
        
        
      
    </main>
  )
}
