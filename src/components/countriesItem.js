import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/actions';
import CountryCase from './countryCase';
import mic from '../assets/mic.png';
import setting from '../assets/settings.png';
// import arrow from '../assets/left-arrow.png';
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
  const styles = {
    width: '20px',
    filter: 'invert(1)',
    cursor: 'pointer',
  };
  return (
    <section>
      <header className="app-header">
        <div className="left-header">
          <h2 className="year">Covid#19 Matrics App</h2>
        </div>
        <h3 className="most-views">most views</h3>
        <div className="img-right" style={{ paddingRight: '20px' }}>
          <img src={mic} alt="" className="img" style={styles} />
          <img src={setting} alt="" className="img" style={styles} />
        </div>
      </header>
      <div className="home-top">
        <img src={map} alt="map" className="map" />
        {!total ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="total">
            <h2>WORLDWIDE</h2>
            <span className="countrycase">
              {total}
              {' '}
              views
            </span>
          </div>
        )}
      </div>
      <p className="statbycountry">
        <span>STATS BY COUNTRY</span>
      </p>
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
