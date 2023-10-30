import Button from "../button/button";
import SearchBar from "../searchBar/SearchBar";
import style from './Nav.module.css'

const Nav = ({onSearch}) => {
    return (
        <div className={style.fondo}>
            <nav>
            <Button link={'/home'} text='Home' />
                <SearchBar onSearch={onSearch} />
                <Button link={'/activities'} text='Nueva Actividad' />
            </nav>
        </div>
    )
}

export default Nav