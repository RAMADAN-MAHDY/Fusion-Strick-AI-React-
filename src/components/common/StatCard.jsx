import React from "react";
import Badge from "./Badge";

/**
 * Stat Card Component
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.icon - Lucide icon component
 * @param {string} props.title - Title of the card
 * @param {string|number} props.value - Main value to display
 * @param {string} props.subtext - Subtext below the value
 * @param {string} props.badgeLabel - Text for the badge
 * @param {string} props.badgeVariant - Variant for the badge
 * @returns {JSX.Element}
 */
const StatCard = ({ icon: Icon, title, value, subtext, badgeLabel, badgeVariant }) => (
  <div className="bg-black border border-[#1e1e1e] rounded-xl p-5 flex flex-col justify-between h-32 hover:border-[#333] transition-all duration-200">
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-[#888]" />
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>
      <Badge label={badgeLabel} variant={badgeVariant} />
    </div>
    <div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-[10px] text-[#ff9f43]">{subtext}</div>
    </div>
  </div>
);

export default StatCard;
