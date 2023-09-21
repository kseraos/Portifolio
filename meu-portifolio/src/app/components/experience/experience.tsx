import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experiências"/>
            <p>Com dois anos de experiência, tenho 
                atuado tanto no desenvolvimento 
                back-end quanto no front-end, utilizando 
                tecnologias como PHP, jQuery, HTML/CSS3 e MySQL. Atualmente, 	
                estou expandindo meu conhecimento estudando Python e React.</p>
            <div className="experience-time">
            </div>
        </div>
    )
}