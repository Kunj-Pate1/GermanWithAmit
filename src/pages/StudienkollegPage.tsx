import { GraduationCap, BookOpen, Globe, User, Home, Phone, Mail, Check, Flag, Briefcase, FlaskConical, Palette, Star, Award, Play, MessageSquare, Send, ChevronDown, Scroll, MapPin, MessageCircleQuestion } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';

const StudienkollegPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between Studienkolleg and direct university admission?",
      answer: "Studienkolleg is required if your school-leaving certificate isn't equivalent to the German Abitur. It prepares you academically and linguistically for German university studies."
    },
    {
      question: "How long does Studienkolleg take to complete?",
      answer: "Typically 1 year (2 semesters) of intensive preparation followed by the FSP exam."
    },
    {
      question: "Can I work while attending Studienkolleg?",
      answer: "Yes, international students can work part-time (up to 120 full days or 240 half days per year) while studying."
    },
    {
      question: "What happens if I fail the FSP exam?",
      answer: "At CBS, you get comprehensive support to pass. If needed, you may repeat the exam or certain subjects."
    },
    {
      question: "Is Studienkolleg available in English?",
      answer: "Yes, CBS offers Studienkolleg tracks in both English and German medium."
    },
    {
      question: "What are the language requirements for Studienkolleg?",
      answer: "For German tracks: B2 level. For English tracks: IELTS 5.5 or equivalent. We provide language training if needed."
    },
    {
      question: "Can I change my Studienkolleg course track later?",
      answer: "Changing tracks after starting is difficult, so we help you choose the right one from the beginning based on your goals."
    },
    {
      question: "What universities can I attend after Studienkolleg?",
      answer: "The FSP qualifies you for Bachelor's programs at public and private universities across Germany in your chosen field."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="mb-4 flex items-center">
                  <span className="px-3 py-1 rounded-full bg-german-light/30 text-white text-sm font-medium">
                    University Preparation
                  </span>
                  <div className="ml-4 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-4 h-4 text-yellow-300 fill-yellow-300" 
                      />
                    ))}
                    <span className="ml-2 text-sm">4.9 star rating</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Studienkolleg in Germany
                </h1>
                
                <p className="text-lg md:text-xl mb-6 text-blue-50 max-w-2xl">
                  Your Bridge to German University Admission – Powered by German With Amit & CBS Cologne
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    <span>1 Year Program</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    <span>Direct University Pathway</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-german hover:bg-german-light">
                    Watch Demo
                  </Button>
                  <Button className="bg-white text-german hover:bg-blue-50">
                    Apply Now
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <div className="relative">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src="/images/course/studienkolleg/hero.jpg"
                        alt="Studienkolleg in Germany" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110">
                        <Play className="w-10 h-10 text-german fill-german" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          {/* What is Studienkolleg */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What is Studienkolleg?</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  If you're dreaming of a Bachelor's degree in Germany but completed only 12 years of school (like most students in India), you've probably run into the term "Studienkolleg."
                </p>
                <p className="text-gray-700 mb-4">
                  Studienkolleg (STK) is a foundation course offered in Germany that prepares international students for university admission. It's designed for students whose school-leaving certificate is not equivalent to the German Abitur, which is required for direct entry into German universities.
                </p>
                <p className="text-gray-700">
                  At German With Amit, we're making this pathway clearer, simpler, and more accessible — thanks to our official partnership with CBS International Business School in Cologne.
                </p>
              </div>
              <div className="md:w-1/2 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 text-german-dark mr-2" />
                  Why Studienkolleg?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">University Eligibility</h4>
                      <p className="text-gray-600">Become eligible for German universities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Language Skills</h4>
                      <p className="text-gray-600">Build academic German/English skills</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Cultural Adaptation</h4>
                      <p className="text-gray-600">Adapt to German academic culture</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Scroll className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Exam Preparation</h4>
                      <p className="text-gray-600">Prepare for university entrance exam (FSP)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CBS Partner Section */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">CBS Cologne – Our Official Studienkolleg Partner</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-6">
                  Through our partnership with CBS International Business School, students gain access to one of Germany's officially recognized Studienkolleg programs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Government-approved FSP exam on campus</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Offered in English and German</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Students from 110+ countries</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Guaranteed seat at CBS after FSP</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Scholarships available</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Full integration support</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Flag className="w-6 h-6 text-german-dark mr-2" />
                  What is the Feststellungsprüfung (FSP)?
                </h3>
                <p className="text-gray-700">
                  The Feststellungsprüfung is the final exam of the Studienkolleg program — and it's your official ticket to German university admission. At CBS, this exam is conducted in-house, meaning you don't need to worry about external institutions or government testing centers.
                </p>
                <p className="text-gray-700 mt-4">
                  Pass the FSP, and you're ready to apply to Bachelor's programs across Germany.
                </p>
              </div>
            </div>
          </section>

          {/* Studienkolleg Tracks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Choose Your Studienkolleg Track</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Select the course that aligns with your future university studies:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* W-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/studienkolleg/business.jpg" 
                    alt="Business Studienkolleg" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">💼 W-Course</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Business, Economics & Social Sciences. For careers in business, finance, management, and law.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Popular Choice
                  </div>
                  <div className="bg-green-50 text-green-800 text-sm px-3 py-1 rounded-full">
                    English/German
                  </div>
                </div>
              </div>

              {/* T-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/studienkolleg/tech.jpg" 
                    alt="Tech Studienkolleg" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">🔬 T-Course</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Science, Tech, Engineering & Math. For engineering, computer science, math, or physical sciences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    High Demand
                  </div>
                  <div className="bg-purple-50 text-purple-800 text-sm px-3 py-1 rounded-full">
                    German Medium
                  </div>
                </div>
              </div>

              {/* M-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/studienkolleg/medical.jpg" 
                    alt="Medical Studienkolleg" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">🧬 M-Course</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Medical & Life Sciences. For medicine, pharmacy, biology, or veterinary studies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Competitive
                  </div>
                  <div className="bg-orange-50 text-orange-800 text-sm px-3 py-1 rounded-full">
                    German Required
                  </div>
                </div>
              </div>

              {/* S/G-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/studienkolleg/arts.jpg" 
                    alt="Arts Studienkolleg" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">🎨 S/G-Course</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Arts, Languages & Humanities. For degrees in humanities, linguistics, history, arts, and related fields.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Creative Focus
                  </div>
                  <div className="bg-indigo-50 text-indigo-800 text-sm px-3 py-1 rounded-full">
                    Portfolio Needed
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Studienkolleg Journey</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Our step-by-step process makes your German university dream achievable:
            </p>
            
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
                    <h3 className="text-xl font-bold text-gray-800">Eligibility Assessment</h3>
                    <p className="text-gray-600">First Step</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We evaluate your academic background and recommend the best Studienkolleg track
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Language Preparation</h3>
                    <p className="text-gray-600">3-9 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Intensive German or English training to reach required proficiency levels
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Application Processing</h3>
                    <p className="text-gray-600">1-2 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We handle all documentation for CBS Studienkolleg admission
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Visa Assistance</h3>
                    <p className="text-gray-600">2-3 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Complete support for German student visa application
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Studienkolleg Program</h3>
                    <p className="text-gray-600">1 year</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Intensive preparation at CBS Cologne for the FSP exam
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">6</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">University Admission</h3>
                    <p className="text-gray-600">Final Step</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Apply to Bachelor's programs across Germany after passing FSP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">From India to Germany – We've Got You Covered</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Our comprehensive support ensures your smooth transition to studying in Germany:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <User className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Counseling & Selection</h3>
                </div>
                <p className="text-gray-600">
                  Guidance for Studienkolleg and course selection
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <BookOpen className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Application Support</h3>
                </div>
                <p className="text-gray-600">
                  Guidance for CBS and other universities
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Flag className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visa & SOP</h3>
                </div>
                <p className="text-gray-600">
                  Complete documentation support
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Globe className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Language Training</h3>
                </div>
                <p className="text-gray-600">
                  German & English preparation
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Home className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Cultural Preparation</h3>
                </div>
                <p className="text-gray-600">
                  Mentorship and checklists
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Phone className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Ongoing Support</h3>
                </div>
                <p className="text-gray-600">
                  Help after you reach Germany
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Priya Mehta, Mumbai</h3>
                    <p className="text-gray-600 text-sm">W-Course at CBS</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The Studienkolleg program at CBS prepared me perfectly for my Business Administration degree. The small class sizes and personal attention made all the difference!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Rahul Sharma, Delhi</h3>
                    <p className="text-gray-600 text-sm">T-Course at CBS</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "German With Amit helped me navigate the complex Studienkolleg process. Now I'm studying Mechanical Engineering at a top German university!"
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircleQuestion className="text-german-dark" size={24} />
              <h2 className="text-3xl font-bold text-center text-gray-800">FAQs – Studienkolleg in Germany</h2>
            </div>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Common questions about preparing for German universities
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
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Still have questions?{' '}
                <a href="#contact" className="text-german-dark hover:text-german font-medium">
                  Contact us directly
                </a>{' '}
                for personalized answers about your situation.
              </p>
            </div>
          </section>

          {/* Application Form Section */}
          <section className="bg-gradient-to-r from-german-dark/90 to-german/90 py-12 px-6 rounded-xl mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center">
                <BookOpen className="w-6 h-6 mr-2" /> 
                Start Your Studienkolleg Journey
              </h2>
              <p className="text-blue-100/90 text-lg">
                Fill out the form below to begin your path to German universities
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-3xl mx-auto">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Full Name*</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Your Full Name"
                        className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Email Address*</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Mobile Number*</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="+91XXXXXXXXXX"
                        className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Current Education*</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <select
                        name="education"
                        className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select your level</option>
                        <option value="12th Grade">12th Grade (ongoing)</option>
                        <option value="12th Pass">12th Pass</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Studienkolleg Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Preferred Track*</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <select
                        name="track"
                        className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select a track</option>
                        <option value="W-Course">W-Course (Business/Economics)</option>
                        <option value="T-Course">T-Course (Tech/Engineering)</option>
                        <option value="M-Course">M-Course (Medical/Life Sciences)</option>
                        <option value="S/G-Course">S/G-Course (Arts/Humanities)</option>
                        <option value="Not Sure">Not Sure - Need Guidance</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Language Proficiency*</label>
                    <div className="relative">
                      <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <select
                        name="language"
                        className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select your level</option>
                        <option value="None">No German Knowledge</option>
                        <option value="A1">German A1</option>
                        <option value="A2">German A2</option>
                        <option value="B1">German B1</option>
                        <option value="B2 or above">German B2 or above</option>
                        <option value="English">Prefer English Medium</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Location & Passport */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">City / State*</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <input
                        type="text"
                        name="cityState"
                        placeholder="Your City and State"
                        className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Passport Status*</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input type="radio" name="passport" value="Yes" className="text-german" required />
                        <span className="ml-2 text-white/80">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="passport" value="No" className="text-german" />
                        <span className="ml-2 text-white/80">No</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="passport" value="Applying soon" className="text-german" />
                        <span className="ml-2 text-white/80">Applying soon</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Fields */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">How did you hear about us?</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                    <input
                      type="text"
                      name="hearAbout"
                      placeholder="Social media, friend, etc."
                      className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">Additional Questions</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                    <textarea
                      name="comments"
                      rows={3}
                      className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Any specific questions or requirements..."
                    ></textarea>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <label htmlFor="consent" className="ml-2 block text-white/80 text-sm">
                    I authorize German With Amit to contact me via Email, SMS, WhatsApp, and Call.
                  </label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-white text-german hover:bg-german-light hover:text-white transition-colors mt-6 py-3 font-medium"
                >
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </span>
                </Button>
              </form>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-german-dark to-german rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Begin Your German Education Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of students taking the smarter route to Germany with German With Amit and CBS Cologne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a 
                href="mailto:info@germanwithamit.com" 
                className="bg-white hover:bg-blue-50 text-german-dark px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" /> Email Us
              </a>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="bg-transparent hover:bg-blue-900 border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              📲 WhatsApp: +91-XXXXXXXXXX<br />
              🌐 Website: www.germanwithamit.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudienkollegPage;