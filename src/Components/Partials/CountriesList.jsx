import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Page } from "../App/Page";
import FetchHook from "../FetchHook";
import { StyledCountries } from "./Countries.Styled";

const CountriesList = () => {
  const { apiData: countries } = FetchHook("countries");

  return (
    <Page title="Lande" description="Mange lande">
      <StyledCountries>
        {countries &&
          countries.map((country) => (
            <li key={country.id}>
              <Link to={country.id}>{country.name}</Link>
            </li>
          ))}
      </StyledCountries>
    </Page>
  );
};

export default CountriesList;
