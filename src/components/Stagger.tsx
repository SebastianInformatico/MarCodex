"use client";

import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = "", 
  delayChildren = 0,
  staggerDelay = 0.2 
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { 
          transition: { 
            delayChildren,
            staggerChildren: staggerDelay 
          } 
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.8, ease: "easeOut" } 
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
