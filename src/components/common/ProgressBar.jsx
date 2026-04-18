import React from "react";

/**
 * ProgressBar Component
 * @param {Object} props - Component props
 * @param {string} props.label - Label for the bar
 * @param {number} props.value - Percentage value (0-100)
 * @param {string} props.colorClass - Tailwind background color class
 * @returns {JSX.Element}
 */
const ProgressBar = ({ label, value, colorClass }) => (
  <div className="mb-4 flex items-center gap-3">
    <span className="text-sm font-medium text-[#fff] whitespace-nowrap">{label}</span>
    <div className="flex-1 h-2 bg-[#111313] rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass}`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="text-sm font-medium text-[#fff]">{value}%</span>
  </div>
);

export default ProgressBar;
