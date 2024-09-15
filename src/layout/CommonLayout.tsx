import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const CommonLayout = () => {
  return (
    <div className="px-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default CommonLayout;
