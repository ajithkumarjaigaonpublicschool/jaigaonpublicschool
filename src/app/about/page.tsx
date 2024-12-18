"use client"
import { motion } from "framer-motion";
import Hero from "../../components/about/Hero";
import VisionMission from "../../components/about/VisionMission";
import CoreValues from "../../components/about/CoreValues";
import Philosophy from "../../components/about/Philosophy";
import { ImagesSliderDemo } from '@/components/sections/ImagesSliderDemo';
import Metadata from "@/components/Metadata";

export default function AboutPage() {
  return (
    <>
      <Metadata title="About | Jaigaon Public School" description="Nurturing minds, building futures in West Bengal since 2019"/>
      <div className="min-h-screen bg-gray-50">
      <ImagesSliderDemo type="about"/>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <VisionMission />
        <Philosophy />
        <CoreValues />
      </motion.div>
    </div>
    </>
  );
}