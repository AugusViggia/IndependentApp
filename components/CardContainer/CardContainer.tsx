import Card from "../Card/Card";
import Link from "next/link";
import style from "./CardContainer.module.css";


const CardContainer = () => {
    return (
        <>
            <div className={style.CardContainer}>
                <Link href="/Contacto"><Card/></Link>
                <Link href="/Contacto"><Card/></Link>
                <Link href="/Contacto"><Card/></Link>
                <Link href="/Contacto"><Card/></Link>
            </div>
            
        </>
    )
}

export default CardContainer;