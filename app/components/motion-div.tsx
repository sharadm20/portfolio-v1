"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
MotionDiv.displayName = "MotionDiv";

export { MotionDiv };