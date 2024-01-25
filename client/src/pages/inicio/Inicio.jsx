import Button from "../../components/button/button"
import style from "./Inicio.module.css"

const Inicio = () => {
    return (
        <section className={style.seccion}>
            <section className={style.contenido}>
                <section>
                    <h1 className={style.texto}>Countries</h1>
                    <h3 className={style.descripcion}>Explore fascinating and diverse facts about countries around the world with our comprehensive collection of information.</h3>
                </section>
                <nav>
                    <Button link={'/home'} text={'Log In'} className={style.boton} />
                </nav>
            </section>
            <div className={style.fondo}></div>
        </section>

    )
}

export default Inicio