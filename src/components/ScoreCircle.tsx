import React from "react";
import Chart from "react-apexcharts";

interface ScoreCircleProps {
  label: string;
  value: number;
  color: string;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ label, value, color }) => {
  const options: ApexCharts.ApexOptions = {
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        hollow: { size: "65%" },
        dataLabels: {
          value: {
            formatter: () => `${value}%`,
            fontSize: "20px",
            fontWeight: "bold",
          },
          name: { show: false },
        },
      },
    },
    colors: [color],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-40 flex flex-col items-center">
      <Chart options={options} series={[value]} type="radialBar" height={180} />
      <p className="mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreCircle;
