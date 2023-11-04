import { useState } from "react";
import style from './SearchBar.module.css'

const SearchBar = ({onSearch}) => {
    const [name, setName] = useState('');


    const handleChange = async (event) => {
        const newName = event.target.value;
        setName(newName);
        onSearch(newName) 


    }
    
    return (
        <div className={style.busqueda}>
            <input className={style.input}
                type="search"
                onChange={handleChange}
                value={name}
                placeholder="Search one country"
            />
        </div>
    );
}


export default SearchBar;