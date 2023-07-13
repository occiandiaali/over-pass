import React from "react";
import {
  FolderIcon,
  HandRaisedIcon,
  HandThumbUpIcon,
  HomeIcon,
  MagnifyingGlassIcon,
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
    label: "Home",
    href: "/app/overview",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Liked Topics",
    href: "/app/generate-text",
    icon: <HandThumbUpIcon className="w-6 h-6" />,
  },
  {
    label: "Search Topics",
    href: "/app/teams",
    icon: <MagnifyingGlassIcon className="w-6 h-6" />,
  },
  {
    label: "FAQs",
    href: "/app/faqs",
    icon: <HandRaisedIcon className="w-6 h-6" />,
  },
];
