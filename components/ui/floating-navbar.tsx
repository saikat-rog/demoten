"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  "Book Keeping",
  "Management Accounting",
  "Payroll",
  "Tax Preparation",
  "Tax Consulting",
  "Internal Auditing",
  "Financial Consulting",
];

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    hasDropdown?: boolean;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollY.getPrevious() ?? 0;
      const direction = current - previous;

      if (current < 50) {
        setVisible(true);
      } else if (direction > 0) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-9 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-0.5 pl-8 py-0.5 items-center justify-center space-x-10",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <div key={`link-${idx}`} className="relative">
            {navItem.hasDropdown ? (
              <Link href={navItem.link}>
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div>
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-lg text-neutral-600">
                          {navItem.name}
                        </span>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-15 mt-10 p-5">
                      <DropdownMenuItem services={services} />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              </Link>
            ) : (
              <Link
                href={navItem.link}
                className={cn(
                  " text-lg relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </Link>
            )}
          </div>
        ))}

        <Link href={"/contact"}>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contact us
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
