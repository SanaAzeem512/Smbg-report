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
        columnWidth: "35%",
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [
        "12", "2", "4", "6", "8", "10",
        "12", "2", "4", "6", "8", "10", "12"
      ],
      title: {
        text: "Time (hour)",
        style: { fontWeight: 600 },
      },
      labels: {
        style: { fontSize: "13px", fontWeight: 500 },
      },
    },
    yaxis: {
      title: {
        text: "Blood glucose (mg/dl)",
        style: { fontWeight: 600 },
      },
      min: 60,
      max: 200, // ✅ extended to 200
      tickAmount: 14, // ✅ gives 60 → 200 in steps of 10
      labels: {
        formatter: (val) => `${val}`,
        style: { fontSize: "13px", fontWeight: 500 },
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 3,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "14px",
    },
    colors: ["#5B5FAD", "#F28C3D"], // blue & orange
  };

  // Dummy data for 13 time points
  const series = [
    {
      name: "Pre-meal SMBG",
      data: [130, 128, 125, 132, 138, 140, 135, 130, 128, 132, 136, 138, 140],
    },
    {
      name: "Post-meal SMBG",
      data: [155, 150, 148, 158, 160, 165, 162, 155, 150, 158, 162, 165, 160],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-lg font-semibold mb-4 text-center">
          SMBG & Meal Attributes
        </h2>
        <Chart options={options} series={series} type="bar" height={400} />
      </div>
    </div>
  );
};

export default SMBGChart;





