import NewsSection from '@/components/home/NewsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import { ImagesSliderDemo } from '@/components/sections/ImagesSliderDemo';
import FollowUs from '@/components/FollowUs';
import GoogleMap from '@/components/sections/GoogleMap';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  return (
    <>
      <ImagesSliderDemo type="home"/>
      <AboutSection />
      {/* <HeroSection /> */}
      <FeaturesSection />
      {/* <BoardMeeting /> */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center space-y-8 px-4 pt-8 md:px-28 md:pt-18 lg:px-32 lg:pt-24">
        <h2 className="capitalize text-xl font-bold w-3/4 md:w-full text-center md:text-3xl">
          our school is situated in the heart of the city
        </h2>
        <GoogleMap />
      </div>
      <NewsSection />
      <FollowUs />
      {/* <TestimonialsSection /> */}
    </>
  );
}