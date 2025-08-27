import React from "react";

const BloodGlucoseTable: React.FC = () => {
  const data = [
    ["Number of SMBG uploaded", 3, 3, 1, 3, 1, 2, 0],
    ["Number of SMBG out of range", 3, 3, 1, 3, 1, 2, 0],
    ["Highest SMBG recorded", 3, 3, 1, 3, 1, 2, 0],
    ["Lowest SMBG recorded", 3, 3, 1, 3, 1, 2, 0],
    ["Median SMBG", 3, 3, 1, 3, 1, 2, 0],
    ["Median SMBG (Previous week)", 3, 3, 1, 3, 1, 2, 0],
  ];

  const headers = [
    "Attributes",
    "Pre breakfast",
    "Post breakfast",
    "Pre lunch",
    "Post lunch",
    "Pre dinner",
    "Post dinner",
    "Overall",
  ];

  return (
    <div className="h-36 bg-red-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere nobis, itaque voluptatum molestias culpa animi accusamus excepturi non perferendis odit, aspernatur beatae consectetur! Doloribus nemo ratione tenetur suscipit quod?
       </div>
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-700">
          <span className="text-3xl">💧</span> Blood Glucose Statistics
        </h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="border border-gray-500 border-collapse w-full text-sm text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-6 py-3 border border-gray-500 font-semibold text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-6 py-3 border border-gray-500 text-center"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BloodGlucoseTable;





