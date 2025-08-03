import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProvidersSection from "@/components/ProvidersSection";
import ProjectsSection from "@/components/ProjectsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookingOpen = (providerId: string) => {
    setSelectedProvider(providerId);
  };

  const handleBookingClose = () => {
    setSelectedProvider(null);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProvidersSection onBookingOpen={handleBookingOpen} />
      <ProjectsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      {selectedProvider && (
        <BookingModal 
          providerId={selectedProvider} 
          onClose={handleBookingClose} 
        />
      )}
    </div>
  );
}
