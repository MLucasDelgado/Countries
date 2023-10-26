

const SearchBar = () => {
    return(
        <div>
            <input 
            type="search"
            value={name}
            placeholder="Ejemplo: Argentina"
             />
             <button>Buscar</button>
        </div>
    )
}

export default SearchBar;