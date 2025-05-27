import { GraduationCap, Globe, Award, BookOpen, Mic, Briefcase, Users, Heart, ArrowRight, Quote } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const MeetOurFounder = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const milestonesRef = useRef([]);
  const containerRef = useRef(null);

  const milestones = [
    {
      year: "Early Life",
      icon: <Heart className="w-5 h-5" />,
      title: "Born and Raised in Delhi",
      description: "Growing up in India's capital shaped Amit's multicultural perspective and passion for languages.",
      image: "/founder/delhi1.jpg",
      color: "bg-red-100 text-red-600"
    },
    {
      year: "2010-2014",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Bachelor's in German Studies",
      description: "Pursued his passion for German language and culture at Delhi University.",
      image: "/founder/uni1.jpg",
      color: "bg-blue-100 text-blue-600"
    },
    {
      year: "2014",
      icon: <Award className="w-5 h-5" />,
      title: "First DAAD Scholarship",
      description: "Received the prestigious DAAD scholarship for intensive language study in Germany.",
      image: "/founder/daad1.jpg",
      color: "bg-amber-100 text-amber-600"
    },
    {
      year: "2015-2017",
      icon: <Globe className="w-5 h-5" />,
      title: "Master's Degree & European Journey",
      description: "Completed his Master's while living in multiple German cities.",
      image: "/founder/europe1.jpg",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      year: "2017",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Account Manager at Amazon",
      description: "Managed the German market for Amazon, gaining valuable corporate experience.",
      image: "/founder/amazon1.jpg",
      color: "bg-purple-100 text-purple-600"
    },
    {
      year: "2018",
      icon: <Mic className="w-5 h-5" />,
      title: "Translator for PM's Mann Ki Baat",
      description: "Served as translator for Indian Prime Minister's broadcast.",
      image: "/founder/pm1.jpg",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      year: "2019",
      icon: <BookOpen className="w-5 h-5" />,
      title: "Certified BAMF-Trainer",
      description: "Became certified German language trainer under Germany's Federal Office for Migration and Refugees.",
      image: "/founder/bamf1.jpg",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      year: "2020",
      icon: <Users className="w-5 h-5" />,
      title: "Founded GermanWithAmit",
      description: "Launched the platform that would grow to 130,000+ followers worldwide.",
      image: "/founder/startup1.jpg",
      color: "bg-fuchsia-100 text-fuchsia-600"
    },
    {
      year: "Present",
      icon: <Award className="w-5 h-5" />,
      title: "Guest Professor & Growing Community",
      description: "Now teaches at Delhi University while continuing to grow GermanWithAmit.",
      image: "/founder/now1.jpg",
      color: "bg-green-100 text-green-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = milestonesRef.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    milestonesRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white py-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-german-dark to-german text-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Meet <span className="text-blue-200">Amit</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-lg">
                  Educator, linguist, and cultural bridge builder transforming German learning for 130,000+ students worldwide
                </p>
                
                <div className="mb-8">
                  <Quote className="w-6 h-6 text-blue-200 mb-2" />
                  <p className="italic text-blue-100 text-lg">
                    "GermanWithAmit was born from a dream to show how learning German can open doors, change lives, and build bridges to new opportunities."
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-colors">
                    Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border border-white/30 hover:border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                    Watch Founder's Story
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="/founder/hero-portrait.jpg" 
                    alt="Amit, Founder of GermanWithAmit" 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-blue-900 px-4 py-2 rounded-lg shadow-lg font-medium">
                  130,000+ Students Worldwide
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Founder Details */}
              <div className="lg:w-2/5 sticky top-20 h-fit">
                <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="aspect-square w-full mb-6 rounded-lg overflow-hidden">
                    <img 
                      src="/founder/hero-portrait.jpg" 
                      alt="Amit teaching German" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Amit's Teaching Philosophy</h2>
                  <p className="text-gray-600 mb-6">
                    Combining academic rigor with cultural immersion, Amit's approach makes German language learning accessible and engaging for students worldwide.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">130,000+ Students</h3>
                        <p className="text-gray-600 text-sm">Transforming language learning worldwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Award className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">5 Scholarships</h3>
                        <p className="text-gray-600 text-sm">Recognized excellence in German studies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <BookOpen className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">BAMF Certified</h3>
                        <p className="text-gray-600 text-sm">Official German language trainer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Timeline */}
              <div className="lg:w-3/5" ref={containerRef}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">The Journey</h2>
                  <p className="text-gray-600">
                    From Delhi to Germany - The milestones that shaped GermanWithAmit
                  </p>
                </div>

                <div className="relative pl-10">
                  {/* Vertical timeline line */}
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>

                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      ref={(el) => (milestonesRef.current[index] = el)}
                      className={`relative mb-12 transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
                    >
                      {/* Animated icon */}
                      <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center -translate-x-1/2 transform ${milestone.color} border-4 border-white shadow-lg z-10 transition-all duration-500 ${activeIndex === index ? 'scale-110 -translate-y-1' : ''}`}>
                        <div className={`relative ${activeIndex === index ? 'animate-pulse' : ''}`}>
                          {milestone.icon}
                        </div>
                      </div>

                      {/* Glow effect when active */}
                      {activeIndex === index && (
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full -translate-x-1/2 transform bg-white mix-blend-screen opacity-30 z-0 animate-ping"></div>
                      )}

                      {/* Milestone card */}
                      <div 
                        className={`bg-white rounded-xl shadow-sm overflow-hidden border transition-all duration-300 ${activeIndex === index ? 'border-blue-200 shadow-md scale-[1.01]' : 'border-gray-100'} ml-8`}
                      >
                        <div className="md:flex">
                          <div className="md:w-2/5 h-48 bg-gray-100 relative overflow-hidden">
                            <img 
                              src={milestone.image} 
                              alt={milestone.title}
                              className={`w-full h-full object-cover transition-transform duration-700 ${activeIndex === index ? 'scale-100' : 'scale-105'}`}
                            />
                          </div>
                          <div className="p-6 md:w-3/5">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${milestone.color.replace('bg-', 'bg-opacity-20 ')} mb-2 inline-block`}>
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                            <p className="text-gray-600">{milestone.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Call to Action */}
        <section className="py-16 bg-german text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Join Amit's Language Revolution</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience German learning transformed by Amit's unique journey and teaching philosophy.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg transform hover:scale-105 duration-200">
              Start Learning Today <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
    </>
  );
};

export default MeetOurFounder;