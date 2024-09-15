import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../components/Dashboard/Admin/Profile/Profile";
import BikeManagement from "../components/Dashboard/Admin/BikeManagement/BikeManagement";
import UserManagement from "../components/Dashboard/Admin/UserManagenment/UserManagement";
import AdminDasboardLayout from "../layout/AdminDasboardLayout";

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
    path: "/dashboard/user",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/user",
        element: <Home></Home>,
      },
      {
        path: "/dashboard/user/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/user/bikeList",
        element: <BikeManagement></BikeManagement>,
      },

      {
        path: "/dashboard/user/rentalManagement",
        element: <BikeManagement></BikeManagement>,
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: <AdminDasboardLayout></AdminDasboardLayout>,
    children: [
      {
        path: "/dashboard/admin",
        element: <Home></Home>,
      },
      {
        path: "/dashboard/admin/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/admin/bikeManagement",
        element: <BikeManagement></BikeManagement>,
      },
      {
        path: "/dashboard/admin/userManagement",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
]);
