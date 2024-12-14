"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function VisionMission() {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <motion.div 
        {...fadeIn}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-gray-600">
          To create a nurturing environment where every child discovers their potential 
          and develops a lifelong love for learning. We strive to be a beacon of 
          educational excellence, fostering curiosity, creativity, and character.
        </p>
      </motion.div>

      <motion.div 
        {...fadeIn}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          To provide quality education through innovative teaching methods, fostering 
          creativity, critical thinking, and character development. We are committed 
          to creating a supportive community where children feel valued, respected, 
          and empowered to reach their full potential.
        </p>
      </motion.div>
    </div>
  );
}