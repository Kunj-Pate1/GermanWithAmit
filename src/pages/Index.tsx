
import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import CourseSection from '@/components/CourseSection';
import StudySection from '@/components/StudySection';
import ReviewSection from '@/components/ReviewSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import ContentSection from '@/components/ContentSection';
import FaqSection from '@/components/FaqSection';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  
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
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg z-40"
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
    </div>
  );
};

export default Index;
