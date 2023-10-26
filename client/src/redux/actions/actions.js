import { GET_COUNTRIES } from '../actions-type/actions-type';
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