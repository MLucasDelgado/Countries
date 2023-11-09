import style from './CardActivity.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteActivity } from '../../redux/actions/actions'

const CardActivity = ({id, name, difficulty, duration, season}) => {

    const activityId = id
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <button
                className={style.boton}
                onClick={() => {
                    dispatch(deleteActivity(activityId));
                    alert('La actividad se elimino correctamente');
                    navigate('/home');
                }}
            >
                X
            </button>
            <h2>Activity</h2>
            <h4>Name: {name}</h4>
            <h4>Difficulty: {difficulty}</h4>
            <h4>Duration: {duration}</h4>
            <h4>Season: {season}</h4>
        </div>
    )
}

export default CardActivity