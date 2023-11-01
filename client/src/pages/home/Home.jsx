// Components to render
import Card from "../../components/card/Card";
import { getCountries, orderCountries, ordenPopulation, orderContinents, getActivity, filterActivity } from "../../redux/actions/actions";
import Pagination from "../../components/pagination/pagination";
import SearchBar from "../../components/searchBar/SearchBar";

// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const HomePage = ({ onSearch }) => {
  // Cargar datos
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities)

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivity());
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

  const handleContinents = (event) => {
    dispatch(orderContinents(event.target.value))
  }

  const handleFilterActivity = (event) => {
    dispatch(filterActivity(event.target.value))
  }
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <select onChange={handleOrder} name="Orden">
        <option value="alphabetically">Alphabetically</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <select onChange={handlePopulation} name="Population">
        <option value="Population">Population</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <select onChange={handleContinents}>
        <option value="All">Continents</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>

      <select onChange={handleFilterActivity} name="selectedActivity">
        <option value="actividad">Activities</option>
        {activities.map((activity) => (
          <option value={activity.name} key={activity.id}>
            {activity.name}
          </option>
        ))}
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