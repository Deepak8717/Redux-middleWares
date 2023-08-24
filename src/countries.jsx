// src/Countries.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "./countriesSlice";

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li style={{ listStyle: "none" }} key={country.alpha2Code}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
