import { GitIcon } from "../icons/git-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import "./social-btns.scss"


export default function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/kristine-santana"  target="_blank" ><LinkedinIcon/></a>
            <a href="https://github.com/kseraos" target="_blank"><GitIcon/></a>
        </div>
    )
}