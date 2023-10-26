const Card = ({ name, flags, continents, capital, subregion, area, population  }) => {
    return (
        <div>
            <img src={flags} alt={name} />
            <h3>Nombre: {name}</h3>
            <h4>Continente: {continents}</h4>
            {/* <h3>Capital: {capital}</h3>
            <h4>Subregion: {subregion}</h4>
            <h5>Area: {area}</h5>
            <h6>Poblacion: {population}</h6> */}
        </div>
    );
}

export default Card;