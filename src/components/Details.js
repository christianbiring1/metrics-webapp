import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchdata } from '../redux/actions';
import corona from '../assets/corona.png';
import mic from '../assets/mic.png';
import setting from '../assets/settings.png';
import arrow from '../assets/left-arrow.png';

function Details() {
  const { pays } = useParams();
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchdata()); }, []);
  const countries = useSelector((state) => state.countries);
  let countryname = [];
  countries.map((country) => (
    countryname.push(country.Country_Region)
  ));
  countryname = [...new Set(countryname)].filter((country) => (
    country.Country_Region === pays
  ));
  let element = null;
  let view = 0;

  const filtered = countries.filter((country) => (
    country.Province_State === ''
  ));
  filtered.forEach((country) => {
    if (country.Country_Region === pays) {
      view = country.Confirmed;
      element = (
        <ul className="province-list">
          <li className="province-item">
            <span>Case Fatality Ratio</span>
            <span>{country.Case_Fatality_Ratio}</span>
          </li>
          <li className="province-item">
            <span>Confirmed cases</span>
            <span className="case-number">
              <span>{country.Confirmed}</span>
              <span>cases</span>
            </span>
          </li>
          <li className="province-item">
            <span>Incident rate</span>
            <span>{country.Incident_Rate}</span>
          </li>
          <li className="province-item">
            <span>Deaths</span>
            <span>{country.Deaths}</span>
          </li>
        </ul>
      );
    }
    return view;
  });

  const filteredByProvince = countries.filter((country) => (
    country.Province_State !== ''
  ));
  const data = [];
  filteredByProvince.forEach((country) => {
    if (country.Country_Region === pays) {
      view += country.Confirmed;
      data.push(country);
    }
    return (view);
  });

  return (
    <section>
      <header className="app-header">
        <div className="left-header">
          <img src={arrow} alt="arrow" className="arrow img" />
          <h2 className="year">2022</h2>
        </div>
        <h3 className="most-views">town/city views</h3>
        <div className="img-right">
          <img src={mic} alt="" className="img" />
          <img src={setting} alt="" className="img" />
        </div>
      </header>
      <div className="home-top">
        <img src={corona} alt="map" className="detail-img" />
        <div className="total">
          <h2>{pays}</h2>
          <span>
            {view}
            {' '}
            views
          </span>
        </div>
      </div>
      <p className="statbycountry"><span>CITY/TOWN BREAKDOWN - 2022</span></p>
      <div className="div-container">
        {element}
      </div>
      <div>
        {
          data.map((item) => {
            element = (
              <ul className="province-list">
                <li className="province-item">
                  <span className="province-state">{item.Province_State}</span>
                  <span className="case-number">
                    <span>{item.Confirmed}</span>
                    <span>Cases</span>
                  </span>
                </li>
              </ul>
            );
            return element;
          })
        }
      </div>
    </section>
  );
}

export default Details;
