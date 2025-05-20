import { useState } from 'react';
import { BookOpen, Clock, Headphones, Mic, Pen, Check, Download, Star, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

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

  const examData: Record<GermanLevel, ExamLevelData> = {
    A1: {
      exams: [
        {
          name: "Goethe-Zertifikat A1",
          duration: "60 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/logos/goethe.png",
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
          logo: "/logos/telc.png",
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
          logo: "/logos/osd.png",
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
          "Part 1: Read two texts and the questions. Mark with a cross: true or false.",
          "Part 2: Read the texts and questions. Mark with a cross: a or b.",
          "Part 3: Read the texts and questions. Mark with a cross: true or false."
        ],
        listening: [
          "Part 1: Mark with a cross: a, b, or c. You will hear each text twice.",
          "Part 2: Mark with a cross: true or false. You will hear each text once.",
          "Part 3: Mark with a cross: a, b, or c. You will hear each text twice."
        ],
        writing: [
          "Part 1: You will fill out a form.",
          "Part 2: You will write a short, personal text about an everyday situation. (E-mail/letter)"
        ],
        speaking: [
          "Part 1: You will introduce yourself: Name, age, country, place of residence, languages, job, hobby.",
          "Part 2: You will ask for information and give information.",
          "Part 3: You will formulate requests and respond to them."
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
          logo: "/logos/goethe.png",
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
          logo: "/logos/telc.png",
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
          "Part 1: Short messages and notices",
          "Part 2: Longer texts with multiple choice",
          "Part 3: Matching headings to paragraphs"
        ],
        listening: [
          "Part 1: Short conversations (twice)",
          "Part 2: Announcements (once)",
          "Part 3: Dialogues (twice)"
        ],
        writing: [
          "Part 1: Form filling",
          "Part 2: Short letter/email (80 words)"
        ],
        speaking: [
          "Part 1: Personal introduction",
          "Part 2: Discussion based on picture",
          "Part 3: Making arrangements"
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
          logo: "/logos/goethe.png",
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
          logo: "/logos/telc.png",
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
          "Part 1: Multiple choice (short texts)",
          "Part 2: Matching (longer texts)",
          "Part 3: True/false (articles)"
        ],
        listening: [
          "Part 1: Radio interviews (twice)",
          "Part 2: Discussions (once)",
          "Part 3: Opinions (twice)"
        ],
        writing: [
          "Part 1: Formal letter (100 words)",
          "Part 2: Opinion essay (80 words)"
        ],
        speaking: [
          "Part 1: Presentation (3 minutes)",
          "Part 2: Discussion (5 minutes)",
          "Part 3: Problem solving (5 minutes)"
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
          logo: "/logos/goethe.png",
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
          logo: "/logos/telc.png",
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
          "Part 1: Multiple choice (complex texts)",
          "Part 2: Gap text (academic style)",
          "Part 3: Opinion matching"
        ],
        listening: [
          "Part 1: Lectures (once)",
          "Part 2: Discussions (twice)",
          "Part 3: Radio reports (once)"
        ],
        writing: [
          "Part 1: Report (150 words)",
          "Part 2: Argumentative essay (200 words)"
        ],
        speaking: [
          "Part 1: Presentation (5 minutes)",
          "Part 2: Debate (10 minutes)",
          "Part 3: Problem solving (5 minutes)"
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
          logo: "/logos/goethe.png",
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
          logo: "/logos/telc.png",
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
          "Part 1: Complex text analysis",
          "Part 2: Academic text comprehension",
          "Part 3: Abstract concepts"
        ],
        listening: [
          "Part 1: Academic lectures",
          "Part 2: Professional discussions",
          "Part 3: Abstract concepts"
        ],
        writing: [
          "Part 1: Summary and response",
          "Part 2: Research-based essay"
        ],
        speaking: [
          "Part 1: Academic presentation",
          "Part 2: Professional discussion",
          "Part 3: Abstract topic debate"
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
          logo: "/logos/goethe.png",
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
          logo: "/logos/telc.png",
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
          "Part 1: Literary text analysis",
          "Part 2: Complex argument evaluation",
          "Part 3: Subtle meaning interpretation"
        ],
        listening: [
          "Part 1: Fast native conversations",
          "Part 2: Specialized lectures",
          "Part 3: Cultural references"
        ],
        writing: [
          "Part 1: Critical analysis",
          "Part 2: Professional document"
        ],
        speaking: [
          "Part 1: Expert presentation",
          "Part 2: Nuanced debate",
          "Part 3: Cultural discussion"
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
      <div className="bg-gradient-to-r from-german-dark to-german text-white py-16 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">German Exam Preparation</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive resources tailored for each CEFR level from A1 to C2
          </p>
          <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
            <button className="bg-white text-german-dark hover:bg-blue-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center shadow-md transition-all">
              <Star className="mr-2" /> Enroll Now
            </button>
            {/* <button className="bg-german-dark hover:bg-german px-6 py-3 rounded-lg font-medium flex items-center justify-center shadow-md transition-all">
              <Award className="mr-2" /> Exam Strategies
            </button> */}
          </div>
        </div>
      </div>

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
                    Preparation Resources
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
                        <li key={i} className="flex items-start">
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