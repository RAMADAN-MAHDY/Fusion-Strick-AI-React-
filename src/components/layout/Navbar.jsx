import { useLocation } from "react-router-dom";
import { navItems } from "./navConfig";

function Navbar() {
  const location = useLocation();

  // نجيب الصفحة الحالية
  const current = navItems.find(
    (item) => item.path === location.pathname
  );

  const Icon = current?.icon;

  return (
    <div className="h-16 border-b border-[#1e293b] flex items-center px-6">
      
      <div className="flex items-center gap-3">
        
        <Icon className="w-6 h-6 shrink-0" />

        <h2 className="text-lg font-semibold">
          {current?.name || "Page"}
        </h2>

      </div>

    </div>
  );
}

export default Navbar;