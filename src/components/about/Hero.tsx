"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.div {...fadeIn} className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Little Learners Academy
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Where young minds bloom and dreams take flight
      </p>
    </motion.div>
  );
}