import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, Star, Clock, Users, BookOpen, ArrowRight, Play, Award, ShieldCheck, MessageCircle } from 'lucide-react';
import { getCourseInfo } from '@/lib/data';
import Navbar from '@/components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { StudentResultsSection } from './StudentResultsSection';
import { log } from 'console';
import ReviewSection from '@/components/ReviewSection';


const CourseTemplate = () => {
  const { category, subcategory } = useParams();
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});

  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState('');

  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  
  useEffect(() => {
    const submitted = localStorage.getItem('demoEmailSubmitted') === 'true';
    setIsEmailSubmitted(submitted);
  }, []);

  const handleDemoRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // try {
    //   // Send email to your backend (replace with your actual API call)
    //   const response = await fetch('/api/submit-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   if (response.ok) {
        // Save to localStorage and state
        console.log(email);
        
        localStorage.setItem('demoEmailSubmitted', 'true');
        localStorage.setItem('demoEmail', email);
        setIsEmailSubmitted(true);
        setShowDemoForm(false);
        setShowVideoPopup(true);
    //   } else {
    //     alert('Failed to submit email. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error submitting email:', error);
    //   alert('An error occurred. Please try again.');
    // }
  };

  const handleWatchDemoClick = () => {
    if (isEmailSubmitted) {
      // Skip form and show video directly
      setShowVideoPopup(true);
    } else {
      // Show email form
      setShowDemoForm(true);
    }
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Then navigate after a tiny delay to ensure scroll happens
    setTimeout(() => navigate(path), 10);
  };

  const toggleLesson = (moduleIndex: number, lessonIndex: number) => {
    const key = `${moduleIndex}-${lessonIndex}`;
    setExpandedLessons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseInfo = getCourseInfo(category, subcategory);

  return (
    <>
    <Navbar />
      <div className="bg-gradient-to-r from-german-dark to-german py-16">
        <div className="container mx-auto px-4 md:px-6 p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white order-2 lg:order-1">
              <div className="mb-4 flex items-center">
                <span className="px-3 py-1 rounded-full bg-german-light/30 text-white text-sm font-medium">
                  {courseInfo.level}
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
                {courseInfo.title}
              </h1>
              
              <p className="text-lg md:text-xl mb-6 text-blue-50">
                {courseInfo.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{courseInfo.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Free Exam Training Included</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                  className="bg-white text-german hover:bg-german-light"
                  onClick={handleWatchDemoClick}
                >
                  Watch Demo
                </Button>
                <Button className="bg-white text-german hover:bg-blue-50"
                onClick={() => window.open("https://germanwithamit.exlyapp.com/?init_contact=true", "_blank")}>
                  Enroll Now
                </Button>
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
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={courseInfo.image} 
                      alt="Course Preview" 
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110">
                      <Play className="w-10 h-10 text-german fill-german" />
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-gray-900">{courseInfo.price}</div>
                    <div className="text-lg text-gray-500 line-through">{courseInfo.discount}</div>
                  </div>
                  <div className="mb-4 flex items-center text-green-600 font-medium">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    <span>FREE Exam Prep</span>
                  </div>
                  <Button className="w-full bg-german hover:bg-german-dark"
                  onClick={() => window.open("https://germanwithamit.exlyapp.com/?init_contact=true", "_blank")}>
                    Enroll Now
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
                  onClick={() => setShowDemoForm(false)}
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

      {/* YouTube Video Popup */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl"
          >
            <button 
              onClick={() => setShowVideoPopup(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              ×
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96 md:h-[500px]"
                src={`https://www.youtube.com/embed/MYY35jf7ucI?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {isEmailSubmitted && (
              <p className="text-white text-center mt-2">
                Welcome!! You can access this demo anytime.
              </p>
            )}
          </motion.div>
        </div>
      )}


      {/* Course Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 grid grid-cols-3 gap-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <ul className="space-y-2">
                  {courseInfo.overview.map((point, index) => (
                    <li key={index} className="flex">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseInfo.learningPoints.map((point, index) => (
                    <div key={index} className="flex">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Free Exam Training Section */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-german-dark to-german p-8 text-white shadow-2xl">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10"></div>
                <div className="absolute right-10 top-10 h-16 w-16 rounded-full bg-yellow-400/30 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-start">
                    <div className="rounded-lg bg-white/20 p-3 backdrop-blur-sm mr-4">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">FREE Exam Training Included</h2>
                      <p className="text-blue-100 text-lg">We guarantee your success with our specialized exam preparation</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                      <h3 className="font-bold text-xl mb-3 flex items-center">
                        <ShieldCheck className="mr-2 h-6 w-6 text-yellow-300" />
                        Exam Prep Features
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Mock exams with real exam conditions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Personalized feedback from certified examiners</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Time management strategies</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                      <h3 className="font-bold text-xl mb-3 flex items-center">
                        <Star className="mr-2 h-6 w-6 text-yellow-300" />
                        Success Rates
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>99% pass rate on first attempt</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>100% satisfaction guarantee</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Proven strategies from top scorers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* What You Can Do Section */}
              {/* <div className=" py-12 md:py-16"> */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-german to-german-light p-8 text-white shadow-2xl">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10"></div>
                <div className="absolute right-10 top-10 h-16 w-16 rounded-full bg-yellow-400/30 blur-xl"></div>
                
                
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                      {courseInfo.whatYouCanDo.title}
                    </h2>
                    <p className="text-lg text-center mb-8 md:mb-12 text-white">
                      {courseInfo.whatYouCanDo.description}
                    </p>

                    {/* Radial Layout (Desktop) */}
                    <div className="hidden md:block relative min-h-[450px]">
                      {/* Center dot */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-green-50 border-2 border-dashed border-green-200 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>

                      {/* Cards */}
                      {courseInfo.whatYouCanDo.abilities.map((ability, index) => {
                        const angle = (index * 72) - 90; // 72° between each of 5 items
                        const radius = 200; // Slightly larger radius for expansion space
                        const x = radius * Math.cos(angle * Math.PI / 180);
                        const y = radius * Math.sin(angle * Math.PI / 180);
                        
                        return (
                          <div
                            key={index}
                            className="absolute left-1/2 top-1/2 w-[180px] min-h-[100px] bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:z-20 hover:scale-110 hover:min-w-[220px] hover:min-h-[120px] hover:shadow-lg"
                            style={{
                              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)`,
                              zIndex: index === 0 ? 10 : 1,
                            }}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3
                              ${index % 3 === 0 ? 'bg-blue-100 text-blue-600' : 
                                index % 3 === 1 ? 'bg-purple-100 text-purple-600' : 
                                'bg-amber-100 text-amber-600'}`}>
                              <Check className="w-4 h-4" />
                            </div>
                            <p className="text-gray-700 text-sm px-2 transition-[line-clamp] duration-300 line-clamp-2 hover:line-clamp-none">
                              {ability}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Mobile Stacked Layout */}
                    <div className="md:hidden space-y-4 max-w-md mx-auto">
                      {courseInfo.whatYouCanDo.abilities.map((ability, index) => (
                        <div
                          key={index}
                          className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3
                            ${index % 3 === 0 ? 'bg-blue-100 text-blue-600' : 
                              index % 3 === 1 ? 'bg-purple-100 text-purple-600' : 
                              'bg-amber-100 text-amber-600'}`}>
                            <Check className="w-4 h-4" />
                          </div>
                          <p className="text-gray-700 text-sm">{ability}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
            </TabsContent>

            <TabsContent value="curriculum">
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {courseInfo.curriculum.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 flex justify-between items-center">
                        <h3 className="font-bold">{module.title}</h3>
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                      <div className="p-0">
                        {module.lessons.map((lesson, lessonIndex) => {
                          const key = `${moduleIndex}-${lessonIndex}`;
                          const isExpanded = expandedLessons[key];

                          return (
                              <div key={lessonIndex} className="border-b last:border-0">
                                <button
                                    className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleLesson(moduleIndex, lessonIndex)}
                                >
                                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-3">
                      {lessonIndex + 1}
                    </span>
                                    <span className="text-left">{lesson.title}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="text-sm text-gray-500 mr-3">{lesson.duration}</span>
                                    {isExpanded ? (
                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                  </div>
                                </button>

                                {isExpanded && lesson.details && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="px-4 pb-4"
                                    >
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        {lesson.details.topics && (
                                            <div className="bg-blue-50 p-3 rounded-lg">
                                              <h4 className="font-medium text-blue-800 mb-2">Topics</h4>
                                              <ul className="space-y-1">
                                                {lesson.details.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-start">
                                                      <span className="text-blue-500 mr-2">•</span>
                                                      <span>{topic}</span>
                                                    </li>
                                                ))}
                                              </ul>
                                            </div>
                                        )}

                                        {lesson.details.grammar && (
                                            <div className="bg-purple-50 p-3 rounded-lg">
                                              <h4 className="font-medium text-purple-800 mb-2">Grammar</h4>
                                              <ul className="space-y-1">
                                                {lesson.details.grammar.map((grammar, i) => (
                                                    <li key={i} className="flex items-start">
                                                      <span className="text-purple-500 mr-2">•</span>
                                                      <span>{grammar}</span>
                                                    </li>
                                                ))}
                                              </ul>
                                            </div>
                                        )}

                                        {lesson.details.pronunciation && (
                                            <div className="bg-green-50 p-3 rounded-lg">
                                              <h4 className="font-medium text-green-800 mb-2">Pronunciation</h4>
                                              <ul className="space-y-1">
                                                {lesson.details.pronunciation.map((pronunciation, i) => (
                                                    <li key={i} className="flex items-start">
                                                      <span className="text-green-500 mr-2">•</span>
                                                      <span>{pronunciation}</span>
                                                    </li>
                                                ))}
                                              </ul>
                                            </div>
                                        )}

                                        {lesson.details.culture && (
                                            <div className="bg-amber-50 p-3 rounded-lg">
                                              <h4 className="font-medium text-amber-800 mb-2">Culture</h4>
                                              <ul className="space-y-1">
                                                {lesson.details.culture.map((culture, i) => (
                                                    <li key={i} className="flex items-start">
                                                      <span className="text-amber-500 mr-2">•</span>
                                                      <span>{culture}</span>
                                                    </li>
                                                ))}
                                              </ul>
                                            </div>
                                        )}
                                      </div>
                                    </motion.div>
                                )}
                              </div>
                          );
                        })}
                      </div>
                    </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="instructor">
            <div className="space-y-8">
              {courseInfo.instructor.map((instructor, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <Avatar className="w-24 h-24 border-4 border-german-light">
                    <AvatarImage src={instructor.image} alt={instructor.name} />
                    <AvatarFallback>
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{instructor.name}</h2>
                    <p className="text-german-dark mb-4">{instructor.title}</p>
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{instructor.rating}</span>
                    </div>
                    <p className="text-gray-600">{instructor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
            
            <TabsContent value="reviews">
              <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
              <p className="text-gray-600 mb-8">Reviews will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className='bg-white'>
      <StudentResultsSection />
      </div>

      {/* Related Courses */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseInfo.relatedCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-german-dark text-white text-xs rounded-full">
                      {course.level}
                    </span>
                  </div>
                  {course.hasExamPrep && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-yellow-400 text-gray-900 text-xs rounded-full flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        Exam Prep
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-german-dark">{course.price}</span>
                    <button className="flex items-center text-german hover:underline"
                    onClick={() => handleNavigation(course.link)} >
                      View Course <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {courseInfo.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-lg text-gray-800 group-hover:text-german-dark transition-colors">
                        {faq.question}
                      </span>
                      <span className="transition-transform group-open:rotate-180">
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </span>
                    </summary>
                    <p className="mt-3 text-gray-600">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTemplate;