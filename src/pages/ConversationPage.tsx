import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, Star, Clock, Users, BookOpen, ArrowRight, Play, Award, ShieldCheck, Mail, Phone, Activity, CheckCircle, Code2, Gamepad2, MessagesSquare, UserRound } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Import your images
import beginnerImg from '/images/munich.jpg';
import intermediateImg from '/images/munich.jpg';
import advancedImg from '/images/munich.jpg';
import instructor1 from '/images/munich.jpg';
import instructor2 from '/images/munich.jpg';
import instructor3 from '/images/munich.jpg';


const ConversationPage = () => {
  const [activeTab, setActiveTab] = useState('beginner');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const courses = [
    {
      id: 'beginner',
      title: 'Conversation Course for Beginners A1.2 - A2.2',
      level: 'A1.2 - A2.2',
      image: beginnerImg,
      duration: '8 Weeks (16 sessions)',
      price: '19,999 INR',
      schedule: '2 Days a Week, 19:30 - 21:00',
      overview: 'This course is tailored for individuals who have completed A1 or A2 level German but struggle to speak confidently in daily interactions. Participants will engage in interactive exercises, communicative games, and conversations to enhance vocabulary, improve fluency, and gain confidence in speaking German.',
      objectives: [
        'Hold conversations in German on various everyday topics',
        'Expand vocabulary and use linguistic finesse',
        'Improve fluency and communication skills',
        'Gain confidence in speaking German in both personal and professional contexts'
      ],
      themes: [
        'Sich vorstellen (Introducing yourself)',
        'Wegbeschreibungen (Giving directions)',
        'Einkaufen (Shopping)',
        'Bestellen im Restaurant (Ordering in a restaurant)',
        'Arztbesuch (Doctor visit)',
        'Freizeit, Hobbys (Free time, hobbies)',
        'Termine vereinbaren (Making appointments)',
        'Uhrzeit, Jahreszeiten, Wetter (Time, seasons, weather)',
        'Verkehrsmittel (Transportation)',
        'Wohnen (Living)',
        'Entschuldigen (Apologizing)',
        'Reiseziele (Travel destinations)',
        'Die Arbeit/Arbeitsplatz (Work/workplace)',
        'Über Vergangenheit berichten (Talking about the past)',
        'Nahrungsmittel - Rezepte (Food - recipes)'
      ]
    },
    {
      id: 'intermediate',
      title: 'Conversation Course for Intermediate A2.2 - B1',
      level: 'A2.2 - B1',
      image: intermediateImg,
      duration: '8 Weeks (16 sessions)',
      price: '19,999 INR',
      schedule: '2 Days a Week, 19:30 - 21:00',
      overview: 'Welcome to our online conversational course designed for participants at the A2.2 - B1 level. This course offers a supportive environment for expanding vocabulary and improving confidence in speaking German. Through group activities and discussions, you\'ll practice expressing opinions, sharing experiences, and communicating effectively in everyday situations.',
      objectives: [
        'Learn more German words and feel better about speaking',
        'Practice talking about ideas, experiences, and goals',
        'Get better at chatting about different topics and everyday situations',
        'Talk more smoothly through games and conversations',
        'Understand and speak German better',
        'Feel more confident and less worried about speaking',
        'Use correct and clear language',
        'Respond well and talk convincingly in conversations',
        'Improve pronunciation and speaking skills'
      ],
      themes: [
        'Sich vorstellen (Introducing yourself)',
        'Urlaub, Länder und Nationalitäten (Vacation, countries and nationalities)',
        'Eine Reise planen (Planning a trip)',
        'Kultur, Tiere, Menschen (Culture, animals, people)',
        'Wohnen-Garten, Stadt (Living-garden, city)',
        'Gesunde Ernährung (Healthy nutrition)',
        'Nachrichten aus dem In- und Ausland (News from home and abroad)',
        'Umwelt, Technik (Environment, technology)',
        'Zeit und Tätigkeiten (Time and activities)',
        'Museen, Bildende Kunst (Museums, fine arts)',
        'Berufe, Probleme am Arbeitsplatz (Professions, workplace problems)',
        'Termine vereinbaren (Making appointments)',
        'Umgangsformen im Geschäftsleben (Business etiquette)',
        'Vergangenheit und Kindheit (Past and childhood)',
        'Medien, Werbung-Produkte und ihre Eigenschaften (Media, advertising-products and their properties)',
        'Beschwerden formulieren (Making complaints)',
        'Stress, Ärger und Freude (Stress, anger and joy)',
        'Eigenschaften (Characteristics)',
        'Verkehrsprobleme (Traffic problems)',
        'Einladungen (Invitations)'
      ]
    },
    {
      id: 'advanced',
      title: 'Conversation Course for Advanced B2 - C1',
      level: 'B2 - C1',
      image: advancedImg,
      duration: '8 Weeks (16 sessions)',
      price: '19,999 INR',
      schedule: '2 Days a Week',
      overview: 'This online conversation course is designed for learners at levels B2 to C1, focusing on developing advanced speaking skills in German. Through structured discussions and interactive exercises, you\'ll learn how to engage in successful conversations and debates on a wide range of topics. The course integrates grammar, vocabulary, and pronunciation enhancement for comprehensive language development.',
      objectives: [
        'Enhance speaking proficiency for fluent and articulate conversations',
        'Develop ability to debate and discuss complex topics with confidence',
        'Expand vocabulary and grammar skills to express nuanced ideas',
        'Improve pronunciation and listening comprehension',
        'Utilize practical speaking and listening exercises to reinforce learning'
      ],
      themes: [
        'Schule, Ausbildung (School, education)',
        'Zwischenmenschliche Beziehungen (Interpersonal relationships)',
        'Wohnen und Mieten (Living and renting)',
        'Reisen, Ärger im Urlaub & Beschwerden (Travel, vacation troubles & complaints)',
        'Kulturelle Unterschiede im Berufsleben (Cultural differences in professional life)',
        'Europa und die Deutschen (Europe and the Germans)',
        'Geschichte und Politik (History and politics)',
        'Arbeitsalltag: Telefonate (Work routine: phone calls)',
        'Universität (University)',
        'Nachrichten aus aller Welt (News from around the world)',
        'Kriminalgeschichten (Crime stories)',
        'Erfolg und Misserfolg- Sport und Beruf (Success and failure - sports and profession)',
        'Umwelt und Klima (Environment and climate)',
        'Teilung Deutschlands (Division of Germany)',
        'Musik und Fotografie (Music and photography)',
        'Ethik und Moral - Konsum, Lügen, Gefühle (Ethics and morality - consumption, lies, feelings)',
        'Technischer Fortschritt (Technical progress)',
        'Architektur (Architecture)',
        'Medizin (Medicine)'
      ]
    }
  ];

  const benefits = [
    "Receive customized vocabulary lists from the instructor for each session",
    "Develop fluent and confident conversational skills at your level",
    "Access recordings of missed classes for review",
    "Engage in conversations with native German speakers to boost confidence",
    "Learn to implement grammar in your spoken German naturally",
    "Small group sizes for maximum speaking practice",
    "Personalized feedback on pronunciation and fluency"
  ];

  const instructors = [
    {
      name: "Amit Bansal",
      title: "Lead Conversation Instructor",
      bio: "Native German speaker with 10+ years of teaching experience. Specializes in helping students overcome speaking anxiety and develop natural conversation flow.",
      rating: "4.9/5",
      image: instructor1
    },
    {
      name: "Özge Güngör",
      title: "Advanced Conversation Specialist",
      bio: "PhD in German Linguistics with focus on conversational analysis. Passionate about helping advanced learners master nuanced communication.",
      rating: "4.8/5",
      image: instructor2
    },
    {
      name: "Linda Siljimi",
      title: "Beginner Conversation Coach",
      bio: "Certified DaF instructor with innovative methods for building speaking confidence in beginners. Creates a supportive, mistake-friendly environment.",
      rating: "4.9/5",
      image: instructor3
    }
  ];

  const faqs = [
    {
      question: "What if I miss a session?",
      answer: "All sessions are recorded and shared with participants. You'll have access to the recording and can review the material at your convenience."
    },
    {
      question: "How many students are in each group?",
      answer: "We keep groups small (4-6 students) to ensure everyone gets ample speaking time and personalized attention."
    },
    {
      question: "Do I need to prepare anything before each session?",
      answer: "We'll share any preparation materials a few days before each session. Typically this might include reviewing some vocabulary or thinking about discussion topics."
    },
    {
      question: "What if I'm not sure about my level?",
      answer: "We offer free level assessment sessions to help place you in the right course. Contact us to schedule an assessment."
    },
    {
      question: "Can I switch courses if the level isn't right for me?",
      answer: "Yes, we allow course changes within the first two sessions if you find the level too easy or challenging."
    }
  ];

  const currentCourse = courses.find(course => course.id === activeTab) || courses[0];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-german via-german-dark to-german-dark py-36 text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/10"></div>
            <div className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-yellow-300/20 blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    NEW COURSE STARTING SOON
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    <span className="text-white">SPEAK</span> GERMAN <br />
                    WITH CONFIDENCE
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-blue-100">
                    Your path to fluent conversations starts here
                    </h2>
                </div>

                {/* Course features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-white" />
                    <p className="font-medium">8 Weeks</p>
                    <p className="text-sm text-blue-100">Duration</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-white" />
                    <p className="font-medium">16 Sessions</p>
                    <p className="text-sm text-blue-100">Live Practice</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-white" />
                    <p className="font-medium">1.5 Hours</p>
                    <p className="text-sm text-blue-100">Per Session</p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button 
                    className="bg-german hover:bg-german text-white px-8 py-6 text-lg font-bold shadow-lg hover:shadow-white/20 transition-all transform hover:-translate-y-1"
                    size="lg"
                    >
                    Join Now
                    </Button>
                </div>
                </motion.div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
                >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <AspectRatio ratio={16/9}>
                    <img 
                        src="/images/conversation-hero.jpg" 
                        alt="Students enjoying German conversation practice"
                        className="w-full h-full object-cover"
                    />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-blue-900/20"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute -top-1 -right-15 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg z-10">
                    99% Success Rate
                    </div>
                </div>
                </motion.div>
            </div>
            </div>
        </div>
        </div>


      {/* Welcome Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Hi there! Welcome to our German Conversation Courses</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our specialized conversation courses help you bridge the gap between textbook German and real-life communication.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <motion.div 
                  key={course.id}
                  whileHover={{ y: -10 }}
                  className="cursor-pointer"
                  onClick={() => setActiveTab(course.id)}
                >
                  <Card className={`h-full transition-all ${activeTab === course.id ? 'border-blue-500 border-2' : ''}`}>
                    <CardContent className="p-6">
                      <AspectRatio ratio={16/9} className="mb-4">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </AspectRatio>
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.level}</p>
                      <Button 
                        variant={activeTab === course.id ? "default" : "outline"} 
                        className="w-full"
                      >
                        {activeTab === course.id ? "Currently Viewing" : "View Details"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6">{currentCourse.title}</h2>
                
                <div className="flex items-center mb-8">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-4">
                    {currentCourse.level}
                  </span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 text-yellow-400 fill-yellow-400" 
                      />
                    ))}
                    <span className="ml-2 text-sm">4.8 star rating</span>
                  </div>
                </div>
                
                <div className="mb-10">
                  <AspectRatio ratio={16/9} className="rounded-xl overflow-hidden shadow-lg mb-6">
                    <img 
                      src={currentCourse.image} 
                      alt={currentCourse.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      <span>{currentCourse.duration}</span>
                    </div>
                    <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      <span>Small Group Sessions (4-6 students)</span>
                    </div>
                    <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                      <ShieldCheck className="w-5 h-5 mr-2 text-blue-600" />
                      <span>Native German Instructors</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                    <p className="text-gray-700 mb-6">{currentCourse.overview}</p>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
                        <ShieldCheck className="mr-2 h-5 w-5 text-blue-600" />
                        Schedule: {currentCourse.schedule}
                      </h4>
                      <h4 className="font-bold text-lg flex items-center">
                        <Award className="mr-2 h-5 w-5 text-blue-600" />
                        Course Fee: {currentCourse.price}
                      </h4>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Learning Objectives</h3>
                    <ul className="space-y-3">
                      {currentCourse.objectives.map((objective, index) => (
                        <li key={index} className="flex">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Course Themes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentCourse.themes.map((theme, index) => (
                        <div key={index} className="flex bg-gray-50 p-3 rounded-lg">
                          <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs mr-3">
                            {index + 1}
                          </span>
                          <span>{theme}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="sticky top-28">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Course Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-medium">{currentCourse.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{currentCourse.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Schedule:</span>
                        <span className="font-medium">{currentCourse.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Format:</span>
                        <span className="font-medium">Online Live Classes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-medium">4-6 students</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
                        <span>Course Fee:</span>
                        <span className="text-german-dark">{currentCourse.price}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 py-6 text-lg bg-german-dark hover:bg-german">
                      Enroll Now
                    </Button>
                    
                    <div className="mt-4 text-center">
                      <Button variant="link" className="text-german-dark">
                        <Phone className="w-4 h-4 mr-2" /> Book a Free Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
                    <p className="mb-4">We're happy to help you choose the right course!</p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Mail className="w-4 h-4 mr-2" /> Email Us
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="w-4 h-4 mr-2" /> Call Us
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" /> Free Level Assessment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Methodology */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                OUR PEDAGOGY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The <span className="text-german-dark">Conversation-First</span> Approach
            </h2>
            <p className="text-lg text-gray-600">
                A structured yet flexible framework that adapts to your learning rhythm
            </p>
            </div>

            {/* Methodology Timeline */}
            <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-german transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Methodology Steps */}
            <div className="space-y-12 md:space-y-16">
                {[
                { 
                    title: "Warm-Up Activity", 
                    description: "Quick conversational activity related to the previous session's topic",
                    icon: <Activity className="w-6 h-6 text-blue-600" />,
                    phase: "Session Start"
                },
                { 
                    title: "Vocabulary Expansion", 
                    description: "Introduce new vocabulary through interactive exercises and discussions",
                    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
                    phase: "Knowledge Building"
                },
                { 
                    title: "Communicative Games", 
                    description: "Fun games to practice speaking and reinforce vocabulary",
                    icon: <Gamepad2 className="w-6 h-6 text-blue-600" />,
                    phase: "Active Engagement"
                },
                { 
                    title: "Mini-Dialogues", 
                    description: "Practice dialogues in pairs/groups based on real-life scenarios",
                    icon: <MessagesSquare className="w-6 h-6 text-blue-600" />,
                    phase: "Practical Application"
                },
                { 
                    title: "Grammar Focus", 
                    description: "Address relevant grammar points with practical examples",
                    icon: <Code2 className="w-6 h-6 text-blue-600" />,
                    phase: "Structural Understanding"
                },
                { 
                    title: "Role-Playing", 
                    description: "Engage in role-playing activities to simulate real-life conversations",
                    icon: <UserRound className="w-6 h-6 text-blue-600" />,
                    phase: "Confidence Building"
                }
                ].map((method, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 top-6 h-5 w-5 bg-german rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                    
                    {/* Card */}
                    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
                    <div className="p-6">
                        <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            {method.icon}
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-blue-600 tracking-wider">{method.phase}</span>
                            <h3 className="text-xl font-bold mt-1 mb-2">{method.title}</h3>
                            <p className="text-gray-600">{method.description}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>

            {/* Methodology Summary */}
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-german-dark to-german rounded-2xl p-8 text-white"
            >
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Why This Sequence Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Builds confidence gradually from simple to complex interactions</span>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Balances structured learning with organic conversation</span>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Reinforces concepts through multiple engagement modes</span>
                </div>
                </div>
            </div>
            </motion.div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Course Key Benefits</h2>
            <p className="text-xl text-gray-600">
              What makes our conversation courses different and more effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Course Materials</h3>
            <p className="text-gray-700 mb-6 text-center">
              "Our teacher doesn't stick to a fixed program. Instead, they'll pinpoint your speaking strengths and areas needing improvement, guiding you to speak more freely and refine your pronunciation."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-german-dark hover:bg-german-dark/90">
                Download Sample Materials
              </Button>
              <Button variant="outline">
                View Vocabulary Lists
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Instructors Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Your Instructors</h2>
            <p className="text-xl text-gray-600">
              Learn from experienced native German speakers passionate about teaching
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                  <p className="text-blue-600 mb-3">{instructor.title}</p>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm">{instructor.rating}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{instructor.bio}</p>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-3">
                      <span className="text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-german-dark to-german py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Speaking German Confidently?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our next session and take your German conversation skills to the next level
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-german hover:bg-german-light px-8 py-6 text-lg">
              Enroll Now
            </Button>
            <Button className="bg-german-dark text-german-light border-white hover:bg-german-dark/80 px-8 py-6 text-lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationPage;
