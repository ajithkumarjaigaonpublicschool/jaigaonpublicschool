import React from 'react';
import { motion, Variants } from 'framer-motion';

// Define props interface
interface HoverFillButtonProps {
  text: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
  handleClick?: () => void;
}

const HoverFillButton: React.FC<HoverFillButtonProps> = ({ 
  text, 
  className = '',
  bgColor = 'bg-secondary',
  textColor = 'text-secondary',
  handleClick,
}) => {
  // Define variants with explicit typing
  const backgroundVariants: Variants = {
    initial: { 
      height: '0%',
      // border: "1px",
      // borderColor: "bg-secondary" 
    },
    hover: {
      height: '100%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.button
      className={`relative z-0 px-6 py-3 ${textColor} border border-secondary uppercase text-sm font-semibold rounded-lg overflow-hidden group hover:border-transparent ${className}`}
      whileHover="hover"
      initial="initial"
      onClick={handleClick}
    >
      {/* Background fill layer */}
      <motion.div
        className={`absolute z-[-1] bottom-0 left-0 right-0 ${bgColor}`}
        variants={backgroundVariants}
      />
      
      {/* Button text */}
      <span className="relative z-10 group-hover:text-black">
        {text}
      </span>
    </motion.button>
  );
};

export default HoverFillButton;