/* eslint-disable no-dupe-keys */

import axios from 'axios';

const GET_DATA = 'redux/actions/GET_DATA';

export const getDataAction = (countries) => ({
  type: GET_DATA,
  countries,
});

export const fetchdata = () => async (dispatch) => {
  const fetchedData = axios.get('https://coronavirus.m.pipedream.net/');
  const data = await fetchedData;
  const arr = data.data.rawData;
  let result = {};
  arr.map((el) => {
    result[el.Country_Region] = {
      ...el,
      Case_Fatality_Ratio:
        (result[el.Country_Region]
          ? result[el.Country_Region].Case_Fatality_Ratio
          : 0) + +el.Case_Fatality_Ratio || +el.Case_Fatality_Ratio,
      Case_Fatality_Ratio:
        (result[el.Country_Region]
          ? result[el.Country_Region].Incident_Rate
          : 0) + +el.Incident_Rate || +el.Incident_Rate,
      Deaths:
        (result[el.Country_Region] ? result[el.Country_Region].Deaths : 0)
          + +el.Deaths || +el.Deaths,
      Confirmed:
        (result[el.Country_Region] ? result[el.Country_Region].Confirmed : 0)
          + +el.Confirmed || +el.Confirmed,
    };
    result = Object.values(result);
    return result;
  });
  return dispatch(getDataAction(result));
};

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.countries;
    default:
      return state;
  }
};

export default dataReducer;
