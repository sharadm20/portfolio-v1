"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "muted" | "accent";
  padding?: "sm" | "md" | "lg" | "xl";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, background = "default", padding = "lg", ...props }, ref) => {
    const backgroundClasses = {
      default: "",
      muted: "bg-muted/30",
      accent: "bg-accent/10",
    };

    const paddingClasses = {
      sm: "py-12",
      md: "py-16",
      lg: "py-20",
      xl: "py-24",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full",
          backgroundClasses[background],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  centered = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "max-w-4xl mx-auto mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { Section, SectionHeader };