import { Link } from "react-router-dom";
import { adminMenuItem } from "./SidebarMenuItem";
import DynamicMenus from "./DynamicMenus";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen flex flex-col items-center border-r-2 bg-gray-100">
      <div className="py-4">
        <Link
          className="font-semibold text-xl text-black dark:text-white"
          to="/"
        >
          Bike Rent
        </Link>
      </div>

      <div className="flex-1">
        <ul className="space-y-1.5">
          <DynamicMenus menuItems={adminMenuItem}></DynamicMenus>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
