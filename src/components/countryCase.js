import PropTypes from 'prop-types';

function CountryCase({
  name, /*  confirmedCases, provinceState, lastUpdate, incidentRate,  */
}) {
  return (
    <>
      <div className="country-item">
        <h1>{name}</h1>
      </div>
    </>
  );
}

CountryCase.propTypes = {
  name: PropTypes.string.isRequired,
  // confirmedCases: PropTypes.string.isRequired,
  // provinceState: PropTypes.string.isRequired,
  // lastUpdate: PropTypes.string.isRequired,
  // incidentRate: PropTypes.string.isRequired,
};

export default CountryCase;
