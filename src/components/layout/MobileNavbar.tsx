'use client';
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from "framer-motion";
import { X } from 'lucide-react';

import Button from '../Button';
import HoverFillButton from '../HoverFillButton';

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
  handleEnroll: (link: string) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen, 
  onClose, 
  navigation, 
  handleEnroll
}) => {
  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={mobileMenuVariants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      className={`
        fixed top-0 left-0 right-0 bottom-0 
        bg-white lg:hidden z-40 
        flex flex-col
      `}
    >
      {/* Close Button */}
      {/* <div className="p-4 flex justify-end">
        <button 
          onClick={onClose}
          className="z-60 relative text-primary"
        >
          <X size={24} />
        </button>
      </div> */}

      {/* Navigation Links */}
      <div className='flex flex-col flex-grow justify-center items-center space-y-6'>
        <ul className='flex flex-col items-center justify-center space-y-6'>
          {navigation.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={onClose}
                className='text-primary text-2xl font-bold hover:text-secondary transition-colors'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
          <HoverFillButton 
            text="Learn More" 
            className="w-full" 
            handleClick={() => {
              handleEnroll('/academics');
              onClose();
            }}
          />
          <Button 
            text="Enroll Now" 
            handleClick={() => {
              handleEnroll('/enrollment');
              onClose();
            }} 
            type="CTA" 
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
