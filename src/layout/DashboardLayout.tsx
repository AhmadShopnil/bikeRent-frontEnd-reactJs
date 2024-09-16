import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Undo2 } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-2/12">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="w-10/12 overflow-y-auto">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        <div className="p-4">
          {/* back button */}
          <button
            className="bg-blue-500 text-sm text-white px-3 py-1 mb-6 
            rounded-md shadow-sm
             hover:bg-blue-700 transition-all"
            onClick={() => window.history.back()}
          >
            <Undo2 size={22} />
          </button>

          {/* dynamic content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
