import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [name, setName] = useState('');

    const handleChange = async (event) => {
        const newName = event.target.value;
        setName(newName);
        // Realiza la búsqueda en tiempo real
            onSearch(newName) 
    }

    return (
        <div>
            <input
                type="search"
                onChange={handleChange}
                value={name}
                placeholder="Ejemplo: Argentina"
            />
        </div>
    );
}


export default SearchBar;