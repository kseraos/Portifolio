
import Image from 'next/image'
import SocialBtns from '../social-btns/social-btns'
import "./start.scss"


export default function Start(){
    return(
        <div className="start">
        <Image
              src="/Kristine.png"
              alt="Vercel Logo"
              width={325}
              height={300}
              priority
          />
          
     <SocialBtns/>

  </div>
    )
}