import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { getDataAction } from '../redux/actions';
import { fetchdata } from '../redux/actions';
import CountryCase from './countryCase';
import mic from '../assets/mic.png';
import setting from '../assets/settings.png';
import arrow from '../assets/left-arrow.png';
import map from '../assets/world.svg';

function CountryItem() {
  const navigation = useNavigate();
  const handleNavigation = (country) => (
    navigation(`/details/${country}`)
  );
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => { dispatch(fetchdata()); }, []);
  let countryname = [];
  let total = 0;
  countries.map((country) => {
    countryname.push(country.Country_Region);
    total += country.Confirmed;
    return (countryname, total);
  });
  countryname = [...new Set(countryname)];
  // countries.map((country) => (console.log(country)));

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
      <div className="home-top">
        <img src={map} alt="map" className="map" />
        <h2>
          WORLDWIDE
          {total}
        </h2>
      </div>
      <p className="statbycountry"><span>STATS BY COUNTRY</span></p>
      <div className="countries-container">
        {countryname.map((country) => (
          <CountryCase
            key={Math.random()}
            name={country}
            countries={countries}
            handleNavigation={handleNavigation}
          />
        ))}
      </div>
    </section>
  );
}

export default CountryItem;
