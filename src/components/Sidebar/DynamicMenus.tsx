import { Link } from "react-router-dom";
import { TSidebarItem } from "../../interfaces/sidebarItem";
import { useState } from "react";

const DynamicMenus = ({ menuItems }: { menuItems: TSidebarItem[] }) => {
  const [activeNavIndex, setActiveNaveIndex] = useState(1);

  return (
    <>
      {menuItems.map((item: TSidebarItem, index) => (
        <li>
          <Link
            className={
              `flex items-center gap-x-3.5 py-2 px-2.5
                    text-sm  rounded-lg
                    hover:bg-gray-100
                     dark:bg-neutral-700 dark:text-white` +
              (activeNavIndex == index && `bg-green-500`)
            }
            to={item?.path}
          >
            {<item.icon />}
            {item?.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default DynamicMenus;
