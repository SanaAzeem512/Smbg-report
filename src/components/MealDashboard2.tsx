import React from "react";
import Chart from "react-apexcharts";

const MealDashboard2: React.FC = () => {
  // Line Chart Options
  const lineOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: { width: 3 },
    colors: ["#0470AF"],
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: "#3B82F6",
      strokeWidth: 2,
    },
    grid: {
      borderColor: "#E5E7EB",
      row: { colors: ["transparent"], opacity: 0.1 },
    },
    xaxis: {
      categories: ["W1", "W2", "W3", "W4"],
      labels: { style: { colors: "#6B7280" } },
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: { style: { colors: "#6B7280" } },
    },
    dataLabels: { enabled: false },
  };

  const lineSeries = [
    {
      name: "Carb Intake",
      data: [32, 22, 30, 18],
    },
  ];

  // Radial Chart Options
  const radialOptions = (color: string): ApexCharts.ApexOptions => ({
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        hollow: { size: "50%" },
   
        track: { background: "#E5E7EB" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            fontSize: "22px",
            fontWeight: "bold",
            color: color,
          },
        },
      },
    },
    colors: [color],
      stroke: {
    lineCap: "round",
  },
  });

  return (
    <div className="p-8 bg-white rounded-2xl shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
        <span className="mr-2">🍴</span> Meal Statistics
      </h2>

      {/* Stats + Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats */}
        <div className="space-y-2 text-gray-600">
          <p>
            Number of major meals uploaded:{" "}
            <span className="font-semibold text-gray-900">21</span>
          </p>
          <p>
            Number of snacks uploaded:{" "}
            <span className="font-semibold text-gray-900">9</span>
          </p>
          <p>
            Number of Breakfast uploaded:{" "}
            <span className="font-semibold text-gray-900">8</span>
          </p>
          <p>
            Number of Lunch uploaded:{" "}
            <span className="font-semibold text-gray-900">10</span>
          </p>
          <p>
            Number of high carb meal:{" "}
            <span className="font-semibold text-gray-900">9</span>
          </p>
          <p>
            Number of low protein meal:{" "}
            <span className="font-semibold text-gray-900">8</span>
          </p>
        </div>

        {/* Line Chart */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Median Carb intake from major meals
          </h3>
          <Chart
            options={lineOptions}
            series={lineSeries}
            type="line"
            height={220}
          />
        </div>
      </div>

      {/* Radial Score Charts */}
      <div className="flex flex-col md:flex-row justify-around mt-10 gap-6">
        <div className="text-center">
          <Chart
            options={radialOptions("#3B82F6")}
            series={[58]}
            type="radialBar"
            height={160}
          />
          <p className="mt-2 font-bold text-gray-800">Carb Score</p>
          <p className="text-sm text-gray-500">% of meals within carb budget</p>
        </div>
        <div className="text-center">
          <Chart
            options={radialOptions("#EF4444")}
            series={[82]}
            type="radialBar"
            height={160}
          />
          <p className="mt-2 font-bold text-gray-800">Protein Score</p>
          <p className="text-sm text-gray-500">
            % of meals within protein budget
          </p>
        </div>
        <div className="text-center">
          <Chart
            options={radialOptions("#22C55E")}
            series={[82]}
            type="radialBar"
            height={160}
          />
          <p className="mt-2 font-bold text-gray-800">Fiber Score</p>
          <p className="text-sm text-gray-500">% of meals within fiber budget</p>
        </div>
      </div>
    </div>
  );
};

export default MealDashboard2;



