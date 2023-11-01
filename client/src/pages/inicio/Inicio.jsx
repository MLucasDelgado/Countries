import Button from "../../components/button/button"
import style from "./Inicio.module.css"

const Inicio = () => {
    return(
        <div className={style.fondo}>
            <section>
            <h1>Country</h1>
            <h3>Conoce acerca de los paises de tus sueños</h3>
            </section>
            <nav>
                <Button link={'/home'} text={'Home'} className={style.boton} />
            </nav>
        </div>
    )
}

export default Inicio