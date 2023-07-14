import React, { Suspense, useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { sidebarNavLinks, NavItem } from "./sidebarNavLinks";
import {
  ArrowRightOnRectangleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = sidebarNavLinks,
  shown,
  setCollapsed,
}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={classNames({
        "bg-slate-700 text-zinc-50 fixed md:static md:translate-x-0 z-20": true,
        "transition-all duration-300 ease-in-out": true,
        "w-[300px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
        })}
      >
        <div
          className={classNames({
            // "grid place-content-stretch p-4 ": true,
            "flex items-center md:h-30 border-b border-b-slate-800 transition-none":
              true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          <Suspense fallback={<div>wait...</div>}>
            <div className="flex gap-4 items-center h-11 overflow-hidden">
              <Link href="/app/account" className="text-indigo-200 text-sm">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                  height={36}
                  width={36}
                  alt="profile image"
                  className="rounded-full place-content-center"
                />
              </Link>
              {!collapsed && (
                <div className="flex flex-col ">
                  <span className="text-indigo-50 my-0">Teem Chef</span>
                  <Link href="/app/account" className="text-indigo-200 text-sm">
                    View Profile
                  </Link>
                </div>
              )}
            </div>
          </Suspense>
          <button
            className="grid place-content-center hover:bg-slate-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow">
          <ul
            className={classNames({
              "my-12 flex flex-col gap-2 items-stretch": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-indigo-100 hover:bg-slate-900 flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={classNames({ "grid place-content-stretch p-4 ": true })}
        >
          <div className="flex flex-row gap-4 items-center mb-20 h-11 md:mb-14 overflow-hidden">
            <Link
              href="/app/account"
              className="text-indigo-200 text-sm flex gap-2"
            >
              <ArrowRightOnRectangleIcon className="w-8 h-8" />
              <span className="mt-2">{!collapsed && "Log Out"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
