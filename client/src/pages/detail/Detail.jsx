// Hooks
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components
import { countriesById, cleanDetail, getActivity } from "../../redux/actions/actions";
import style from './Detail.module.css'
import CardActivity from "../../components/cardActivity/CardActivity";

const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch();

    const detail = useSelector(state => state.detail);
    const activities = useSelector(state => state.activities);

    useEffect(() => {
        dispatch(countriesById(id));
        dispatch(getActivity())
        return () => {
            dispatch(cleanDetail())
        }
    }, []);

    const activityForCurrentCountry = activities.find(activity => {
        return activity.Countries.some(country => country.id === id);
    });

    const actividad = activities.filter((activity) => {
        return activity.Countries.some(country => country.id === id);
    })
    //  console.log(typeof [actividad]);
    return (
        <div className={style.fondo}>
            <div className={style.contenedor}>
                <div className={style.pais}>
                    <h2>Name: {detail?.name}</h2>
                    <h4>ID: {detail?.id}</h4>
                    <h4>Continent: {detail?.continents}</h4>
                    <h4>Capital: {detail?.capital}</h4>
                    <h4>Subregion: {detail?.subregion}</h4>
                    <h4>Area: {detail?.area}</h4>
                    <h4>Population: {detail?.population}</h4>
                    <img src={detail?.flags} alt={detail?.id} />
                </div>

                
                <div className={style.container}>
                    {actividad.length ? actividad.map((activity) => {
                        return (
                            <div className={activityForCurrentCountry ? style.actividad : ''}>
                                <CardActivity 
                                    id={activity.id}
                                    key={activity.id}
                                    name={activity.name}
                                    difficulty={activity.difficulty}
                                    duration={activity.duration}
                                    season={activity.season}
                                    />
                            </div>
                        )
                    }) : (
                        <p> No hay actividades creadas en un pais que corresponda a este continente</p>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Detail;