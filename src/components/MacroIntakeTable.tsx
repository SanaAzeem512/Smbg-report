import React from "react";

type MacroRow = {
  nutrient: string;
  unit: string;
  values: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
};

interface MacroTableProps {
  month: string;
  rows: MacroRow[];
}

const MacroTable: React.FC<MacroTableProps> = ({ month, rows }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-bold mb-3">{month}</h3>
      <table className="table-auto border-collapse border border-gray-200 rounded-md shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-2 text-left">Nutrient</th>
            <th className="border border-gray-200 px-4 py-2">Breakfast</th>
            <th className="border border-gray-200 px-4 py-2">Lunch</th>
            <th className="border border-gray-200 px-4 py-2">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="text-center">
              <td className="border border-gray-200 px-4 py-2 text-left font-medium">
                {row.nutrient} ({row.unit})
              </td>
              <td
                className={`border border-gray-200 px-4 py-2 ${
                  row.values.breakfast.includes("red") ? "text-red-600" : "text-green-600"
                }`}
                dangerouslySetInnerHTML={{ __html: row.values.breakfast }}
              />
              <td
                className={`border border-gray-200 px-4 py-2 ${
                  row.values.lunch.includes("red") ? "text-red-600" : "text-green-600"
                }`}
                dangerouslySetInnerHTML={{ __html: row.values.lunch }}
              />
              <td
                className={`border border-gray-200 px-4 py-2 ${
                  row.values.dinner.includes("red") ? "text-red-600" : "text-green-600"
                }`}
                dangerouslySetInnerHTML={{ __html: row.values.dinner }}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MacroIntakeTable: React.FC = () => {
  const juneData: MacroRow[] = [
    {
      nutrient: "Carbohydrate",
      unit: "g",
      values: {
        breakfast: "34.2 <span class='text-green-500'>(15.5)</span>",
        lunch: "34.2 <span class='text-green-500'>(15.5)</span>",
        dinner: "34.2 <span class='text-green-500'>(15.5)</span>",
      },
    },
    {
      nutrient: "Fiber",
      unit: "g",
      values: {
        breakfast: "<span class='text-red-500'>4.3 (2.9)</span>",
        lunch: "4.3 <span class='text-green-500'>(2.9)</span>",
        dinner: "4.3 <span class='text-green-500'>(2.9)</span>",
      },
    },
    {
      nutrient: "Protein",
      unit: "g",
      values: {
        breakfast: "6.2 <span class='text-green-500'>(2.8)</span>",
        lunch: "6.2 <span class='text-green-500'>(2.8)</span>",
        dinner: "<span class='text-red-500'>6.2 (2.8)</span>",
      },
    },
    {
      nutrient: "Fat",
      unit: "g",
      values: {
        breakfast: "12.7 <span class='text-green-500'>(4.2)</span>",
        lunch: "12.7 <span class='text-green-500'>(4.2)</span>",
        dinner: "12.7 <span class='text-green-500'>(4.2)</span>",
      },
    },
  ];

  const mayData: MacroRow[] = [
    {
      nutrient: "Carbohydrate",
      unit: "g",
      values: {
        breakfast: "34.2 <span class='text-green-500'>(15.5)</span>",
        lunch: "34.2 <span class='text-green-500'>(15.5)</span>",
        dinner: "34.2 <span class='text-green-500'>(15.5)</span>",
      },
    },
    {
      nutrient: "Fiber",
      unit: "g",
      values: {
        breakfast: "<span class='text-red-500'>4.3 (2.9)</span>",
        lunch: "<span class='text-red-500'>4.3 (2.9)</span>",
        dinner: "<span class='text-red-500'>4.3 (2.9)</span>",
      },
    },
    {
      nutrient: "Protein",
      unit: "g",
      values: {
        breakfast: "<span class='text-red-500'>6.2 (2.8)</span>",
        lunch: "<span class='text-red-500'>6.2 (2.8)</span>",
        dinner: "<span class='text-red-500'>6.2 (2.8)</span>",
      },
    },
    {
      nutrient: "Fat",
      unit: "g",
      values: {
        breakfast: "12.7 <span class='text-green-500'>(4.2)</span>",
        lunch: "12.7 <span class='text-green-500'>(4.2)</span>",
        dinner: "12.7 <span class='text-green-500'>(4.2)</span>",
      },
    },
  ];

  return (
    <div className="p-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-8">
        Median Macro intake comparison of present and previous month
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MacroTable month="June" rows={juneData} />
        <MacroTable month="May" rows={mayData} />
      </div>
    </div>
  );
};

export default MacroIntakeTable;
