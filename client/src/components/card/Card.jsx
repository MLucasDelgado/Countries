import { Link } from "react-router-dom";

const Card = ({ id, name, flags, continents, population}) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
            <img src={flags} alt={name} />
            <h3>Nombre: {name}</h3>
            <h4>Continente: {continents}</h4>
            <h4>Population: {population}</h4>
            </Link>
        </div>
    );
}

export default Card;