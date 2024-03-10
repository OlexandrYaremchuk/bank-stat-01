import React from "react";
import { Bar } from "react-chartjs-2";
import s from "../style/barChart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import generateRandomColor from "../utils/randomColor";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ propsData }) => {
  // console.log(propsData);
  const data = {
    labels: Object.keys(propsData),
    datasets: [
      {
        label: "balance",
        data: Object.values(propsData),
        backgroundColor: generateRandomColor(),
        hoverBackgroundColor: "#5932EA",
        borderRadius: "5",
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: { beginAtZero: true, grid: { display: false } },
      y: { beginAtZero: true, grid: { display: false }, display: false },
    },
  };
  return (
    <div className={`${s.barChart} ${s.chart}`}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;
