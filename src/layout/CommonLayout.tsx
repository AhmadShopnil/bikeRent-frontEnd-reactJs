import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const CommonLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default CommonLayout;
