import { createContext, useContext, useEffect, useState } from "react";
import { fetch_config } from "./fetch_config";

const AppContext = createContext();

export const useAPP = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [balance, setBalance] = useState([]);
  const [startDate, setStartDate] = useState("20180101");
  const [endDate, setEndDate] = useState("20230101");

  console.log(startDate);
  console.log(endDate);

  const getData = async (...obj) => {
    try {
      const response = await fetch(
        `${fetch_config.BASE_URL}/${fetch_config.EX_DEBET_PATH}?start=${startDate}&end=${endDate}&json`
      );
      const data = await response.json();
      setBalance(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, [startDate, endDate]);

  return (
    <AppContext.Provider
      value={{ balance, setBalance, getData, setStartDate, setEndDate }}
    >
      {children}
    </AppContext.Provider>
  );
};
// https://bank.gov.ua/NBU_Exchange/exchange_site?start=20200101&end=20240217&valcode=usd&sort=exchangedate&order=desc&json

// https://bank.gov.ua/NBU_Exchange/exchange_site?start=20200101&end=20240217&valcode=usd&sort=exchangedate&order=desc&json
