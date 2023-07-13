import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/actions';
import mic from '../assets/mic.png';
import setting from '../assets/settings.png';
// import arrow from '../assets/left-arrow.png';
import map from '../assets/world.svg';
import CountryCase from './countryCase';
import Pagination from '../common/pagination';
import paginate from '../utils/paginate';

function CountryItem() {
  const [data, setData] = useState({
    currentPage: 1,
    pageSize: 22,
  });
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

  const handlePageChange = (page) => {
    setData((prev) => ({ ...prev, currentPage: page }));
  };

  const { pageSize, currentPage } = data;

  const pagdata = paginate(countryname, currentPage, pageSize);
  // console.log(pagdata);
  // console.log(countryname);

  return (
    <section>
      <header className="app-header">
        <div className="left-header">
          <h2 className="year">Covid#19 Matrics App</h2>
        </div>
        <h3 className="most-views">most views</h3>
        <div className="img-right" style={{ paddingRight: '20px' }}>
          <img src={mic} alt="" className="img" />
          <img src={setting} alt="" className="img" />
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
        {pagdata.map((country) => (
          <CountryCase
            key={Math.random()}
            name={country}
            countries={countries}
            handleNavigation={handleNavigation}
          />
        ))}
      </div>
      <Pagination
        itemsCount={countryname.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default CountryItem;
