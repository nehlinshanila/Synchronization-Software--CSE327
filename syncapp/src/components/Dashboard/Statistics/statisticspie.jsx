import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const StatisticsPie = ({ chartData }) => {
    return (
        <div
          style={{
            // display: "flex",
            position: "relative",
            top: -520,

            left: 1150,
            width: "60%",
          }}
        >
          This is Statisics Pie Data
          <Pie data={chartData} />
        </div>
      );
};

export default StatisticsPie;
