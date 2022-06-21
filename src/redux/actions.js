const GET_DATA = 'redux/actions/GET_DATA';

const getDataAction = (mydata) => ({
  type: GET_DATA,
  mydata,
});
getDataAction();

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.mydata;
    default:
      return state;
  }
};

reducer();
