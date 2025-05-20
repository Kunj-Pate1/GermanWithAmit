import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, Clock, Users, BookOpen, ArrowRight, Play, Award, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SelfPacedCourse = () => {
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState('');

  const toggleLesson = (moduleIndex: number, lessonIndex: number) => {
    const key = `${moduleIndex}-${lessonIndex}`;
    setExpandedLessons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (send email, show demo, etc.)
    console.log('Email submitted:', email);
    setShowDemoForm(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Course data
  const courseInfo = {
    title: "Self-Paced German Courses – Learn on Your Terms",
    description: "Flexible and affordable way to learn German with access to real classroom recordings, expert material, and live weekly support.",
    level: "A1 to B1",
    duration: "70-90 hours",
    price: "Starting at ₹6,000",
    discount: "₹8,000",
    image: "/images/course/selfpaced.jpg",
    demoVideo: "/demo-video.mp4",
    features: [
      "Learn anytime — access 70–90 hours of recorded live classes",
      "Join weekly live sessions to clear doubts & practice speaking",
      "Get PDF books, workbooks, and grammar worksheets",
      "Receive a course completion certificate",
      "Already trusted by 100+ active learners"
    ],
    included: [
      "Full access to recorded live batch classes",
      "PDF course book, workbook, and grammar sheets",
      "Weekly live doubt-clearing sessions",
      "Course completion certificate",
      "Lifetime access to recordings"
    ],
    pricing: [
      { level: "A1 Hybrid", hours: "70 hrs", price: "₹6,000" },
      { level: "A2 Hybrid", hours: "70 hrs", price: "₹7,000" },
      { level: "B1 Hybrid", hours: "90 hrs", price: "₹9,000" }
    ],
    combos: [
      { levels: "A1 + A2", price: "₹10,000" },
      { levels: "A2 + B1", price: "₹12,000" },
      { levels: "A1 + A2 + B1", price: "₹15,000" }
    ]
  };

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
                  <span className="ml-2 text-sm">100+ learners</span>
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
                  <span>{courseInfo.duration} of content</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Weekly Live Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-german hover:bg-german-light"
                  onClick={() => setShowDemoForm(true)}
                >
                  Watch Demo
                </Button>
                <Button className="bg-german hover:bg-german-dark text-white">
                  Enroll Now
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
                </div>
                <div className="bg-white p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-gray-900">{courseInfo.price}</div>
                    <div className="text-lg text-gray-500 line-through">{courseInfo.discount}</div>
                  </div>
                  <div className="mb-4 flex items-center text-green-600 font-medium">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    <span>Limited-Time Offer</span>
                  </div>
                  <Button className="w-full bg-german hover:bg-german-dark">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video Modal */}
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

      {/* Course Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="features" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 grid grid-cols-3 gap-3">
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="included">What's Included</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Our Recorded Courses Work</h2>
                <ul className="space-y-2">
                  {courseInfo.features.map((point, index) => (
                    <li key={index} className="flex">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
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
                      <h2 className="text-3xl font-bold mb-2">Weekly Live Support Included</h2>
                      <p className="text-blue-100 text-lg">Get personalized help from our instructors</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                      <h3 className="font-bold text-xl mb-3 flex items-center">
                        <ShieldCheck className="mr-2 h-6 w-6 text-yellow-300" />
                        Course Features
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Real classroom recordings (not pre-made slides)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Weekly live Q&A sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Study at your own pace</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                      <h3 className="font-bold text-xl mb-3 flex items-center">
                        <Star className="mr-2 h-6 w-6 text-yellow-300" />
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Perfect for working professionals</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>More affordable than live classes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-300" />
                          <span>Lifetime access to materials</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing">
              <h2 className="text-2xl font-bold mb-6">Course Options & Pricing</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">Individual Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {courseInfo.pricing.map((course, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">{course.level}</h4>
                        <p className="text-gray-600 mb-4">{course.hours} of live class recordings</p>
                        <div className="text-2xl font-bold text-german-dark mb-4">{course.price}</div>
                        <Button className="w-full bg-german hover:bg-german-dark">
                          Enroll Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Combo Offers – Best Value</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {courseInfo.combos.map((combo, index) => (
                    <Card key={index} className="border-2 border-german-light hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">{combo.levels}</h4>
                        <p className="text-gray-600 mb-4">Bundle discount</p>
                        <div className="text-2xl font-bold text-german-dark mb-4">{combo.price}</div>
                        <Button className="w-full bg-german hover:bg-german-dark">
                          Enroll Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <ShieldCheck className="mr-2 text-german-dark" />
                  Limited-Time Offer
                </h3>
                <p className="mb-4">These prices are part of a special offer. Don't miss your chance to learn German effectively and affordably.</p>
                <Button className="bg-german hover:bg-german-dark">
                  Enroll Now
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="included">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {courseInfo.included.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{item}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-german to-german p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-3">Ready to Start Learning?</h3>
                <p className="mb-4">Watch our demo classes now and book your course directly — no waiting, no hassle.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white hover:text-german"
                    onClick={() => setShowDemoForm(true)}
                  >
                    Watch Demo
                  </Button>
                  <Button className="bg-white text-german hover:bg-blue-50">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SelfPacedCourse;