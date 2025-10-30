"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-bold tracking-tight",
  {
    variants: {
      level: {
        h1: "text-4xl md:text-6xl lg:text-7xl",
        h2: "text-3xl md:text-4xl",
        h3: "text-2xl md:text-3xl",
        h4: "text-xl md:text-2xl",
        h5: "text-lg md:text-xl",
        h6: "text-base md:text-lg",
      },
      variant: {
        default: "",
        gradient: "animated-gradient",
        muted: "text-muted-foreground",
      },
    },
    defaultVariants: {
      level: "h2",
      variant: "default",
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h2", variant, as, ...props }, ref) => {
    const Component = (as || level) as React.ElementType;
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, variant, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    variant: {
      default: "",
      muted: "text-muted-foreground",
      accent: "text-accent-foreground",
      primary: "text-primary",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "default",
    weight: "normal",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, variant, weight, as = "p", ...props }, ref) => {
    const Component = as as React.ElementType;
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, variant, weight, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Heading, Text, headingVariants, textVariants };