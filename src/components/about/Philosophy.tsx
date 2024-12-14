"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Philosophy() {
  return (
    <motion.section 
      {...fadeIn} 
      className="py-16 bg-primary/5 rounded-lg"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Educational Philosophy</h2>
        <div className="space-y-6 text-lg">
          <p>
            At Little Learners Academy, we believe that every child is unique and deserves an education that nurtures their individual strengths and interests. Our approach combines traditional learning methods with modern educational practices to create an engaging and effective learning environment.
          </p>
          <p>
            We understand that the early years are crucial for developing a strong foundation for lifelong learning. Our curriculum is designed to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Foster curiosity and a love for learning</li>
            <li>Develop critical thinking and problem-solving skills</li>
            <li>Build confidence and independence</li>
            <li>Nurture creativity and imagination</li>
            <li>Promote social skills and emotional intelligence</li>
          </ul>
          <p>
            Our experienced educators create a warm, supportive environment where children feel safe to explore, question, and grow. We maintain regular communication with parents to ensure a collaborative approach to each child's development.
          </p>
        </div>
      </div>
    </motion.section>
  );
}