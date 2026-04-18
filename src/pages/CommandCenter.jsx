import React from "react";
import { Search, Settings2, ChevronDown, ShieldAlert, Ban, Smartphone } from "lucide-react";
import Badge from "../components/common/Badge";
import StatCard from "../components/common/StatCard";
import ProgressBar from "../components/common/ProgressBar";

/**
 * CommandCenter Page Component
 * @returns {JSX.Element}
 */
const CommandCenter = () => {
  return (
    <div className="max-w-[1400px] mx-auto space-y-2 animate-in fade-in duration-500">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-0">
        <h1 className="text-[32px] whitespace-nowrap font-bold tracking-tight">Command Center</h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative group w-full sm:w-[1095px] h-[44px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#444] group-focus-within:text-[#3498db] transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search By IP" 
              className="bg-black border border-[#1e1e1e] rounded-[16px] py-2 pl-10 pr-4 w-full h-full text-sm focus:outline-none focus:border-[#3498db] transition-all"
            />
          </div>
          
          {/* Filter Dropdown */}
          <button className="flex items-center gap-2 bg-black border border-[#1e1e1e] rounded-full px-4 py-2.5 text-sm hover:border-[#333] transition-all w-full sm:w-auto justify-center">
            <Settings2 size={16} className="text-[#888]" />
            <span>All</span>
            <ChevronDown size={14} className="text-[#444]" />
          </button>
        </div>
      </header>

      {/* Main Stats Grid */}
      <section className="space-y-6">
        {/* Threat Score Card - Full Width */}
        <div className="bg-black border border-[#1e1e1e] rounded-2xl p-6 relative hover:border-[#333] transition-all duration-200">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <ShieldAlert size={18} className="text-[#888]" />
              <h3 className="text-lg font-medium">Threat Score</h3>
            </div>
            <Badge label="High" variant="high" />
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">80%</span>
            <span className="text-xs text-[#ff4d4d] font-medium">Threat Level: HIGH</span>
          </div>
        </div>

        {/* Small Summary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={ShieldAlert} 
            title="Active Attacks" 
            value="7" 
            subtext="Supporting Text" 
            badgeLabel="Medium" 
            badgeVariant="medium" 
          />
          <StatCard 
            icon={ShieldAlert} 
            title="Suspicious Cases" 
            value="12" 
            subtext="Supporting Text" 
            badgeLabel="High" 
            badgeVariant="high" 
          />
          <StatCard 
            icon={Ban} 
            title="Blocked IPs" 
            value="30" 
            subtext="Supporting Text" 
            badgeLabel="Good" 
            badgeVariant="good" 
          />
          <StatCard 
            icon={Smartphone} 
            title="Isolated Devices" 
            value="45" 
            subtext="Supporting Text" 
            badgeLabel="Perfect" 
            badgeVariant="perfect" 
          />
        </div>
      </section>

      {/* Attack Distribution Section */}
      <section className="bg-black border border-[#8F8F8F] rounded-2xl m-6 p-6">
        <h3 className="text-lg font-medium mb-3">Attack Distribution</h3>
        <div className="space-y-2">
          <ProgressBar label="DDOS" value={45} colorClass="bg-[#ff4d4d]" />
          <ProgressBar label="BruteForce" value={30} colorClass="bg-[#ff9f43]" />
          <ProgressBar label="Malware" value={25} colorClass="bg-[#2ecc71]" />
        </div>
      </section>

      {/* Recent Alerts Section */}
      <section className="bg-black border border-[#1e1e1e] mt-[-20px] rounded-2xl p-6 overflow-hidden">
        <h3 className="text-lg font-medium mb-6">Recent Alerts</h3>
        <div className="border border-[#8F8F8F] rounded-xl overflow-x-auto">
          <table className="w-full border text-left border-collapse min-w-[500px]">
            <tbody>
              <tr className="border-b border-[#8F8F8F]">
                <td className="py-2 px-6 text-[#fff] text-sm w-1/2 text-center border-r border-[#8F8F8F]">IP</td>
                <td className="py-2 px-6 text-sm text-center">192.168.1.5</td>
              </tr>
              <tr className="border-b border-[#8F8F8F]">
                <td className="py-4 px-6 text-[#fff] text-sm w-1/2 text-center border-r border-[#8F8F8F]">Type</td>
                <td className="py-4 px-6 text-sm text-center">DDOS</td>
              </tr>
              <tr className="border-b border-[#8F8F8F]">
                <td className="py-4 px-6 text-[#fff] text-sm w-1/2 text-center border-r border-[#8F8F8F]">Status</td>
                <td className="py-4 px-6 text-sm text-center">ATTACK</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-[#fff] text-sm w-1/2 text-center border-r border-[#8F8F8F]">Time</td>
                <td className="py-4 px-6 text-sm text-center">12:45:22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CommandCenter;
