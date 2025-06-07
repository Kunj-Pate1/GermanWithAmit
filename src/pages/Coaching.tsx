import { useState } from 'react';
import { BookOpen, Clock, Headphones, Mic, Pen, Check, Download, Star, Award, ShieldCheck, ChevronRight, Play, Target, Calendar, CalendarDays, ClipboardList, Mail, MessageSquare, Phone, Send, User, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

type GermanLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Not sure';

const CoachingPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'pricing'>('overview');
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setShowDemoForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Here you would typically send the form data to your backend
      // For demonstration, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll get in touch within 24 hours to confirm your slot.'
      });
      // Reset form here if needed
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const packages = [
    {
      name: "Single Session",
      hours: 1,
      price: "€20",
      pricePerHour: "€20/hour",
      description: "Trial class, occasional help",
      popular: false
    },
    {
      name: "4-Hour Bundle",
      hours: 4,
      price: "€60",
      pricePerHour: "€15/hour",
      description: "Focused short-term support",
      popular: true
    },
    {
      name: "8-Hour Bundle",
      hours: 8,
      price: "€120",
      pricePerHour: "€15/hour",
      description: "Full-level learning or exam preparation",
      popular: false
    }
  ];

  const benefits = [
    "Tailored lesson plans based on your goals",
    "Homework assignments with feedback",
    "Progress tracking after key milestones",
    "WhatsApp support between sessions",
    "Grammar or vocabulary doubts clarification",
    "Exam questions or topic review",
    "Full-course guidance and study tips"
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german py-16">
          <div className="container mx-auto px-4 md:px-6 p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white order-2 lg:order-1">
                <div className="mb-4 flex items-center">
                  <span className="px-3 py-1 rounded-full bg-german-light/30 text-white text-sm font-medium">
                    Personalized Coaching
                  </span>
                  <div className="ml-4 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                    ))}
                    <span className="ml-2 text-sm">4.9 star rating</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Personalized 1:1 German Coaching
                </h1>
                
                <p className="text-lg md:text-xl mb-6 text-blue-50">
                  From A1 to C2 - Learn exactly what you need for real-life German
                </p>

                <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <p className="font-medium mb-2">🎯 Ideal for students who want to:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Prepare for Goethe exams (A1-C2)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Build speaking fluency and confidence</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Get help with grammar and sentence structure</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Complete a full German level with guidance</span>
                    </li>
                  </ul>
                </div>
                
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-german hover:bg-german-light"
                    onClick={() => setShowDemoForm(true)}
                  >
                    Book Free Consultation
                  </Button>
                </div> */}
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <div className="relative">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src="/images/coaching-hero.jpg" 
                        alt="German Coaching" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
                        onClick={() => setShowDemoForm(true)}
                      >
                        <Play className="w-10 h-10 text-german fill-german" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-3xl font-bold text-gray-900">From €15/hour</div>
                      <div className="text-lg text-gray-500 line-through">€25/hour</div>
                    </div>
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center text-green-600 font-medium">
                        <ShieldCheck className="w-5 h-5 mr-2" />
                        <span>100% Personalized</span>
                      </div>
                      <div className="flex items-center text-blue-600 font-medium">
                        <BookOpen className="w-5 h-5 mr-2" />
                        <span>A1-C2 Level Coaching</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-german hover:bg-german-dark"
                      onClick={() => window.scrollTo({top: document.getElementById('booking')?.offsetTop, behavior: 'smooth'})}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showDemoForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-bold mb-4">Book Free Consultation</h3>
              <p className="mb-4">Enter your email to schedule a free 15-minute consultation:</p>
              <form onSubmit={handleDemoRequest}>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full p-3 border rounded mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex justify-end gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowDemoForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-german hover:bg-german-dark">
                    Schedule Now
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium ${activeTab === 'overview' ? 'text-german-dark border-b-2 border-german-dark' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-6 py-3 font-medium ${activeTab === 'structure' ? 'text-german-dark border-b-2 border-german-dark' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Course Structure
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 font-medium ${activeTab === 'pricing' ? 'text-german-dark border-b-2 border-german-dark' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Pricing
            </button>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <section>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">1:1 German Coaching – Learn What You Actually Need</h2>
                  <div className="w-20 h-1 bg-german-dark mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">No generic lessons. No rushing through grammar.</h3>
                    <p className="text-gray-700 mb-4">
                      Just targeted, personalized coaching designed around what you need most.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-50 p-2 rounded-lg mr-4">
                          <BookOpen className="w-5 h-5 text-german-dark" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">What You'll Learn</h4>
                          <ul className="mt-2 space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>German for daily life, work, travel, or academics</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>All four skills: speaking, listening, reading, and writing</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>Grammar explained in simple, practical ways</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>Optional Goethe exam preparation (A1–C2)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Certified Instruction with Flexible Scheduling</h3>
                    <p className="text-gray-700 mb-4">
                      Whether you're starting with the basics or trying to complete a full level, you'll get structured support — and real progress.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-50 p-2 rounded-lg mr-4">
                          <Award className="w-5 h-5 text-german-dark" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Key Features</h4>
                          <ul className="mt-2 space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>Certified DaF/DaZ instruction</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>Online sessions available worldwide</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>Flexible scheduling to fit your lifestyle</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></span>
                              <span>Personalized feedback and progress tracking</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Structure Tab */}
          {activeTab === 'structure' && (
            <div className="space-y-12">
              <section>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Structure & Session Details</h2>
                  <div className="w-20 h-1 bg-german-dark mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Session Details</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded mr-3">
                          1
                        </span>
                        <span className="text-gray-700">60-minute personalized 1:1 classes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded mr-3">
                          2
                        </span>
                        <span className="text-gray-700">Choose morning, evening, weekday, or weekend classes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded mr-3">
                          3
                        </span>
                        <span className="text-gray-700">Option to receive session recordings</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-50 p-3 rounded-lg mr-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">What's Included</h3>
                    </div>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded mr-3">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <div id="pricing" className="space-y-12">
              <section>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Package</h2>
                  <div className="w-20 h-1 bg-german-dark mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg, index) => (
                    <div 
                      key={index} 
                      className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${pkg.popular ? 'ring-2 ring-german-dark' : ''}`}
                    >
                      {pkg.popular && (
                        <div className="bg-german-dark text-white text-center py-1 font-medium">
                          Most Popular
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{pkg.name}</h3>
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-german-dark">{pkg.price}</div>
                          <div className="text-gray-500">{pkg.pricePerHour}</div>
                        </div>
                        
                        <div className="mb-6 text-center">
                          <div className="text-lg font-medium text-gray-700">{pkg.hours} hour{pkg.hours !== 1 ? 's' : ''}</div>
                          <div className="text-gray-500">{pkg.description}</div>
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-gray-700">Personalized 1:1 coaching</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-gray-700">Flexible scheduling</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-gray-700">WhatsApp support</span>
                          </li>
                          {pkg.hours > 1 && (
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Homework feedback</span>
                            </li>
                          )}
                        </ul>
                        
                        <Button 
                          className={`w-full ${pkg.popular ? 'bg-german-dark hover:bg-german' : 'bg-gray-800 hover:bg-gray-700'}`}
                          onClick={() => window.scrollTo({top: document.getElementById('booking')?.offsetTop, behavior: 'smooth'})}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">All Packages Include:</h3>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-german-dark mr-2" />
                      <span>1:1 live online</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-german-dark mr-2" />
                      <span>Flexible scheduling</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 text-german-dark mr-2" />
                      <span>WhatsApp support</span>
                    </div>
                    <div className="flex items-center">
                      <ClipboardList className="w-5 h-5 text-german-dark mr-2" />
                      <span>Homework feedback</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Booking Form Section */}
        <div id="booking" className="bg-gradient-to-r from-german-dark/90 to-german/90 py-16 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center">
                <BookOpen className="w-6 h-6 mr-2" /> 
                Ready to Start Learning?
              </h2>
              <p className="text-blue-100/90 text-lg max-w-2xl mx-auto">
                Fill out the form to book your first session, ask a question, or get a personalized plan.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Full Name*</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <Input 
                        name="Name" 
                        placeholder="Your Full Name"
                        className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Email Address*</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <Input 
                        name="Email"
                        type="email" 
                        placeholder="you@example.com"
                        className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Phone Number*</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <Input 
                        name="Phone"
                        type="tel" 
                        placeholder="+91XXXXXXXXXX"
                        className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Preferred Contact Method*</label>
                    <div className="flex space-x-4 mt-2">
                      <label className="inline-flex items-center">
                        <input type="radio" name="ContactMethod" value="WhatsApp" className="text-german" required />
                        <span className="ml-2 text-white/80">WhatsApp</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="ContactMethod" value="Email" className="text-german" />
                        <span className="ml-2 text-white/80">Email</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="ContactMethod" value="Either" className="text-german" />
                        <span className="ml-2 text-white/80">Either</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Learning Goals */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">What are you looking for?*</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Exam Preparation (Goethe A1–C2)",
                      "Help with Grammar",
                      "Speaking Practice",
                      "Full Course (A1, A2, B1, etc.)",
                      "Just Exploring Options"
                    ].map((option, index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          name="Goals" 
                          value={option.split(' ')[0]} 
                          className="text-german rounded border-white/30"
                        />
                        <span className="text-white/90">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Current Level */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">Your Current German Level (if known):*</label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    <select 
                      name="Level"
                      className="w-full pl-10 h-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
                      required
                    >
                      <option value="">Select your level</option>
                      {['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Not sure'].map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Schedule Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Preferred Schedule:*</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <select 
                        name="PreferredSchedule"
                        className="w-full pl-10 h-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
                        required
                      >
                        <option value="">Select preferred time</option>
                        <option value="WeekdayMorning">Weekdays – Morning</option>
                        <option value="WeekdayEvening">Weekdays – Evening</option>
                        <option value="WeekendMorning">Weekends – Morning</option>
                        <option value="WeekendEvening">Weekends – Evening</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-1">Have you already booked an exam?*</label>
                    <div className="flex space-x-4 mt-2">
                      <label className="inline-flex items-center">
                        <input type="radio" name="ExamBooked" value="Yes" className="text-german" required />
                        <span className="ml-2 text-white/80">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="ExamBooked" value="No" className="text-german" />
                        <span className="ml-2 text-white/80">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">Anything else you'd like us to know?</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                    <textarea
                      name="Comments"
                      rows={3}
                      className="w-full pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
                      placeholder="Specific goals, requirements, or questions..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-german hover:bg-german-light hover:text-white transition-colors mt-6 py-3 font-medium"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <ClipboardList className="animate-pulse mr-2 h-4 w-4" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </span>
                  )}
                </Button>

                {/* Status Message */}
                {submitStatus && (
                  <div className={`mt-4 p-3 rounded-md flex items-center ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-100' 
                      : 'bg-red-500/20 text-red-100'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="mr-2 h-5 w-5" />
                    ) : (
                      <AlertCircle className="mr-2 h-5 w-5" />
                    )}
                    {submitStatus.message}
                  </div>
                )}

                <p className="text-white/70 text-sm text-center mt-4">
                  We'll get in touch within 24 hours to confirm your slot or answer your questions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachingPage;