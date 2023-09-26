import Navbar from "./components/NavBar/NavBar"
import { Experience } from "./components/experience/experience"
import { Header } from "./components/header/header"
import { EmailIcon } from "./components/icons/email-icon"
import Info from "./components/information/information"
import "./styles/home.scss"
import Homepage from "./components/Homepage/Homepage"


export default function Home() {
  return (
    <main className="teste">
    <Navbar/>
    <Homepage/>
    <div className="container">
        <Header/>
        <Experience/>
        <Info/>
                 <div className="buttons">
                    <div className="social">
                    </div>  
                </div>
        
        
      
    </div>
    </main>
  )
}
