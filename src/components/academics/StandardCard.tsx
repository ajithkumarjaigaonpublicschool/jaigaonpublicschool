"use client";

import { motion } from "framer-motion";
import { GraduationCap, Book, Users, Trophy } from "lucide-react";
// import { Card } from "@/components/ui/card";

interface StandardCardProps {
  grade: string;
  description: string;
  features: string[];
  index: number;
}

export function StandardCard({ grade, description, features, index }: StandardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-white">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{grade}</h3>
          </div>
          
          <p className="text-muted-foreground">{description}</p>
          
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                className="flex items-center space-x-2"
              >
                {i % 3 === 0 && <Book className="w-4 h-4 text-primary" />}
                {i % 3 === 1 && <Users className="w-4 h-4 text-primary" />}
                {i % 3 === 2 && <Trophy className="w-4 h-4 text-primary" />}
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}