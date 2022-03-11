import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { DateTime } from "luxon";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [searchValue, setSearchValue] = useState({
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    return setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };

  const [searchResult, setSearchResults] = useState([]);

  const url = `https://api.skypicker.com/flights?fly_from=${searchValue.from}&fly_to=${searchValue.to}&partner=data4youcbp202106&limit=5`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    result && result.data && setSearchResults(result.data);
    console.log(result);
  };
  // result && !!result.length && setFlights(result);
  return (
    <div>
      <h1>FLIGHTS</h1>
      <SearchBar
        handleChange={handleChange}
        setSearchValue={setSearchValue}
        fetchData={fetchData}
      />
      <div>
        {searchResult.map((flight, i) => (
          <div className="flight" key={i}>
            <h2>
              {flight.cityFrom}->{flight.cityTo}
            </h2>
            <h4>Flight Duratin: {flight.fly_duration}</h4>
            <h4>Price: {flight.price}EUR</h4>
            <h4>
              Departure time:
              {DateTime.fromMillis(flight.dTimeUTC * 1000).toFormat("hh:mm")}
            </h4>
            <h4>
              Arrival time:
              {DateTime.fromMillis(flight.aTimeUTC * 1000).toFormat("hh:mm")}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
