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
    href: "/app/overview",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Generate new",
    href: "/app/generate-text",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Teams",
    href: "/app/teams",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "FAQs",
    href: "/app/faqs",
    icon: <HandRaisedIcon className="w-6 h-6" />,
  },
];
