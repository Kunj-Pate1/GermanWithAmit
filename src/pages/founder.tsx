import { GraduationCap, Globe, Award, BookOpen, Mic, Briefcase, Users, Heart, ArrowRight, Quote } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

const MeetOurFounder = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  const milestones = [
    {
      year: "Early Life",
      icon: <Heart className="w-5 h-5" />,
      title: "Born and Raised in Delhi",
      description: "Growing up in India's capital shaped Amit's multicultural perspective and passion for languages.",
      details: [
        "Multilingual upbringing in diverse Delhi neighborhoods",
        "Early fascination with German culture through literature",
        "Developed unique perspective bridging Indian and Western cultures"
      ],
      image: "/founder/delhi1.jpg",
      highlight: true
    },
    {
      year: "2010-2014",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Bachelor's in German Studies",
      description: "Pursued his passion for German language and culture at Delhi University.",
      details: [
        "Specialized in German linguistics and literature",
        "Active in cultural exchange programs",
        "Began informal teaching to fellow students"
      ],
      image: "/founder/uni1.jpg"
    },
    {
      year: "2014",
      icon: <Award className="w-5 h-5" />,
      title: "First DAAD Scholarship",
      description: "Received the prestigious DAAD scholarship for intensive language study in Germany.",
      details: [
        "First of five major academic scholarships",
        "Intensive language program in Leipzig",
        "First extended stay in Germany"
      ],
      image: "/founder/daad1.jpg",
      highlight: true
    },
    {
      year: "2015-2017",
      icon: <Globe className="w-5 h-5" />,
      title: "Master's Degree & European Journey",
      description: "Completed his Master's while living in multiple German cities.",
      details: [
        "Studied in Berlin, Munich, and Freiburg",
        "Traveled extensively across Europe",
        "Developed teaching methods combining academic and practical approaches"
      ],
      image: "/founder/europe1.jpg",
      highlight: true
    },
    {
      year: "2017",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Account Manager at Amazon",
      description: "Managed the German market for Amazon, gaining valuable corporate experience.",
      details: [
        "Worked with German business clients",
        "Maintained language skills in professional setting",
        "Continued teaching German part-time"
      ],
      image: "/founder/amazon1.jpg"
    },
    {
      year: "2018",
      icon: <Mic className="w-5 h-5" />,
      title: "Translator for PM's Mann Ki Baat",
      description: "Served as translator for Indian Prime Minister's broadcast.",
      details: [
        "Highlight of interpretation career",
        "Bridged political and cultural concepts",
        "Recognized for language expertise"
      ],
      image: "/founder/pm1.jpg",
      highlight: true
    },
    {
      year: "2019",
      icon: <BookOpen className="w-5 h-5" />,
      title: "Certified BAMF-Trainer",
      description: "Became certified German language trainer under Germany's Federal Office for Migration and Refugees.",
      details: [
        "Qualified to teach integration courses",
        "Learned official German teaching methodologies",
        "Gained deeper understanding of migrant learning needs"
      ],
      image: "/founder/bamf1.jpg"
    },
    {
      year: "2020",
      icon: <Users className="w-5 h-5" />,
      title: "Founded GermanWithAmit",
      description: "Launched the platform that would grow to 130,000+ followers worldwide.",
      details: [
        "Started with YouTube tutorials",
        "Developed unique teaching style combining humor and rigor",
        "Built community through social media"
      ],
      image: "/founder/startup1.jpg",
      highlight: true
    },
    {
      year: "Present",
      icon: <Award className="w-5 h-5" />,
      title: "Guest Professor & Growing Community",
      description: "Now teaches at Delhi University while continuing to grow GermanWithAmit.",
      details: [
        "Lectures on German language pedagogy",
        "Mentors new language instructors",
        "Continues expanding online course offerings",
        "130,000+ followers across platforms"
      ],
      image: "/founder/now1.jpg",
      highlight: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -40% 0px' 
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Navbar />
   
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-german to-german-dark text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px] mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Meet <span className="text-blue-800">Amit</span><br />
                <span className="text-3xl md:text-4xl font-normal">Founder of GermanWithAmit</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Educator, linguist, and bridge between cultures - transforming German learning for 130,000+ students worldwide
              </p>
              
              <div className="bg-white/10 border-l-4 border-german p-6 rounded-r-lg mb-8 backdrop-blur-sm">
                <Quote className="w-6 h-6 text-german mb-2" />
                <p className="italic text-blue-50 text-lg">
                  "GermanWithAmit was born from a dream: To show people how learning German can open doors, change lives, and build bridges to new opportunities."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-german hover:bg-german text-blue-900 px-8 py-3 rounded-lg font-bold flex items-center justify-center transition-all hover:scale-105 shadow-lg">
                  Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white/50 hover:border-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm">
                  Watch Story Video
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-german-dark to-german rounded-2xl overflow-hidden shadow-2xl transform rotate-1">
                  <img 
                    src="/founder/hero-portrait.jpg" 
                    alt="Amit, Founder of GermanWithAmit" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg transform -rotate-6">
                  <img 
                    src="/founder/hero-teaching.jpg" 
                    alt="Amit teaching German" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transform rotate-6">
                  <img 
                    src="/founder/hero-germany.jpg" 
                    alt="Amit in Germany" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-10 right-10 bg-white text-blue-900 px-4 py-2 rounded-full shadow-lg font-bold">
                  👋 Grüße aus Deutschland!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The Journey of a Language Visionary</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Delhi to Germany - Key milestones that shaped GermanWithAmit
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 to-blue-500 transform md:-translate-x-1/2"></div>

            {milestones.map((milestone, index) => (
              <div 
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`relative pl-16 md:pl-0 mb-12 transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 transition-all ${milestone.highlight ? 'bg-german text-blue-900 shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-300'} ${activeIndex === index ? 'scale-125' : ''}`}
                >
                  {milestone.icon}
                </div>

                {/* Milestone card */}
                <div 
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border transition-all duration-300 ${activeIndex === index ? 'border-blue-300 shadow-md' : 'border-gray-100'} ${index % 2 === 0 ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md'}`}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 h-48 bg-gray-100 relative overflow-hidden">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${activeIndex === index ? 'scale-100' : 'scale-105'}`}
                      />
                      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-white font-medium">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center mb-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${milestone.highlight ? 'bg-german text-german-dark0' : 'bg-blue-100 text-blue-800'}`}>
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      <ul className="space-y-2">
                        {milestone.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <svg 
                              className={`flex-shrink-0 h-5 w-5 mt-0.5 mr-2 ${milestone.highlight ? 'text-german' : 'text-german-dark'}`} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Navigation Dots */}
      <div className="fixed bottom-6 left-0 right-0 md:hidden flex justify-center z-10">
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center">
          {milestones.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                document.getElementById(`milestone-${index}`)?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
              className={`mx-1 w-2 h-2 rounded-full transition-all ${activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
              aria-label={`Go to milestone ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default MeetOurFounder;