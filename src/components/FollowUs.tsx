import React from 'react'
import SocialLinks from '../components/sections/SocialLinks'
import Image from 'next/image';
import followUsImg from '../../public/cards5.webp';

const FollowUs = () => {
  return (
    <section className='relative w-full h-[60vh] md:h-screen flex items-center justify-center'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image 
          src={followUsImg} 
          alt="Follow Us on Social Media" 
          fill
          objectFit="cover" 
          quality={90}
          // className='opacity-50'
        />
      </div>
      
      {/* Content Overlay */}
      <div className='relative z-10 text-center flex flex-col items-center justify-center'>
        <div className='bg-black/40 p-8 rounded-xl flex flex-col justify-center items-center'>
          <h4 className='text-2xl font-bold text-white mb-6 md:text-5xl'>
            Follow Us on Social Media
          </h4>
          <SocialLinks type="followUs" 
          // className='flex justify-center space-x-4'
          />
        </div>
      </div>
    </section>
  )
}

export default FollowUs