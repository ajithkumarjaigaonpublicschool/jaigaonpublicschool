import { Spotlight } from '../ui/spotlight';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <Spotlight className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 pb-4">
          Jaigaon Public School
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Empowering young minds through excellence in education, fostering creativity,
          and building character since 1985.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/enrollment"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            Apply Now
          </Link>
          <Link
            href="/about"
            className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Spotlight>
  );
}