import Navbar from "./components/NavBar/NavBar"
import { Experience } from "./components/experience/experience"
import { Header } from "./components/header/header"
import { EmailIcon } from "./components/icons/email-icon"
import Info from "./components/information/information"
import "./styles/home.scss"
import Homepage from "./components/Homepage/Homepage"


export default function Home() {
  return (
    <div>
    <Navbar/>
    <main className="container">
        <Homepage/>
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
    </div>
  )
}
