import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Clock, BookOpen, Award, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'A1 Level',
    description: 'Beginner German course for complete starters',
    duration: '8 weeks',
    level: 'Beginner',
    lessons: 24,
    featured: true,
    path: '/courses/a1',
    intensity: 'Standard',
    certificate: true,
    tutorSupport: true,
    price: '$299'
  },
  {
    id: 2,
    title: 'A2 Level',
    description: 'Elementary German for basic communication',
    duration: '10 weeks',
    level: 'Elementary',
    lessons: 30,
    featured: false,
    path: '/courses/a2',
    intensity: 'Standard',
    certificate: true,
    tutorSupport: true,
    price: '$349'
  },
  {
    id: 3,
    title: 'B1 Level',
    description: 'Intermediate German for daily life',
    duration: '12 weeks',
    level: 'Intermediate',
    lessons: 36,
    featured: true,
    path: '/courses/b1',
    intensity: 'Intensive',
    certificate: true,
    tutorSupport: true,
    price: '$399'
  },
  {
    id: 4,
    title: 'B2 Level',
    description: 'Upper intermediate for complex conversations',
    duration: '14 weeks',
    level: 'Upper Intermediate',
    lessons: 42,
    featured: false,
    path: '/courses/b2',
    intensity: 'Intensive',
    certificate: true,
    tutorSupport: true,
    price: '$449'
  },
  {
    id: 5,
    title: 'A1+A2 Combo',
    description: 'Complete beginner to elementary package',
    duration: '16 weeks',
    level: 'Beginner to Elementary',
    lessons: 48,
    featured: true,
    path: '/courses/a1a2',
    intensity: 'Standard',
    certificate: true,
    tutorSupport: true,
    price: '$599'
  },
  {
    id: 6,
    title: 'Exam Prep',
    description: 'TestDaF, Goethe or DSH exam preparation',
    duration: '10 weeks',
    level: 'B1-C1',
    lessons: 30,
    featured: true,
    path: '/course/exam',
    intensity: 'Intensive',
    certificate: true,
    tutorSupport: true,
    price: '$499'
  },
  {
    id: 7,
    title: 'Grammar',
    description: 'Focused German grammar mastery',
    duration: '6 weeks',
    level: 'All Levels',
    lessons: 18,
    featured: false,
    path: '/courses/grammar',
    intensity: 'Standard',
    certificate: false,
    tutorSupport: false,
    price: '$199'
  },
  {
    id: 8,
    title: 'Self-paced',
    description: 'Flexible schedule with full access',
    duration: '8 weeks',
    level: 'A2-B2',
    lessons: 24,
    featured: false,
    path: '/courses/selfpaced',
    intensity: 'Flexible',
    certificate: true,
    tutorSupport: false,
    price: '$349'
  }
];

const CourseSection = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const visibleCourses = showAllCourses ? courses : courses.slice(0, 4);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 pt-10">
          <Badge variant="outline" className="mb-4 bg-german/10 text-german border-german/20">
            Pick Your Course
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our German Course Portfolio</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Carefully designed progression from beginner to advanced levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(course.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className={`h-full flex flex-col border-2 ${hoveredCard === course.id ? 'border-german/50' : 'border-gray-200'} transition-all overflow-hidden`}>
                {course.featured && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-german to-yellow-500"></div>
                )}
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="py-0 flex-grow">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-german/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-german" />
                      </div>
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-german/10 flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-german" />
                      </div>
                      <div>
                        <p className="text-gray-500">Includes</p>
                        <p className="font-medium">{course.lessons} lessons</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-german/10 flex items-center justify-center">
                        <Award className="h-4 w-4 text-german" />
                      </div>
                      <div>
                        <p className="text-gray-500">Level</p>
                        <p className="font-medium">{course.level}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4">
                  <Button 
                    className="w-full bg-german hover:bg-german-dark shadow-sm"
                    asChild
                  >
                    <Link to={course.path}>
                      Enroll Now — {course.price}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-4">
          <Button
            variant="ghost"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="text-german hover:bg-german/5"
          >
            <span className="mr-2">
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
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold">Course Comparison</h3>
                  <p className="text-gray-600">See how our courses differ to find your perfect match</p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-4 font-medium">Course</th>
                        <th className="p-4 font-medium">Duration</th>
                        <th className="p-4 font-medium">Lessons</th>
                        <th className="p-4 font-medium">Intensity</th>
                        <th className="p-4 font-medium">Certificate</th>
                        <th className="p-4 font-medium">Tutor Support</th>
                        <th className="p-4 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-4 font-medium">{course.title}</td>
                          <td className="p-4 text-center">{course.duration}</td>
                          <td className="p-4 text-center">{course.lessons}</td>
                          <td className="p-4 text-center">
                            <Badge variant={course.intensity === 'Intensive' ? 'default' : 'outline'} 
                                   className={course.intensity === 'Intensive' ? 'bg-german' : ''}>
                              {course.intensity}
                            </Badge>
                          </td>
                          <td className="p-4 text-center">
                            {course.certificate ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {course.tutorSupport ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center font-medium">{course.price}</td>
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