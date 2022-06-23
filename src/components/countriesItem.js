import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../redux/actions';
import fetchdata from '../redux/fetchdata';
import CountryCase from './countryCase';
import mic from '../assets/mic.png';
import setting from '../assets/settings.png';
import arrow from '../assets/left-arrow.png';
import map from '../assets/world.svg';

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
  countries.map((country) => (console.log(country)));

  return (
    <section>
      <header className="app-header">
        <div className="left-header">
          <img src={arrow} alt="arrow" className="arrow img" />
          <h2 className="year">2022</h2>
        </div>
        <h3 className="most-views">Most views</h3>
        <div className="img-right">
          <img src={mic} alt="" className="img" />
          <img src={setting} alt="" className="img" />
        </div>
      </header>
      <div>
        <img src={map} alt="map" className="map" />
      </div>
      <div className="countries-container">
        {countryname.map((country) => (
          <CountryCase
            key={Math.random()}
            name={country}
          />
        ))}
      </div>
    </section>
  );
}

export default CountryItem;
