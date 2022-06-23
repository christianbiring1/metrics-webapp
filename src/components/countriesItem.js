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
  let countryname = [];
  countries.map((country) => (
    countryname.push(country.Country_Region)
  ));
  countryname = [...new Set(countryname)];

  return (
    <div className="countries-container">
      {countryname.map((country) => (
        <CountryCase
          key={Math.random()}
          name={country}
        />
      ))}
      hello React
    </div>
  );
}

export default CountryItem;
