import { GraduationCap, BookOpen, Globe, Clock, Calendar, Mail, MapPin, Check, User, Home, Phone, Star, Award, Play, MessageSquare, Send, ChevronDown, HelpCircle, MessageCircleQuestion, School, Languages, BookMarked, Trophy, Smile, Video, Users, PlayCircle, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const KidsGermanPage = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What age groups do you teach?",
      answer: "We specialize in teaching German to children aged 6-18 years, from primary school through high school."
    },
    {
      question: "How are classes scheduled?",
      answer: "Classes are scheduled at your convenience, with flexible timings after school hours, weekends, or during holidays."
    },
    {
      question: "Do you follow school curricula?",
      answer: "Yes, we align with CBSE, ICSE, IB, IGCSE, and German school curricula, helping with both coursework and exams."
    },
    {
      question: "What if my child has no German experience?",
      answer: "We offer beginner-friendly classes that make learning German fun and engaging through games, stories, and interactive activities."
    },
    {
      question: "How quickly will my child improve?",
      answer: "Most students show noticeable improvement within 8-12 weeks with regular sessions (2-3 times per week)."
    },
    {
      question: "Can you help with relocation preparation?",
      answer: "Absolutely! We specialize in preparing Indian children for German schools with cultural orientation and essential vocabulary."
    },
    {
      question: "What technology do we need?",
      answer: "Just a laptop/tablet with internet connection. We use interactive platforms that make learning engaging for kids."
    },
    {
      question: "Do you provide progress reports?",
      answer: "Yes, regular progress updates and parent-teacher meetings are part of our service."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const images = [
    "/images/course/thumbnails/k1.JPG",
    "/images/course/thumbnails/k2.JPG",
    "/images/course/thumbnails/k3.JPG",
    "/images/course/thumbnails/k4.JPG",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german py-16 sm:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              {/* Badge and Rating */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <span className="inline-flex px-3 py-1 rounded-full bg-german-light/30 text-white text-sm font-medium backdrop-blur-sm animate-fade-in">
                  Online German Classes
                </span>
                <div className="flex items-center animate-fade-in [animation-delay:100ms]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-4 h-4 text-yellow-300 fill-yellow-300" 
                    />
                  ))}
                  <span className="ml-2 text-sm">4.9 (200+ reviews)</span>
                </div>
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in [animation-delay:200ms]">
                German Language Classes <span className="text-german-light">for Indian Students</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl animate-fade-in [animation-delay:300ms]">
                Personalized online German tutoring designed specifically for Indian school students, 
                whether you're in India or abroad.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in [animation-delay:400ms]">
                <div className="flex items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <School className="w-5 h-5 mr-2 text-german-light" />
                  <span>CBSE/ICSE/IB/IGCSE</span>
                </div>
                <div className="flex items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Globe className="w-5 h-5 mr-2 text-german-light" />
                  <span>For Kids in India & Germany</span>
                </div>
                <div className="flex items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Users className="w-5 h-5 mr-2 text-german-light" />
                  <span>Native German Teachers</span>
                </div>
                <div className="flex items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Award className="w-5 h-5 mr-2 text-german-light" />
                  <span>Goethe Exam Preparation</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in [animation-delay:500ms]">
              <Button 
                asChild
                className="bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors duration-300 shadow-md hover:shadow-lg hover:shadow-[#128C7E]/40"
                size="lg"
              >
                <a 
                  href="https://wa.link/dobu5c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0 stroke-white fill-white" />
                  <span className="font-medium">WhatsApp Us</span>
                </a>
              </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white hover:border-german-light transition-colors"
                  size="lg"
                >
                  View Course Plans
                </Button>
              </div>
            </div>
            
            {/* Image Carousel */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in [animation-delay:300ms]">
              <div className="relative aspect-video overflow-hidden">
                <div 
                  className="flex absolute inset-0"
                  style={{
                    animation: 'infinite-scroll 40s linear infinite',
                    width: '200%'
                  }}
                >
                  {[...images, ...images].map((src, i) => (
                    <div key={`img-${i}`} className="flex-shrink-0 w-1/4 relative group">
                      <img 
                        src={src} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <div 
                    key={`indicator-${i}`}
                    className="w-2 h-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}</style>
      </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          {/* Introduction */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Tailored German Learning for Indian Kids</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Whether your child is learning German in an Indian school or struggling to adjust in a German-speaking country, our personalized online classes bridge the gap between classroom instruction and real language mastery.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>One-on-one sessions designed specifically for Indian learners aged 6-18 years</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Aligned with CBSE, ICSE, IB, IGCSE, and German school curricula</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Interactive lessons that make learning German fun and effective</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <School className="w-6 h-6 text-german-dark mr-2" />
                  Who Benefits Most?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <BookMarked className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">School Students in India</h4>
                      <p className="text-gray-600">CBSE/ICSE/IB/IGCSE German learners</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Expat Children</h4>
                      <p className="text-gray-600">Indian kids in German-speaking countries</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Relocating Families</h4>
                      <p className="text-gray-600">Preparing for school transition to Germany</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Trophy className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Exam Preparation</h4>
                      <p className="text-gray-600">Help with tests and school assessments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Unique Teaching Methodology</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We combine proven language teaching techniques with child-friendly engagement strategies:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Curriculum Aligned */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-german-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">School-Centric Learning</h3>
                <p className="text-gray-600 mb-4">
                  Lessons complement your child's school curriculum with targeted support for homework, projects, and exams.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    CBSE/ICSE/IB
                  </div>
                  <div className="bg-green-50 text-green-800 text-sm px-3 py-1 rounded-full">
                    Exam Prep
                  </div>
                </div>
              </div>

              {/* Interactive */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center">
                  <Video className="w-16 h-16 text-german-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Sessions</h3>
                <p className="text-gray-600 mb-4">
                  Games, stories, and role-plays keep children engaged while building practical language skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Fun Learning
                  </div>
                  <div className="bg-purple-50 text-purple-800 text-sm px-3 py-1 rounded-full">
                    Digital Tools
                  </div>
                </div>
              </div>

              {/* Cultural */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-german-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Bridge</h3>
                <p className="text-gray-600 mb-4">
                  We help Indian children understand German culture and school expectations for smoother adaptation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Cultural Tips
                  </div>
                  <div className="bg-orange-50 text-orange-800 text-sm px-3 py-1 rounded-full">
                    Real-Life Skills
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Parents Choose Our German Classes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <User className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Attention</h3>
                  <p className="text-gray-600">1:1 sessions tailored to your child's learning style and pace</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Languages className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Bilingual Support</h3>
                  <p className="text-gray-600">Concepts explained in English/Hindi when needed</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Smile className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Confidence Building</h3>
                  <p className="text-gray-600">Safe space to practice speaking without fear</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Clock className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">Classes arranged around school and family time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <BookMarked className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Homework Help</h3>
                  <p className="text-gray-600">Direct support with school assignments</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Trophy className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Progress Tracking</h3>
                  <p className="text-gray-600">Regular updates on your child's improvement</p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How Our Online German Classes Work</h2>
            
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-100 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Free Assessment</h3>
                    <p className="text-gray-600">First Step</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We evaluate your child's current German level and school requirements
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Custom Learning Plan</h3>
                    <p className="text-gray-600">Personalized Approach</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We create a tailored curriculum matching your child's needs and goals
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Interactive Sessions</h3>
                    <p className="text-gray-600">Regular Classes</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Engaging 1:1 online classes with experienced Indian German teachers
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Progress Tracking</h3>
                    <p className="text-gray-600">Continuous Improvement</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Regular assessments and parent updates to monitor development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Parents & Students Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Mrs. Sharma, Delhi</h3>
                    <p className="text-gray-600 text-sm">Mother of CBSE Class 8 student</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "My daughter went from failing German to topping her class in just one semester. The personalized attention made all the difference!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Rahul, 14</h3>
                    <p className="text-gray-600 text-sm">Student in Munich</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "After moving to Germany, I couldn't understand anything in class. Now I can follow lessons and even made German friends!"
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircleQuestion className="text-german-dark" size={24} />
              <h2 className="text-3xl font-bold text-center text-gray-800">FAQs – German Classes for Kids</h2>
            </div>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Common questions about our online German classes for children
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className={`border border-blue-50 rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-blue-50 shadow-sm' : 'bg-white hover:bg-blue-50/50'}`}
                  >
                    <button
                      className="flex justify-between items-center w-full p-6 text-left"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                      <span className={`ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </span>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-german-dark to-german rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Boost Your Child's German Skills?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Book a free consultation to discuss your child's needs and learning goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a 
                href="mailto:info@germanwithamit.com" 
                className="bg-white hover:bg-blue-50 text-german-dark px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" /> Email Us
              </a>
              <a 
                href="tel:+919870218394" 
                className="bg-transparent hover:bg-blue-900 border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              📲 WhatsApp: +91-9870218394<br />
              🌐 Website: www.germanwithamit.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KidsGermanPage;