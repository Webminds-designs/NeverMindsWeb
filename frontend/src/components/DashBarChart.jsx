import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const DashBarChart = () => {
  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: "Data",
          data: [20, 40, 60],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["1-10 Jan", "11-20 Jan", "21-30 Jan"],
        labels: {
          style: {
            colors: "#333",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#333",
            fontSize: "12px",
          },
        },
      },
      grid: {
        borderColor: "#f1f1f1",
      },
      fill: {
        opacity: 1,
        colors: ["#f9c226"],
      },
      tooltip: {
        theme: "dark",
      },
    };

    const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col rounded-3xl bg-white bg-clip-border text-gray-700">
      <div className="pt-6 px-6 pb-4">
        <div id="bar-chart"></div>
      </div>
    </div>
  );
};

export default DashBarChart;
