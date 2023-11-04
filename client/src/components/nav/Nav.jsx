// hooks
import { useLocation } from "react-router-dom";

// Components to render
import Button from "../button/button";
import SearchBar from "../searchBar/SearchBar";
import style from './Nav.module.css'

const Nav = ({onSearch}) => {
    const location = useLocation();
    return (
        <div className={style.fondo}>
            <nav className={style.nav}> 
                <Button className={style.boton} link={'/'} text='Start' />
                {location.pathname !== '/home' ? <Button className={style.boton} link={'/home'} text='Home' /> : ''}
                {location.pathname === '/home' ? <SearchBar onSearch={onSearch} /> : ''}
                <Button className={style.boton} link={'/create-activities'} text='New Activity' />
            </nav>
        </div>
    )
}

export default Nav