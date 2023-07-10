import React from "react";
import {
  FolderIcon,
  HandRaisedIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const sidebarNavLinks: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Generate new",
    href: "/generate-text",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Teams",
    href: "/teams",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "FAQs",
    href: "/faq",
    icon: <HandRaisedIcon className="w-6 h-6" />,
  },
];
