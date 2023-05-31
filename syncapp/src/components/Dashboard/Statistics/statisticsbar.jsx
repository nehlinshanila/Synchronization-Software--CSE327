import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../dashboard.css"; // Import the CSS file

const StatisticsBar = ({ chartData }) => {
  return (
    <div className="StatisticsBar">
      <Bar data={chartData} />
    </div>
  );
};

export default StatisticsBar;
