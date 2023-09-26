import Link from "next/link";
import "./NavBar.scss"
import { Icon } from "../icons/icon";


export default function Navbar() {
  return (

    <div className="navbar">
        <div>
    <Icon/>  <span>Kristine</span>
        </div>
        <nav className="nav-info">
        <ul>
            <li>
                <Link href=""><span>#</span>Home</Link>
            </li>
            <li>
                <Link href=""><span>#</span>Projetos</Link>
            </li>
            <li>
                <Link href=""><span>#</span>Sobre mim</Link>
            </li>
            <li>
                <Link href=""><span>#</span>Contatos</Link>
            </li>
        </ul>
        </nav>
    </div>
  );
}
