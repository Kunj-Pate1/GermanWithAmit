import { useState } from 'react';
import { BookOpen, Clock, Headphones, Mic, Pen, Check, Download, Star, Award, ShieldCheck, ChevronRight, Play, Target, Calendar, CalendarDays, ClipboardList, Loader2, Mail, MessageSquare, Phone, Send, User, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

type GermanLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface Exam {
  name: string;
  duration: string;
  parts: string[];
  logo: string;
  features: string[];
  detailsUrl: string; 
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
          ],
          detailsUrl: "https://www.goethe.de/de/spr/prf/ueb.html"
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
          ],
          detailsUrl: "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/start-deutsch-1-/-telc-deutsch-a1/#t=2"
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
          ],
                    detailsUrl: "https://www.osd.at/en/exams/oesd-exams/oesd-zertifikat-a1/"
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
          "Short Messages and Emails: Identify whether statements about them are true or false",
          "Public Signs, Ads, Websites: Choose the correct source of information or match questions to content",
          "Information Notices: True/false questions based on public notices, posters, or signs"
        ],
        listening: [
          "Short Dialogues or Announcements (x2): Choose the correct answer (a, b, or c) from multiple choices",
          "Public Announcements or Messages (x1): Determine whether the statement is true or false",
          "Everyday Dialogues (x2): Choose the correct option (a, b, or c) from three choices"
        ],
        writing: [
          "Form Filling: Fill in a simple form (e.g., booking form) with personal information",
          "Short Message (~30 words): Write a short message (like an email or postcard) using the points provided"
        ],
        speaking: [
          "Introducing Yourself: Say your name, where you're from, what you do, your hobbies, etc.",
          "Asking for and Giving Information: Ask and answer questions on everyday topics",
          "Making and Responding to Requests: Make a request and respond appropriately"
        ]
      },
      tips: [
        "Learn everyday phrases (e.g., Ich heiße…, Woher kommst du?).",
        "Practice with real-life texts: signs, forms, emails.",
        "Speak slowly and clearly in full sentences.",
        "Use beginner-friendly audio to train listening."
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
          ],
          detailsUrl: "https://www.goethe.de/de/spr/prf/ueb.html",
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
          ],
          detailsUrl:"https://www.telc.net/sprachpruefungen/deutsch/start-deutsch-2-telc-deutsch-a2/#t=2"
        },
        {
          name: "ÖSD Zertifikat A2",
          duration: "90 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/osd.png",
          features: [
            "Austrian German focus",
            "International recognition",
            "Cultural context included"
          ],
          detailsUrl: "https://www.osd.at/en/exams/oesd-exams/oesd-zertifikat-a2-za2/"
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
          "Multiple Choice - Short Informational Texts: Choose the correct answer based on short texts",
          "True/False Statements: Read and understand short factual texts",
          "Matching Information: Match content (e.g., event descriptions) with short reader questions",
          "Multiple Choice - Article or Forum Post: Answer questions on a short continuous text"
        ],
        listening: [
          "Everyday Situations (Short Dialogues): Choose correct answers (multiple choice or images)",
          "Announcements or Phone Messages: Understand the main point of short monologues",
          "Dialogues in Public Contexts: Choose the correct response or picture",
          "Longer Conversation or Interview: True/false questions based on a longer spoken interaction"
        ],
        writing: [
          "Short Message (SMS, Note): Write a simple personal or everyday message",
          "Simple Email or Letter (~30-40 words): Respond to a prompt covering all listed bullet points"
        ],
        speaking: [
          "Introduction: Introduce yourself (name, country, profession, hobbies)",
          "Information Request: Ask and answer questions using cue cards",
          "Request and Respond: Make simple requests or suggestions and react to your partner's input"
        ]
      },
      tips: [
        "Build vocabulary by topic (travel, work, health).",
        "Write simple emails: greeting, main point, closing.",
        "Practice asking/answering short questions.",
        "Listen for key details: dates, times, places."
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
          ],
          detailsUrl: "https://www.goethe.de/de/spr/prf/ueb.html"
        },
        {
          name: "telc Deutsch B1",
          duration: "160 minutes",
          parts: ["Written exam", "Oral exam"],
          logo: "/images/logos/telc.svg",
          features: [
            "Professional contexts",
            "Detailed descriptions",
            "Opinion expression",
          ],
          detailsUrl: "https://www.telc.net/sprachpruefungen/deutsch/zertifikat-deutsch-telc-deutsch-b1/",
        },
        {
          name: "ÖSD Zertifikat B1",
          duration: "90 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/osd.png",
          features: [
            "Austrian German focus",
            "International recognition",
            "Cultural context included"
          ],
          detailsUrl: "https://www.osd.at/en/exams/oesd-exams/oesd-zertifikat-deutsch-oesterreich-b1-zdoe-b1/"
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
          "Multiple Choice - Emails or Short Texts: Read and answer questions about private or formal emails",
          "Multiple Choice - Informational Text: Read a factual or instructive text and choose the correct answers",
          "Multiple Choice - Public Information: Understand public signs, small ads, or posters",
          "Matching Statements: Match statements to sections of a longer article",
          "True/False: Read a detailed text and assess whether statements are true or false"
        ],
        listening: [
          "Short Dialogues (Everyday Situations): Listen and choose the correct picture or sentence",
          "Announcements or Messages: Multiple-choice questions on train announcements, phone messages, etc.",
          "Interviews or Conversations: Understand longer spoken interactions and answer questions",
          "Monologue with True/False Statements: Listen to a longer statement and decide if statements are true or false"
        ],
        writing: [
          "Personal or Semi-Formal Email (80-100 words): Write a reply to a message, covering all given points",
          "Short Argumentative Text (80-100 words): Express your opinion on a topic with a clear structure"
        ],
        speaking: [
          "Personal Introduction: Talk about yourself using guiding questions",
          "Picture Description & Dialogue: Describe a situation shown in a picture and discuss it",
          "Joint Planning Task: Make a plan with your partner based on a scenario"
        ]
      },
      tips: [
        "Master core grammar (weil, dass, word order).",
        "Practice giving your opinion with reasons.",
        "Listen for agreement/disagreement in audio.",
        "Take timed practice exams to build confidence."
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
          ],
          detailsUrl: "https://www.goethe.de/de/spr/prf/ueb.html"
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
          ],
          detailsUrl: "https://www.telc.net/sprachpruefungen/deutsch/deutsch-b2/#t=2",
        },
        {
          name: "ÖSD Zertifikat B2",
          duration: "90 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/osd.png",
          features: [
            "Austrian German focus",
            "International recognition",
            "Cultural context included"
          ],
          detailsUrl: "https://www.osd.at/en/exams/oesd-exams/oesd-zertifikat-b2-zb2/"
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
          "Multiple Choice (Text comprehension): Read an article and choose the correct answer to specific questions",
          "Matching headlines to text segments: Assign suitable headings to sections of a text",
          "Cloze test (Lückentext): Fill gaps in a factual text using sentence selection",
          "True/False with justification: Read a text and judge whether statements are true or false, with justification"
        ],
        listening: [
          "Short Listening Comprehension: Listen to short announcements/dialogues and select the correct answer",
          "Multiple Choice (Interview or report): Listen to a longer piece and answer detailed comprehension questions",
          "Matching Opinions: Match statements to the opinions of different speakers in a conversation",
          "True/False Statements: Listen to a discussion or report and decide if statements are true or false"
        ],
        writing: [
          "Opinion/Argumentative Text (~150 words): Write an email or forum post giving your opinion on a specific issue",
          "Formal Response Email: Reply to a semi-formal email, addressing all bullet points"
        ],
        speaking: [
          "Short Presentation: Present a topic based on a visual prompt or data, then answer follow-up questions",
          "Interactive Task (Information Exchange): Exchange information with your partner based on different inputs",
          "Discussion: Engage in a free discussion with your partner, stating your opinion and reaching conclusions"
        ]
      },
      tips: [
        "Adjust tone: formal for emails, casual for chats.",
        "Use connectors: zuerst, außerdem, dennoch.",
        "Summarize ideas and argue clearly.",
        "Read and listen to real German media (news, podcasts)."
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
          ],
          detailsUrl: "https://www.goethe.de/de/spr/prf/ueb.html",
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
          ],
          detailsUrl: "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-c1/",
        },
        {
          name: "ÖSD Zertifikat C1",
          duration: "90 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/osd.png",
          features: [
            "Austrian German focus",
            "International recognition",
            "Cultural context included"
          ],
          detailsUrl: "https://www.osd.at/en/exams/oesd-exams/oesd-zertifikat-c1-zc1/"
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
          "Lückentext (Cloze test): Insert appropriate words into gaps in a popular science or informative article using multiple-choice options",
          "Multiple Choice: Read a factual article and answer detailed comprehension questions with 3 options each",
          "Satzergänzung (Sentence Insertion): Reconstruct a text by inserting the correct sentences in the appropriate gaps",
          "Zuordnung (Matching): Match short statements to relevant sections in a longer scientific/popular text"
        ],
        listening: [
          "Zuordnung (Matching): Listen to a podcast review and assign opinions or facts to parts of the audio",
          "Multiple Choice: Listen to an interview with an expert and answer comprehension questions",
          "Gesprächsanalyse (Discussion Analysis): Understand key points and attitudes in a group discussion (3 speakers)",
          "Multiple Choice - Vortrag (Lecture): Listen to a lecture and answer questions testing your understanding"
        ],
        writing: [
          "Diskussionsbeitrag (Discussion Post): Write a structured argumentative text (~230 words) on a given topic",
          "E-Mail schreiben (Email Writing): Write a (semi-)formal email (~120 words) responding to a situation"
        ],
        speaking: [
          "Präsentation (Presentation): Prepare and give a 3-minute presentation on a given topic",
          "Diskussion (Discussion): Have a partner discussion on a given topic, involving comparison and evaluation"
        ]
      },
      tips: [
        "Use precise, academic vocabulary and phrases.",
        "Structure essays clearly: intro → argument → conclusion.",
        "Be fluent and flexible in your speaking.",
        "Analyze tone, purpose, and bias in texts/audio."
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
          ],
          detailsUrl: "https://www.goethe.de/de/spr/prf/ueb.html",
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
          ],
          detailsUrl: "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-c2/",
        },
        {
          name: "ÖSD Zertifikat C2",
          duration: "90 minutes",
          parts: ["Reading", "Listening", "Writing", "Speaking"],
          logo: "/images/logos/osd.png",
          features: [
            "Austrian German focus",
            "International recognition",
            "Cultural context included"
          ],
          detailsUrl: "https://www.osd.at/en/exams/oesd-exams/oesd-zertifikat-c2-zc2/"
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
          "Read a complex opinion text (e.g., a commentary) and answer multiple-choice questions",
          "Assign statements to text sections and identify which do/do not match",
          "Insert removed text segments into the correct positions in a report",
          "Match statements to short job advertisements"
        ],
        listening: [
          "Listen to short audio clips (e.g., radio segments), decide whether statements are true/false",
          "Listen to a conversation and determine who expresses which opinion",
          "Listen to an interview twice and choose the correct answer from multiple choices"
        ],
        writing: [
          "Edit a short written text by reformulating underlined parts using given words",
          "Choose one of four topics, write a text of ~350 words with a clear structure and formal style"
        ],
        speaking: [
          "Give a mini-presentation on a specific topic (5 min speech + Q&A)",
          "Participate in a discussion with a partner, argue for or against a given statement"
        ]
      },
      tips: [
        "Master formal and professional German.",
        "Focus on clarity and nuance in every task.",
        "Practice interpreting and evaluating ideas.",
        "Engage with complex content daily (debates, essays, lectures)."
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
              <Star key={star} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
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

        {/* New Content - Integrated Training */}
        <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
          <p className="font-medium mb-2">🎯 Already completed a level? We offer dedicated exam prep for Goethe-Zertifikat (A1-C2)</p>
          {/* <p className="text-sm mb-3">Already completed a level? We offer dedicated exam prep:</p> */}
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <Check className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
              <span>Group sessions (subject to availability)</span>
            </li>
            <li className="flex items-start">
              <Check className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
              <span>One-on-one training (always available)</span>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center">
            <Target className="w-5 h-5 mr-2" />
            <span>Targeted speaking/writing/reading/listening</span>
          </div>
          {/* <div className="flex items-center">
            <Award className="w-5 h-5 mr-2" />
            <span>Free Exam Training Included</span>
          </div> */}
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
            onClick={() => {
              const formSection = document.getElementById('form-section');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }}}
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
            <div className="mb-4 space-y-3">
              <div className="flex items-center text-blue-600 font-medium">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>A1-C2 Exam Coverage</span>
              </div>
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
                      <button className="w-full bg-german-dark hover:bg-german text-white py-3 rounded-lg font-medium flex items-center justify-center transition-all"
                      onClick={() => window.open(exam.detailsUrl, "_blank")}>
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
                  <div className="p-6 text-left">
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
                  <div className="p-6 text-left">
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
                  <div className="p-6 text-left">
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
                  <div className="p-6 text-left">
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
      <div className="bg-german backdrop-blur-sm rounded-lg p-8">

        {/* Form  */}
      <div id="form-section" className="bg-gradient-to-r from-german-dark/90 to-german/90 py-12 px-4 sm:px-6 rounded-xl">
  {/* Header Section */}
  <div className="text-center mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center">
      <BookOpen className="w-6 h-6 mr-2" /> 
      Ready to get started?
    </h2>
    <p className="text-blue-100/90 text-lg">
      Fill out the form below to book your exam training session
    </p>
  </div>

  {/* Form Container */}
  <div id="" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    <form 
    // onSubmit={handleSubmit} 
    className="space-y-6">
      {/* Form Title with Icon */}
      {/* <div className="flex items-center mb-4">
        <ClipboardList className="w-6 h-6 text-white mr-2" />
        <h3 className="text-xl font-bold text-white">Exam Preparation Inquiry Form</h3>
      </div> */}

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Full Name*</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input 
              name="Name" 
              placeholder="Your Full Name"
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Email Address*</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input 
              name="Email"
              type="email" 
              placeholder="you@example.com"
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
              required
            />
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Phone Number*</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input 
              name="Phone"
              type="tel" 
              placeholder="+91XXXXXXXXXX"
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Level*</label>
          <div className="relative">
            <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <select 
              name="Level"
              className="w-full pl-10 h-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
              required
            >
              <option value="">Select your level</option>
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Exam Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Exam Booked?*</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="ExamBooked" value="Yes" className="text-german" required />
              <span className="ml-2 text-white/80">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="ExamBooked" value="No" className="text-german" />
              <span className="ml-2 text-white/80">No</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Training Format*</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <select 
              name="TrainingFormat"
              className="w-full pl-10 h-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
              required
            >
              <option value="">Select format</option>
              <option value="Group">Group class</option>
              <option value="OneToOne">One-to-one</option>
              <option value="Either">Either is fine</option>
            </select>
          </div>
        </div>
      </div>

      {/* Schedule Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Preferred Timing*</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <select 
              name="PreferredTiming"
              className="w-full pl-10 h-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
              required
            >
              <option value="">Select timing</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-1">Preferred Days*</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <select 
              name="PreferredDays"
              className="w-full pl-10 h-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
              required
            >
              <option value="">Select days</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Either">Either is fine</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Fields */}
      <div>
        <label className="block text-white/80 text-sm font-medium mb-1">Preferred Start Date*</label>
        <div className="relative">
          <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
          <Input 
            type="date"
            name="StartDate"
            className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-white/80 text-sm font-medium mb-1">Additional Comments</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/50" />
          <textarea
            name="Comments"
            rows={3}
            className="w-full pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border"
            placeholder="Specific goals or requirements..."
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit"
        // disabled={isSubmitting}
        className="w-full bg-white text-german hover:bg-german-light hover:text-white transition-colors mt-6 py-3 font-medium"
      >
        {/* {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            Submitting...
          </span>
        ) : ( */}
          <span className="flex items-center justify-center">
            <Send className="mr-2 h-4 w-4" />
            Submit Inquiry
          </span>
        {/* )} */}
      </Button>

      {/* Status Message */}
      {/* {submitStatus && (
        <div className={`mt-4 p-3 rounded-md flex items-center ${
          submitStatus.type === 'success' 
            ? 'bg-green-500/20 text-green-100' 
            : 'bg-red-500/20 text-red-100'
        }`}>
          {submitStatus.type === 'success' ? (
            <CheckCircle className="mr-2 h-5 w-5" />
          ) : (
            <AlertCircle className="mr-2 h-5 w-5" />
          )}
          {submitStatus.message}
        </div>
      )} */}
    </form>
  </div>
</div>
</div>
    </div>
    </>
  );
};

export default ExamPreparationPage;