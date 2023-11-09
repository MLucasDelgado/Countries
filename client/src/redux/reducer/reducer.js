import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    COUNTRIES_BY_ID,
    CLEAN_DETAIL,
    ORDER_COUNTRIES,
    ORDER_POPULATION,
    ORDER_BY_CONTINENTS,
    GET_ACTIVITY,
    FILTER_ACTIVITY,
} from "../actions-type/actions-type"

const initialState = {
    originalCountries: [],
    allCountries: [],
    activities: [],
    detail: {},
}

let search = false;
let filterContinents = '';
let filterActivity = '' 

const reducer = (state = initialState, action) => {
   
    const newCopyCountries = !search ? [...state.originalCountries] : search
    switch (action.type) {
        case GET_COUNTRIES:
            search = false
            filterContinents = ''
            filterActivity = ''
            return {
                ...state,
                allCountries: action.payload,
                originalCountries: action.payload 
            }

        case SEARCH_COUNTRY:
            search = action.payload
            return {
                ...state,
                allCountries: action.payload
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
                    // con el localeCompare() comparo dos cadenas de texto y determinar su orden.
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

        case GET_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }

        case ORDER_BY_CONTINENTS:
            
            if (action.payload === 'All') {
                filterContinents = "";
                return {
                    ...state,
                    allCountries: filterActivity.length ? newCopyCountries.filter(country => {
                        return country.Activities?.some(activity => activity.name === filterActivity)
                    }) : newCopyCountries
                }
            }
            filterContinents = action.payload
            return {
                ...state,
                allCountries: filterActivity.length ? newCopyCountries.filter(country => {
                    return (country.continents === action.payload && country.Activities?.some(activity => activity.name === filterActivity))
                }) : newCopyCountries.filter(country => {
                    return country.continents === action.payload
                })
            }

        case FILTER_ACTIVITY:
            
            if (action.payload === 'actividad') {
                filterActivity = "";
                return {
                    ...state,
                    allCountries: filterContinents ? newCopyCountries.filter(country => {
                        return (country.continents === filterContinents)
                    }) : newCopyCountries
                }
            }
            filterActivity = action.payload;
            return {
                ...state,
                allCountries: filterContinents.length ? newCopyCountries.filter(country => {
                    
                    return (country.continents === filterContinents && country.Activities?.some(activity => activity.name === action.payload))
                }) : newCopyCountries.filter(country => {
                    return country.Activities?.some(activity => activity.name === action.payload)
                })
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducer
