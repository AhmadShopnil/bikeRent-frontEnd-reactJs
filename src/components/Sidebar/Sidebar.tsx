import { Link } from "react-router-dom";
import { adminMenuItem, userMenuItem } from "./SidebarMenuItem";
import DynamicMenus from "./DynamicMenus";
import { useEffect, useState } from "react";
import { TSidebarItem } from "../../interfaces/sidebarItem";
import { getUserInfo } from "../../services/authServices";

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState<TSidebarItem[]>([]);
  const user: any = getUserInfo();

  useEffect(() => {
    if (user?.role === "admin") {
      setMenuItems(adminMenuItem);
    } else {
      setMenuItems(userMenuItem);
    }
  }, [user]);

  return (
    <div
      className="sticky top-0 h-screen flex flex-col 
    items-center border-r-2 bg-gray-50"
    >
      <div className="py-4 ">
        <Link
          className="font-semibold text-xl text-black dark:text-white"
          to="/"
        >
          Bike Rent
        </Link>
      </div>

      <div className=" w-4/5 ">
        <ul className="space-y-1.5 ">
          <DynamicMenus menuItems={menuItems}></DynamicMenus>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
