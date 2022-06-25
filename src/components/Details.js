import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchdata } from '../redux/actions';

function Details() {
  const { pays } = useParams();
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchdata()); }, []);
  const countries = useSelector((state) => state.countries);
  // .filter((country) => country.Country_Region === pays);
  let countryname = [];
  countries.map((country) => (
    countryname.push(country.Country_Region)
  ));
  countryname = [...new Set(countryname)].filter((country) => (
    country.Country_Region === pays
  ));
  console.log(countries);
  let element = null;

  return (
    <ul>
      {
        countries.map((item) => {
          if (item.Country_Region === '' && item.Province_State === '') {
            element = (<span>You can Check the data on the home page</span>);
          } else if (item.Country_Region === pays && item.Province_State !== '') {
            element = (
              <li key={item.Confirmed}>
                <span>{item.Province_State}</span>
                <span>{item.Confirmed}</span>
              </li>
            );
          }
          return element;
        })
      }
    </ul>
  );
}

export default Details;
