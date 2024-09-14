import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../components/Dashboard/Admin/Profile/Profile";
import BikeManagement from "../components/Dashboard/Admin/BikeManagement/BikeManagement";
import UserManagement from "../components/Dashboard/Admin/UserManagenment/UserManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout></CommonLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Home></Home>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/bikeManagement",
        element: <BikeManagement></BikeManagement>,
      },
      {
        path: "/dashboard/userManagement",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
]);
