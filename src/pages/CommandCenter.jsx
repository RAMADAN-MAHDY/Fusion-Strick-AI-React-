import AttackPieChart from "../components/charts/AttackPieChart";
import React from "react";

function CommandCenter() {
  return (
    <>
     <h2 className="text-lg mb-4">Quick Overview</h2>
    
    <div className=" flex flex-row gap-14">
      
      <div
        className="w-[30vh] h-[30vh] bg-[#111313] 
        rounded-xl 
        flex justify-center items-center
        shadow-sm
        shadow-[#F2F2F2]
        ">
        
        <AttackPieChart />
      </div>
      <div
        className="w-[100vh] h-[30vh] bg-[#111313] 
        border-1 border-[#F2F2F2] 
        rounded-xl 
        flex justify-center items-center">
       
      </div>
    </div>
    </>

  );
}

export default CommandCenter;
