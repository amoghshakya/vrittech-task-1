"use client";

import clsx from "clsx";
import { motion } from "motion/react";

// type RevealerProps = React.ComponentProps<"div"> & {
//   // this is the content that will be revealed
//   underneath: React.ReactNode;
// };

type RevealerProps = {
  className?: string;
  style: React.CSSProperties;
  children: React.ReactNode;
  underneath: React.ReactNode;
};

export function Revealer({
  className,
  children,
  underneath,
  ...props
}: RevealerProps) {
  const parentVariants = {
    initial: { x: 0, y: 0, opacity: 1 },
    hover: {
      x: "-100%",
      opacity: 0,
    },
  };

  const underneathVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="w-full h-full relative"
    >
      <motion.div
        variants={underneathVariants}
        className={clsx("w-full h-full absolute inset z-0")}
      >
        {underneath}
      </motion.div>
      <motion.div
        variants={parentVariants}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className={clsx(
          "relative z-10 rounded-[30px] w-full h-full px-8 py-16",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
