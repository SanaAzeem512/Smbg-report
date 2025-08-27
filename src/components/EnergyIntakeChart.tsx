import React from "react";
import Chart from "react-apexcharts";

const EnergyIntakeChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        dataLabels: {
          position: "center",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val}%`,
      style: {
        colors: ["#000"], // black text
        fontWeight: 600,
      },
    },
    xaxis: {
      categories: ["W1", "W2", "W3", "W4"],
      labels: {
        formatter: (val: string) => `${val}`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    colors: ["#c4b5fd", "#bbf7d0", "#60a5fa"], // Carb, Protein, Fat
    grid: {
      borderColor: "#e5e7eb",
    },
  };

  const series = [
    {
      name: "Carb",
      data: [55, 48, 50, 45],
    },
    {
      name: "Protein",
      data: [10, 12, 15, 25],
    },
    {
      name: "Fat",
      data: [35, 40, 35, 30],
    },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        Week wise comparison of Percentage in Energy intake
      </h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default EnergyIntakeChart;
