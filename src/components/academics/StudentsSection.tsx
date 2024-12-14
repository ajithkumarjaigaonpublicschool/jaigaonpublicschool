"use client";

import { motion } from "framer-motion";
import { StandardCard } from "./StandardCard";

const standards = [
  {
    grade: "Nursery",
    description: "Foundation for lifelong learning through play-based education",
    features: [
      "Play-based learning activities",
      "Social skills development",
      "Basic number concepts",
      "Language development"
    ]
  },
  {
    grade: "Kindergarten",
    description: "Building fundamental skills through structured learning",
    features: [
      "Phonics and early reading",
      "Basic mathematics",
      "Arts and crafts",
      "Physical development"
    ]
  },
  {
    grade: "1st Standard",
    description: "Advancing core academic skills and knowledge",
    features: [
      "Reading comprehension",
      "Writing skills",
      "Mathematical operations",
      "Environmental awareness"
    ]
  },
  {
    grade: "2nd Standard",
    description: "Strengthening academic foundations and critical thinking",
    features: [
      "Advanced reading",
      "Creative writing",
      "Problem-solving skills",
      "Science exploration"
    ]
  },
  {
    grade: "3rd Standard",
    description: "Developing independent learning and complex concepts",
    features: [
      "Literature analysis",
      "Advanced mathematics",
      "Scientific method",
      "Social studies"
    ]
  },
  {
    grade: "4th Standard",
    description: "Mastering advanced concepts and analytical skills",
    features: [
      "Research skills",
      "Complex problem solving",
      "Project-based learning",
      "Digital literacy"
    ]
  }
];

export function StandardsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Standards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive educational journey from Nursery to 4th Standard,
            designed to nurture young minds and build strong foundations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard, index) => (
            <StandardCard
              key={standard.grade}
              grade={standard.grade}
              description={standard.description}
              features={standard.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}