import Button from "../button/button";
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.fondo}>
            <nav>
                <Button link={'/'} text='Start' />
                <Button link={'/home'} text='Home' />
                <Button link={'/create-activities'} text='New Activity' />
            </nav>
        </div>
    )
}

export default Nav