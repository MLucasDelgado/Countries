// Components to render
import Card from "../../components/card/Card";
import style from './Home.module.css'
import {
  getCountries,
  orderCountries,
  ordenPopulation,
  orderContinents,
  getActivity,
  filterActivity
} from "../../redux/actions/actions";
import Pagination from "../../components/pagination/Pagination"

// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const HomePage = ({ currentPage, setCurrentPage }) => {
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
    setCurrentPage(1);
  }

  const handlePopulation = (event) => {
    dispatch(ordenPopulation(event.target.value))
    setCurrentPage(1);
  }

  const handleContinents = (event) => {
    dispatch(orderContinents(event.target.value))
    setCurrentPage(1);
  }

  const handleFilterActivity = (event) => {
    dispatch(filterActivity(event.target.value))
    setCurrentPage(1);
  }
  return (
    <div className={style.fondo}>
      <div className={style.selects}>
        <select className={style.select} onChange={handleOrder} name="Orden">
          <option value="alphabetically">Alphabetically</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select className={style.select} onChange={handlePopulation} name="Population">
          <option value="Population">Population</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select className={style.select} onChange={handleContinents}>
          <option value="All">Continents</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>

        <select className={style.select} onChange={handleFilterActivity} name="selectedActivity">
          <option value="actividad">Activities</option>
          {activities.map((activity) => (
            <option value={activity.name} key={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>

      {allCountries.length ? <div className={style.paginas}>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(allCountries.length / countriesPerPage)}
          onPageChange={paginate}
        />
      </div> : <div className={style.parrafo}><p> No existen coincidencias entre los filtros aplicados.</p></div>}

      <div className={style.container}>
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
    </div>

  );
}

export default HomePage;