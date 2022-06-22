import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './actions';

const rootReducer = combineReducers({
  countries: dataReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
