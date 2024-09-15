import { Link, useLocation } from "react-router-dom";
import { TSidebarItem } from "../../interfaces/sidebarItem";
import { useState, useEffect } from "react";

const DynamicMenus = ({ menuItems }: { menuItems: TSidebarItem[] }) => {
  const location = useLocation(); // Get current location
  const [activePath, setActivePath] = useState<string>(location.pathname); // Store the active path

  // Update active path when location changes
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleClick = (path: string) => {
    setActivePath(path); // Set active immediately on click
  };

  return (
    <>
      {menuItems.map((item: TSidebarItem, index) => {
        const isActive = activePath === item.path; // Check if item is active

        return (
          <li key={index}>
            <Link
              className={`
                flex items-center gap-x-3.5 py-2 px-3 text-sm rounded-lg
                hover:bg-blue-400 hover:text-white dark:bg-neutral-700 dark:text-white
                ${
                  isActive ? "bg-blue-400 text-white" : ""
                } // Apply active styles
              `}
              to={item?.path}
              onClick={() => handleClick(item.path)} // Update active path on click
            >
              {<item.icon />} {/* Render the icon */}
              {item?.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default DynamicMenus;
