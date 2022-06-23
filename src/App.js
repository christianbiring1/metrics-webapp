import './App.css';
import CountryItem from './components/countriesItem';
import fetchdata from './redux/fetchdata';

function App() {
  fetchdata();

  return (
    <>
      <CountryItem />
    </>
  );
}

export default App;
