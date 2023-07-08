import style from "./Card.module.css"
import Link from "next/link";

const Card = () => {
    return (
        <>
            <Link href="/Contacto">
                <div className={style.Card}>
                    <p>Nombre: Juan</p>
                    <p>Titulo: Front end developer</p>
                    <p>Descripcion: Hago aplicaicones</p>
                </div>
            </Link>
                
        </>
    )
}

export default Card;