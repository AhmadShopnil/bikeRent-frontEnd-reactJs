import { Undo2 } from "lucide-react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Dashboard3 = () => {
  return (
    <div className="drawer drawer-mobile">
      {/* Toggle input for small screens */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        {/* Main Content Area */}
        <div className="w-full md:w-10/12">
          {/* Sticky Navbar */}
          <div className="sticky top-0 ">
            <Navbar />
          </div>

          <div className="p-4">
            {/* Back button */}
            <button
              className="bg-blue-500 text-sm text-white px-3 py-1 mb-6 rounded-md shadow-sm
               hover:bg-blue-700 transition-all"
              onClick={() => window.history.back()}
            >
              <Undo2 size={22} />
            </button>

            {/* Dynamic content */}
            <Outlet />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay lg:hidden"
        ></label>
        {/* Sidebar for small and large screens */}
        <div className="w-64 lg:w-64 bg-gray-200">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard3;
