import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const { id } = useParams()

    const [country, setCountry] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`)
        .then(({ data }) => {
            if(data.name){
                setCountry(data)
            } else {
                alert ('There are no countries with that ID')
            }
        })
        .catch((error) => {
            throw Error(error.message)
        })
        //Se desmonta el estado para ahorro de recursos y no quede sobre cargado.
        
    }, [id]) // El cilo de dependecia del array es de update, se actualiza
    
    return (
        <div>
            <h2>Name: {country?.name}</h2>
            <h4>ID: {country?.id}</h4>
            <h4>Continent: {country?.continents}</h4>
            <h4>Capital: {country?.capital}</h4>
            <h4>Subregion: {country?.subregion}</h4>
            <h4>Area: {country?.area}</h4>
            <h4>Population: {country?.population}</h4>
            <img src={country?.flags} alt={country?.id} />
        </div>
    )
}

export default Detail;