import { Building, GraduationCap, Briefcase, Globe, Clock, Calendar, Mail, MapPin, Check, Euro, Flag, Scroll, User, Home, Phone, BookOpen, Star, Award, Play, MessageSquare, Send, ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';

const AusbildungPage = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Ausbildung free for Indian students?",
      answer: "Yes, Ausbildung has no tuition fees. In fact, you get paid while you train with a monthly stipend of €1,000–€1,200."
    },
    {
      question: "Do I need to know German?",
      answer: "Absolutely. B1 or B2 German proficiency is mandatory for most programs. We provide language training to help you reach the required level."
    },
    {
      question: "Will I get a job after Ausbildung?",
      answer: "Yes, job placement is guaranteed upon successful completion of your program. Many students continue working with the same company where they trained."
    },
    {
      question: "How long does Ausbildung last?",
      answer: "Most programs are between 2 to 3.5 years, depending on the course. Nursing typically takes 3 years, while technical fields may be shorter."
    },
    {
      question: "Can I apply for PR after Ausbildung?",
      answer: "Yes, after working in Germany for 2 years post-Ausbildung, you can apply for Permanent Residency. The Ausbildung visa counts toward your PR timeline."
    },
    {
      question: "What's the minimum qualification required?",
      answer: "You need at least 10+2 education (55% marks) or a 10+Diploma. Some technical fields may require specific subject knowledge."
    },
    {
      question: "Is there an age limit for Ausbildung?",
      answer: "While there's no strict limit, most successful applicants are between 18-25 years old. Some fields may accept applicants up to 30 years."
    },
    {
      question: "How does German With Amit help with Ausbildung?",
      answer: "We provide complete guidance from language training to visa processing, including company matching, interview preparation, and relocation support."
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
                  Professional Training
                </span>
                <div className="ml-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-4 h-4 text-yellow-300 fill-yellow-300" 
                    />
                  ))}
                  <span className="ml-2 text-sm">4.8 star rating</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ausbildung in Germany
              </h1>
              
              <p className="text-lg md:text-xl mb-6 text-blue-50 max-w-2xl">
                Learn & Earn with German With Amit – Your Pathway to a Successful Career in Germany
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>2-3 Year Program</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Earn While You Learn</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-german hover:bg-german-light">
                  Watch Demo
                </Button>
                <Button className="bg-white text-german hover:bg-blue-50">
                  Enroll Now
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/images/course/ausbildung/hero.jpeg" // Replace with your image path
                      alt="Ausbildung in Germany" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <button className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110">
                      <Play className="w-10 h-10 text-german fill-german" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          {/* Introduction */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What is Ausbildung?</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Ausbildung (German for "vocational training") is a government-recognized program that combines theoretical classroom instruction with practical on-the-job experience at a real company. It's a fantastic alternative to traditional university education—and it's absolutely free!
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>You earn a monthly stipend of €1,000–€1,200 (₹90,000 to ₹1,00,000) while receiving industry-specific training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>After completion, you receive a certified qualification, job placement, and are eligible for Permanent Residency (PR) in Germany</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 text-german-dark mr-2" />
                  Key Benefits of Ausbildung
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Euro className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Earn While You Learn</h4>
                      <p className="text-gray-600">Monthly stipend up to €1,200</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">No Tuition Fees</h4>
                      <p className="text-gray-600">Sponsored by German companies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Hands-On Training</h4>
                      <p className="text-gray-600">Practical skills + work experience</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Flag className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Path to German PR</h4>
                      <p className="text-gray-600">Long-term employment and residency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Fields */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Ausbildung Courses Available for International Students</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              At German With Amit, we guide you to choose from over 300+ Ausbildung programs across high-demand sectors in Germany:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Nursing */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/nursing.jpg" 
                    alt="Nursing Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Nursing</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Start a rewarding career in healthcare. High demand across Germany with excellent career progression.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    High Demand
                  </div>
                  <div className="bg-green-50 text-green-800 text-sm px-3 py-1 rounded-full">
                    €1,100-1,300/month
                  </div>
                </div>
              </div>

              {/* Hotel Management */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/hotel.jpg" 
                    alt="Hotel Management Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Hotel Management</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfect for 12th pass students looking for global careers in luxury hospitality and tourism.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    International Options
                  </div>
                  <div className="bg-purple-50 text-purple-800 text-sm px-3 py-1 rounded-full">
                    Travel Opportunities
                  </div>
                </div>
              </div>

              {/* Mechatronics */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/mechatronics.jpg" 
                    alt="Mechatronics Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Mechatronics</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Train in a high-tech blend of mechanics, electronics, and IT with German engineering excellence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Future-Proof
                  </div>
                  <div className="bg-orange-50 text-orange-800 text-sm px-3 py-1 rounded-full">
                    €1,200-1,500/month
                  </div>
                </div>
              </div>

              {/* IT */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/It.jpg" 
                    alt="IT Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Information Technology</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Ideal for tech enthusiasts with training in software development, systems administration and networks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Excellent Pay
                  </div>
                  <div className="bg-indigo-50 text-indigo-800 text-sm px-3 py-1 rounded-full">
                    €1,300-1,600/month
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Courses - Initially Hidden */}
            <div className="grid md:grid-cols-2 gap-8 mt-8 hidden" id="more-courses">
              {/* Retail Sales */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/retails.jpg" 
                    alt="Retail Sales Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Retail Sales</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn sales, merchandising & customer service in top German brands like Aldi, Lidl, and BMW.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Customer Focused
                  </div>
                </div>
              </div>

              {/* Business Admin */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/business.jpg" 
                    alt="Business Administration Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Business Administration</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Start a stable career in HR, finance, and office management with multinational companies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Stable Career
                  </div>
                </div>
              </div>

              {/* Logistics */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/logistics.jpg" 
                    alt="Logistics Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Logistics & Supply Chain</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Master warehouse operations and international logistics with Germany's leading shipping companies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Global Opportunities
                  </div>
                </div>
              </div>

              {/* Construction */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/construction.jpg" 
                    alt="Construction Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Construction</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Work in infrastructure, architecture, and site management with Germany's booming construction sector.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    High Demand
                  </div>
                  <div className="bg-amber-50 text-amber-800 text-sm px-3 py-1 rounded-full">
                    €1,100-1,400/month
                  </div>
                </div>
              </div>

              {/* Cosmetology */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/cosmetology.jpg" 
                    alt="Cosmetology Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Cosmetology</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Hands-on training in salons and beauty services with Germany's premium beauty brands.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Creative Field
                  </div>
                </div>
              </div>

              {/* Banking */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/course/ausbildung/banking.jpg" 
                    alt="Banking Ausbildung" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Banking & Finance</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Open a career in banking, loans, and financial services with Germany's leading banks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Prestigious
                  </div>
                  <div className="bg-teal-50 text-teal-800 text-sm px-3 py-1 rounded-full">
                    €1,200-1,500/month
                  </div>
                </div>
              </div>
            </div>

            {/* Show More Button */}
            <div className="text-center mt-8">
              <button 
                onClick={() => {
                  const moreCourses = document.getElementById('more-courses');
                  const showMoreBtn = document.getElementById('show-more-btn');
                  if (moreCourses.classList.contains('hidden')) {
                    moreCourses.classList.remove('hidden');
                    showMoreBtn.textContent = 'Show Less Courses';
                  } else {
                    moreCourses.classList.add('hidden');
                    showMoreBtn.textContent = 'Show More Courses';
                  }
                }}
                id="show-more-btn"
                className="bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center"
              >
                Show More Courses
                <ChevronDown className="ml-2 w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ausbildung Journey with German With Amit</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              We make your Ausbildung dream simple, step-by-step:
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
                    <h3 className="text-xl font-bold text-gray-800">Eligibility Check</h3>
                    <p className="text-gray-600">First Step</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We assess your education, age, documents, and career goals
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">German Language Training</h3>
                    <p className="text-gray-600">3-6 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Complete A1 to B2 level training with real-time speaking practice and cultural workshops
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Exam Preparation</h3>
                    <p className="text-gray-600">1-2 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Intensive coaching to pass Goethe B1/B2 certification exams
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Company Interviews</h3>
                    <p className="text-gray-600">2-3 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We train and schedule your interviews with German employers
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Visa & Documentation</h3>
                    <p className="text-gray-600">1-2 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Full guidance in contract handling, visa process, and embassy interviews
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">6</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Fly to Germany</h3>
                    <p className="text-gray-600">Final Step</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Start your Ausbildung program fully prepared—with a job and future in hand!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Criteria Section */}
          <section className="mb-12 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ausbildung Eligibility Criteria</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              To qualify for Ausbildung in Germany, you need:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
                  <p className="text-gray-600">Minimum 10+2 or 10+Diploma (55% marks)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Globe className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">German Proficiency</h3>
                  <p className="text-gray-600">Certified B1/B2 (Goethe or equivalent)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <User className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Age</h3>
                  <p className="text-gray-600">18 to 25 years</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Scroll className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Documents</h3>
                  <p className="text-gray-600">Passport and good health/background</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all">
                Check My Eligibility Now
              </button>
            </div>
          </section>

        {/* Application Form Section */}
        <section className="bg-gradient-to-r from-german-dark/90 to-german/90 py-12 px-6 rounded-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center">
              <BookOpen className="w-6 h-6 mr-2" /> 
              Ready to get started?
            </h2>
            <p className="text-blue-100/90 text-lg">
              Fill out the form below to begin your Ausbildung journey
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
                  <label className="block text-white/80 text-sm font-medium mb-1">Highest Qualification*</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    <select
                      name="qualification"
                      className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select qualification</option>
                      <option value="12th Pass">12th Pass</option>
                      <option value="Diploma (10 + 3)">Diploma (10 + 3)</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Ausbildung Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">Ausbildung Field*</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    <select
                      name="ausbildungField"
                      className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a field</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Hotel Management">Hotel Management</option>
                      <option value="Mechatronics">Mechatronics</option>
                      <option value="Information Technology">IT</option>
                      <option value="Retail Sales">Retail Sales</option>
                      <option value="Business Administration">Business Admin</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">German Level*</label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    <select
                      name="germanProficiency"
                      className="w-full pl-10 px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select your level</option>
                      <option value="No Experience">No Experience</option>
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                      <option value="B1">B1</option>
                      <option value="B2 or Above">B2 or Above</option>
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

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose German With Amit?</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Unlike big agencies, German With Amit offers personalized coaching and direct mentorship. You don't just learn German—you prepare to live and work in Germany with confidence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <User className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Direct Mentorship</h3>
                </div>
                <p className="text-gray-600">
                  From Amit, a certified German language expert with industry experience
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Home className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Small Batch Sizes</h3>
                </div>
                <p className="text-gray-600">
                  Focused attention with limited students per batch for better learning
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Flag className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Cultural Training</h3>
                </div>
                <p className="text-gray-600">
                  Real-world cultural training with German natives for smooth integration
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">100% Transparency</h3>
                </div>
                <p className="text-gray-600">
                  Clear processes with no hidden fees or false promises
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Briefcase className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visa Assistance</h3>
                </div>
                <p className="text-gray-600">
                  Complete support until you land in Germany with your visa
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
                  Help available even after you reach Germany for any challenges
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Hear from Our Students</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Riya Sharma, Delhi</h3>
                    <p className="text-gray-600 text-sm">Nursing Ausbildung</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I got into an Ausbildung program for nursing thanks to Amit sir's guidance. The language training and interview prep were perfect!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Akshay Patil, Mumbai</h3>
                    <p className="text-gray-600 text-sm">IT Ausbildung</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "From learning A1 to getting my B2 certificate and landing in Germany—it was all possible because of German With Amit."
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
      <div className="flex items-center justify-center gap-3 mb-6">
        <MessageCircleQuestion className="text-german-dark" size={24} />
        <h2 className="text-3xl font-bold text-center text-gray-800">FAQs – Ausbildung in Germany</h2>
      </div>
      
      <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
        Find answers to common questions about vocational training in Germany
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

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-german-dark to-german rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your Ausbildung Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you want to build a career in healthcare, IT, hospitality, or skilled trades, German With Amit is your trusted guide.
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

export default AusbildungPage;