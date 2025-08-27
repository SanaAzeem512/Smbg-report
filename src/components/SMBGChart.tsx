import React from "react";
import Chart from "react-apexcharts";

const SMBGChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 400,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["6", "12", "8"], // time (hours)
      title: {
        text: "Time (hour)",
      },
    },
    yaxis: {
      title: {
        text: "Blood glucose (mg/dl)",
      },
      min: 60,
      max: 200,
      tickAmount: 7,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    colors: ["#4B0082", "#FF7F50"], // pre-meal purple, post-meal orange
  };

  // Dummy data (replace with API data if needed)
  const series = [
    {
      name: "Pre-meal SMBG",
      data: [130, 130, 140],
    },
    {
      name: "Post-meal SMBG",
      data: [155, 145, 160],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          SMBG & Meal Attributes
        </h2>
        <Chart options={options} series={series} type="bar" height={400} />
      </div>
    </div>
  );
};

export default SMBGChart;
