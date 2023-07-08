import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";
import style from "../styles/Contacto.module.css"

const Contacto = () => {
    return (
        <>
            <NavBar/>
            <div className={style.formContainer}>
                <form className={style.Container}>
                    <input type="text" placeholder="Tu nombre"/>
                    <input type="text" placeholder="Tu email"/>
                    <input type="text" placeholder="Titulo de la consulta"/>
                    <textarea placeholder="Dejanos tu consulta"/>
                </form>
            </div>
                
        </>
    )
}

export default Contacto;