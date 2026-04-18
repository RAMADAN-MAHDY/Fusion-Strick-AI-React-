import React from "react";

/**
 * Badge Component for status levels
 * @param {Object} props - Component props
 * @param {string} props.label - Label text
 * @param {string} props.variant - Variant (high, medium, good, perfect)
 * @returns {JSX.Element}
 */
const Badge = ({ label, variant }) => {
  const variants = {
    high: "bg-[#ff4d4d] text-white",
    medium: "bg-[#ff9f43] text-black",
    good: "bg-[#3498db] text-white",
    perfect: "bg-[#2ecc71] text-black",
  };
  return (
    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${variants[variant] || ""}`}>
      {label}
    </span>
  );
};

export default Badge;
