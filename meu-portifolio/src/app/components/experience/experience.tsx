import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>3 years working as a Software Developer, in companys such as Itaú, Stone and Aftersale.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years="1 years"/>
            <Skill image="/js.png" measure={3} years="2 years"/>
            <Skill image="/php.png" measure={3} years="2 years"/>
          </div>
        </div>
    )
}