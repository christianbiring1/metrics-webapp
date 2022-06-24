import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryItem from './components/countriesItem';
import Details from './components/Details';

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
