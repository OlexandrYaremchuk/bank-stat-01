import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "../style/barChart.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const PolarChart = ({ propsData }) => {
  // console.log(propsData);
  const data = {
    labels: Object.keys(propsData),
    datasets: [
      {
        label: "Загальна сума:",
        data: Object.values(propsData),
        backgroundColor: ["red", "blue", "green", "grey", "tomato"],
        borderWidth: 0,
        hoverBackgroundColor: "#5932EA",
        hoverOffset: 34,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className={`${s.chart} ${s.doughnutChart}`}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
};

export default PolarChart;
