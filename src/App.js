import './App.css';
import CountryItem from './components/countriesItem';
import fetchdata from './redux/fetchdata';

function App() {
  fetchdata();

  return (
    <>
      <h1>Hello</h1>
      <CountryItem />
    </>
  );
}

export default App;
