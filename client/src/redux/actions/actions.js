import { GET_COUNTRIES, 
    SEARCH_COUNTRY,
    COUNTRIES_BY_ID,
    CLEAN_DETAIL,
    ORDER_COUNTRIES, 
    ORDER_POPULATION,
    ORDER_BY_CONTINENTS,
    POST_ACTIVITY,
    GET_ACTIVITY,
    FILTER_ACTIVITY
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

export const countriesById = (id) => {
    try{
        return async(dispatch) => {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            const data = response.data;

            return dispatch({
                type: COUNTRIES_BY_ID,
                payload: data
            })
        }
    } catch(error){
        throw Error(error.message)
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
        payload: {}
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

export const orderContinents = (order) => {
    return{
        type: ORDER_BY_CONTINENTS,
        payload: order
    }
}

export const postActivity = (input) => {
    try{
        return async(dispatch) => {
            const endpoint = 'http://localhost:3001/activities'
            const response = await axios.post(endpoint, input)
            const data = response.data
            return dispatch({
                type: POST_ACTIVITY,
                payload: data
            })
        }
    } catch (error){
        throw Error(error.message)
    }
}

export const getActivity = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/activities');
            const data = response.data;
            return dispatch({
                type: GET_ACTIVITY,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
}

export const filterActivity = (order) => {
    return {
        type: FILTER_ACTIVITY,
        payload: order
    }
}
