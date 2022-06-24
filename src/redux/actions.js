import axios from 'axios';

const GET_DATA = 'redux/actions/GET_DATA';

export const getDataAction = (countries) => ({
  type: GET_DATA,
  countries,
});

export const fetchdata = () => async (dispatch) => {
  const fetchedData = axios.get('https://coronavirus.m.pipedream.net/');
  const data = await fetchedData;
  return dispatch(getDataAction(data.data.rawData.slice(0, 10)));
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
