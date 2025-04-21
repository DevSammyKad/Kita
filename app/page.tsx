import HeroSection from '@/components/HeroSection';
import Community from '@/components/Community';
import Testimonial from '@/components/Testimonial';

import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';

export default function Home() {
  return (
    <div className="bg-[#0e3c39]">
      <HeroSection />
      <Community />
      <Testimonial />
      {/* <SliderPage /> */}
      {/* <TestimonialSlider /> */}
      <ProductSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
