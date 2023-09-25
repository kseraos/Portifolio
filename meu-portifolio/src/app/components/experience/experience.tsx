import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
            <p>Com dois anos de experiência, tenho atuado tanto no desenvolvimento back-end quanto no front-end, utilizando tecnologias como PHP, jQuery, HTML/CSS3 e MySQL. Atualmente, estou expandindo meu conhecimento estudando Python e React</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years="1 years"/>
            <Skill image="/js.png" measure={3} years="2 years"/>
            <Skill image="/php.svg" measure={3} years="2 years"/>
          </div>
        </div>
    )
}