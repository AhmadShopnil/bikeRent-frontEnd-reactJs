import { LayoutDashboard, Bike, UserPen, CircleHelp } from "lucide-react";

export const adminMenuItem = [
  {
    name: " Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: " Profile",
    path: "/dashboard/profile",
    icon: UserPen,
  },
  {
    name: " Bike Management",
    path: "/dashboard/bikeManagement",
    icon: Bike,
  },
  {
    name: " User Management",
    path: "/dashboard/userManagement",
    icon: UserPen,
  },
];
export const userMenuItem = [
  {
    name: " Profile",
    path: "/dashboard",
    icon: UserPen,
  },
  {
    name: " Bike List",
    path: "/dashboard/bikeList",
    icon: Bike,
  },
  {
    name: "Rental Management",
    path: "/dashboard/userManagement",
    icon: "",
  },
  {
    name: "Help",
    path: "/dashboard/userManagement",
    icon: CircleHelp,
  },
];
