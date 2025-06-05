import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, Clock, Users, Award, ArrowRight, Play, Info, AlertCircle, BookOpen, CalendarDays, CheckCircle, ClipboardList, Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const comboCourses = [
  {
    id: 'a1-a2',
    title: 'A1 + A2 Combo',
    subtitle: 'Ideal for new learners who want to make fast, structured progress.',
    description: 'Go from zero to confident German speaker with this all-in-one A1–A2 program. Learn to speak, listen, read, and write through interactive lessons designed to build real-life language skills step by step.',
    duration: '4 Months',
    lessons: '140+ Hours of Live Lessons',
    level: 'Beginner',
    price: '₹31,999',
    originalPrice: '₹36,000',
    discount: '15% OFF',
    features: [
      'A1 & A2 full curriculum',
      '4 mock exams included',
      'Personalized feedback',
    ],
    videoUrl: 'https://www.youtube.com/embed/tnZ3OeJQ2FY',
    curriculum: [
      {
        module: 'A1 Level',
        courses: [
          { name: 'A1 Beginner German', link: '/courses/beginner/a1' },
        ]
      },
      {
        module: 'A2 Level',
        courses: [
          { name: 'A2 Pre-Intermediate', link: '/courses/beginner/a2' },
        ]
      }
    ]
  },
  {
    id: 'a1-a2-b1',
    title: 'A1 + A2 + B1 Combo',
    subtitle: 'Perfect for learners who want to move confidently from beginner to intermediate German in one structured program.',
    description: 'Start from scratch and reach independent speaker level with this complete A1–A2–B1 combo course. You’ll develop real-world skills in speaking, listening, reading, and writing, guided by expert instructors and exam-focused lessons.',
    duration: '6 Months',
    lessons: '230+ Hours of Live Lessons',
    level: 'Beginner to Intermediate',
    price: '₹47,999',
    originalPrice: '₹54,000',
    discount: '15% OFF',
    features: [
      'A1, A2 & B1 full curriculum',
      '6 mock exams included',
      'Exam strategies workshop',
    ],
    videoUrl: 'https://www.youtube.com/embed/h6nqX2eb6h0?si=LXDT_ghV57fM21QL',
    curriculum: [
      {
        module: 'A1 Level',
        courses: [
          { name: 'A1 Beginner German', link: '/courses/beginner/a1' },
        ]
      },
      {
        module: 'A2 Level',
        courses: [
          { name: 'A2 Pre-Intermediate', link: '/courses/beginner/a2' },
        ]
      },
      {
        module: 'B1 Level',
        courses: [
          { name: 'B1 Intermediate', link: '/courses/intermediate/b1' },
        ]
      }
    ]
  },
  {
    id: 'a2-b1',
    title: 'A2 + B1 Combo',
    subtitle:'Ideal for learners aiming for Goethe B1 certification or everyday German in work, travel, and life.',
    description: 'Already know the basics? Take your German to the next level with this A2–B1 combo course, designed to boost your confidence and fluency. Master all four skills — speaking, listening, reading, and writing — through engaging lessons and real-life practice.',
    duration: '4-5 Months',
    lessons: '160+ Hours of Live Lessons',
    level: 'Elementary to Intermediate',
    price: '₹31,999',
    originalPrice: '₹36,000',
    discount: '14% OFF',
    features: [
      'A2 & B1 full curriculum',
      'Focus on conversation skills',
      'Work German basics',
      '4 mock exams included'
    ],
    videoUrl: 'https://www.youtube.com/embed/HMeIgYt9K_s?si=LFqXuvQR6tmycH_N',
    curriculum: [
      {
        module: 'A2 Level',
        courses: [
          { name: 'A2 Pre-Intermediate', link: '/courses/beginner/a2' },
        ]
      },
      {
        module: 'B1 Level',
        courses: [
          { name: 'B1 Intermediate', link: '/courses/intermediate/b1' },
        ]
      }
    ]
  },
  {
    id: 'b2-complete',
    title: 'Complete B2 (B2.1 + B2.2)',
    subtitle:'Ideal for university admission, career opportunities, or mastering upper-intermediate German',
    description: 'Take your German from intermediate to advanced with our B2 course, designed to sharpen your skills for real-life, academic, and professional use. You’ll improve your fluency, accuracy, and comprehension across speaking, listening, reading, and writing — all aligned with the Goethe-Zertifikat B2.',
    duration: '4-5 Months',
    lessons: '160+ Hours of Live Lessons',
    level: 'Upper Intermediate',
    price: '₹16,999',
    originalPrice: '₹19,998',
    discount: '15% OFF',
    features: [
      'Full B2 level curriculum',
      'Academic German preparation',
      'Professional communication',
      'Goethe exam training'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    curriculum: [
      {
        module: 'B2.1 Level',
        courses: [
          { name: 'B2.1 Upper Intermediate', link: '/courses/upper-intermediate/b2-1' }
        ]
      },
      {
        module: 'B2.2 Level',
        courses: [
          { name: 'B2.2 Advanced German', link: '/courses/upper-intermediate/b2-2' }
        ]
      }
    ]
  }
];

const ComboCoursesPage = () => {
  const [activeTab, setActiveTab] = useState(comboCourses[0].id);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const currentCourse = comboCourses.find(course => course.id === activeTab);

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo requested for email:', email);
    setShowDemoModal(false);
    alert('Demo access will be sent to your email shortly!');
  };

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => navigate(path), 10);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Video */}
      <div className="bg-gradient-to-r from-german-dark to-german py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Combo Courses - Learn More, Save More
              </h1>
              <p className="text-xl mb-6 my-6">
                Bundle multiple levels together and save up to ₹6,000 — that's 11% of your total course fee.
              </p>
              <p><i>Perfect for learners aiming for A1 to B2 or beyond...</i></p>
              <br />
              <p><b>Enroll Now and fast-track your German fluency — for less.</b></p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-german hover:bg-blue-50"
                  onClick={() => window.open("https://germanwithamit.exlyapp.com/?init_contact=true", "_blank")}
                >
                  Enroll Now
                </Button>
                <Button 
                //   variant="outline" 
                  className="bg-german text-white hover:bg-german-dark"
                  onClick={() => setShowDemoModal(true)}
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <AspectRatio ratio={16/9}>
                  <iframe
                    src={currentCourse?.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              </div>
              {/* <button 
                className="absolute inset-0 m-auto bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 w-16 h-16 flex items-center justify-center"
                onClick={() => setShowDemoModal(true)}
              >
                <Play className="w-10 h-10 text-german fill-german" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold mb-4">Watch Demo Class</h3>
            <p className="mb-4">Enter your email to access the demo video:</p>
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
                  onClick={() => setShowDemoModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-german hover:bg-german-dark">
                  Watch Demo
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Course Selection Tabs */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs 
            value={activeTab} 
            onValueChange={(value) => {
              setActiveTab(value);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 overflow-x-auto">
              {comboCourses.map((course) => (
                <TabsTrigger 
                  key={course.id} 
                  value={course.id}
                  className="data-[state=active]:bg-german data-[state=active]:text-white whitespace-nowrap"
                >
                  {course.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* Course Content */}
            <div className="max-w-4xl mx-auto">
              {comboCourses.map((course) => (
                <TabsContent key={course.id} value={course.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Course Details */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                      <div className="mb-6 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-german"/>
                      <span className='text-german'>{course.subtitle}</span>
                      </div>
                      <p className="text-gray-700 mb-6">{course.description}</p>
                      
                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-german" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-german" />
                          <span>{course.lessons}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-german-dark">{course.price}</span>
                        <span className="ml-2 text-lg text-gray-500 line-through">{course.originalPrice}</span>
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {course.discount}
                        </span>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex">
                            <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full bg-german hover:bg-german-dark text-lg"
                        onClick={() => window.open("https://germanwithamit.exlyapp.com/?init_contact=true", "_blank")}
                      >
                        Enroll Now
                      </Button>
                    </div>
                    
                    {/* Curriculum with Buttons */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Course Components</h3>
                      <div className="space-y-4">
                        {course.curriculum.map((module, index) => (
                          <div key={index} className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-50 p-4">
                              <h4 className="font-bold">{module.module}</h4>
                            </div>
                            <div className="p-4 space-y-3">
                              {module.courses.map((courseItem, i) => (
                                <Button
                                  key={i}
                                  variant="outline"
                                  className="w-full flex justify-between items-center py-6 hover:bg-gray-50"
                                  onClick={() => handleNavigation(courseItem.link)}
                                >
                                  <span>{courseItem.name}</span>
                                  <ArrowRight className="w-4 h-4" />
                                </Button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Combo Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Cost Effective",
                icon: <Award className="w-8 h-8 mb-4 text-german" />,
                description: "Save up to 21% compared to buying courses separately"
              },
              {
                title: "Seamless Learning",
                icon: <Check className="w-8 h-8 mb-4 text-german" />,
                description: "Smooth transition between levels with consistent teaching"
              },
              {
                title: "Faster Progress",
                icon: <ArrowRight className="w-8 h-8 mb-4 text-german" />,
                description: "Complete multiple levels in less time with focused curriculum"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                {benefit.icon}
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-german-dark/95 to-german/95 py-12 px-4 sm:px-6 rounded-xl shadow-xl">
  {/* Header Section */}
  <div className="text-center mb-8">
    <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-3 rounded-full mb-4">
      <BookOpen className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to get started?</h2>
    <p className="text-blue-100/80 text-lg">Fill out the form below to book your exam training session</p>
  </div>

  {/* Form Container */}
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    <form 
    // onSubmit={handleSubmit} 
    className="space-y-6">
      {/* Form Title */}
      <div className="flex items-center mb-6">
        <ClipboardList className="w-5 h-5 text-white mr-2" />
        <h3 className="text-xl font-semibold text-white">Exam Preparation Inquiry Form</h3>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Full Name*</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Email Address*</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Phone Number (with country code)*</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <input
              type="tel"
              placeholder="+91XXXXXXXXXX"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Radio Button Groups */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-3">Level you're preparing for:*</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => (
              <label key={level} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="level"
                  value={level}
                  className="h-4 w-4 text-german focus:ring-german border-white/30"
                  required
                />
                <span className="text-white/90">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-3">Have you already booked the exam?*</label>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="examBooked"
                value="yes"
                className="h-4 w-4 text-german focus:ring-german border-white/30"
                required
              />
              <span className="text-white/90">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="examBooked"
                value="no"
                className="h-4 w-4 text-german focus:ring-german border-white/30"
                required
              />
              <span className="text-white/90">No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-3">Exam Training Format:*</label>
          <div className="space-y-2">
            {[
              { value: "group", label: "Group class (if available)" },
              { value: "one-to-one", label: "One-to-one session" },
              { value: "either", label: "Either is fine" }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="trainingFormat"
                  value={option.value}
                  className="h-4 w-4 text-german focus:ring-german border-white/30"
                  required
                />
                <span className="text-white/90">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">Preferred Timing:*</label>
            <div className="space-y-2">
              {['Morning', 'Evening', 'Flexible'].map((time) => (
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="preferredTiming"
                    value={time.toLowerCase()}
                    className="h-4 w-4 text-german focus:ring-german border-white/30"
                    required
                  />
                  <span className="text-white/90">{time}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">Preferred Days:*</label>
            <div className="space-y-2">
              {['Weekdays', 'Weekends', 'Either is fine'].map((days) => (
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="preferredDays"
                    value={days.toLowerCase()}
                    className="h-4 w-4 text-german focus:ring-german border-white/30"
                    required
                  />
                  <span className="text-white/90">{days}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Date Picker */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Preferred Start Date:*</label>
        <div className="relative">
          <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          <input
            type="date"
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Comments */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Any specific goals or comments?</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/60" />
          <textarea
            rows={4}
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
            placeholder="Please share any specific requirements..."
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-white text-german hover:bg-german-light hover:text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 mt-6 flex items-center justify-center"
      >
        <Send className="w-5 h-5 mr-2" />
        Submit Inquiry
      </button>

      {/* Status Message */}
      {/* {submitStatus && (
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
      )} */}
    </form>
  </div>
</div>
    </>
  );
};

export default ComboCoursesPage;