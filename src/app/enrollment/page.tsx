"use client";

import { motion } from "framer-motion";

import { CheckCircle2, Calendar, Users, Clock } from "lucide-react";
import img1 from '../../../public/admission1.png';
import img2 from '../../../public/admission2.png';
import Image from "next/image";
import Metadata from "@/components/Metadata";

export default function AdmissionsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <Metadata title="Enrollment | Jaigaon Public School" description="Admissions open for nursery to 4th standard"/>
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div {...fadeIn} className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our vibrant learning community for students up to Grade 4
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.4 }}
          className="text-center gap-8  mb-16"
        >
          <a className="bg-primary py-3 px-4 text-white rounded-md" href="https://docs.google.com/forms/d/e/1FAIpQLSfRDqgPAC8zCw0ko6tuCvEXb_vATBkou7ZzLTlifqECw5YuDg/viewform" target="_blank">
            Start Application Process
          </a>
          <p className="mt-4 text-gray-600">
            For any queries, please contact our admissions office at <span className="font-semibold">admin@jaigaonpublicschool.com</span>
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row w-full h-screen justify-center items-center mb-8">
          {/* Images will stack vertically on small screens */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <Image 
              src={img1.src} 
              alt="admission poster 1" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <Image 
              src={img2.src} 
              alt="admission poster 2" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            {...fadeIn}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Admission Process</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Submit Application</h3>
                  <p className="text-gray-600">Complete the online application form with all required documents</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Assessment</h3>
                  <p className="text-gray-600">Schedule an informal assessment to understand your child's learning style</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Parent Interview</h3>
                  <p className="text-gray-600">Meet with our educators to discuss your child's educational journey</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Academic Year</h3>
                    <p className="text-gray-600">June to April</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Class Size</h3>
                    <p className="text-gray-600">Maximum 20 students per class</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">School Hours</h3>
                    <p className="text-gray-600">8:30 AM to 2:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <motion.div 
          {...fadeIn}
          transition={{ delay: 0.4 }}
          className="text-center gap-8"
        >
          <a className="bg-primary py-3 px-4 text-white rounded-md" href="https://docs.google.com/forms/d/e/1FAIpQLSfRDqgPAC8zCw0ko6tuCvEXb_vATBkou7ZzLTlifqECw5YuDg/viewform" target="_blank">
            Start Application Process
          </a>
          <p className="mt-4 text-gray-600">
            For any queries, please contact our admissions office at <span className="font-semibold">admin@jaigaonpublicschool.com</span>
          </p>
        </motion.div> */}
      </motion.div>
    </div>
    </>
  );
}