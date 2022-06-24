import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchdata } from '../redux/actions';

function Details() {
  const { pays } = useParams();
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchdata()); }, []);
  const countries = useSelector((state) => state.countries)
    .filter((country) => country.Country_Region === pays);
  console.log(countries);
  return (
    <h1>Details</h1>
  );
}

export default Details;
