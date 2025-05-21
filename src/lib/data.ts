
// Mock data for course information based on category and subcategory

// Define types for course data
export interface CourseInfo {
  title: string;
  description: string;
  level: string;
  duration: string;
  lessons: number;
  maxStudents: number;
  price: string;
  discount: string;
  image: string;
  overview: string[];
  learningPoints: string[];
  curriculum: {
    title: string;
    duration: string;
    lessons: {
      title: string;
      duration: string;
      details?: {  // Add details property
        topics?: string[];
        grammar?: string[];
        pronunciation?: string[];
        culture?: string[];
      };
    }[];
  }[];
  instructor: {
    name: string;
    title: string;
    bio: string;
    image: string;
    rating: string;
  };
  relatedCourses: {
    title: string;
    description: string;
    level: string;
    price: string;
    image: string;
    link: string;
  }[];
}

// Default course data
const courseVariations: Record<string, Partial<CourseInfo>> = {
  "beginner-a1": {
    title: "German A1 Course for Absolute Beginners",
    description: "Learn German from scratch with daily live classes, structured materials, and full Goethe A1 exam prep – all in 7 weeks.",
    level: "A1 Beginner",
    duration: "7–9 Weeks",
    lessons: 12,
    maxStudents: 15,
    price: "₹16,999",
    discount: "None",
    image: "/images/munich.jpg",
    overview: [
      "Live daily Zoom sessions (Mon–Fri)",
      "Full exam preparation for Goethe A1",
      "Access to recordings, PDF books, and worksheets",
      "70+ hours live + 20 hours self-study",
      "24/7 WhatsApp support & community"
    ],
    learningPoints: [
      "Introduce yourself, talk about hobbies, and give directions",
      "Understand basic questions and forms",
      "Read menus, signs, and announcements",
      "Write messages, emails, and simple texts",
      "Apply basic German grammar in real-life contexts"
    ],
    curriculum: [
      {
        title: "Netzwerk Neu A1 Curriculum",
        duration: "12 chapters",
        lessons: [
          {
            title: "Welcome to the WG",
            duration: "1 week",
            details: {
              topics: ["Greetings", "Introductions", "Well-being", "Talking about yourself and others", "Numbers (1-20)", "Spelling", "Countries", "Languages"],
              grammar: ["W-questions", "Statements", "Verbs", "Personal pronouns", "The alphabet"],
              pronunciation: ["Alphabet", "Email addresses"],
              culture: ["Living in shared apartments (WG) in Germany"]
            }
          },
          {
            title: "Friends & Colleagues",
            duration: "1 week",
            details: {
              topics: ["Professions", "Describing people", "Hobbies", "Days of the week"],
              grammar: ["Verb conjugation", "Definite articles", "Negation with nicht/kein"],
              pronunciation: ["Stress in compound words"],
              culture: ["Work-life balance in Germany"]
            }
          },
          {
            title: "In Hamburg",
            duration: "1 week",
            details: {
              topics: ["City navigation", "Weather", "Planning activities"],
              grammar: ["Modal verbs", "Prepositions of place"],
              pronunciation: ["Sentence melody in questions"],
              culture: ["German cities and travel habits"]
            }
          },
          {
            title: "Daily Routine",
            duration: "1 week",
            details: {
              topics: ["Telling time", "Daily schedules", "Describing a typical day"],
              grammar: ["Separable verbs", "Time phrases"],
              pronunciation: ["Linking sounds in speech"],
              culture: ["German punctuality"]
            }
          },
          {
            title: "Family & Home",
            duration: "1 week",
            details: {
              topics: ["Family members", "Home description", "Furniture"],
              grammar: ["Possessive pronouns", "Accusative case"],
              pronunciation: ["Word stress"],
              culture: ["Family structures in Germany"]
            }
          },
          {
            title: "Shopping & Food",
            duration: "1 week",
            details: {
              topics: ["Grocery shopping", "Meal times", "Menus"],
              grammar: ["Plural forms", "Quantifiers", "Imperatives"],
              pronunciation: ["Long vs. short vowels"],
              culture: ["German food habits"]
            }
          },
          {
            title: "Appointments",
            duration: "1 week",
            details: {
              topics: ["Making plans", "At the doctor", "Dates & times"],
              grammar: ["Dative case", "Prepositions of time"],
              pronunciation: ["Intonation in polite requests"],
              culture: ["Healthcare system in Germany"]
            }
          },
          {
            title: "Health",
            duration: "1 week",
            details: {
              topics: ["Body parts", "Describing symptoms", "Healthy lifestyle"],
              grammar: ["Reflexive verbs", "Modal verbs in the past"],
              pronunciation: ["Medical terms"],
              culture: ["Pharmacies and health insurance in Germany"]
            }
          },
          {
            title: "Leisure Time",
            duration: "1 week",
            details: {
              topics: ["Hobbies", "Sports", "Leisure activities"],
              grammar: ["Verb position", "Conjunctions"],
              pronunciation: ["Activity-specific vocabulary"],
              culture: ["Clubs and associations in Germany"]
            }
          },
          {
            title: "Travel",
            duration: "1 week",
            details: {
              topics: ["Transport", "Booking accommodations", "Planning a trip"],
              grammar: ["Prepositions with accusative/dative", "Comparatives"],
              pronunciation: ["Travel-related phrases"],
              culture: ["Holiday traditions in Germany"]
            }
          },
          {
            title: "Orientation",
            duration: "1 week",
            details: {
              topics: ["Giving directions", "Finding places", "Describing surroundings"],
              grammar: ["Two-way prepositions", "Imperative commands"],
              pronunciation: ["Directional terms"],
              culture: ["Public transport systems"]
            }
          },
          {
            title: "German Learning Review",
            duration: "1 week",
            details: {
              topics: ["Reviewing all chapters", "Self-assessment"],
              grammar: ["All key grammar topics"],
              pronunciation: ["Revision of pronunciation points"],
              culture: ["Recap of cultural elements"]
            }
          }
        ]
      }
    ],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "With over 5 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/munich.jpg",
      rating: "4.9/5"
    },
    relatedCourses: [
      {
        title: "German A2 Course for Elementary Learners",
        description: "Take the next step after A1 with daily classes and confidence-building practice.",
        level: "A2 Elementary",
        price: "₹16,999",
        image: "/images/courses/a2.jpg",
        link: "/courses/beginner-a2"
      }
    ]
  },

  "beginner-a2": {
    title: "German A2 Course for Elementary Learners",
    description: "Build on your A1 knowledge with practical conversations, new grammar, and real-world topics to prepare for Goethe A2.",
    level: "A2 Elementary",
    duration: "8–10 Weeks",
    lessons: 12,
    maxStudents: 15,
    price: "₹17,499",
    discount: "None",
    image: "/images/courses/a2.jpg",
    overview: [
      "Daily live sessions and intensive speaking practice",
      "Goethe A2 exam prep with model papers",
      "100+ hours live instruction & guided homework",
      "Vocabulary-building games & speaking drills"
    ],
    learningPoints: [
      "Discuss past events and future plans",
      "Make polite requests and ask for help",
      "Describe people, places, and preferences",
      "Understand intermediate texts and dialogues",
      "Write short emails, stories, and reports"
    ],
    curriculum: [
      {
        title: "Netzwerk Neu A2 Curriculum",
        duration: "12 chapters",
        lessons: [
          {
            title: "New in the City",
            duration: "1 week",
            details: {
              topics: ["Introducing yourself in more detail", "Asking and giving information about routines", "Finding your way around town"],
              grammar: ["Past tense (Perfekt)", "Separable verbs in past tense", "Personal pronouns in dative"],
              pronunciation: ["Final consonants"],
              culture: ["City registration in Germany"]
            }
          },
          {
            title: "At Home",
            duration: "1 week",
            details: {
              topics: ["Describing your home", "Talking about housing preferences", "Writing emails about living situations"],
              grammar: ["Two-way prepositions", "Adjective endings with definite/indefinite articles"],
              pronunciation: ["Word stress in compounds"],
              culture: ["Renting in Germany"]
            }
          },
          {
            title: "Daily Life",
            duration: "1 week",
            details: {
              topics: ["Everyday routines", "Shopping", "Going to the bank"],
              grammar: ["Modal verbs in the past", "Prepositions with dative/accusative"],
              pronunciation: ["Intonation in polite requests"],
              culture: ["Banking system in Germany"]
            }
          },
          {
            title: "Food & Drink",
            duration: "1 week",
            details: {
              topics: ["Ordering in a restaurant", "Traditional dishes", "Food shopping"],
              grammar: ["Imperative", "Genitive introduction"],
              pronunciation: ["Long vs short vowels"],
              culture: ["Regional cuisines in Germany"]
            }
          },
          {
            title: "Leisure and Media",
            duration: "1 week",
            details: {
              topics: ["Media usage", "TV habits", "Describing hobbies in detail"],
              grammar: ["Subordinate clauses (weil, dass)", "Verb position"],
              pronunciation: ["Syllable emphasis"],
              culture: ["Media and entertainment in Germany"]
            }
          },
          {
            title: "At Work",
            duration: "1 week",
            details: {
              topics: ["Describing your job", "Talking about your workday", "Colleague interactions"],
              grammar: ["Reflexive verbs", "Preterite for haben/sein"],
              pronunciation: ["Stress in complex words"],
              culture: ["Work culture in Germany"]
            }
          },
          {
            title: "Health & Appointments",
            duration: "1 week",
            details: {
              topics: ["Making appointments", "Describing symptoms", "Health insurance"],
              grammar: ["Modal verbs review", "Time phrases with 'seit'"],
              pronunciation: ["Medical vocabulary"],
              culture: ["Visiting a doctor in Germany"]
            }
          },
          {
            title: "Travel & Mobility",
            duration: "1 week",
            details: {
              topics: ["Public transport", "Booking travel", "Describing past trips"],
              grammar: ["Perfect tense with sein/haben", "Prepositions of direction"],
              pronunciation: ["Travel phrases"],
              culture: ["German train and bus systems"]
            }
          },
          {
            title: "Festivals & Traditions",
            duration: "1 week",
            details: {
              topics: ["German holidays", "Writing about traditions", "Describing photos"],
              grammar: ["Noun-verb combinations", "Adjective endings"],
              pronunciation: ["Pronunciation of compound nouns"],
              culture: ["Traditional German festivals"]
            }
          },
          {
            title: "Learning & Languages",
            duration: "1 week",
            details: {
              topics: ["Learning strategies", "Talking about multilingualism"],
              grammar: ["Conjunctions obwohl, wenn", "Sentence structure revision"],
              pronunciation: ["Sound shifts in speech"],
              culture: ["Language learning in Germany"]
            }
          },
          {
            title: "Plans and Projects",
            duration: "1 week",
            details: {
              topics: ["Future plans", "Making suggestions", "Organizing a project"],
              grammar: ["Futur I", "Modal verbs with infinitives"],
              pronunciation: ["Intonation in future expressions"],
              culture: ["Project culture in education/work"]
            }
          },
          {
            title: "German Learning Review",
            duration: "1 week",
            details: {
              topics: ["Review and practice exams", "Self-evaluation"],
              grammar: ["Review of all key A2 grammar"],
              pronunciation: ["Review and drills"],
              culture: ["Recap of cultural knowledge"]
            }
          }
        ]
      }
    ],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "With over 5 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/munich.jpg",
      rating: "4.9/5"
    },
    relatedCourses: [
      {
        title: "German A1 Course for Elementary Learners",
        description: "Take the next step after A1 with daily classes and confidence-building practice.",
        level: "A2 Elementary",
        price: "₹16,999",
        image: "/images/courses/a2.jpg",
        link: "/courses/beginner-a2"
      },
      {
        title: "German B1 Course for Intermediate Learners",
        description: "Take the next step after A1 with daily classes and confidence-building practice.",
        level: "A2 Elementary",
        price: "₹16,999",
        image: "/images/courses/a2.jpg",
        link: "/courses/beginner-a2"
      }
    ]
  },

  "intermediate-b1": {
  title: "German B1 Course for Intermediate Learners",
  description: "Expand your German skills with complex grammar, varied vocabulary, and practical conversation topics to prepare for Goethe B1.",
  level: "B1 Intermediate",
  duration: "10–12 Weeks",
  lessons: 12,
  maxStudents: 15,
  price: "₹18,999",
  discount: "None",
  image: "/images/courses/b1.jpg",
  overview: [
    "Daily live Zoom classes with interactive exercises",
    "Goethe B1 exam preparation and practice tests",
    "Grammar deep dive and vocabulary expansion",
    "Role-plays, presentations, and writing practice"
  ],
  learningPoints: [
    "Talk about past experiences and plans in detail",
    "Express opinions and give reasons",
    "Understand and produce more complex texts",
    "Use varied sentence structures and connectors",
    "Prepare confidently for the B1 exam"
  ],
  curriculum: [
    {
      title: "Netzwerk Neu B1 Curriculum",
      duration: "12 chapters",
      lessons: [
        {
          title: "Getting to Know Each Other",
          duration: "1 week",
          details: {
            topics: ["Introducing yourself and others", "Talking about personal experiences", "Describing character traits"],
            grammar: ["Perfect tense (Perfekt)", "Separable and inseparable verbs", "Modal verbs in the past"],
            pronunciation: ["Sentence intonation", "Stress in compound words"],
            culture: ["Social interactions and greetings in Germany"]
          }
        },
        {
          title: "Daily Life and Routines",
          duration: "1 week",
          details: {
            topics: ["Describing daily routines", "Talking about habits and hobbies", "Discussing health and fitness"],
            grammar: ["Simple past (Präteritum) of common verbs", "Reflexive verbs", "Accusative and dative cases"],
            pronunciation: ["Connected speech", "Vowel length"],
            culture: ["Healthy lifestyle trends in Germany"]
          }
        },
        {
          title: "Work and Education",
          duration: "1 week",
          details: {
            topics: ["Jobs and professions", "Work environment", "Education systems"],
            grammar: ["Relative clauses", "Passive voice (Präsens and Perfekt)", "Konjunktiv II (conditional) basics"],
            pronunciation: ["Pronouncing difficult consonant clusters"],
            culture: ["Work culture and education in Germany"]
          }
        },
        {
          title: "Travel and Holidays",
          duration: "1 week",
          details: {
            topics: ["Booking trips and accommodations", "Talking about travel experiences", "Describing weather and landscapes"],
            grammar: ["Prepositions with cases", "Comparatives and superlatives", "Future tense (Futur I)"],
            pronunciation: ["Intonation in questions and statements"],
            culture: ["Popular travel destinations in Germany and Europe"]
          }
        },
        {
          title: "Media and Technology",
          duration: "1 week",
          details: {
            topics: ["Using media devices", "Social media and internet", "Discussing advantages and disadvantages"],
            grammar: ["Konjunktiv II for polite requests and wishes", "Word order in complex sentences"],
            pronunciation: ["Pronunciation of foreign loanwords"],
            culture: ["Media consumption in Germany"]
          }
        },
        {
          title: "Shopping and Services",
          duration: "1 week",
          details: {
            topics: ["Shopping for clothes and food", "Making complaints", "Using public services"],
            grammar: ["Indirect questions", "Dative verbs", "Imperatives"],
            pronunciation: ["Sentence rhythm and stress"],
            culture: ["Consumer rights and services in Germany"]
          }
        },
        {
          title: "Family and Relationships",
          duration: "1 week",
          details: {
            topics: ["Family structures", "Describing relationships", "Life events and celebrations"],
            grammar: ["Subordinate clauses", "Possessive pronouns", "Genitive case basics"],
            pronunciation: ["Emphasis and intonation in emotional speech"],
            culture: ["Family life and traditions in Germany"]
          }
        },
        {
          title: "Environment and Nature",
          duration: "1 week",
          details: {
            topics: ["Environmental issues", "Nature and wildlife", "Sustainable living"],
            grammar: ["Passive voice in different tenses", "Konjunktiv I (reported speech)"],
            pronunciation: ["Clear articulation of complex words"],
            culture: ["Environmental policies in Germany"]
          }
        },
        {
          title: "Health and Fitness",
          duration: "1 week",
          details: {
            topics: ["Healthy habits", "Medical visits", "Fitness activities"],
            grammar: ["Modal verbs in different tenses", "Reflexive verbs in various cases"],
            pronunciation: ["Medical and fitness vocabulary pronunciation"],
            culture: ["Healthcare system and fitness culture in Germany"]
          }
        },
        {
          title: "Culture and Arts",
          duration: "1 week",
          details: {
            topics: ["German festivals", "Art and music", "Cinema and literature"],
            grammar: ["Adjective endings", "Relative clauses"],
            pronunciation: ["Pronunciation of cultural terms"],
            culture: ["German cultural events and traditions"]
          }
        },
        {
          title: "Social Issues",
          duration: "1 week",
          details: {
            topics: ["Social problems", "Integration and diversity", "Volunteering"],
            grammar: ["Konjunktiv II for hypothetical situations", "Complex sentence connectors"],
            pronunciation: ["Emphatic stress"],
            culture: ["Social integration in Germany"]
          }
        },
        {
          title: "Exam Preparation and Review",
          duration: "1 week",
          details: {
            topics: ["Review of all topics", "Exam strategies", "Mock exam practice"],
            grammar: ["Review of all major grammar points"],
            pronunciation: ["Review of pronunciation and intonation"],
            culture: ["Recap of cultural topics"]
          }
        }
      ]
    }
  ],
  instructor: {
    name: "Amit",
    title: "Certified German Instructor (C2)",
    bio: "With over 5 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
    image: "/images/instructors/amit.jpg",
    rating: "4.9/5"
  },
  relatedCourses: [
    {
      title: "German B2 Course for Upper-Intermediate Learners",
      description: "Advance your German to higher fluency with detailed grammar and complex topics.",
      level: "B2 Upper-Intermediate",
      price: "₹19,999",
      image: "/images/courses/b2.jpg",
      link: "/courses/intermediate-b2"
    }
  ]
},

"intermediate-b2": {
  title: "German B2 Course for Upper-Intermediate Learners",
  description: "Strengthen your language skills with advanced grammar, rich vocabulary, and practical exam preparation for Goethe B2.",
  level: "B2 Upper-Intermediate",
  duration: "10–12 Weeks",
  lessons: 12,
  maxStudents: 15,
  price: "₹19,499",
  discount: "None",
  image: "/images/courses/b2.jpg",
  overview: [
    "Daily live classes with communicative focus",
    "Thorough Goethe B2 exam training",
    "In-depth grammar and vocabulary expansion",
    "Interactive speaking and writing exercises"
  ],
  learningPoints: [
    "Discuss complex topics fluently and spontaneously",
    "Understand the main ideas of complex texts",
    "Produce clear, detailed texts on various subjects",
    "Use idiomatic expressions and connect ideas coherently",
    "Prepare effectively for the B2 exam"
  ],
  curriculum: [
    {
      title: "Aspekte Neu B2 Curriculum",
      duration: "12 chapters",
      lessons: [
        {
          title: "Social Networks and Communication",
          duration: "1 week",
          details: {
            topics: ["Digital communication", "Social media", "Influence of technology"],
            grammar: ["Passive voice", "Konjunktiv II for polite requests"],
            pronunciation: ["Word stress in borrowed words"],
            culture: ["Impact of social networks in Germany"]
          }
        },
        {
          title: "Education and Learning",
          duration: "1 week",
          details: {
            topics: ["Educational systems", "Lifelong learning", "Study habits"],
            grammar: ["Relative clauses", "Infinitive constructions"],
            pronunciation: ["Clear articulation of complex terms"],
            culture: ["German education culture and reforms"]
          }
        },
        {
          title: "Work and Professional Life",
          duration: "1 week",
          details: {
            topics: ["Workplace dynamics", "Career planning", "Job interviews"],
            grammar: ["Konjunktiv I for indirect speech", "Modal verbs in past"],
            pronunciation: ["Formal pronunciation"],
            culture: ["German work ethics and labor laws"]
          }
        },
        {
          title: "Environment and Sustainability",
          duration: "1 week",
          details: {
            topics: ["Environmental protection", "Sustainable living", "Climate policies"],
            grammar: ["Subjunctive mood", "Conditional sentences"],
            pronunciation: ["Emphasis on scientific vocabulary"],
            culture: ["Environmental awareness in Germany"]
          }
        },
        {
          title: "Media and Public Opinion",
          duration: "1 week",
          details: {
            topics: ["Media influence", "Public opinion", "Fake news"],
            grammar: ["Complex sentence connectors", "Indirect speech"],
            pronunciation: ["Speech rhythm in debates"],
            culture: ["German media landscape"]
          }
        },
        {
          title: "Health and Lifestyle",
          duration: "1 week",
          details: {
            topics: ["Healthy habits", "Psychology", "Alternative medicine"],
            grammar: ["Subordinate clauses", "Concessive clauses"],
            pronunciation: ["Intonation for emphasis"],
            culture: ["Health culture in Germany"]
          }
        },
        {
          title: "Culture and Identity",
          duration: "1 week",
          details: {
            topics: ["Cultural diversity", "Traditions", "Immigration"],
            grammar: ["Adjective endings", "Passive voice"],
            pronunciation: ["Pronunciation of dialects and regional accents"],
            culture: ["Multiculturalism in Germany"]
          }
        },
        {
          title: "Science and Innovation",
          duration: "1 week",
          details: {
            topics: ["Technological developments", "Research", "Ethics in science"],
            grammar: ["Nominalization", "Passive constructions"],
            pronunciation: ["Technical vocabulary"],
            culture: ["Science policy in Germany"]
          }
        },
        {
          title: "Travel and Leisure",
          duration: "1 week",
          details: {
            topics: ["Tourism", "Travel experiences", "Hobbies"],
            grammar: ["Prepositions with accusative and dative", "Comparatives and superlatives"],
            pronunciation: ["Natural flow in storytelling"],
            culture: ["Travel habits and holidays in Germany"]
          }
        },
        {
          title: "Society and Politics",
          duration: "1 week",
          details: {
            topics: ["Political systems", "Social issues", "Voting and elections"],
            grammar: ["Subjunctive II", "Complex conjunctions"],
            pronunciation: ["Formal speech patterns"],
            culture: ["German political system and participation"]
          }
        },
        {
          title: "Exam Preparation and Practice",
          duration: "1 week",
          details: {
            topics: ["Exam strategies", "Mock tests", "Error analysis"],
            grammar: ["Comprehensive grammar review"],
            pronunciation: ["Exam relevant pronunciation tips"],
            culture: ["Cultural topics for the exam"]
          }
        },
        {
          title: "Final Presentation and Review",
          duration: "1 week",
          details: {
            topics: ["Presentation skills", "Debate and discussion", "Course recap"],
            grammar: ["Advanced syntax and usage"],
            pronunciation: ["Public speaking and fluency"],
            culture: ["Effective communication in German"]
          }
        }
      ]
    }
  ],
  instructor: {
    name: "Amit",
    title: "Certified German Instructor (C2)",
    bio: "With over 5 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
    image: "/images/instructors/amit.jpg",
    rating: "4.9/5"
  },
  relatedCourses: [
    {
      title: "German C1 Course for Advanced Learners",
      description: "Achieve advanced fluency and tackle complex language tasks with expert guidance.",
      level: "C1 Advanced",
      price: "₹21,999",
      image: "/images/courses/c1.jpg",
      link: "/courses/advanced-c1"
    }
  ]
},


"advanced-c1": {
  title: "German C1 Course for Advanced Learners",
  description: "Master complex language structures, nuanced vocabulary, and prepare for Goethe C1 with confidence and fluency.",
  level: "C1 Advanced",
  duration: "12–14 Weeks",
  lessons: 12,
  maxStudents: 15,
  price: "₹21,999",
  discount: "None",
  image: "/images/courses/c1.jpg",
  overview: [
    "In-depth daily live classes with expert guidance",
    "Comprehensive Goethe C1 exam prep",
    "Advanced grammar and style training",
    "Extensive speaking, writing, and listening exercises"
  ],
  learningPoints: [
    "Use idiomatic expressions and advanced vocabulary",
    "Understand and produce complex texts",
    "Argue and discuss with nuance and clarity",
    "Write professional reports, essays, and summaries",
    "Prepare strategically for the C1 exam"
  ],
  curriculum: [
    {
      title: "Aspekte Neu C1 Curriculum",
      duration: "12 chapters",
      lessons: [
        {
          title: "Advanced Communication and Interaction",
          duration: "1 week",
          details: {
            topics: ["Formal and informal communication", "Expressing opinions and arguments", "Negotiation techniques"],
            grammar: ["Konjunktiv I and II in indirect speech and hypotheticals", "Advanced modal verbs"],
            pronunciation: ["Intonation patterns in formal speech"],
            culture: ["Communication styles in German professional settings"]
          }
        },
        {
          title: "Media and Politics",
          duration: "1 week",
          details: {
            topics: ["Media influence", "Political systems", "Debates and discussions"],
            grammar: ["Complex sentence structures", "Subjunctive mood in reporting"],
            pronunciation: ["Stress and rhythm in public speaking"],
            culture: ["Media landscape and political culture in Germany"]
          }
        },
        {
          title: "Science and Technology",
          duration: "1 week",
          details: {
            topics: ["Scientific reports", "Technological advances", "Ethical debates"],
            grammar: ["Nominalization", "Passive constructions in various tenses"],
            pronunciation: ["Technical vocabulary articulation"],
            culture: ["Innovation and ethics in German science"]
          }
        },
        {
          title: "Work and Career",
          duration: "1 week",
          details: {
            topics: ["Career development", "Job interviews", "Workplace communication"],
            grammar: ["Subordinate clauses with multiple verbs", "Modal verbs in professional contexts"],
            pronunciation: ["Clear and formal pronunciation"],
            culture: ["German work culture and professional etiquette"]
          }
        },
        {
          title: "Culture and Society",
          duration: "1 week",
          details: {
            topics: ["Cultural diversity", "Social challenges", "Arts and cultural criticism"],
            grammar: ["Complex connectors", "Concessive clauses"],
            pronunciation: ["Expressive intonation"],
            culture: ["Current social issues and cultural debates"]
          }
        },
        {
          title: "Environment and Sustainability",
          duration: "1 week",
          details: {
            topics: ["Environmental policies", "Sustainable development", "Climate change debates"],
            grammar: ["Passive voice in complex structures", "Conditional sentences"],
            pronunciation: ["Emphasis on key vocabulary"],
            culture: ["Germany’s role in global environmental efforts"]
          }
        },
        {
          title: "Literature and Arts",
          duration: "1 week",
          details: {
            topics: ["Literary analysis", "Art critique", "Theater and film"],
            grammar: ["Advanced adjective endings", "Reported speech in literature"],
            pronunciation: ["Artistic expression in speech"],
            culture: ["German literature and arts scene"]
          }
        },
        {
          title: "Health and Lifestyle",
          duration: "1 week",
          details: {
            topics: ["Health debates", "Nutrition and wellness", "Psychology and self-care"],
            grammar: ["Complex sentence linkers", "Subjunctive in hypothetical scenarios"],
            pronunciation: ["Clear articulation of technical terms"],
            culture: ["Health system and wellness culture"]
          }
        },
        {
          title: "Education and Training",
          duration: "1 week",
          details: {
            topics: ["Higher education", "Vocational training", "Lifelong learning"],
            grammar: ["Nominal clauses", "Indirect questions"],
            pronunciation: ["Formal speech patterns"],
            culture: ["German education system"]
          }
        },
        {
          title: "Travel and Global Issues",
          duration: "1 week",
          details: {
            topics: ["Globalization", "Travel experiences", "Cultural exchange"],
            grammar: ["Complex prepositional phrases", "Passive voice in narratives"],
            pronunciation: ["Fluency and natural speech"],
            culture: ["Germany’s global connections"]
          }
        },
        {
          title: "Exam Preparation and Review",
          duration: "1 week",
          details: {
            topics: ["Full exam practice", "Writing and speaking strategies", "Review of key topics"],
            grammar: ["Comprehensive grammar revision"],
            pronunciation: ["Intonation and stress patterns review"],
            culture: ["Exam tips and cultural awareness"]
          }
        },
        {
          title: "Final Project and Presentation",
          duration: "1 week",
          details: {
            topics: ["Research and presentation skills", "Debate and discussion", "Feedback and reflection"],
            grammar: ["Advanced syntax and style"],
            pronunciation: ["Public speaking techniques"],
            culture: ["Academic and professional presentation culture"]
          }
        }
      ]
    }
  ],
  instructor: {
    name: "Amit",
    title: "Certified German Instructor (C2)",
    bio: "With over 5 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
    image: "/images/instructors/amit.jpg",
    rating: "4.9/5"
  },
  relatedCourses: [
    {
      title: "German C2 Course for Proficiency Learners",
      description: "Reach native-like fluency and master complex communication for academic and professional contexts.",
      level: "C2 Proficiency",
      price: "₹23,999",
      image: "/images/courses/c2.jpg",
      link: "/courses/advanced-c2"
    }
  ]
},

"advanced-c2": {
  title: "German C2 Course for Proficient Speakers",
  description: "Master the German language at an expert level with advanced grammar, idiomatic expressions, and comprehensive exam preparation for the Goethe C2 Zertifikat.",
  level: "C2 Proficient",
  duration: "12–14 Weeks",
  lessons: 12,
  maxStudents: 12,
  price: "₹23,999",
  discount: "None",
  image: "/images/courses/c2.jpg",
  overview: [
    "In-depth daily live classes focusing on fluency and precision",
    "Preparation for Goethe C2 and equivalent exams",
    "Complex text analysis and critical discussions",
    "Extensive writing and presentation practice"
  ],
  learningPoints: [
    "Use German fluently and spontaneously with native-like proficiency",
    "Understand virtually everything read or heard with ease",
    "Express ideas clearly and precisely, differentiating finer shades of meaning",
    "Produce well-structured, detailed texts on complex subjects",
    "Critically evaluate and discuss advanced cultural and social topics"
  ],
  curriculum: [
    {
      title: "Aspekte Neu C2 Curriculum",
      duration: "12 chapters",
      lessons: [
        {
          title: "Advanced Argumentation and Debate",
          duration: "1 week",
          details: {
            topics: ["Structuring arguments", "Debating controversial issues", "Persuasive language"],
            grammar: ["Subjunctive II in complex sentences", "Advanced connectors"],
            pronunciation: ["Emphasis and intonation for persuasion"],
            culture: ["Debate culture and public discourse in Germany"]
          }
        },
        {
          title: "Literature and Media Analysis",
          duration: "1 week",
          details: {
            topics: ["Analyzing literary texts", "Media critique", "Interpretation techniques"],
            grammar: ["Nominalization", "Passive voice in various tenses"],
            pronunciation: ["Reading aloud with expression"],
            culture: ["German literary and media traditions"]
          }
        },
        {
          title: "Philosophy and Ethics",
          duration: "1 week",
          details: {
            topics: ["Ethical dilemmas", "Philosophical concepts", "Moral reasoning"],
            grammar: ["Complex sentence structures", "Indirect speech"],
            pronunciation: ["Clear articulation of abstract vocabulary"],
            culture: ["Philosophical influences in German culture"]
          }
        },
        {
          title: "Scientific and Technical Language",
          duration: "1 week",
          details: {
            topics: ["Scientific writing", "Technical presentations", "Data interpretation"],
            grammar: ["Passive voice in scientific texts", "Technical terminology"],
            pronunciation: ["Precision in pronunciation of terms"],
            culture: ["German contributions to science and technology"]
          }
        },
        {
          title: "Historical Perspectives",
          duration: "1 week",
          details: {
            topics: ["German history", "Cultural memory", "Historical narratives"],
            grammar: ["Past perfect and subjunctive", "Reported speech"],
            pronunciation: ["Pronunciation of historical terms"],
            culture: ["Reflection on Germany’s history"]
          }
        },
        {
          title: "Art and Culture",
          duration: "1 week",
          details: {
            topics: ["German art movements", "Cultural criticism", "Contemporary culture"],
            grammar: ["Advanced adjective endings", "Complex relative clauses"],
            pronunciation: ["Expressive reading and speaking"],
            culture: ["Art and cultural institutions in Germany"]
          }
        },
        {
          title: "Law and Society",
          duration: "1 week",
          details: {
            topics: ["Legal language", "Social justice", "Human rights"],
            grammar: ["Subjunctive for hypothetical situations", "Formal written language"],
            pronunciation: ["Formal tone and clarity"],
            culture: ["German legal system and social policies"]
          }
        },
        {
          title: "Business and Economics",
          duration: "1 week",
          details: {
            topics: ["Corporate culture", "Economic issues", "Negotiations"],
            grammar: ["Business idioms", "Conditional sentences"],
            pronunciation: ["Business communication style"],
            culture: ["German business practices"]
          }
        },
        {
          title: "Advanced Writing and Composition",
          duration: "1 week",
          details: {
            topics: ["Essay writing", "Report composition", "Creative writing"],
            grammar: ["Cohesion and coherence devices", "Complex syntactic structures"],
            pronunciation: ["Rhythm and flow in speech"],
            culture: ["Writing conventions in German"]
          }
        },
        {
          title: "Exam Strategies and Mock Tests",
          duration: "1 week",
          details: {
            topics: ["Goethe C2 exam format", "Time management", "Mock exams"],
            grammar: ["Review of all advanced grammar"],
            pronunciation: ["Exam relevant pronunciation practice"],
            culture: ["Exam-specific cultural topics"]
          }
        },
        {
          title: "Oral Presentation and Discussion",
          duration: "1 week",
          details: {
            topics: ["Public speaking", "Discussion techniques", "Handling Q&A"],
            grammar: ["Spoken grammar nuances"],
            pronunciation: ["Fluency and clarity"],
            culture: ["Presentation culture in Germany"]
          }
        },
        {
          title: "Course Wrap-up and Individual Feedback",
          duration: "1 week",
          details: {
            topics: ["Personalized feedback", "Final review", "Next learning steps"],
            grammar: ["Individual grammar review"],
            pronunciation: ["Personalized pronunciation coaching"],
            culture: ["Continuing language learning in German contexts"]
          }
        }
      ]
    }
  ],
  instructor: {
    name: "Amit",
    title: "Certified German Instructor (C2)",
    bio: "With over 5 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
    image: "/images/instructors/amit.jpg",
    rating: "4.9/5"
  },
  relatedCourses: [
    {
      title: "German B2 Course for Upper-Intermediate Learners",
      description: "Build strong foundations in advanced grammar and vocabulary to excel in B2 exams.",
      level: "B2 Upper-Intermediate",
      price: "₹19,499",
      image: "/images/courses/b2.jpg",
      link: "/courses/upper-intermediate-b2"
    }
  ]
}
};


// // Course data variations
// const courseVariations: Record<string, Partial<CourseInfo>> = {
//   "beginner-a1": {
//     title: "German A1 Course for Absolute Beginners",
//     level: "A1 Beginner"
//   },
//   "beginner-a2": {
//     title: "German A2 Course for Elementary Learners",
//     level: "A2 Elementary"
//   },
//   "intermediate-b1": {
//     title: "German B1 Course for Intermediate Learners",
//     level: "B1 Intermediate"
//   },
//   "intermediate-b2": {
//     title: "German B2 Course for Upper Intermediate Learners",
//     level: "B2 Upper Intermediate"
//   },
//   "advanced-c1": {
//     title: "German C1 Course for Advanced Learners",
//     level: "C1 Advanced"
//   },
//   "advanced-c2": {
//     title: "German C2 Course for Proficiency",
//     level: "C2 Proficiency"
//   }
// };

/**
 * Get course information based on category and subcategory
 * @param category Course category (beginner, intermediate, advanced)
 * @param subcategory Course subcategory (a1, a2, b1, b2, c1, c2)
 * @returns Course information
 */
export const getCourseInfo = (category?: string, subcategory?: string): any => {

  console.log(category,subcategory);
  console.log(courseVariations[`${category}-${subcategory}`]);
  
  if (!category || !subcategory) {
    return courseVariations['beginner-a1'];
  }
  
  const key = `${category}-${subcategory}`;
  const variation = courseVariations[key] || {};
  
  return variation;
};
