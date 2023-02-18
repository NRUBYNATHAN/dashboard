import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";

export function Pie() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });
  const [pie, setPie] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  });
  return (
    <div className="chartdata">


      <div className="chart1">
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="800" />
      </div>
      <div className="chart">
        <Chart options={pie.options} series={pie.series} type="donut" width="600" />

      </div>


    </div>
  );
}
