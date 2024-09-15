import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const CommonLayout = () => {
  return (
    <div className="px-8">
      <div className="sticky top-0 z-10">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default CommonLayout;
