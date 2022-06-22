import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../redux/actions';
import fetchdata from '../redux/fetchdata';

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
  return (
    <div>
      {countries.map((country) => <div key={country.id}>{country.Country_Region}</div>)}
    </div>
  );
}

export default CountryItem;
