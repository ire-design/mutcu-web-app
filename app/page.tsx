import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CoreValues from '@/components/CoreValues';
import MinistriesSection from '@/components/MinistriesSection';
import EventsSection from '@/components/EventsSection';
import PrayerForm from '@/components/PrayerForm';
import Testimonials from '@/components/Testimonials';
import GallerySection from '@/components/GallerySection';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CoreValues />
      <MinistriesSection />
      <EventsSection />
      <PrayerForm />
      <Testimonials />
      <GallerySection />
      <Newsletter />
    </>
  );
}