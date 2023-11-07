import { Link } from "react-router-dom";
import style from './Card.module.css'

const Card = ({ id, name, flags, continents, population}) => {
    return (
        <div className={style.card}>
            <Link className={style.text} to={`/detail/${id}`}>
            <div className={style.container}>
            <img className={style.imagen} src={flags} alt={name} />
            <h3>{name}</h3>
            </div>
            <h4>{continents}</h4>
            <h4>Population: {population}</h4>
            </Link>
        </div>
    );
}

export default Card;