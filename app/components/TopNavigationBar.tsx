"use client";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconChartBar, IconFlag } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About us",
    link: "/about",
    icon: <IconFlag className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Our Services",
    link: "#",
    icon: <IconChartBar className="h-4 w-4 text-neutral-500 dark:text-white" />,
    hasDropdown: true,
  },
];

export function TopNavigationBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative  w-full top-4">
        <FloatingNav navItems={navItems} className=""/>
      </div>
    </div>
  );
}
