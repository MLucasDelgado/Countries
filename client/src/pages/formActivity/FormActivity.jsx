import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getCountries, getActivity, postActivity } from '../../redux/actions/actions'



const FormActivity = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)

    const [error, setError] = useState({})

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const handleSelect = (evento) => {
        setInput({
            ...input,
            countries: [...input.countries, evento.target.value],
        });
    }

    const handleRemoveCountry = (countryId) => {
        setInput({
            ...input,
            countries: input.countries.filter((selectedCountryId) => selectedCountryId !== countryId)
        });
    };

    const handleSubmit = () => {
        dispatch(postActivity(input));
        alert("Actividad Creada");
    }

    return (
        <div>
            <form onSubmit={(evento) => handleSubmit(evento)}>
                <section>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Name of the activity"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                    />
                </section>

                <section>
                    <label htmlFor="1">Difficulty:</label>

                    <label htmlFor="1">1</label>
                    <input type="radio" id="1" name="difficulty" value="1" checked={input.difficulty === "1"} onChange={handleChange} />

                    <label htmlFor="2">2</label>
                    <input type="radio" id="2" name="difficulty" value="2" checked={input.difficulty === "2"} onChange={handleChange} />

                    <label htmlFor="3">3</label>
                    <input type="radio" id="3" name="difficulty" value="3" checked={input.difficulty === "3"} onChange={handleChange} />

                    <label htmlFor="4">4</label>
                    <input type="radio" id="4" name="difficulty" value="4" checked={input.difficulty === "4"} onChange={handleChange} />

                    <label htmlFor="5">5</label>
                    <input type="radio" id="5" name="difficulty" value="5" checked={input.difficulty === "5"} onChange={handleChange} />
                </section>

                <section>
                    <label htmlFor="duration">Duration:</label>
                    <input type="time" name="duration" value={input.duration} onChange={handleChange} />
                </section>

                <section>
                    <label>Season:</label>

                    <label htmlFor="Verano">Verano</label>
                    <input type="radio" id="Verano" name="season" value="Verano" checked={input.season === "Verano"} onChange={handleChange} />

                    <label htmlFor="Invierno">Invierno</label>
                    <input type="radio" id="Invierno" name="season" value="Invierno" checked={input.season === "Invierno"} onChange={handleChange} />

                    <label htmlFor="Otoño">Otoño</label>
                    <input type="radio" id="Otoño" name="season" value="Otoño" checked={input.season === "Otoño"} onChange={handleChange} />

                    <label htmlFor="Primavera">Primavera</label>
                    <input type="radio" id="Primavera" name="season" value="Primavera" checked={input.season === "Primavera"} onChange={handleChange} />
                </section>

                <section>
                    <label >Countries:</label>
                    <select onChange={(evento) => handleSelect(evento)}>
                        <option value="name">Choose a country</option>
                        {allCountries.map((country) => {
                            return (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            );
                        })}
                    </select>
                </section>

                <section>
                    <label>Países Seleccionados:</label>
                    <div>
                        {input.countries.map((selectedCountryId) => {
                            const selectedCountry = allCountries.find(
                                (country) => country.id === selectedCountryId
                            );
                            return (
                                <div key={selectedCountry.id}>
                                    <button onClick={() => handleRemoveCountry(selectedCountry.id)}>
                                        x
                                    </button>
                                    {selectedCountry.name}
                                </div>
                            );
                        })}
                    </div>
                </section>

                <button type="submit">Create Activity</button>
            </form>
        </div>
    )
}

export default FormActivity