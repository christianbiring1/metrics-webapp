import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CountryItem from '../components/countriesItem';
import store from '../redux/configureStore';

it('matches Countries Item', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CountryItem />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
