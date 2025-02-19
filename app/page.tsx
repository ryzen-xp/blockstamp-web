"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center"
      >
        Project in Progress, Live Soon!!
      </motion.h1>
    </div>
  );
}
