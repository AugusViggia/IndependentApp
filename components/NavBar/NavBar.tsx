import Link from "next/link";
import style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <>
            <div className={style.NavContainer}>
                <Link href="/"><h1>Independent</h1></Link>
                <div>
                    <Link href="/Equipo"><button> Equipo </button></Link>
                    <Link href="/PortfolioTeam"><button> Proyectos</button></Link>
                    <Link href="/"><button> servicios</button></Link>
                    <Link href="/"><button> Sobre nosotros </button></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;