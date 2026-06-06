import Hero from '@/components/Hero';
import BrandStrip from '@/components/BrandStrip';
import About from '@/components/About';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import InstagramFeed from '@/components/InstagramFeed';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <About />
      <BeforeAfter />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
