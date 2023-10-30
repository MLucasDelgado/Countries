// Components to render
import Card from "../../components/card/Card";
import { getCountries, orderCountries, ordenPopulation } from "../../redux/actions/actions";
import Pagination from "../../components/pagination/pagination";

// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const HomePage = () => {
  // Cargar datos
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // Paginado
  const [currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 10;

  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  //handlers
  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value))
  }

  const handlePopulation = (event) => {
    dispatch(ordenPopulation(event.target.value))
  }
  
  return (
    <div>
      <select onChange={handleOrder} name="Orden" id="">
        <option value="Orden">Orden</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <select onChange={handlePopulation} name="Population" id="">
        <option value="Population">Population</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(allCountries.length / countriesPerPage)}
        onPageChange={paginate}
      />

      {currentCountries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          flags={country.flags}
          continents={country.continents}
          capital={country.capital}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
        />
      ))}
    </div>
  );
}

export default HomePage;