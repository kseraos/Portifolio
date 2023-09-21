import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
              <div>
                  <h1>Oie, meu nome é Kristine! 👋</h1>
                  <h2>Developer Software</h2>
              </div>
              <Image
                  src="/me.jpeg"
                  alt="Vercel Logo"
                  width={325}
                  height={300}
                  priority
              />
        </div>
    )
}
