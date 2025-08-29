
import Chart from "react-apexcharts";

const GlucoseReport = () => {
  // 📊 Line chart options
  const preMealOptions:ApexCharts.ApexOptions = {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { width: 3 },
     markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: "#3B82F6",
      strokeWidth: 2,
    },
    xaxis: { categories: ["W1", "W2", "W3", "W4"] , labels: { style: { colors: "#6B7280" } },},
    yaxis: { min: 0, max: 60, tickAmount: 6, labels: { style: { colors: "#6B7280" } },},
     dataLabels: { enabled: false },
    colors: ["#0470AF"],
  };

  const postMealOptions:ApexCharts.ApexOptions  = {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { width: 3 },
     markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: "#3B82F6",
      strokeWidth: 2,
    },
    xaxis: { categories: ["W1", "W2", "W3", "W4"] },
    yaxis: { min: 0, max: 60, tickAmount: 6 },
    colors: ["#0470AF"],
  };

  const preMealSeries = [{ name: "Pre-meal", data: [13, 27, 15, 31] }];
  const postMealSeries = [{ name: "Post-meal", data: [32, 22, 30, 18] }];

  // 📊 Radial bar chart options
  const radialOptions  = (color: string):ApexCharts.ApexOptions  => ({
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        hollow: { size: "50%" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: { fontSize: "20px", fontWeight: 700, offsetY: 5 },
        },
      },
    },
    colors: [color],
    stroke: { lineCap: "round" },
  });

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">7Sugar Monthly Report (June)</h1>

      {/* 📋 Stats + Score Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 🔹 Left: Statistics */}
        <div className="p-4 shadow-lg rounded-2xl bg-white">
          <h2 className="text-lg font-semibold mb-4">Blood Glucose Statistics</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Number of SMBG uploaded: <b>21</b></li>
            <li>Number of Pre meal SMBG: <b>9</b></li>
            <li>Number of Post meal SMBG: <b>8</b></li>
            <li>Pre-meal SMBG within range: <b>8</b></li>
            <li>Post-meal SMBG within range: <b>8</b></li>
          </ul>
        </div>

        {/* 🔹 Right: Radial Scores */}
        <div className="p-4 shadow-lg rounded-2xl bg-white flex justify-around">
          <div className="flex flex-col items-center">
           <Chart options={radialOptions("#6366F1")} series={[58]} type="radialBar" height={160} width={160} />
            <p className="mt-2 text-sm font-medium">Pre-meal SMBG Score</p>
          </div>

          <div className="flex flex-col items-center">
            <Chart options={radialOptions("#EF4444")} series={[82]} type="radialBar" height={160} width={160} />
            <p className="mt-2 text-sm font-medium">Post-meal SMBG Score</p>
          </div>
        </div>
      </div>

      {/* 📈 Line charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 shadow-lg rounded-2xl bg-white">
          <h2 className="font-medium mb-4">Pre-meal blood glucose trend</h2>
          <Chart options={preMealOptions} series={preMealSeries} type="line" height={220} />
        </div>

        <div className="p-4 shadow-lg rounded-2xl bg-white">
          <h2 className="font-medium mb-4">Post-meal blood glucose trend</h2>
          <Chart options={postMealOptions} series={postMealSeries} type="line" height={220} />
        </div>
      </div>
    </div>
  );
};

export default GlucoseReport;


