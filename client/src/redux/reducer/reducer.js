import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    ORDER_COUNTRIES,
    ORDER_POPULATION
} from "../actions-type/actions-type"

const initialState = {
    originalCountries: [],
    allCountries: [],
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
            } else if (action.payload === 'Orden') {
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

        default:
            return {
                ...state,
            }
    }
}

export default reducer