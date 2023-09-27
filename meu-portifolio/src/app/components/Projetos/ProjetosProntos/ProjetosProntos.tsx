import Image from 'next/image'
interface ProjetosProtosProps {
    imagem1: string;
    
  }
  

export default function ProjetosProtos(props : ProjetosProtosProps){
    return(
       <div className='projeto-prontos'>
        <span>HTML CSS PYTHON</span>
        <Image
                src={props.imagem1}
                alt="Skill Logo"
                width={40}
                height={40}
                priority
            />
        <div></div>
        <div></div>
        <button></button>
        <button></button>
       </div>
    )
}