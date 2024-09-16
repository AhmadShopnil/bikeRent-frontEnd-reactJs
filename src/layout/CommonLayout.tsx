import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const CommonLayout = () => {
  return (
    <div className="px-8">
      <div className="md:sticky md:top-0 md:z-10">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default CommonLayout;
