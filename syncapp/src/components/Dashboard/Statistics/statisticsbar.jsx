import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const StatisticsBar = ({ chartData }) => {
  return (
    <div
      style={{
        // display: "flex",
        position: "relative",
        left: 150,
        width: "100%",
      }}
    >
          This is Statisics Bar Data
      <Bar data={chartData} />
    </div>
  );
};

export default StatisticsBar;
