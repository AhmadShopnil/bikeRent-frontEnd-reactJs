import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import Home from "../pages/Home/Home";
import BikeList from "../pages/BikeList/BikeList";
import BikeDetailsPage from "../pages/BikeDetailsPage/BikeDetailsPage";
import CheckoutPage from "../pages/CheckoutPage/ChekoutPage";
import BookingConfirmation from "../pages/CheckoutPage/BookingConfermation";
import Dashboard2 from "../layout/Dashboard2";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import UserDashboard from "../pages/Dashboard/User/Dashboard/UserDashboard";
import UserProfile from "../pages/Dashboard/User/Profile/UserProfile";
import BikeManagement from "../pages/Dashboard/Admin/BikeManagement/BikeManagement";
import MyRental from "../pages/Dashboard/User/MyRental/MyRental";
import Help from "../pages/Dashboard/User/Help/Help";
import RentalDetails from "../pages/Dashboard/User/MyRental/RentalDetails";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import AdminProfile from "../pages/Dashboard/Admin/Profile/Profile";
import AllRental from "../pages/Dashboard/Admin/AllRental/AllRental";
import UserManagement from "../pages/Dashboard/Admin/UserManagenment/UserManagement";

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
      {
        path: "/bikes/:bikeId",
        element: <BikeDetailsPage></BikeDetailsPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "/dashboard/user",
    // element: <DashboardLayout></DashboardLayout>,
    element: <Dashboard2></Dashboard2>,
    children: [
      {
        path: "/dashboard/user",
        element: <UserDashboard></UserDashboard>,
      },

      {
        path: "/dashboard/user/checkout/:bikeId",
        element: <CheckoutPage />,
      },
      {
        path: "/dashboard/user/bookingConfirmation",
        element: <BookingConfirmation />,
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
    // element: <Dashboard3></Dashboard3>,
    element: <Dashboard2></Dashboard2>,
    // element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/admin",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/dashboard/admin/profile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "/dashboard/admin/bikeManagement",
        element: <BikeManagement></BikeManagement>,
      },
      {
        path: "/dashboard/admin/rentalManagement",
        element: <AllRental></AllRental>,
      },
      {
        path: "/dashboard/admin/userManagement",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
]);
