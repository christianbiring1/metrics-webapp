import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataReducer from './actions';

const rootReducer = combineReducers({
  countries: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
