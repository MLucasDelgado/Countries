import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../redux/actions/actions";

const HomePage = () => {
    const dispatch = useDispatch();

    const allCountries = useSelector((state) => state.allCountries);

    useEffect(() => {
        dispatch(getCountries());
      }, [dispatch]);
    

    return(
        <div>
            {allCountries?.map((country) => {
          return (
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
            
          );
        })}
        </div>
    )
}

export default HomePage;