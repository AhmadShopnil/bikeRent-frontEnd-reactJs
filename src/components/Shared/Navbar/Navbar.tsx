
import {  useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navMenuItems } from "./NavMenuItem";
import SolidPrimaryButton from "../Buttons/SolidPrimaryButton";
import {
  removeUser,
} from "../../../services/authServices";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { logout, selectCurrentUser } from "../../../redux/api/slices/authSlice";

const Navbar = () => {
    const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const user = useAppSelector(selectCurrentUser);
 
  const role = user?.role;


  //  handle logOut user
  const handleLogout = () => {
    removeUser();
    dispatch(logout());
  };

  // Toggle function for mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white  ">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Left Side: Brand Name */}
        <div className="text-2xl font-bold">
          <Link to="/">BikeRent</Link>
        </div>

        {/* Middle: Menu Items (hidden on small devices) */}
        <div className="hidden md:flex space-x-6">
          {navMenuItems?.map((item) => (
            <span key={item?.id}>
              <Link
                to={item?.path}
                className="hover:text-gray-200 transition-colors"
              >
                {item?.name}
              </Link>
            </span>
          ))}
        </div>

        {/* Right Side: Auth and Dashboard Buttons */}
        <div className="hidden md:flex space-x-4">
          {role ? (
            <>
              <button
                onClick={handleLogout}
                className="py-2 px-4 inline-flex items-center 
          gap-x-2 text-sm font-medium rounded-lg border
           border-gray-200 bg-white text-gray-800 shadow-sm
            hover:bg-red-100 focus:outline-none"
              >
                Logout
              </button>

              <Link to={`/dashboard/${role}`}>
                <SolidPrimaryButton>Dashboard</SolidPrimaryButton>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="py-2 px-4 inline-flex items-center 
          gap-x-2 text-sm font-medium rounded-lg border
           border-gray-200 bg-white text-gray-800 shadow-sm
            hover:bg-gray-50 focus:outline-none"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="py-2 px-4 inline-flex items-center 
          gap-x-2 text-sm font-medium rounded-lg border
           border-gray-200 bg-white text-gray-800 shadow-sm
            hover:bg-gray-50 focus:outline-none 
          "
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden ">
          <div className="flex flex-col space-y-4 p-4">
            {navMenuItems?.map((item) => (
              <span key={item?.id}>
                <Link to={item?.path} className="btn btn-outline btn-white">
                  {item?.name}
                </Link>
              </span>
            ))}
            {/* right side */}
            <div className="flex flex-col space-y-2 mt-4">
              {user?.role ? (
                <>
                  <Link to={`dashboard/${role}`} className="btn btn-primary">
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline btn-white">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline btn-white">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
