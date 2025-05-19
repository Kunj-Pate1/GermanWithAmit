
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { ChevronDown, ChevronUp, Clock, BookOpen, Award } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const courses = [
//   {
//     id: 1,
//     title: 'German A1 for Beginners',
//     description: 'Start your German journey with our comprehensive A1 course.',
//     duration: '8 weeks',
//     level: 'Beginner',
//     lessons: 24,
//     featured: true,
//     image: 'https://images.unsplash.com/photo-1610466024868-910c6e7e8929?q=80&w=500',
//     path: '/courses/beginner/a1'
//   },
//   {
//     id: 2,
//     title: 'German A2 Level',
//     description: 'Build on your foundation with our A2 German course.',
//     duration: '10 weeks',
//     level: 'Elementary',
//     lessons: 30,
//     featured: false,
//     image: 'https://images.unsplash.com/photo-1576666717183-7365cc4eb691?q=80&w=500',
//     path: '/courses/beginner/a2'
//   },
//   {
//     id: 3,
//     title: 'German B1 Intermediate',
//     description: 'Develop fluency and confidence with our B1 course.',
//     duration: '12 weeks',
//     level: 'Intermediate',
//     lessons: 36,
//     featured: true,
//     image: 'https://images.unsplash.com/photo-1504594228319-7dff0a578069?q=80&w=500',
//     path: '/courses/intermediate/b1'
//   },
//   {
//     id: 4,
//     title: 'German B2 Upper Intermediate',
//     description: 'Take your German skills to an advanced level.',
//     duration: '14 weeks',
//     level: 'Upper Intermediate',
//     lessons: 42,
//     featured: false,
//     image: 'https://images.unsplash.com/photo-1557997692-54c7a85bf5b3?q=80&w=500',
//     path: '/courses/intermediate/b2'
//   },
//   {
//     id: 5,
//     title: 'German C1 Advanced',
//     description: 'Master complex language with our C1 advanced course.',
//     duration: '16 weeks',
//     level: 'Advanced',
//     lessons: 48,
//     featured: false,
//     image: 'https://images.unsplash.com/photo-1519981337-7a6c4b3258b3?q=80&w=500',
//     path: '/courses/advanced/c1'
//   },
//   {
//     id: 6,
//     title: 'Business German',
//     description: 'Specialized German for professional environments.',
//     duration: '10 weeks',
//     level: 'B1-C1',
//     lessons: 30,
//     featured: true,
//     image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=500',
//     path: '/courses/intermediate/business'
//   }
// ];

// const CourseSection = () => {
//   const [showAllCourses, setShowAllCourses] = useState(false);
//   const visibleCourses = showAllCourses ? courses : courses.slice(0, 3);

//   return (
//     <section id="courses" className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12">
//           <span className="text-german font-medium">Find Your Perfect Course</span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our German Courses</h2>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             From complete beginners to advanced speakers, our courses are tailored to your needs and learning goals.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {visibleCourses.map((course, index) => (
//             <motion.div
//               key={course.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="stagger-item"
//             >
//               <Card className="h-full overflow-hidden hover-shadow card-hover">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   {course.featured && (
//                     <Badge className="absolute top-3 right-3 bg-german text-white">
//                       Featured
//                     </Badge>
//                   )}
//                 </div>
//                 <CardHeader>
//                   <CardTitle>{course.title}</CardTitle>
//                   <CardDescription>{course.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-2">
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-2 text-german" />
//                       <span className="text-sm">{course.duration}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <BookOpen className="h-4 w-4 mr-2 text-german" />
//                       <span className="text-sm">{course.lessons} lessons</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Award className="h-4 w-4 mr-2 text-german" />
//                       <span className="text-sm">{course.level}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button className="w-full bg-german hover:bg-german-dark" asChild>
//                     <Link to={course.path}>Learn More</Link>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button
//             variant="outline"
//             onClick={() => setShowAllCourses(!showAllCourses)}
//             className="group transition-all duration-300"
//           >
//             <span className="mr-2">
//               {showAllCourses ? 'Show Less Courses' : 'Show More Courses'}
//             </span>
//             {showAllCourses ? (
//               <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
//             ) : (
//               <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1 " />
//             )}
//           </Button>
//         </div>

//         <AnimatePresence>
//           {showAllCourses && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="mt-8 p-6 bg-gray-50 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4">Course Comparison</h3>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Course Level
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Duration
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Suitable For
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Goal
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       <tr>
//                         <td className="px-6 py-4 whitespace-nowrap">A1 Beginner</td>
//                         <td className="px-6 py-4 whitespace-nowrap">8 weeks</td>
//                         <td className="px-6 py-4">Complete beginners</td>
//                         <td className="px-6 py-4">Basic communication</td>
//                       </tr>
//                       <tr className="bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">A2 Elementary</td>
//                         <td className="px-6 py-4 whitespace-nowrap">10 weeks</td>
//                         <td className="px-6 py-4">Basic knowledge</td>
//                         <td className="px-6 py-4">Simple conversations</td>
//                       </tr>
//                       <tr>
//                         <td className="px-6 py-4 whitespace-nowrap">B1 Intermediate</td>
//                         <td className="px-6 py-4 whitespace-nowrap">12 weeks</td>
//                         <td className="px-6 py-4">Elementary speakers</td>
//                         <td className="px-6 py-4">Independent communication</td>
//                       </tr>
//                       <tr className="bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">B2 Upper Intermediate</td>
//                         <td className="px-6 py-4 whitespace-nowrap">14 weeks</td>
//                         <td className="px-6 py-4">Intermediate speakers</td>
//                         <td className="px-6 py-4">Complex discussions</td>
//                       </tr>
//                       <tr>
//                         <td className="px-6 py-4 whitespace-nowrap">C1 Advanced</td>
//                         <td className="px-6 py-4 whitespace-nowrap">16 weeks</td>
//                         <td className="px-6 py-4">Upper intermediate</td>
//                         <td className="px-6 py-4">Professional fluency</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default CourseSection;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Clock, BookOpen, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'A1 Level Course',
    description: 'Start your German journey with our comprehensive A1 course.',
    duration: '8 weeks',
    level: 'Beginner',
    lessons: 24,
    featured: true,
    image: 'https://images.unsplash.com/photo-1610466024868-910c6e7e8929?q=80&w=500',
    path: '/courses/a1'
  },
  {
    id: 2,
    title: 'A2 Level Course',
    description: 'Build on your foundation with our A2 German course.',
    duration: '10 weeks',
    level: 'Elementary',
    lessons: 30,
    featured: false,
    image: 'https://images.unsplash.com/photo-1576666717183-7365cc4eb691?q=80&w=500',
    path: '/courses/a2'
  },
  {
    id: 3,
    title: 'B1 Level Course',
    description: 'Develop fluency and confidence with our B1 course.',
    duration: '12 weeks',
    level: 'Intermediate',
    lessons: 36,
    featured: true,
    image: 'https://images.unsplash.com/photo-1504594228319-7dff0a578069?q=80&w=500',
    path: '/courses/b1'
  },
  {
    id: 4,
    title: 'B2 Level Course',
    description: 'Take your German skills to an advanced level.',
    duration: '14 weeks',
    level: 'Upper Intermediate',
    lessons: 42,
    featured: false,
    image: 'https://images.unsplash.com/photo-1557997692-54c7a85bf5b3?q=80&w=500',
    path: '/courses/b2'
  },
  {
    id: 5,
    title: 'A1 + A2 Combo Course',
    description: 'Complete beginner to elementary in one comprehensive course.',
    duration: '16 weeks',
    level: 'Beginner to Elementary',
    lessons: 48,
    featured: true,
    image: 'https://images.unsplash.com/photo-1519981337-7a6c4b3258b3?q=80&w=500',
    path: '/courses/a1a2'
  },
  {
    id: 6,
    title: 'Exam Preparation Course',
    description: 'Prepare for TestDaF, Goethe or DSH exams with our specialized course.',
    duration: '10 weeks',
    level: 'B1-C1',
    lessons: 30,
    featured: true,
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=500',
    path: '/courses/exam'
  },
  {
    id: 7,
    title: 'Grammar Course',
    description: 'Master German grammar with our focused course.',
    duration: '6 weeks',
    level: 'All Levels',
    lessons: 18,
    featured: false,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=500',
    path: '/courses/grammar'
  },
  {
    id: 8,
    title: 'Conversational Course',
    description: 'Improve your speaking skills with practical conversations.',
    duration: '8 weeks',
    level: 'A2-B2',
    lessons: 24,
    featured: false,
    image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=500',
    path: '/courses/conversational'
  }
];

const CourseSection = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const visibleCourses = showAllCourses ? courses : courses.slice(0, 4);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-german font-medium">Find Your Perfect Course</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our German Courses</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Structured learning paths from beginner to advanced levels, plus specialized courses for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visibleCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stagger-item"
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {course.featured && (
                    <Badge className="absolute top-3 right-3 bg-german text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-german" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-german" />
                      <span className="text-sm">{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-german" />
                      <span className="text-sm">{course.level}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-german hover:bg-german-dark" asChild>
                    <Link to={course.path}>View Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="group transition-all duration-300 border-german text-german hover:bg-german/10"
          >
            <span className="mr-2">
              {showAllCourses ? 'Show Less Courses' : 'View All Courses'}
            </span>
            {showAllCourses ? (
              <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            ) : (
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {showAllCourses && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-center">Course Pathways</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-german mb-2">Regular Courses</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>A1 Level</span>
                        <span className="text-gray-500">8 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>A2 Level</span>
                        <span className="text-gray-500">10 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>B1 Level</span>
                        <span className="text-gray-500">12 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>B2 Level</span>
                        <span className="text-gray-500">14 weeks</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-german mb-2">Combo Courses</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>A1 + A2</span>
                        <span className="text-gray-500">16 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>A1 + A2 + B1</span>
                        <span className="text-gray-500">24 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>A2 + B1</span>
                        <span className="text-gray-500">20 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>B2.1 + B2.2</span>
                        <span className="text-gray-500">16 weeks</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-german mb-2">Specialized Courses</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Exam Preparation</span>
                        <span className="text-gray-500">10 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Grammar</span>
                        <span className="text-gray-500">6 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Conversational</span>
                        <span className="text-gray-500">8 weeks</span>
                      </li>
                      <li className="flex justify-between">
                        <span>1:1 Coaching</span>
                        <span className="text-gray-500">Flexible</span>
                      </li>
                    </ul>
                  </div>
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
