import PropTypes from 'prop-types';

import corona from '../assets/corona.png';

function CountryCase({
  name,
}) {
  return (
    <div className="country-container">
      <div className="country-item">
        <img src={corona} alt="" className="corona" />
        <h1 className="country-name">{name}</h1>
      </div>
    </div>
  );
}

CountryCase.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CountryCase;
