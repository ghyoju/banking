"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [123, 123, 123],
        backgroundColor: ["#0747b6", "#2265d8", "2f91fa"],
      },
    ],
    labels: ["BANK 1", "BANK 2", "BANK 3"],
  };
  return <Doughnut data={data} />;
};

export default DoughnutChart;
