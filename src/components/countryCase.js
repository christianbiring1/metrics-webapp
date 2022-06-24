import PropTypes from 'prop-types';

import corona from '../assets/corona.png';

function CountryCase({
  name, handleNavigation,
}) {
  return (
    <button type="button" className="country-container" onClick={() => handleNavigation(name)}>
      <div className="country-item">
        <img src={corona} alt="" className="corona" />
        <h1 className="country-name">{name}</h1>
      </div>
    </button>
  );
}

CountryCase.propTypes = {
  name: PropTypes.string.isRequired,
  handleNavigation: PropTypes.func.isRequired,
  // countries: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number,
  //   Confirmed: PropTypes.string,
  //   Incident_Rate: PropTypes.string,
  //   Last_Update: PropTypes.string,
  //   Province_Sate: PropTypes.string,
  //   Country_Region: PropTypes.string,
  // })),
};

// CountryCase.defaultProps = {
//   countries: undefined,
// };

export default CountryCase;
