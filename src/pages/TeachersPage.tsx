import { User, GraduationCap, Languages, Star, Calendar, MessageSquare, Video, Check, Clock, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'framer-motion';

const TeachersPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'beginners' | 'intermediate' | 'advanced'>('all');

  const teachers = [
    {
      id: 1,
      name: "Amit Sharma",
      level: "Advanced (C1-C2)",
      specialization: "Test Preparation, Business German",
      experience: "8 years",
      students: "450+",
      rating: 4.9,
      reviews: 128,
      price: "₹1,499/session",
      languages: "German, English, Hindi",
      description: "As the founder of German With Amit, I bring extensive experience preparing students for Goethe, TestDaF, and Telc exams. My corporate background helps professionals master business German for career advancement. I emphasize practical communication skills with cultural insights.",
      image: "/images/teachers/amit.jpg",
      badges: ["Goethe Certified", "Corporate Trainer", "Exam Specialist"],
      availability: "Mon-Fri: 9AM-6PM IST",
      videoIntro: "https://youtube.com/embed/example1"
    },
    {
      id: 2,
      name: "Priya Patel",
      level: "Beginner (A1-A2)",
      specialization: "Kids & School Students",
      experience: "5 years",
      students: "320+",
      rating: 4.8,
      reviews: 95,
      price: "₹1,199/session",
      languages: "German, English, Hindi, Gujarati",
      description: "Specializing in teaching children and teenagers, I make German fun through interactive games and storytelling. My lessons align with CBSE/ICSE curricula and help students build strong foundations. Parents appreciate my patience and ability to explain concepts in multiple languages.",
      image: "/images/teachers/priya.jpg",
      badges: ["Child Educator", "Goethe A1-A2 Expert", "Bilingual Teaching"],
      availability: "Weekdays 3PM-8PM, Weekends 10AM-6PM",
      videoIntro: "https://youtube.com/embed/example2"
    },
    {
      id: 3,
      name: "Rahul Mehta",
      level: "Intermediate (B1-B2)",
      specialization: "Conversational German, Relocation Prep",
      experience: "6 years",
      students: "380+",
      rating: 4.7,
      reviews: 112,
      price: "₹1,399/session",
      languages: "German, English, Hindi, Marathi",
      description: "Having lived in Berlin for 3 years, I specialize in helping students develop authentic conversational skills for daily life in Germany. My relocation preparation course covers practical vocabulary for housing, healthcare, and bureaucracy - everything you need to settle in smoothly.",
      image: "/images/teachers/rahul.jpg",
      badges: ["Cultural Trainer", "DAAD Scholar", "Pronunciation Coach"],
      availability: "Tue-Sat: 7AM-10PM IST",
      videoIntro: "https://youtube.com/embed/example3"
    },
    {
      id: 4,
      name: "Ananya Das",
      level: "Advanced (C1-C2)",
      specialization: "Academic German, University Preparation",
      experience: "7 years",
      students: "290+",
      rating: 4.9,
      reviews: 87,
      price: "₹1,699/session",
      languages: "German, English, Bengali",
      description: "As a former university lecturer in Germany, I help students master academic German for Studienkolleg and university studies. My expertise includes scientific writing, lecture comprehension, and research presentation skills essential for academic success in German institutions.",
      image: "/images/teachers/ananya.jpg",
      badges: ["PhD in German", "Academic Advisor", "Writing Specialist"],
      availability: "Mon-Thu: 8AM-4PM IST",
      videoIntro: "https://youtube.com/embed/example4"
    },
    {
      id: 5,
      name: "Vikram Singh",
      level: "Beginner (A1-A2)",
      specialization: "Corporate Group Training",
      experience: "4 years",
      students: "210+",
      rating: 4.6,
      reviews: 63,
      price: "₹2,499/group",
      languages: "German, English, Punjabi",
      description: "I design customized German programs for Indian companies with operations in DACH regions. My structured approach helps teams quickly acquire workplace communication skills through role-plays of common business scenarios like meetings, emails, and client interactions.",
      image: "/images/teachers/vikram.jpg",
      badges: ["Corporate German", "HRDC Certified", "Group Dynamics"],
      availability: "Weekdays 9AM-5PM (Group Sessions)",
      videoIntro: "https://youtube.com/embed/example5"
    },
    {
      id: 6,
      name: "Neha Joshi",
      level: "Intermediate (B1-B2)",
      specialization: "Medical German, Nursing Exam Prep",
      experience: "5 years",
      students: "340+",
      rating: 4.8,
      reviews: 104,
      price: "₹1,599/session",
      languages: "German, English, Hindi, Kannada",
      description: "As a certified medical interpreter, I train healthcare professionals in specialized German for hospitals and clinics. My nursing exam preparation course has helped over 200 students pass language requirements for German healthcare jobs with focused training on patient communication and medical terminology.",
      image: "/images/teachers/neha.jpg",
      badges: ["Medical German", "BfArM Certified", "Nursing Specialist"],
      availability: "Mon-Sat: 10AM-9PM IST",
      videoIntro: "https://youtube.com/embed/example6"
    },
    {
      id: 7,
      name: "Arjun Kapoor",
      level: "All Levels",
      specialization: "Goethe Exam Strategies",
      experience: "9 years",
      students: "520+",
      rating: 4.9,
      reviews: 156,
      price: "₹1,799/session",
      languages: "German, English, Hindi",
      description: "With a 98% Goethe exam pass rate among my students, I've developed proven techniques for each test component. My intensive workshops focus on time management, common pitfalls, and high-yield vocabulary. I provide personalized feedback on mock tests and targeted exercises to maximize scores.",
      image: "/images/teachers/arjun.jpg",
      badges: ["Goethe Master Trainer", "Test Strategist", "Score Improver"],
      availability: "Flexible (Prior Booking Required)",
      videoIntro: "https://youtube.com/embed/example7"
    },
    {
      id: 8,
      name: "Sonia Reddy",
      level: "Beginner (A1-A2)",
      specialization: "Family Relocation, Kids Integration",
      experience: "4 years",
      students: "230+",
      rating: 4.7,
      reviews: 71,
      price: "₹1,299/session",
      languages: "German, English, Telugu",
      description: "Specializing in family relocation support, I help children adapt to German schools while parents learn essential communication skills. My unique family package includes joint parent-child sessions and school-specific vocabulary building to make the transition easier for everyone.",
      image: "/images/teachers/sonia.jpg",
      badges: ["Family Coach", "Child Integration", "Bilingual Parenting"],
      availability: "Weekends 9AM-8PM IST",
      videoIntro: "https://youtube.com/embed/example8"
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    if (activeTab === 'all') return true;
    if (activeTab === 'beginners') return teacher.level.includes("Beginner");
    if (activeTab === 'intermediate') return teacher.level.includes("Intermediate");
    if (activeTab === 'advanced') return teacher.level.includes("Advanced");
    return true;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german py-20 px-4 md:px-6 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our German Teachers</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
              Certified experts specializing in different levels and learning goals
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>8 Certified Teachers</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span>50+ Years Combined Experience</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-300 fill-yellow-300" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
            <Button className="bg-white text-german hover:bg-blue-50">
              Book a Trial Lesson
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button 
              variant={activeTab === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveTab('all')}
            >
              All Teachers
            </Button>
            <Button 
              variant={activeTab === 'beginners' ? 'default' : 'outline'}
              onClick={() => setActiveTab('beginners')}
            >
              Beginner (A1-A2)
            </Button>
            <Button 
              variant={activeTab === 'intermediate' ? 'default' : 'outline'}
              onClick={() => setActiveTab('intermediate')}
            >
              Intermediate (B1-B2)
            </Button>
            <Button 
              variant={activeTab === 'advanced' ? 'default' : 'outline'}
              onClick={() => setActiveTab('advanced')}
            >
              Advanced (C1-C2)
            </Button>
          </div>

          {/* Teacher List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl shadow-sm border border-blue-50 overflow-hidden hover:shadow-md transition-all">
                  {/* Teacher Header */}
                  <div className="relative">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 left-4">
                      <div className="w-16 h-16 rounded-full border-4 border-white bg-white overflow-hidden">
                        <img 
                          src={teacher.image} 
                          alt={teacher.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Teacher Info */}
                  <div className="pt-8 px-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                        <p className="text-german-dark font-medium">{teacher.level}</p>
                      </div>
                      <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{teacher.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({teacher.reviews})</span>
                      </div>
                    </div>

                    <p className="text-gray-700 font-medium mb-3">{teacher.specialization}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {teacher.badges.map((badge, i) => (
                        <span key={i} className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-blue-100 pt-4 mb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-500 mr-2" />
                          <span>{teacher.experience}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-gray-500 mr-2" />
                          <span>{teacher.students} students</span>
                        </div>
                        <div className="flex items-center">
                          <Languages className="w-4 h-4 text-gray-500 mr-2" />
                          <span>{teacher.languages}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                          <span>{teacher.availability.split(':')[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Collapsible Description */}
                    <div className="mb-4">
                      <p className="text-gray-600 line-clamp-3">
                        {teacher.description}
                      </p>
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-blue-100 pt-4 flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-sm">Starting from</p>
                        <p className="text-lg font-bold text-gray-800">{teacher.price}</p>
                      </div>
                      <Button variant="outline" className="border-german-dark text-german-dark hover:bg-german-dark hover:text-white">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How to Choose Section */}
          <section className="my-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How to Choose Your Ideal Teacher</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Match Your Level</h3>
                  <p className="text-gray-600">Ensure the teacher specializes in your current proficiency (A1-C2)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <GraduationCap className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Consider Specializations</h3>
                  <p className="text-gray-600">Look for expertise matching your goals (exams, business, kids, etc.)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Clock className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Check Availability</h3>
                  <p className="text-gray-600">Find teachers with schedules that match your timezone</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <MessageSquare className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Review Teaching Style</h3>
                  <p className="text-gray-600">Watch intro videos to see if their approach resonates with you</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Star className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Read Reviews</h3>
                  <p className="text-gray-600">See what other students say about their learning experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Award className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Verify Credentials</h3>
                  <p className="text-gray-600">Check certifications and teaching qualifications</p>
                </div>
              </div>
            </div>
          </section>

          {/* Trial CTA */}
          <div className="bg-gradient-to-r from-german-dark to-german rounded-xl p-8 text-center text-white mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Teacher is Right For You?</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Book a free 15-minute consultation and we'll match you with the perfect instructor for your goals and learning style.
            </p>
            <Button className="bg-white text-german hover:bg-blue-50 px-8 py-4 text-lg">
              Get Teacher Recommendations
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default TeachersPage;