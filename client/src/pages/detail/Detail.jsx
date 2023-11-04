// Hooks
import {useEffect } from "react";
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Components
import { countriesById, cleanDetail } from "../../redux/actions/actions";

const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch();

    const detail = useSelector(state => state.detail);
    const activities = useSelector(state => state.activities);

    useEffect(() => {
        dispatch(countriesById(id));
        
        return () => {
            dispatch(cleanDetail())
        }
    }, [id]);


    const activityForCurrentCountry = activities.find(activity => {
        return activity.Countries.some(country => country.id === id);
    });
    
    return (
        <div>
            <div>
                <h2>Name: {detail?.name}</h2>
                <h4>ID: {detail?.id}</h4>
                <h4>Continent: {detail?.continents}</h4>
                <h4>Capital: {detail?.capital}</h4>
                <h4>Subregion: {detail?.subregion}</h4>
                <h4>Area: {detail?.area}</h4>
                <h4>Population: {detail?.population}</h4>
                <img src={detail?.flags} alt={detail?.id} />
            </div>

            <div>
                
                {activityForCurrentCountry ? (
                    <div>
                        <h2>Activity</h2>
                        <h4>Name: {activityForCurrentCountry.name}</h4>
                        <h4>Difficulty: {activityForCurrentCountry.difficulty}</h4>
                        <h4>Duration: {activityForCurrentCountry.duration}</h4>
                        <h4>Season: {activityForCurrentCountry.season}</h4>
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
}

export default Detail;