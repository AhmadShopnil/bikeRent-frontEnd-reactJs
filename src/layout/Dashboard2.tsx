import { MoveRight, Undo2 } from "lucide-react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Dashboard2 = () => {
  return (
    <div className="drawer  ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Main Content Area */}
        <div className=" ">
          {/* Sticky Navbar */}
          <div className="">
            <Navbar />

            {/* dashboard button */}
            <button
              className="mt-2 text-sm  px-3 py-1 mb-6 bg-blue-500 text-white
             hover:bg-blue-700 rounded-r-md 
             shadow-sm transition-all"
            >
              <label htmlFor="my-drawer" className=" drawer-button">
                <MoveRight size={22} />
              </label>
            </button>
            {/* back button */}
            <div className=" flex justify-end  ">
              <button
                className=" bg-blue-500  text-sm text-white px-3 py-1 mb-6 
            rounded-md shadow-sm
             hover:bg-blue-700 transition-all"
                onClick={() => window.history.back()}
              >
                <Undo2 size={22} />
              </button>
            </div>
          </div>
          {/* dynamic content */}
          <div className="px-0 sm:px-0 md:px-22 lg:px-32">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar */}
        <div className="w-3/5  md:w-2/6 lg:w-2/12">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
