import { SectionTitle } from "../sectionTitle/section-title"

import "./information.scss"

export default function Info() {

    return(

        <div className="infos">
            <SectionTitle text="Idiomas"/>
                <div className="language-infos">
                    <span>🇺🇸 EN</span>
                    <span>🇧🇷 PT-BR</span>
                </div>
           <SectionTitle text="Formação Acadêmica"/>
                <div className="education-info">
                    <span>🎓</span>
                    <span>Ciência da Computação - UNIP</span>
                </div>
        </div>
    )
}