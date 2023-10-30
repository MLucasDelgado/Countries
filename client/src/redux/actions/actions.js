import { GET_COUNTRIES, 
    SEARCH_COUNTRY,
    ORDER_COUNTRIES, 
    ORDER_POPULATION 
} from '../actions-type/actions-type';

import axios from 'axios'

export const getCountries = () => {
    try{
        return async(dispatch) => {
            const response = await axios.get('http://localhost:3001/countries')
            const data = response.data;

            return dispatch({
                type: GET_COUNTRIES,
                payload: data
            })
        }
    }catch(error){
        throw Error(error.message)
    }
}

export const searchCountry = (newName) => {
    try {
        return async (dispatch, getState) => {
            if (newName.trim() === '') {
                // Si el valor de búsqueda está vacío, restaura la lista original
                const originalCountries = getState().originalCountries;
                return dispatch({
                    type: SEARCH_COUNTRY,
                    payload: originalCountries
                });
            } else {
                // Realiza la búsqueda en función de newName
                const response = await axios.get(`http://localhost:3001/countries/name?name=${newName}`)
                const data = response.data;
                return dispatch({
                    type: SEARCH_COUNTRY,
                    payload: data
                });
            }
        }
    } catch (error) {
        throw Error(error.message);
    }
}

export const orderCountries = (order) => {
    return {
      type: ORDER_COUNTRIES,
      payload: order
    };
};

export const ordenPopulation = (order) => {
    return{
        type: ORDER_POPULATION,
        payload: order
    }
}