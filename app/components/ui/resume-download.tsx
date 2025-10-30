"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Loader2 } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ResumeDownloadProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  text?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({
  className,
  variant = "default",
  size = "default",
  showIcon = true,
  text = "Download Resume",
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Create a link to the PDF file
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Sharad_Mishra_Resume.pdf';
      link.target = '_blank';

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate some processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      size={size}
      className={cn("relative", className)}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Downloading...
        </>
      ) : (
        <>
          {showIcon && <Download className="w-4 h-4 mr-2" />}
          {text}
        </>
      )}
    </Button>
  );
};

// Alternative component for inline resume link
interface ResumeLinkProps {
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

const ResumeLink: React.FC<ResumeLinkProps> = ({
  className,
  children,
  showIcon = true,
}) => {
  return (
    <motion.a
      href="/resume.pdf"
      download="Sharad_Mishra_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center text-primary hover:text-primary/80 transition-colors",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {showIcon && <FileText className="w-4 h-4 mr-2" />}
      {children || "View Resume"}
    </motion.a>
  );
};

export { ResumeDownload, ResumeLink };