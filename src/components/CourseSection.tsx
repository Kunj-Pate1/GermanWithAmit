import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Clock, BookOpen, Award, Check, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import A1Image from "/images/course/thumbnails/18.jpg";
import A2Image from "/images/course/thumbnails/19.jpg";
import B1Image from "/images/course/thumbnails/20.jpg";
import B2Image from"/images/course/thumbnails/21.jpg";
import ComboImage from "/images/course/thumbnails/27.jpg";
import ExamImage from "/images/course/thumbnails/31.jpg";
import SelfPacedImage from "/images/course/thumbnails/33.jpg";

const courses = [
  {
    id: 1,
    title: 'A1 Level',
    description: 'Beginner German course for complete starters',
    duration: '7-9 weeks',
    level: 'Beginner',
    lessons: 70,
    featured: true,
    path: '/courses/beginner/a1',
    intensity: 'Standard',
    tutorSupport: true,
    price: '₹16,999',
    image: A1Image
  },
  {
    id: 2,
    title: 'A2 Level',
    description: 'Elementary German for basic communication',
    duration: '7-9 weeks',
    level: 'Elementary',
    lessons: 70,
    featured: false,
    path: '/courses/beginner/a2',
    intensity: 'Standard',
    tutorSupport: true,
    price: '₹16,999',
    image: A2Image
  },
  {
    id: 3,
    title: 'B1 Level',
    description: 'Intermediate German for daily life',
    duration: '9-11 weeks',
    level: 'Intermediate',
    lessons: 90,
    featured: true,
    path: '/courses/intermediate/b1',
    intensity: 'Intensive',
    tutorSupport: true,
    price: '₹18,999',
    image: B1Image
  },
  {
    id: 4,
    title: 'B2 Level (B2.1 + B2.2)',
    description: 'Upper intermediate for complex conversations',
    duration: '16-19 weeks',
    level: 'Upper Intermediate',
    lessons: 170,
    featured: false,
    path: '/courses/combo-course',
    intensity: 'Intensive',
    tutorSupport: true,
    price: '₹37,999',
    image: B2Image
  },
  {
    id: 5,
    title: 'Combo Course',
    description: 'Mutliple Combo Courses from Beginner to Intermediate',
    duration: 'Course-Specific',
    level: 'Variable Price',
    lessons: 140,
    featured: true,
    path: '/combo-course',
    intensity: 'Standard',
    tutorSupport: true,
    price: 'Course-Specific',
    image: ComboImage
  },
  {
    id: 6,
    title: 'Exam Prep',
    description: 'TestDaF, Goethe or DSH exam preparation',
    duration: '10 weeks',
    level: 'A1-C1',
    lessons: 30,
    featured: true,
    path: '/course/exam',
    intensity: 'Intensive',
    tutorSupport: true,
    price: 'Course-specific',
    image: ExamImage
  },
  // {
  //   id: 7,
  //   title: 'Grammar',
  //   description: 'Focused German grammar mastery',
  //   duration: '6 weeks',
  //   level: 'All Levels',
  //   lessons: 18,
  //   featured: false,
  //   path: '/courses/grammar',
  //   intensity: 'Standard',
  //   tutorSupport: false,
  //   price: '₹8,999',
  //   image: GrammarImage
  // },
  {
    id: 8,
    title: 'Self-paced',
    description: 'Flexible schedule with full access',
    duration: 'Life Time Access',
    level: 'A1-B2',
    lessons: 24,
    featured: true,
    path: '/courses/selfpaced',
    intensity: 'Flexible',
    tutorSupport: false,
    price: 'Course-specific',
    image: SelfPacedImage
  }
];

const CourseSection = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const visibleCourses = showAllCourses ? courses : courses.slice(0, 4);

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 pt-10">
          <Badge variant="outline" className="mb-4 bg-german/10 text-german border-german/20 px-4 py-1.5">
            Pick Your Course
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our German Course Portfolio</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Carefully designed progression from beginner to advanced levels with interactive learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {visibleCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(course.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className={`h-full flex flex-col border border-gray-200/70 overflow-hidden transition-all duration-300 ${hoveredCard === course.id ? 'shadow-lg border-german/50' : 'shadow-md hover:shadow-lg'}`}>
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  {course.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-amber-500 hover:bg-amber-600 text-white shadow-sm">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                      <span className="font-bold text-german text-lg">{course.price}</span>
                      <span className="block text-xs text-gray-500 mt-1">{course.duration}</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="py-0 flex-grow">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-german/10 flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-german" />
                      </div>
                      <div>
                        <p className="text-gray-500">Includes</p>
                        <p className="font-medium text-gray-800">{course.lessons} hours of live sessions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-german/10 flex items-center justify-center">
                        <Award className="h-4 w-4 text-german" />
                      </div>
                      <div>
                        <p className="text-gray-500">Level</p>
                        <p className="font-medium text-gray-800">{course.level}</p>
                      </div>
                    </div>

                    {/* <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-german/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-german" />
                      </div>
                      <div>
                        <p className="text-gray-500">Intensity</p>
                        <p className="font-medium text-gray-800">{course.intensity}</p>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 pb-6">
                  <Button 
                    variant="outline"
                    className="w-full border-german text-german hover:bg-german/5 hover:text-german-dark transition-all duration-300 group"
                    asChild
                  >
                    <Link to={course.path} className="flex items-center justify-center">
                      View Course Details
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-4">
          <Button
            variant="outline"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="text-german border-german hover:bg-german/5 hover:text-german-dark px-6 py-2"
          >
            <span className="mr-2 font-medium">
              {showAllCourses ? 'Show Less Courses' : 'View All Courses'}
            </span>
            {showAllCourses ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {showAllCourses && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-german/5 to-german/10 p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Course Comparison</h3>
                  <p className="text-gray-600">See how our courses differ to find your perfect match</p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="text-left p-4 font-medium text-gray-700">Course</th>
                        <th className="p-4 font-medium text-gray-700">Duration</th>
                        <th className="p-4 font-medium text-gray-700">Lessons</th>
                        <th className="p-4 font-medium text-gray-700">Intensity</th>
                        <th className="p-4 font-medium text-gray-700">Tutor Support</th>
                        <th className="p-4 font-medium text-gray-700">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 font-medium text-gray-900">
                            <div className="flex items-center gap-3">
                              <img 
                                src={course.image} 
                                alt={course.title}
                                className="w-10 h-10 rounded-md object-cover"
                              />
                              {course.title}
                            </div>
                          </td>
                          <td className="p-4 text-center text-gray-700">{course.duration}</td>
                          <td className="p-4 text-center text-gray-700">{course.lessons}</td>
                          <td className="p-4 text-center">
                            <Badge variant={course.intensity === 'Intensive' ? 'default' : 'outline'} 
                                   className={`${course.intensity === 'Intensive' ? 'bg-german' : ''} text-xs`}>
                              {course.intensity}
                            </Badge>
                          </td>
                          <td className="p-4 text-center">
                            {course.tutorSupport ? (
                              <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                                <Check className="h-4 w-4 text-green-600" />
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                                <X className="h-4 w-4 text-gray-500" />
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-center font-medium text-gray-900">{course.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CourseSection;