
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, Star, Clock, Users, BookOpen, ArrowRight, Play } from 'lucide-react';
import { getCourseInfo } from '@/lib/data';
import Navbar from '@/components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CourseTemplate = () => {
  const { category, subcategory } = useParams();
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});

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

  // This would be replaced with actual course data fetching in a real app
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
                {/* <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>{courseInfo.lessons} lessons</span>
                </div> */}
                {/* <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Max {courseInfo.maxStudents} students</span>
                </div> */}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-german hover:bg-blue-50">
                  Enroll Now
                </Button>
                {/* <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Download Syllabus
                </Button> */}
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
                  <Button className="w-full bg-german hover:bg-german-dark">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 grid grid-cols-4 gap-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
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
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="w-24 h-24 border-4 border-german-light">
                  <AvatarImage src={courseInfo.instructor.image} alt={courseInfo.instructor.name} />
                  <AvatarFallback>{courseInfo.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{courseInfo.instructor.name}</h2>
                  <p className="text-german-dark mb-4">{courseInfo.instructor.title}</p>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{courseInfo.instructor.rating}</span>
                  </div>
                  <p className="text-gray-600">{courseInfo.instructor.bio}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
              <p className="text-gray-600 mb-8">Reviews will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </div>
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
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-german-dark">{course.price}</span>
                    <Link to={course.link} className="flex items-center text-german hover:underline">
                      View Course <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTemplate;
