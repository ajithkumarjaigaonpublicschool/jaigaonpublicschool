"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Sparkles } from "lucide-react";
import { fadeIn } from "@/lib/animations";

const values = [
  {
    icon: Users,
    title: "Expert Teachers",
    description: "Dedicated educators passionate about early childhood development"
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description: "Age-appropriate learning programs that encourage exploration"
  },
  {
    icon: Heart,
    title: "Nurturing Environment",
    description: "Safe and supportive space for children to grow and learn"
  },
  {
    icon: Sparkles,
    title: "Creative Learning",
    description: "Engaging activities that make learning fun and memorable"
  }
];

export default function CoreValues() {
  return (
    <motion.div 
      {...fadeIn}
      transition={{ delay: 0.4 }}
      className="grid md:grid-cols-4 gap-8"
    >
      {values.map((value, index) => (
        <div key={value.title} className="text-center">
          <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
          <p className="text-gray-600">{value.description}</p>
        </div>
      ))}
    </motion.div>
  );
}