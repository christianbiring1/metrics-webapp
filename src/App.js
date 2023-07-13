import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryItem from './components/countriesItem';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryItem />} />
        <Route path="/details/:pays" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
