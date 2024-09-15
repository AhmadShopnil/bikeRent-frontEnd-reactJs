import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../components/Dashboard/Admin/Profile/Profile";
import BikeManagement from "../components/Dashboard/Admin/BikeManagement/BikeManagement";
import UserManagement from "../components/Dashboard/Admin/UserManagenment/UserManagement";
import AdminDasboardLayout from "../layout/AdminDasboardLayout";
import MyRental from "../components/Dashboard/User/MyRental/MyRental";
import BikeList from "../pages/BikeList/BikeList";
import RentalDetails from "../components/Dashboard/User/MyRental/RentalDetails";
import Help from "../components/Dashboard/User/Help/Help";
import UserProfile from "../components/Dashboard/User/Profile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout></CommonLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bikeList",
        element: <BikeList></BikeList>,
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
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/user/bikeList",
        element: <BikeManagement></BikeManagement>,
      },

      {
        path: "/dashboard/user/rentalManagement",
        element: <MyRental></MyRental>,
      },
      {
        path: "/dashboard/user/help",
        element: <Help></Help>,
      },
      {
        path: "/dashboard/user/rentalManagement/rentalDetails/:rentalId",
        element: <RentalDetails></RentalDetails>,
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
