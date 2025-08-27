import React from "react";

const MealStats: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-3">Meal Statistics</h2>
      <ul className="text-gray-700 text-sm space-y-2">
        <li>Number of meals uploaded: <span className="font-bold">21</span></li>
        <li>Number of high carb meals: <span className="font-bold">9</span></li>
        <li>Number of low protein meals: <span className="font-bold">8</span></li>
      </ul>
    </div>
  );
};

export default MealStats;
