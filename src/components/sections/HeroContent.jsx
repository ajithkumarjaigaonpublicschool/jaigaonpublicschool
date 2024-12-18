"use client";

import { motion } from "framer-motion";
import { GraduationCap, NotebookText, Users, Lightbulb, School, UserPlus, Volume2 } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const QuickLink = ({ icon: Icon, text, href, bgColor }) => {
  return (
    <motion.div 
      // whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Link href={href}>
        <div className={`${bgColor} p-8 md:p-14 text-center transition-all duration-300 group cursor-pointer box-border relative overflow-hidden`}>
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex flex-col items-center"
          >
            <Icon className="w-8 h-8 mb-2 text-primary transition-transform" />
            <p className="font-medium text-primary transition-transform">{text}</p>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

const HeroContent = () => {
  const enrollmentButton = true;
  return (
    <div className="absolute bottom-0">
      {/* Content */}
      <div className="relative z-40">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center"
        >
          { enrollmentButton &&
            <motion.div 
              variants={fadeIn}
              className="mb-4"
            >
              <a className="bg-secondary py-3 px-4 text-black hover:text-white rounded-md" href="https://docs.google.com/forms/d/e/1FAIpQLSfRDqgPAC8zCw0ko6tuCvEXb_vATBkou7ZzLTlifqECw5YuDg/viewform" target="_blank">
                Start Application Process
              </a>
            </motion.div>
          }

          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <ul className="flex flex-col md:hidden">
              <li>inspire</li>
              <li>connect</li>
              <li>ignite</li>
            </ul>
            <span className="hidden md:block">
            inspire • connect • ignite
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto"
          >
            A welcoming community that inspires possibilities, connects people, and ignites learning!
          </motion.p>

          {/* Quick Links */}
          <motion.div 
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 max-w-[85%] mx-auto"
          >
            {/* <QuickLink 
              icon={NotebookText}
              text="Enrollment"
              href="/enrollment"
              bgColor="bg-emerald-200"
            /> */}
            <QuickLink 
              icon={School}
              text="About"
              href="/about"
              bgColor="bg-yellow-200"
            />
            <QuickLink 
              icon={Lightbulb}
              text="Academics"
              href="/academics"
              bgColor="bg-green-200"
            />
            <QuickLink 
              icon={UserPlus}
              text="admission"
              href="/enrollment"
              bgColor="bg-purple-200"
            />
            <QuickLink 
              icon={Users}
              text="Contact"
              href="/contact"
              bgColor="bg-orange-200"
            />
            {/* <QuickLink 
              icon={Volume2}
              text="Announcements"
              href="/announcements"
              bgColor="bg-blue-200"
            /> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroContent;