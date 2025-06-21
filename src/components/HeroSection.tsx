import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const HeroSection = () => {
  // Create counters for the animated numbers
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);
  const videoId = "FyB2bPPtpkU?si=hdjD_KeH30zFjhKk";
  
  // Text rotation state
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = ["Listen","Read", "Write", "Learn"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseBetween = 600;

  // Animate the counters when the component mounts

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;
  
    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetween);
      }
    }
  
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

// COUNTER EFFECT
useEffect(() => {
  const interval1 = setInterval(() => {
    setCount1((prev) => {
      if (prev >= 8) {
        clearInterval(interval1);
        return 8;
      }
      return prev + 1;
    });
  }, 100);

  const interval2 = setInterval(() => {
    setCount2((prev) => {
      if (prev >= 5000) {
        clearInterval(interval2);
        return 5000;
      }
      return prev + Math.floor(Math.random() * 1000) + 100;
    });
  }, 100);

  const interval3 = setInterval(() => {
    setCount3((prev) => {
      if (prev >= 99) {
        clearInterval(interval3);
        return 99;
      }
      return prev + Math.floor(Math.random() * 10) + 5;
    });
  }, 100);

  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
  };
}, []);


  const scrollToNextSection = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="hero" className="relative bg-custom-gradient min-h-screen flex ">
    {/* Background video/image layer */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10"></div>
      <video 
        // ref={videoRef}
        className="absolute w-full h-full object-cover"
        loop
        muted
        // poster="images/munich1.png"
        poster="images/hero1.jpeg"
        // src='https://youtu.be/HMeIgYt9K_s?si=fPJpHoKcCh6KYoDV'
      >
      </video>
    </div>

    <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
      <div className="flex flex-col py-10 items-center text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white max-w-4xl"
        >
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Struggling to{" "}
            <span className="relative text-white text-4xl md:text-5xl lg:text-6xl font-bold pb-2">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>{" "}
            <span className="text-white">German</span>?
            <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-german to-german-light mt-2
              [-webkit-text-stroke:0.5px_rgba(255,255,255,0.5)]
              [text-stroke:0.5px_rgba(255,255,255,0.5)]
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
I can help.
</span>
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto"
          >
            {[
              { value: `${count1}+`, label: "Years Experience" },
              { value: `${count2}+`, label: "Students" },
              { value: `${count3}%`, label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <motion.h3 className="text-xl font-bold text-white">
                  {stat.value}
                </motion.h3>
                <p className="text-md mt-1 opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 mt-12"
          >
            <Button className="bg-gradient-to-r from-german to-german-dark hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open("https://germanwithamit.exlyapp.com/?init_contact=true", "_blank")}>
              Explore
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>

{/* Video*/}
<div className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2 z-20 w-[90vw] sm:w-[80vw] max-w-3xl md:max-w-2xl min-w-[300px] aspect-video rounded-2xl border-2 border-german-dark shadow-xl overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/3XNpV_xRWeM?si=_YZJu_xVye54WHlO"
    title="YouTube video player"
    className="w-full h-full"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
  </section>
  );
};

export default HeroSection;
