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
  console.log(filteredByProvince);
  return (
    <button type="button" className="country-container" onClick={() => handleNavigation(name)}>
      <div className="country-item">
        <img src={corona} alt="" className="corona" />
        <h1 className="country-name">{name}</h1>
        <span>{total}</span>
      </div>
    </button>
  );
}

CountryCase.propTypes = {
  name: PropTypes.string.isRequired,
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
};

export default CountryCase;
