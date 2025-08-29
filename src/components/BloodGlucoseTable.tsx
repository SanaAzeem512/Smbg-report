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
    "Pre Lunch",
    "Post lunch",
    "Pre dinner",
    "Post dinner",
    "Overall",
  ];

  const headerColors = [
    "bg-[#0470AF] text-white", // Attributes
    "bg-[#74BD61] text-white", // Pre breakfast
    "bg-[#74BD61] text-white", // Post breakfast
    "bg-[#7F82BC] text-white", // Pre lunch
    "bg-[#7F82BC] text-white", // Post lunch
    "bg-[#D08FDA] text-white", // Pre dinner
    "bg-[#D08FDA] text-white", // Post dinner
    "bg-[#0470AF] text-white", // Overall
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-black">
          <span className="text-3xl">🩸</span> Blood glucose statistics
        </h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full border-separate border-spacing-[2px]  border border-gray-200 text-sm text-left rounded-lg">
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className={`px-6 py-3 text-center font-semibold border border-gray-200 ${headerColors[i]}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-6 py-3 border border-gray-200 text-center text-gray-700
                        ${j === 0 ? "bg-[#F0F7FA] font-medium text-left" : ""} 
                        ${j === 1 || j === 2 ? "bg-[#F1F9F3]" : ""} 
                        ${j === 3 || j === 4 ? "bg-[#F3F3FF]" : ""} 
                        ${j === 5 || j === 6 ? "bg-[#FAEEFB]" : ""}`}
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














