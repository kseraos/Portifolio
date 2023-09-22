import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export default function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermédiario</span>
          <span>🇧🇷 PT-BR - Nativo </span>
        </div>
        <SectionTitle text="Formação Acadêmica"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Computer Science Bachelors Degree - Universidade Federal de Pelotas</span>
        </div>
      </div>
    )
}