import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../dashboard.css"; // Import the CSS file


const StatisticsLine = ({ chartData }) => {
  return (
    <div className="StatisticsLine"
    >
      <Line data={chartData} />
    </div>
  );
};

export default StatisticsLine;
