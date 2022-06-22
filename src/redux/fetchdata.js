const fetchdata = async () => {
  const fetchedData = await fetch('https://coronavirus.m.pipedream.net/');
  const data = await fetchedData.json();
  const util = Object.entries(data);
  const arr = util[4][1];
  const usefuldata = [];
  arr.forEach((country) => {
    if (country.Province_State !== '') {
      usefuldata.push({
        id: arr.indexOf(country),
        Confirmed: country.Confirmed,
        Incident_Rate: country.Incident_Rate,
        Last_Update: country.Last_Update,
        Province_State: country.Province_State,
        Country_Region: country.Country_Region,
      });
    }
  });
  const mydata = usefuldata.slice(0, 300);
  return mydata;
};

export default fetchdata;
