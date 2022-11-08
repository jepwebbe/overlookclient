import { useEffect, useState } from "react";
import appService from "./App/AppServices/AppService";

const FetchHook = (endpoint) => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetList(endpoint);
        console.log(result.data.items);
        setApiData(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [endpoint]);

  return { apiData };
};
export default FetchHook;
