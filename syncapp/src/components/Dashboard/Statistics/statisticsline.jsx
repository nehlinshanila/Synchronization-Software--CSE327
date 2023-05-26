import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const StatisticsLine = ({ chartData }) => {
    return (
        <div
          style={{
            // display: "flex",
            position: "relative",
            top: -260,
            left: 640,
            width: "100%",
          }}
        >
          This is Statisics Line Data
          <Line data={chartData} />
        </div>
      );
};

export default StatisticsLine;
