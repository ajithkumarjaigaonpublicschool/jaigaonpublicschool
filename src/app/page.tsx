import HeroSection from '@/components/home/HeroSection';
import NewsSection from '@/components/home/NewsSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <NewsSection />
      <TestimonialsSection />
    </>
  );
}