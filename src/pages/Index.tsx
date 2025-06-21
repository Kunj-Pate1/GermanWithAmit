import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import CourseSection from '@/components/CourseSection';
import UpcomingBatches from '@/components/UpcomingBatches';
import StudySection from '@/components/StudySection';
import ReviewSection from '@/components/ReviewSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import ContentSection from '@/components/ContentSection';
import FaqSection from '@/components/FaqSection';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronUp, MessageCircle } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  
  // WhatsApp number (format with country code but no + or spaces)
  const whatsappNumber = '4917646778072'; // Replace with your actual number
  
  // Use Framer Motion to create a smooth progress bar
  const scaleX = useSpring(
    useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  );

  // Add scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            
            // Add staggered animations to children
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-fade-in');
                (child as HTMLElement).classList.remove('opacity-0');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('.scroll-animate').forEach((element) => {
      observer.observe(element);
    });

    // Handle scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelectorAll('.scroll-animate').forEach((element) => {
        observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      <div className="bg-custom-gradient">
        <HeroSection />
      </div>
      <div className="scroll-animate opacity-0">
        <CourseSection />
      </div>
      <div className="scroll-animate opacity-0">
        <UpcomingBatches />
      </div>
      <div className="scroll-animate opacity-0">
        <StudySection />
      </div>
      <div className="scroll-animate opacity-0">
        <PartnersSection />
      </div>
      <div className="scroll-animate opacity-0">
        <ContentSection />
      </div>
      <div className="scroll-animate opacity-0">
        <ReviewSection />
      </div>
      <div className="scroll-animate opacity-0">
        <AboutSection />
      </div>
      <div className="scroll-animate opacity-0">
        <FaqSection />
      </div>
      <div className="scroll-animate opacity-0">
        <ContactSection />
      </div>
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-german-dark text-white p-3 rounded-full shadow-lg z-40"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronUp />
      </motion.button>
      
      {/* WhatsApp button */}
      <motion.button
        className="fixed bottom-24 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg z-40"
        onClick={openWhatsApp}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
      </motion.button>
    </div>
  );
};

export default Index;