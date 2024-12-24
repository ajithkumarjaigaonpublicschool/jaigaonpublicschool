"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import cover from "../../../public/cards7.webp";

const AboutSection: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center pb-8 px-4 md:px-8 md:pb-16 bg-gray-300">
      {/* <Image
        src={cover.src}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-[85%] mx-auto bg-white p-8 rounded-b-3xl lg:p-20 lg:grid lg:grid-cols-5 lg:gap-4"
      >
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold text-primary mb-4 md:w-3/4">
            Achieving excellence by nurturing a love of learning!
          </h2>
          <p className="text-black text-lg">
            A district where all students are welcomed, valued, engaged and excited
            about learning. Students graduate with excellence in critical
            thinking, a love of learning and are prepared to move successfully in
            the world and life. Every staff member, working as a team, helps to
            create a community of continuous learning, equity and opportunity for
            all.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:col-span-2 overflow-hidden rounded-lg">
          <Image
            src={cover.src}
            alt="students"
            // fill
            className="w-full h-full object-contain rounded-lg shadow-lg"
            width={cover.width}
            height={cover.height}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;