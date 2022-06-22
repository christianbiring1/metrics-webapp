import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../redux/actions';
import fetchdata from '../redux/fetchdata';
import CountryCase from './countryCase';

function CountryItem() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    async function data() {
      const countries = await fetchdata();
      dispatch(getDataAction(countries));
    }
    data();
  }, []);
  // console.log(countries);
  countries.forEach((country) => {
    console.log(country);
  });
  return (
    <div className="countries-container">
      {countries.map((country) => (
        <CountryCase
          key={country.id}
          name={country.Country_Region}
          confirmedCases={country.Confirmed}
          lastUpdate={country.Last_Update}
          incidentRate={country.Incident_Rate}
          provinceState={country.Province_State}
        />
      ))}
      hello React
    </div>
  );
}

export default CountryItem;
