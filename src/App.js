import './App.css';
import fetchdata from './redux/fetchdata';

function App() {
  // const fetchdata = async () => {
  //   const fetchedData = fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={204f2b7c05819c97b2217c0e4b396d57}');
  //   const data = await fetchedData;
  //   console.log(data);
  // };
  fetchdata();

  return (
    <h1>Hello</h1>
  );
}

export default App;
