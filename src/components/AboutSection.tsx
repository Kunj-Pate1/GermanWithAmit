import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Facebook, Instagram, Linkedin, Twitter, BookOpen, Globe, Award, CheckCircle, ChevronDown, ChevronUp, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TeacherProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  years: number;
  socials?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TeacherCard = ({ name, title, bio, image, years, socials }: TeacherProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Decorative elements */}
      <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-german-light/30 to-german-dark/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 z-0"></div>
      
      <Card className="relative z-10 border border-gray-200/50 overflow-hidden bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image container with overlay effects */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          </motion.div>
          
          {/* Floating name badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
          >
            <h3 className="font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-german-dark">{title}</p>
          </motion.div>
          
          {/* Experience bubble with animation */}
          <motion.div 
            className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-german-dark text-white flex items-center justify-center font-bold shadow-lg z-10 border-4 border-white"
            initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.3
            }}
          >
            <span className="relative">
              {years}+
              <motion.span 
                className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.div>
        </div>
        
        {/* Teacher details with animated reveal */}
        <CardContent className="p-6 flex-grow flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-grow"
          >
            <p className="text-gray-600 mb-4">{bio}</p>
          </motion.div>
          
          {/* Animated social links */}
          <motion.div 
            className="flex justify-center space-x-4 pt-2 border-t border-gray-100"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {socials?.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-all duration-300 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
            )}
            {socials?.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-all duration-300 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            )}
            {socials?.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            )}
            {socials?.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-all duration-300 hover:-translate-y-1">
                <Twitter size={20} />
              </a>
            )}
          </motion.div>
        </CardContent>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-german-light/50 transition-all duration-500 pointer-events-none"></div>
      </Card>
    </motion.div>
  );
};

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isAnimating, setIsAnimating] = useState(false);
  
  const images = [
    "/images/Amit/lib3.jpg",
    "/images/Amit/lib.jpg",
    "/images/Amit/outside.jpg",
    "/images/Amit/teaching.jpg",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setIsAnimating(true);
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 2000); // Change image every 2 seconds
    
    return () => clearInterval(interval);
  }, [isAnimating]);
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transitionEnd: {
        opacity: 1
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95
    })
  };
  
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };
  
  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt={`Placeholder ${currentImage + 1}`}
        className="absolute inset-0 w-full h-full object-cover bg-gray-100"
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        onAnimationComplete={handleAnimationComplete}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30, duration: 0.8 },
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 }
        }}
      />
    </div>
  );
};

const MilestoneItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-start gap-4">
      <div className="bg-german-light/20 p-3 rounded-full text-german">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  </motion.div>
);

const AboutSection = () => {
  const teachers = [
    {
      name: "Amit Bansal",
      title: "Founder & C2 Certified",
      bio: "Masters in German Studies with 8+ years teaching experience. Specializes in exam preparation and cultural immersion.",
      image: "/images/teachers/amit.jpg",
      years: 13,
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Linda Selijimi",
      title: "Co-Founder & Native Tutor",
      bio: "Former university professor with expertise in German grammar, literature, and business communication.",
      image: "/images/teachers/linda.webp",
      years: 8,
      socials: {
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "Riya Suneja",
      title: "C1 Certified Tutor",
      bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
      image: "/images/teachers/riya.webp",
      years: 2,
      socials: {
        linkedin: "#"
      }
    },
    {
      name: "Chhavi Gupta",
      title: "C1 Certified Tutor",
      bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
      image: "/images/teachers/chhavi.webp",
      years: 2,
      socials: {
        instagram: "#"
      }
    },
  ];

  const milestones = [
    {
      icon: <BookOpen size={20} />,
      title: "Delhi University Alumni",
      description: "DAAD Scholarship recipient 2017"
    },
    {
      icon: <Globe size={20} />,
      title: "International Exposure",
      description: "Lived, Studied & Taught in Berlin, Munich, Freiburg & Wuppertal"
    },
    {
      icon: <Award size={20} />,
      title: "Awarded 5 Prestigious Scholarships",
      description: "DAAD, KAS, Erasmus Mundus, HSK, BW Stiftung"
    },
    {
      icon: <ScrollText size={20} />,
      title: "Certified Tutor",
      description: "Certified BAMF Trainer in Germany"
    }
  ];

  const [showTeachers, setShowTeachers] = useState(false);
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Founder Section */}
        <div className="max-w-7xl mx-auto mb-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-german-dark to-german">Founder</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a passion project to a premier German language institute - our journey of transforming language education.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Founder Image */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <ImageCarousel />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white text-german flex flex-col items-center justify-center shadow-lg border-2 border-german">
                  <span className="text-3xl font-bold">8+</span>
                  <span className="text-xs uppercase">Years</span>
                </div>
              </div>
            </motion.div>
            
            {/* Mission & Values */}
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-german-dark mb-6 text-center">Our Mission</h2>
                <ul className="space-y-4">
                  {[
                    "Empower students with real-world German language skills",
                    "Transform learning into career opportunities through scholarships",
                    "Share 8+ years of teaching experience to accelerate learning",
                    "Make German accessible through interactive methods",
                    "Create a supportive international learning community",
                    "Bridge cultural gaps through language education"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-german text-white rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-xs">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Milestones Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {milestones.map((milestone, index) => (
                  <MilestoneItem 
                    key={index}
                    icon={milestone.icon}
                    title={milestone.title}
                    description={milestone.description}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-24">
          {!showFullStory ? (
            <div className="text-center">
              <motion.button
                onClick={() => setShowFullStory(true)}
                className="mx-auto flex items-center gap-2 px-6 py-3 bg-german hover:bg-german-dark text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read Our Full Story</span>
                <ChevronDown size={20} />
              </motion.button>
            </div>
          ) : (
            <motion.div 
              className="bg-gradient-to-r from-german to-german-dark p-8 md:p-12 rounded-2xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-4xl mx-auto">
                <motion.h2 
                  className="text-3xl font-bold mb-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our Story
                </motion.h2>
                <motion.div 
                  className="space-y-6 text-lg text-justify"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p>
                    GermanWithAmit is more than just an online German learning platform.
                    It's not just about grammar rules, sentence structures, or exam prep strategies.
                    It's about transformation.
                    Whether you're a student dreaming of studying in Germany, a professional aiming to build your career there, or simply someone in love with the language—this is your space.
                  </p>
                  <br />
                  <p>
                    GermanWithAmit was born from a dream:
                    To show people how learning German can open doors, change lives, and build bridges to new opportunities.
                    When our founder began learning German, he didn't have YouTube tutorials, Instagram trainers, or viral reels to guide him.
                    He learned it the hard way—through trial and error, long nights, and relentless effort.
                    That's exactly why he created GermanWithAmit—
                    To make learning German easier, more enjoyable, and deeply human.
                    It all started with one video.
                    Then came the reels. Then live sessions.
                    Now, we are a platform and a community—offering structured courses, real interaction, and constant motivation.
                  </p>
                  <br />
                  <p>
                    At GermanWithAmit, you're not just a student.
                    You're part of a growing family of over 130,000 learners from around the world—united by a shared passion for language, culture, and personal growth.
                    We're not just a platform.
                    We're people who've been where you are.
                    We understand your fears.
                    We've faced the same rejections.
                    And we also know how sweet success feels—once German opens new doors for you
                    Welcome to GermanWithAmit—where language learning becomes a journey worth taking.
                  </p>
                </motion.div>
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowFullStory(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-300"
                  >
                    <span>Show Less</span>
                    <ChevronUp size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Teachers section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <motion.button
              onClick={() => setShowTeachers(!showTeachers)}
              className="mx-auto flex items-center gap-2 px-6 py-3 bg-german hover:bg-german-dark text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.005 }}
            >
              {showTeachers ? (
                <>
                  <span>Hide</span>
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  <span>Want to Meet Our Teachers?</span>
                  <ChevronDown size={20} />
                </>
              )}
            </motion.button>
          </div>
          
          {showTeachers && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {teachers.map((teacher, index) => (
                  <TeacherCard key={index} {...teacher} />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;