import React from "react";
import ScoreCircle from "./ScoreCircle";
import MealChart from "./MealChart";

const MealDashboard: React.FC = () => {
  // ✅ Example data (replace with API data later)
  const mealData = {
    Breakfast: [60, 40, 30, 20], // [Carbs, Protein, Fat, Fiber]
    Lunch: [70, 50, 25, 30],
    Dinner: [55, 35, 40, 25],
  };

  const stats = {
    mealsUploaded: 21,
    highCarbMeals: 9,
    lowProteinMeals: 8,
  };

  const scores = {
    carbScore: 58,
    proteinScore: 82,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Left Side - Stats */}
        <div className="col-span-2">
          <div className="bg-white p-4 rounded-xl shadow-md w-full">
            <h1 className="text-lg font-semibold mb-3">Meal Statistics</h1>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>
                Number of meals uploaded:{" "}
                <span className="font-bold">{stats.mealsUploaded}</span>
              </li>
              <li>
                Number of high carb meals:{" "}
                <span className="font-bold">{stats.highCarbMeals}</span>
              </li>
              <li>
                Number of low protein meals:{" "}
                <span className="font-bold">{stats.lowProteinMeals}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle - Scores */}
        <div className="col-span-2 flex flex-row justify-center gap-10">
          <ScoreCircle
            label="Carb Score"
            value={scores.carbScore}
            color="#6366F1"
          />
          <ScoreCircle
            label="Protein Score"
            value={scores.proteinScore}
            color="#EF4444"
          />
        </div>

        {/* Right Side - Charts */}
        <div className="flex justify-between items-center w-full col-span-4 gap-x-4">
          <MealChart mealType="Breakfast" mealData={mealData.Breakfast} />
          <MealChart mealType="Lunch" mealData={mealData.Lunch} />
          <MealChart mealType="Dinner" mealData={mealData.Dinner} />
        </div>
      </div>
    </div>
  );
};

export default MealDashboard;

