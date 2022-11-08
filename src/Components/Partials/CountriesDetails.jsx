import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import appService from "../App/AppServices/AppService";
import FetchHook from "../FetchHook";
import { StyledCountries } from "./Countries.Styled";

const CountriesDetails = () => {
  const [apiData, setApiData] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("countries" + id);

        console.log("countriesdetails" + result.data.item);
        setApiData(result.data.item);
      } catch (error) {
        console.error(error);
      }
    }; 
    getData();
  }, [id]);
  return (
    <>
            <article key={apiData.id}>{apiData.name}</article>
    
    </>  
  );
};

export default CountriesDetails;
