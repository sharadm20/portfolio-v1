"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      className={cn("flex items-center justify-center", className)}
    >
      <Loader2 className={cn("text-primary", sizeClasses[size])} />
    </motion.div>
  );
};

interface LoadingCardProps {
  className?: string;
  rows?: number;
}

const LoadingCard: React.FC<LoadingCardProps> = ({
  className,
  rows = 3,
}) => {
  return (
    <div className={cn("glass rounded-xl p-6 animate-pulse", className)}>
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="h-3 bg-muted rounded w-full"></div>
        ))}
      </div>
    </div>
  );
};

interface LoadingGridProps {
  count?: number;
  className?: string;
}

const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 6,
  className,
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
};

export { LoadingSpinner, LoadingCard, LoadingGrid };