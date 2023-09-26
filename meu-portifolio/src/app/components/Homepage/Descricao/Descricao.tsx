
import Image from 'next/image'
import SocialBtns from '../../social-btns/social-btns'
import "./Descricao.scss"
import { EmailIcon } from '../../icons/email-icon'



export default function Descricao(){
    return(
        
        <div className="descricao">
          
            <h1>Ola, meu nome é Kristine👋</h1>
                  <span>Sinto-me constantemente em busca de aprendizado, pois nutro uma paixão profunda por criar experiências incríveis no front-end</span>
                  <a className="btn-primary" href="mailto:kseraos@outlook.com">Entre em Contato<EmailIcon/>
                    </a>
        </div>
    )
}