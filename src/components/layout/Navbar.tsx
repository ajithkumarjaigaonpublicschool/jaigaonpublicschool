'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { Menu } from 'lucide-react';

// Import components
import Button from '../Button';
import HoverFillButton from '../HoverFillButton';
import MobileNavbar from './MobileNavbar';
import logo from '../../../public/logo-bg.png';
import { X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // { name: 'Academics', href: '/academics' },
  { name: 'Enrollment', href: '/enrollment' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (link: string) => {
    router.push(link);
    setIsMobileMenuOpen(false);
  };

  const backgroundVariants: Variants = {
    initial: {
      backgroundColor: "rgba(255,255,255,0)",
      opacity: 1
    },
    scrolled: {
      backgroundColor: "rgba(255,255,255,1)"
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        variants={backgroundVariants}
        initial="initial"
        animate={scrolled ? "scrolled" : "initial"}
        className={`
          sticky top-0 left-0 right-0 transition-all duration-75 ease-in-out
          ${scrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'} 
          w-full flex justify-between items-center p-4 lg:px-32 z-50
        `}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo} 
            alt="Logo" 
            width={60} 
            height={60} 
            priority
            className='object-cover' 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:block'>
          <ul className='flex justify-center items-center gap-6'>
            {navigation.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`
                    transition-all duration-75 ease-in-out 
                    font-semibold hover:text-secondary
                    ${scrolled ? "text-primary" : "text-black"} 
                    `}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className='hidden lg:flex gap-4'>
          <HoverFillButton 
            text="Learn More" 
            handleClick={() => handleNavigation('/academics')}
          />
          <Button 
            text="Enroll Now" 
            handleClick={() => handleNavigation('/enrollment')} 
            type="CTA"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className='lg:hidden'>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              z-50 relative text-primary
              `}
              // ${scrolled ? 'text-primary' : 'text-white'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <MobileNavbar 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        handleEnroll={handleNavigation}
      />
    </>
  );
};

export default Navbar;