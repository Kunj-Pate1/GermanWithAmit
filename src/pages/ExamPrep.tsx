import { useState } from 'react';
import { BookOpen, Clock, Headphones, Mic, Pen, Check, Download, Star, Award, ShieldCheck, ChevronRight, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type GermanLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface Exam {
  name: string;
  duration: string;
  parts: string[];
  logo: string;
  features: string[];
}

interface ExamStructure {
  reading: string[];
  listening: string[];
  writing: string[];
  speaking: string[];
}

interface ExamLevelData {
  exams: Exam[];
  resources: string[];
  examStructure: ExamStructure;
  tips: string[];
}

const ExamPreparationPage = () => {
  const [activeLevel, setActiveLevel] = useState<GermanLevel>('A1');
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState('');

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setShowDemoForm(false);
  };

  const examData: Record<GermanLevel, ExamLevelData> = {
    A1: {
      exams: [
        {
          name: "Goethe-Zertifikat A1",
          duration: "60 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/goethe.png",
          features: [
            "Internationally recognized",
            "Focus on everyday German",
            "Simple conversations"
          ]
        },
        {
          name: "telc Deutsch A1",
          duration: "70 minutes",
          parts: ["Written exam", "Oral exam"],
          logo: "/images/logos/telc.svg",
          features: [
            "Practical language use",
            "Clear competency levels",
            "Widely accepted in Europe"
          ]
        },
        {
          name: "ÖSD Zertifikat A1",
          duration: "90 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/osd.png",
          features: [
            "Austrian German focus",
            "International recognition",
            "Cultural context included"
          ]
        }
      ],
      resources: [
        "Practice test PDF",
        "Vocabulary list",
        "Sample speaking questions",
        "Listening exercises"
      ],
      examStructure: {
        reading: [
          "Read two texts and the questions. Mark with a cross: true or false.",
          "Read the texts and questions. Mark with a cross: a or b.",
          "Read the texts and questions. Mark with a cross: true or false."
        ],
        listening: [
          "Mark with a cross: a, b, or c. You will hear each text twice.",
          "Mark with a cross: true or false. You will hear each text once.",
          "Mark with a cross: a, b, or c. You will hear each text twice."
        ],
        writing: [
          "You will fill out a form.",
          "You will write a short, personal text about an everyday situation. (E-mail/letter)"
        ],
        speaking: [
          "You will introduce yourself: Name, age, country, place of residence, languages, job, hobby.",
          "You will ask for information and give information.",
          "You will formulate requests and respond to them."
        ]
      },
      tips: [
        "Practice filling out forms with personal information",
        "Memorize basic self-introduction phrases",
        "Learn vocabulary for shopping and directions",
        "Listen to simple German conversations daily"
      ]
    },
    A2: {
      exams: [
        {
          name: "Goethe-Zertifikat A2",
          duration: "80 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/goethe.png",
          features: [
            "Everyday communication",
            "Basic social interactions",
            "Simple descriptions"
          ]
        },
        {
          name: "telc Deutsch A2",
          duration: "90 minutes",
          parts: ["Written exam", "Oral exam"],
          logo: "/images/logos/telc.svg",
          features: [
            "Practical situations",
            "Basic work-related language",
            "Travel vocabulary"
          ]
        }
      ],
      resources: [
        "Practice test PDF",
        "Grammar cheat sheet",
        "Speaking prompts",
        "Listening comprehension exercises"
      ],
      examStructure: {
        reading: [
          "  Short messages and notices",
          " Longer texts with multiple choice",
          " Matching headings to paragraphs"
        ],
        listening: [
          "  Short conversations (twice)",
          " Announcements (once)",
          " Dialogues (twice)"
        ],
        writing: [
          "  Form filling",
          " Short letter/email (80 words)"
        ],
        speaking: [
          "  Personal introduction",
          " Discussion based on picture",
          " Making arrangements"
        ]
      },
      tips: [
        "Practice writing short emails",
        "Learn connectors (and, but, because)",
        "Expand your adjective vocabulary",
        "Listen to slow German podcasts"
      ]
    },
    B1: {
      exams: [
        {
          name: "Goethe-Zertifikat B1",
          duration: "150 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/goethe.png",
          features: [
            "Independent language use",
            "Work and study readiness",
            "Detailed expressions"
          ]
        },
        {
          name: "telc Deutsch B1",
          duration: "160 minutes",
          parts: ["Written exam", "Oral exam"],
          logo: "/images/logos/telc.svg",
          features: [
            "Professional contexts",
            "Detailed descriptions",
            "Opinion expression"
          ]
        }
      ],
      resources: [
        "Sample tests",
        "Grammar exercises",
        "Writing templates",
        "Listening practice sets"
      ],
      examStructure: {
        reading: [
          "  Multiple choice (short texts)",
          " Matching (longer texts)",
          " True/false (articles)"
        ],
        listening: [
          "  Radio interviews (twice)",
          " Discussions (once)",
          " Opinions (twice)"
        ],
        writing: [
          "  Formal letter (100 words)",
          " Opinion essay (80 words)"
        ],
        speaking: [
          "  Presentation (3 minutes)",
          " Discussion (5 minutes)",
          " Problem solving (5 minutes)"
        ]
      },
      tips: [
        "Practice writing formal letters",
        "Learn opinion phrases",
        "Read German news articles",
        "Watch German videos with subtitles"
      ]
    },
    B2: {
      exams: [
        {
          name: "Goethe-Zertifikat B2",
          duration: "190 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/goethe.png",
          features: [
            "Advanced communication",
            "Academic preparation",
            "Complex texts"
          ]
        },
        {
          name: "telc Deutsch B2",
          duration: "200 minutes",
          parts: ["Written exam", "Oral exam"],
          logo: "/images/logos/telc.svg",
          features: [
            "Professional communication",
            "Academic language",
            "Detailed argumentation"
          ]
        }
      ],
      resources: [
        "Academic vocabulary",
        "Essay structures",
        "News analysis exercises",
        "Debate preparation"
      ],
      examStructure: {
        reading: [
          "  Multiple choice (complex texts)",
          " Gap text (academic style)",
          " Opinion matching"
        ],
        listening: [
          "  Lectures (once)",
          " Discussions (twice)",
          " Radio reports (once)"
        ],
        writing: [
          "  Report (150 words)",
          " Argumentative essay (200 words)"
        ],
        speaking: [
          "  Presentation (5 minutes)",
          " Debate (10 minutes)",
          " Problem solving (5 minutes)"
        ]
      },
      tips: [
        "Read German literature",
        "Practice academic writing",
        "Watch German documentaries",
        "Join German conversation groups"
      ]
    },
    C1: {
      exams: [
        {
          name: "Goethe-Zertifikat C1",
          duration: "210 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/goethe.png",
          features: [
            "Professional proficiency",
            "Academic studies",
            "Nuanced expression"
          ]
        },
        {
          name: "telc Deutsch C1",
          duration: "220 minutes",
          parts: ["Written exam", "Oral exam"],
          logo: "/images/logos/telc.svg",
          features: [
            "High-level professional use",
            "Academic research",
            "Sophisticated discourse"
          ]
        }
      ],
      resources: [
        "Literary analysis guides",
        "Academic writing samples",
        "Specialized vocabulary",
        "Lecture comprehension"
      ],
      examStructure: {
        reading: [
          "  Complex text analysis",
          " Academic text comprehension",
          " Abstract concepts"
        ],
        listening: [
          "  Academic lectures",
          " Professional discussions",
          " Abstract concepts"
        ],
        writing: [
          "  Summary and response",
          " Research-based essay"
        ],
        speaking: [
          "  Academic presentation",
          " Professional discussion",
          " Abstract topic debate"
        ]
      },
      tips: [
        "Read academic papers in German",
        "Practice summarizing complex ideas",
        "Watch German university lectures",
        "Write analytical essays"
      ]
    },
    C2: {
      exams: [
        {
          name: "Goethe-Zertifikat C2",
          duration: "240 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/goethe.png",
          features: [
            "Near-native fluency",
            "Professional expertise",
            "Cultural nuance"
          ]
        },
        {
          name: "telc Deutsch C2",
          duration: "250 minutes",
          parts: ["Written exam", "Oral exam"],
          logo: "/images/logos/telc.svg",
          features: [
            "Mastery level proficiency",
            "Expert communication",
            "Cultural references"
          ]
        }
      ],
      resources: [
        "Mastery-level exercises",
        "Cultural references guide",
        "Idiomatic expressions",
        "Specialized terminology"
      ],
      examStructure: {
        reading: [
          "  Literary text analysis",
          " Complex argument evaluation",
          " Subtle meaning interpretation"
        ],
        listening: [
          "  Fast native conversations",
          " Specialized lectures",
          " Cultural references"
        ],
        writing: [
          "  Critical analysis",
          " Professional document"
        ],
        speaking: [
          "  Expert presentation",
          " Nuanced debate",
          " Cultural discussion"
        ]
      },
      tips: [
        "Immerse in German media without subtitles",
        "Practice professional writing",
        "Study German idioms",
        "Engage in complex discussions"
      ]
    }
  };

  const germanLevels: GermanLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentLevelData = examData[activeLevel];

  return (
    <>
    <Navbar />
    {/* <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white"> */}
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-german-dark to-german py-16">
        <div className="container mx-auto px-4 md:px-6 p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white order-2 lg:order-1">
              <div className="mb-4 flex items-center">
                <span className="px-3 py-1 rounded-full bg-german-light/30 text-white text-sm font-medium">
                  {activeLevel} Level
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
                German {activeLevel} Exam Preparation
              </h1>
              
              <p className="text-lg md:text-xl mb-6 text-blue-50">
                Comprehensive resources and expert guidance to help you ace your German {activeLevel} exam
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Flexible Learning Schedule</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Free Exam Training Included</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-german hover:bg-german-light"
                  onClick={() => setShowDemoForm(true)}
                >
                  Watch Demo
                </Button>
                <Button 
                  className="bg-white text-german hover:bg-blue-50"
                  onClick={() => window.open("https://germanwithamit.exlyapp.com/?init_contact=true", "_blank")}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/images/exam-prep-hero.jpg" 
                      alt="German Exam Preparation" 
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
                    <div className="text-3xl font-bold text-gray-900">₹5,999</div>
                    <div className="text-lg text-gray-500 line-through">₹8,999</div>
                  </div>
                  <div className="mb-4 flex items-center text-green-600 font-medium">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    <span>FREE Exam Prep</span>
                  </div>
                  <Button 
                    className="w-full bg-german hover:bg-german-dark"
                    onClick={() => window.open("https://germanwithamit.exlyapp.com/?init_contact=true", "_blank")}
                  >
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

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Level Selector */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Select Your Exam Level</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose your CEFR level to see tailored preparation materials
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {germanLevels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-6 py-3 rounded-full font-medium transition-all shadow-sm ${
                  activeLevel === level
                    ? 'bg-german-dark text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Level Content */}
          <div className="space-y-16">
            {/* Available Exams Section */}
            <section>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Available Exams</h2>
                <div className="w-20 h-1 bg-german-dark mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentLevelData.exams.map((exam, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{exam.name}</h3>
                          <p className="flex items-center text-gray-500 mt-1">
                            <Clock className="w-4 h-4 mr-1" />
                            {exam.duration}
                          </p>
                        </div>
                        <img 
                          src={exam.logo} 
                          alt={exam.name} 
                          className="h-10 object-contain"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-german-dark mr-2"></span>
                          Exam Structure
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exam.parts.map((part, i) => (
                            <span key={i} className="bg-blue-50 text-german-dark px-3 py-1 rounded-full text-sm">
                              {part}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-german-dark mr-2"></span>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {exam.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="px-6 pb-6">
                      <button className="w-full bg-german-dark hover:bg-german text-white py-3 rounded-lg font-medium flex items-center justify-center transition-all">
                        View Details <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources & Tips Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Free Resources Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <Download className="w-5 h-5 mr-3 text-german-dark" />
                    Free Preparation Resources
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentLevelData.resources.map((resource, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all">
                        <div className="flex items-start">
                          <div className="bg-blue-50 p-2 rounded-lg mr-3">
                            <BookOpen className="w-5 h-5 text-german-dark" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{resource}</h4>
                            <button className="mt-2 text-german-dark text-sm font-medium flex items-center">
                              Download <ChevronRight className="ml-1 w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exam Tips Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-3 text-german-dark" />
                    Exam Success Tips
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {currentLevelData.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-50 p-2 rounded-full mr-3">
                          <Award className="w-4 h-4 text-german-dark" />
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Exam Structure Section */}
            <section>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Exam Structure Breakdown</h2>
                <div className="w-20 h-1 bg-german-dark mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reading */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-500">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        <BookOpen className="w-6 h-6 text-german-dark" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Reading</h3>
                    </div>
                    <ul className="space-y-4">
                      {currentLevelData.examStructure.reading.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-blue-50 text-german-dark text-xs font-bold px-2 py-1 rounded mr-3">
                            Part {i+1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Listening */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-emerald-500">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-50 p-3 rounded-lg mr-4">
                        <Headphones className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Listening</h3>
                    </div>
                    <ul className="space-y-4">
                      {currentLevelData.examStructure.listening.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-1 rounded mr-3">
                            Part {i+1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Writing */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-amber-500">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-50 p-3 rounded-lg mr-4">
                        <Pen className="w-6 h-6 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Writing</h3>
                    </div>
                    <ul className="space-y-4">
                      {currentLevelData.examStructure.writing.map((item, i) => (
                        <li key={i} className="flex items-start ">
                          <span className="bg-amber-50 text-amber-600 text-xs font-bold px-2 py-1 rounded mr-3">
                            Part {i+1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Speaking */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-purple-500">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-50 p-3 rounded-lg mr-4">
                        <Mic className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Speaking</h3>
                    </div>
                    <ul className="space-y-4">
                      {currentLevelData.examStructure.speaking.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-purple-50 text-purple-600 text-xs font-bold px-2 py-1 rounded mr-3">
                            Part {i+1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ExamPreparationPage;