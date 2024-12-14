// import { Spotlight } from '../ui/spotlight';
// import Link from 'next/link';
// import { cn } from "@/lib/utils";
// import Image from 'next/image';
// import hero from '../../../public/Hero1.jpg';

// export default function HeroSection() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:h-[90vh] md:flex justify-center items-center relative overflow-hidden">
//       <Image src={hero} alt='hero-image' width={100} height={100} className='absolute top-0 w-full h-auto object-cover -z-10'/>
//       <div className="text-center">
//         <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 pb-4">
//           Jaigaon Public School
//         </h1>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
//           Empowering young minds through excellence in education, fostering creativity,
//           and building character since 2019.
//         </p>
//         <div className="flex gap-4 justify-center">
//           <Link 
//             href="/enrollment"
//             className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
//           >
//             Enroll Now
//           </Link>
//           <Link
//             href="/about"
//             className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-all"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import Image from 'next/image';
import hero from '../../../public/Hero4.png';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter()
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={hero} 
          alt='hero-image' 
          fill
          quality={90}
          priority
          className="object-cover w-full h-full "
        />
      </div>

      {/* Overlay to improve text readability */}
      {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

      {/* Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 pb-4"> */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 
          bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/60">
          Jaigaon Public School
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10">
          Empowering young minds through excellence in education, fostering creativity, 
          and building character since 2019.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/enrollment')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg 
              font-medium transition-all inline-block w-full sm:w-auto"
          >
            Enroll Now
          </button>
          <button
            onClick={() => router.push('/academics')}
            className="border border-white text-white hover:bg-white/10 px-6 py-3 
              rounded-lg font-medium transition-all inline-block w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}