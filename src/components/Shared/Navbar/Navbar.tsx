import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navMenuItems } from "./NavMenuItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const role = "admin";

  // Toggle function for mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white ">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Left Side: Brand Name */}
        <div className="text-2xl font-bold">
          <Link to="/">BrandName</Link>
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
          <Link to="/login" className="btn btn-sm btn-outline btn-white">
            Login
          </Link>
          <Link to="/signup" className="btn btn-sm btn-outline btn-white">
            Signup
          </Link>

          <Link to={`/dashboard/${role}`} className="btn btn-sm btn-primary">
            Dashboard
          </Link>
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
              <Link to="/login" className="btn btn-outline btn-white">
                Login
              </Link>
              <Link to="/signup" className="btn btn-outline btn-white">
                Signup
              </Link>
              <Link to={`dashboard/${role}`} className="btn btn-primary">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
