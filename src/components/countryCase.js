import PropTypes from 'prop-types';

import corona from '../assets/corona.png';

function CountryCase({
  name, handleNavigation, countries,
}) {
  let total = 0;
  const filtered = countries.filter((country) => (
    country.Province_State === ''
  ));
  filtered.forEach((country) => {
    if (country.Country_Region === name) {
      total = country.Confirmed;
    }
    return total;
  });
  const filteredByProvince = countries.filter((country) => (
    country.Province_State !== ''
  ));

  filteredByProvince.forEach((country) => {
    if (country.Country_Region === name) {
      total += country.Confirmed;
    }
    return total;
  });
  return (
    <button type="button" className="country-container" onClick={() => handleNavigation(name)}>

      <div className="country-item">
        {!name ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <img src={corona} alt="" className="corona" />
            <div className="country-stat">
              <h1 className="country-name">{name}</h1>
              <span className="countrycase">
                {total}
                {' '}
                views
              </span>
            </div>
          </>
        )}
      </div>
    </button>
  );
}

CountryCase.propTypes = {
  name: PropTypes.string,
  handleNavigation: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    Confirmed: PropTypes.number,
    Incident_Rate: PropTypes.string,
    Last_Update: PropTypes.string,
    Province_Sate: PropTypes.string,
    Country_Region: PropTypes.string,
  })),
};

CountryCase.defaultProps = {
  countries: undefined,
  name: undefined,
};

export default CountryCase;
