import React from "react";
import Chart from "react-apexcharts";

interface ScoreCircleProps {
  label: string;
  value: number;
  color: string;       // progress color
  background?: string; // track background color
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ label, value, color, background = "#DCD7D7" }) => {
  const options: ApexCharts.ApexOptions = {
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        hollow: { size: "50%" },
        track: { background },
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
    stroke: {
    lineCap: "round",
  },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-40 flex flex-col items-center">
      <Chart options={options} series={[value]} type="radialBar" height={180} />
      <p className="mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreCircle;


