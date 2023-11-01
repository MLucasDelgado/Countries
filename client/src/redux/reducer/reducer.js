import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    COUNTRIES_BY_ID,
    CLEAN_DETAIL,
    ORDER_COUNTRIES,
    ORDER_POPULATION,
    ORDER_BY_CONTINENTS,
    GET_ACTIVITY,
    FILTER_ACTIVITY
} from "../actions-type/actions-type"

const initialState = {
    originalCountries: [],
    allCountries: [],
    activities: [],
    detail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                originalCountries: action.payload // Almaceno el estado original cuando se obtienen los datos
            }

        case SEARCH_COUNTRY:
            return {
                ...state,
                allCountries: action.payload, // Actualizo la lista actual con los resultados de la búsqueda
            }

        case COUNTRIES_BY_ID:
            return {
                ...state,
                detail: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case ORDER_COUNTRIES:
            if (action.payload === 'Ascendente') {
                return {
                    ...state,
                    allCountries: [...state.allCountries].sort((country1, country2) => country1.name.localeCompare(country2.name))
                    // El método localeCompare() se utiliza para comparar dos cadenas de texto y determinar su orden relativo
                }
            } else if (action.payload === 'Descendente') {
                return {
                    ...state,
                    allCountries: [...state.allCountries].sort((country1, country2) => country2.name.localeCompare(country1.name))
                }
            } else if (action.payload === 'alphabetically') {
                return {
                    ...state,
                    allCountries: state.originalCountries,
                };
            }

        case ORDER_POPULATION:
            if (action.payload === 'Ascendente') {
                return {
                    ...state,
                    allCountries: [...state.allCountries].sort((character1, character2) => character1.population - character2.population)
                }
            } else if (action.payload === 'Descendente') {
                return {
                    ...state,
                    allCountries: [...state.allCountries].sort((character1, character2) => character2.population - character1.population)
                }
            } else if (action.payload === 'Population') {
                return {
                    ...state,
                    allCountries: state.originalCountries,
                };
            }

        case ORDER_BY_CONTINENTS:
            const selectedContinent = action.payload;
            let filteredCountries = [];

            if (selectedContinent === "All") {
                return {
                    ...state,
                    allCountries: state.originalCountries,
                };
            } else {
                filteredCountries = state.originalCountries.filter(country => country.continents === selectedContinent);
                return {
                    ...state,
                    allCountries: filteredCountries,
                };
            }

        case GET_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }

        case FILTER_ACTIVITY:
            // console.log(state.activities)
            let paises = []
            const filteredActivity = state.activities.filter((activity) => {
                if (activity.name === action.payload) {
                    const countries = activity.Countries.map((country) => paises.push(country))
                    // console.log(countries);
                    return activity.Countries
                }
                return
            })
            return {
                ...state,
                allCountries: paises,
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer