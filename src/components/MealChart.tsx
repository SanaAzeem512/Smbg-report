import React from "react";
import Chart from "react-apexcharts";

interface MealChartProps {
  mealType: string;
  mealData: number[]; // [Carbs, Protein, Fat, Fiber]
}

const MealChart: React.FC<MealChartProps> = ({ mealType, mealData }) => {
  const options: ApexCharts.ApexOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: "45%" } },
    xaxis: { categories: ["Carbs", "Protein", "Fat", "Fiber"] },
    legend: { show: false },
    colors: ["#6366F1", "#F59E0B", "#EF4444", "#10B981"],
  };

  const series = [{ name: mealType, data: mealData }];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h3 className="text-sm font-semibold mb-2">{mealType}</h3>
      <Chart options={options} series={series} type="bar" height={220} />
      <div className="text-xs text-gray-600 mt-2">
        <p>Median: - </p>
        <p>Range: - </p>
        <p>Max value: - </p>
        <p>Date: - </p>
      </div>
    </div>
  );
};

export default MealChart;
