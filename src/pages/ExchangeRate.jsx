import React, { useEffect, useState } from "react";
import { useAPP } from "../utils/context";
import BarChart from "../components/BarChart";
import PolarChart from "../components/PolarChart";
import Calandar from "../components/Calandar";
import groupByDate from "../utils/groupByDate";
import groupByCategory from "../utils/groupByCategory";
import LineChart from "../components/LineChart";
import groupByCategoryYear from "../utils/groupByCategoryYear";

const ExchangeRate = () => {
  const { balance } = useAPP();
  console.log(balance);

  return (
    <div>
      <Calandar />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <BarChart propsData={groupByDate(balance)} />
        <PolarChart propsData={groupByCategory(balance)} />
      </div>
      <LineChart propsData={groupByCategoryYear(balance)} />
    </div>
  );
};

export default ExchangeRate;
