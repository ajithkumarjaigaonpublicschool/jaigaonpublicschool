import HeroSection from '@/components/home/HeroSection';
import NewsSection from '@/components/home/NewsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { ImagesSliderDemo } from '@/components/sections/ImagesSliderDemo';
import FollowUs from '@/components/FollowUs';
import GoogleMap from '@/components/sections/GoogleMap';
import BoardMeeting from '@/components/home/BoardMeeting';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  return (
    <>
      <ImagesSliderDemo type="home"/>
      <AboutSection />
      {/* <HeroSection /> */}
      <FeaturesSection />
      <BoardMeeting />
      <div className='w-full h-screen flex flex-col justify-center items-center space-y-8 px-4 pt-8 md:px-32 md:pt-24'>
        <h2 className='capitalize text-3xl font-bold'>our school is situated in the heart of the city</h2>
        <GoogleMap className='w-full h-full'/>
      </div>
      <NewsSection />
      <FollowUs />
      {/* <TestimonialsSection /> */}
    </>
  );
}