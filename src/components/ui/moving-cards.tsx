'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const [hovering, setHovering] = useState(false);

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return 20;
      case "normal":
        return 40;
      case "slow":
        return 60;
    }
  };

  const baseVelocity = direction === "left" ? -getSpeed() : getSpeed();

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          pause: pauseOnHover && hovering,
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 min-w-[300px]"
          >
            <p className="text-white/80">{item.quote}</p>
            <div className="mt-4">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-white/60 text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};