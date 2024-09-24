import { LayoutDashboard, Bike, UserCog, User, CircleHelp } from "lucide-react";
import { TSidebarItem } from "../../interfaces/sidebarItem";

export const adminMenuItem: TSidebarItem[] = [
  {
    name: " Dashboard",
    path: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    name: " Profile",
    path: "/dashboard/admin/profile",
    icon: User,
  },
  {
    name: " Bike Management",
    path: "/dashboard/admin/bikeManagement",
    icon: Bike,
  },

  {
    name: "All Rental",
    path: "/dashboard/admin/rentalManagement",
    icon: Bike,
  },
  {
    name: " User Management",
    path: "/dashboard/admin/userManagement",
    icon: UserCog,
  },
];

export const userMenuItem = [
  {
    name: " Dashboard",
    path: "/dashboard/user",
    icon: LayoutDashboard,
  },
  {
    name: " Profile",
    path: "/dashboard/user/profile",
    icon: User,
  },
  
  {
    name: "MyRental",
    path: "/dashboard/user/rentalManagement",
    icon: Bike,
  },
  {
    name: "Help",
    path: "/dashboard/user/Help",
    icon: CircleHelp,
  },
];
