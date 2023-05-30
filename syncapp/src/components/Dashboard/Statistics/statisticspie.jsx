import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../dashboard.css"; // Import the CSS file


const StatisticsPie = ({ chartData }) => {
  return (
    <div className="StatisticsPie"
    >
      <Doughnut data={chartData} />
    </div>
  );
};

export default StatisticsPie;
