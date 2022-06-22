const GET_DATA = 'redux/actions/GET_DATA';

export const getDataAction = (countries) => ({
  type: GET_DATA,
  countries,
});
getDataAction();

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.countries;
    default:
      return state;
  }
};

export default dataReducer;
