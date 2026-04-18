import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden text-white p-5">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-col flex-1 bg-[var(--secondary-color)] rounded-2xl">
        
        {/* Navbar (ثابت) */}
        <Navbar />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 pb-20">
          {children}
        </div>

      </div>
    </div>
  );
}

export default Layout;