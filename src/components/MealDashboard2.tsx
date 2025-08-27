import React from "react";
import Chart from "react-apexcharts";

const MealDashboard2: React.FC = () => {
  // Line Chart Options
  const lineOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: { curve: "smooth", width: 2 },
    xaxis: {
      categories: ["W1", "W2", "W3", "W4"],
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
    },
  };

  const lineSeries = [
    {
      name: "Carb Intake",
      data: [32, 22, 30, 18],
    },
  ];

  // Radial Chart Options Factory
  const radialOptions = (color: string): ApexCharts.ApexOptions => ({
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "65%" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
      },
    },
    colors: [color],
  });

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-700 flex items-center mb-6">
        🍴 Meal Statistics
      </h2>

      {/* Stats + Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Stats */}
        <div className="space-y-2 text-gray-700">
          <p>
            Number of major meals uploaded:{" "}
            <span className="font-semibold">21</span>
          </p>
          <p>
            Number of snacks uploaded: <span className="font-semibold">9</span>
          </p>
          <p>
            Number of Breakfast uploaded:{" "}
            <span className="font-semibold">8</span>
          </p>
          <p>
            Number of Lunch uploaded: <span className="font-semibold">10</span>
          </p>
          <p>
            Number of high carb meal: <span className="font-semibold">9</span>
          </p>
          <p>
            Number of low protein meal:{" "}
            <span className="font-semibold">8</span>
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

      {/* Circular Score Charts */}
      <div className="flex flex-col md:flex-row justify-around mt-8 gap-6">
        <div className="text-center">
          <Chart
            options={radialOptions("#3b82f6")}
            series={[58]}
            type="radialBar"
            height={150}
          />
          <p className="mt-2 font-semibold text-gray-700">Carb Score</p>
        </div>
        <div className="text-center">
          <Chart
            options={radialOptions("#ef4444")}
            series={[82]}
            type="radialBar"
            height={150}
          />
          <p className="mt-2 font-semibold text-gray-700">Protein Score</p>
        </div>
        <div className="text-center">
          <Chart
            options={radialOptions("#22c55e")}
            series={[82]}
            type="radialBar"
            height={150}
          />
          <p className="mt-2 font-semibold text-gray-700">Fiber Score</p>
        </div>
      </div>
    </div>
  );
};

export default MealDashboard2;
