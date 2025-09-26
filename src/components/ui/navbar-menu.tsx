"use client";
import React from "react";
import Link from "next/link";
import { motion, Transition } from "framer-motion";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative px-4">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 pt-4"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black rounded-2xl border border-black/20 dark:border-white/20 shadow-xl"
          >
            <motion.div layout className="w-max p-4 space-y-2">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full mx-20 my-3 bg-black text-white shadow-lg flex justify-center space-x-10 px-10 py-4"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="block text-black dark:text-white hover:text-blue-500"
    >
      {children}
    </Link>
  );
};
