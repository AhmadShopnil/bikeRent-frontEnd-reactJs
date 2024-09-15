import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const AdminDasboardLayout = () => {
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDasboardLayout;
