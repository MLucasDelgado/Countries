// Hooks
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

// components
import { getCountries, postActivity } from '../../redux/actions/actions'
import validation from './validation'
import style from './FormActivity.module.css'



const FormActivity = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allCountries = useSelector((state) => state.allCountries)

    const [showAlert, setShowAlert] = useState(false); // Variable de estado para mostrar la alerta

    const [errors, setErrors] = useState({})

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

    useEffect(() => {
        if (showAlert) {
            alert('Actividad creada correctamente');
            navigate('/home');
        }
    }, [showAlert, navigate]);

    // handlers

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
        setErrors(validation(input));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(input));
        setShowAlert(true); // Mostrar la alerta
    };


    const handleSelect = (event) => {
        const selectedCountryId = event.target.value;

        const countrySelected = input.countries.includes(selectedCountryId);

        if (countrySelected) {
            alert('Este país ya fue seleccionado');
            return;
        } else if (selectedCountryId === "name") {
            return;
        } else if (input.countries.length >= 5) {
            alert('Solo puedes seleccionar 5 países');
            return;
        }

        const selectedCountry = allCountries.find((country) => country.id === selectedCountryId);

        // Verificar si el país ya está en la lista de países seleccionados.
        const isCountrySelected = input.countries.some((country) => country.id === selectedCountryId);

        if (!isCountrySelected) {
            setInput((input) => ({
                ...input,
                countries: [...input.countries, selectedCountry.id],
            }));
        }
    };

    const handleRemoveCountry = (countryId) => {
        const updatedCountries = input.countries.filter((selectedCountry) => selectedCountry !== countryId);
        setInput((input) => ({
            ...input,
            countries: updatedCountries,
        }));

        setShowAlert(false);
    };

    return (
        <div className={style.fondo}>
            <form className={style.formulario} onSubmit={(event) => handleSubmit(event)}>
                <section>
                    {errors.name && <p className={style.parrafo}>{errors.name}</p>}
                    <label className={style.texto} htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Name of the activity"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        className={style.input}
                    />
                </section>

                <section className={style.container}>
                    {errors.difficulty && <p className={style.parrafo}>{errors.difficulty}</p>}
                    <label className={style.texto} htmlFor="1">Difficulty:</label>

                    <section className={style.radio} >
                        <section>
                            <label className={style.label} htmlFor="1">1</label>
                            <input className={style.numeros} type="radio" id="1" name="difficulty" value="1" checked={input.difficulty === "1"} onChange={handleChange} />
                        </section>

                        <section>
                            <label className={style.label} htmlFor="2">2</label>
                            <input className={style.numeros} type="radio" id="2" name="difficulty" value="2" checked={input.difficulty === "2"} onChange={handleChange} />
                        </section>

                        <section>
                            <label className={style.label} htmlFor="3">3</label>
                            <input className={style.numeros} type="radio" id="3" name="difficulty" value="3" checked={input.difficulty === "3"} onChange={handleChange} />
                        </section>

                        <section>
                            <label className={style.label} htmlFor="4">4</label>
                            <input className={style.numeros} type="radio" id="4" name="difficulty" value="4" checked={input.difficulty === "4"} onChange={handleChange} />
                        </section>

                        <section>
                            <label className={style.label} htmlFor="5">5</label>
                            <input className={style.numeros} type="radio" id="5" name="difficulty" value="5" checked={input.difficulty === "5"} onChange={handleChange} />
                        </section>
                    </section>
                </section>

                <section>
                    {errors.duration && <p className={style.parrafo}>{errors.duration}</p>}
                    <label className={style.texto} htmlFor="duration">Duration:</label>
                    <input className={style.input} type="time" name="duration" value={input.duration} onChange={handleChange} />
                </section>

                <section className={style.container}>
                    {errors.season && <p className={style.parrafo}>{errors.season}</p>}
                    <label className={style.texto}>Season:</label>

                    <section className={style.radio}>

                        <section>
                            <label className={style.label} htmlFor="Verano">Verano</label>
                            <input className={style.numeros} type="radio" id="Verano" name="season" value="Verano" checked={input.season === "Verano"} onChange={handleChange} />
                        </section>

                        <section>
                            <label className={style.label} htmlFor="Invierno">Invierno</label>
                            <input className={style.numeros} type="radio" id="Invierno" name="season" value="Invierno" checked={input.season === "Invierno"} onChange={handleChange} />
                        </section>

                        <section>
                            <label className={style.label} htmlFor="Otoño">Otoño</label>
                            <input className={style.numeros} type="radio" id="Otoño" name="season" value="Otoño" checked={input.season === "Otoño"} onChange={handleChange} />
                        </section>

                        <section>
                            <label className={style.label} htmlFor="Primavera">Primavera</label>
                            <input className={style.numeros} type="radio" id="Primavera" name="season" value="Primavera" checked={input.season === "Primavera"} onChange={handleChange} />
                        </section>
                    </section>
                </section>

                <section>
                    {errors.countries && <p className={style.parrafo}>{errors.countries}</p>}
                    <label className={style.texto}>Countries:</label>
                    <select className={style.input} onChange={(evento) => handleSelect(evento)}>
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
                    <label className={style.texto}>Selected Countries:</label>
                    <div className={style.contenedor}>
                        {input.countries.map((selectedCountry) => (
                            <div key={selectedCountry} className={style.opciones}>
                                <button className={style.x} onClick={() => handleRemoveCountry(selectedCountry)}>
                                    x
                                </button>
                                {(allCountries.find((country) => country.id === selectedCountry)).name}
                            </div>
                        ))}
                    </div>
                </section>

                <button
                    disabled={input.name === '' || input.difficulty === '' || input.duration === '' || input.season === '' || input.countries === ''}
                    className={style.boton}
                    type="submit"
                >Create Activity
                </button>
            </form>
        </div >
    )
}

export default FormActivity