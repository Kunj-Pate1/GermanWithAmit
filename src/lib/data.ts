
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
    image: "/images/courses/a1.jpg",
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
    curriculum:[{
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
        topics: ["Hobbies", "Making plans", "Weekdays", "Professions", "Working hours"],
        grammar: ["Irregular verbs", "Yes/no questions", "Definite articles (der, die, das)", "Singular/plural nouns", "Verbs haben & sein"],
        pronunciation: ["Sentence melody in questions and answers"],
        culture: ["Clubs and social groups in Germany"]
      }
    },
    // Add all 12 chapters with similar detail structure
    {
      title: "In Hamburg",
      duration: "1 week",
      details: {
        topics: ["Places", "Buildings", "Transportation", "Directions", "Seasons", "Months"],
        grammar: ["Indefinite articles (ein, eine)", "Negation (kein)", "Imperative with Sie", "Adjectives with sein"],
        pronunciation: ["Long and short vowels"],
        culture: ["Events in Hamburg", "Seasons in German-speaking countries"]
      }
    },

  ]
}],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "With over 5 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/instructors/amit.jpg",
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
    description: "Build confidence in real-life conversations, master past and future tense, and prepare for the Goethe A2 exam in 7 weeks.",
    level: "A2 Elementary",
    duration: "7–9 Weeks",
    lessons: 12,
    maxStudents: 15,
    price: "₹16,999",
    discount: "None",
    image: "/images/courses/a2.jpg",
    overview: [
      "Live daily Zoom sessions (Mon–Fri)",
      "70+ hours live + 20 hours self-study",
      "Mock tests & full Goethe A2 exam prep",
      "Songs, games, and real-world German",
      "Small interactive batches"
    ],
    learningPoints: [
      "Speak fluently in social and work settings",
      "Write emails, letters, and short texts",
      "Use past and future tenses confidently",
      "Understand real announcements and dialogues",
      "Handle travel, shopping, and doctor visits"
    ],
    curriculum: [{
      title: "Netzwerk Neu A2 Curriculum",
      duration: "12 chapters",
      lessons: Array.from([
        "And what do you do?", "After school", "Always online?", "Big and small feelings",
        "Life in the city", "Work environments", "Pretty mobile", "Learned is learned",
        "Sporty, sporty", "Living together", "How time flies", "Good entertainment"
      ], title => ({ title, duration: "1 week" }))
    }],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "Amit offers structured and engaging teaching with daily live interaction and full Goethe exam preparation support.",
      image: "/images/instructors/amit.jpg",
      rating: "4.9/5"
    },
    relatedCourses: [
      {
        title: "German B1 Course for Intermediate Learners",
        description: "Advance your fluency and get certified for PR, studies, or job applications in Germany.",
        level: "B1 Intermediate",
        price: "₹16,999",
        image: "/images/courses/b1.jpg",
        link: "/courses/intermediate-b1"
      }
    ]
  },

  "intermediate-b1": {
    title: "German B1 Course for Intermediate Learners",
    description: "Become an independent German speaker, express your ideas clearly, and prepare for citizenship, work, or studies in just 9 weeks.",
    level: "B1 Intermediate",
    duration: "9 Weeks",
    lessons: 12,
    maxStudents: 15,
    price: "₹16,999",
    discount: "None",
    image: "/images/courses/b1.jpg",
    overview: [
      "80+ hours live sessions + 20 hours self-study",
      "Goethe B1 exam training included",
      "Weekly feedback and writing corrections",
      "Songs, podcasts, and movies integrated",
      "Task-based lessons for speaking fluency"
    ],
    learningPoints: [
      "Understand texts, podcasts, and formal emails",
      "Join discussions and express personal opinions",
      "Describe experiences, plans, and events in detail",
      "Write structured texts and reports",
      "Be fully prepared for Goethe B1 certification"
    ],
    curriculum: [{
      title: "Netzwerk Neu B1 Curriculum",
      duration: "12 chapters",
      lessons: Array.from([
        "Gute Reise!", "Das ist ja praktisch!", "Veränderungen", "Arbeitswelt", "Umweltfreundlich?",
        "Blick nach vorn", "Zwischenmenschliches", "Rund um Körper und Geist", "Kunststücke", "Miteinander",
        "Stadt, Land, Fluss", "Geld regiert die Welt?"
      ], title => ({ title, duration: "1 week" }))
    }],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "Amit's B1 course is highly rated for practical fluency, personalized feedback, and complete exam preparation.",
      image: "/images/instructors/amit.jpg",
      rating: "4.9/5"
    },
    relatedCourses: [
      {
        title: "German B2 Course for Upper Intermediate Learners",
        description: "Bridge from intermediate to professional German usage with B2.1 and B2.2 courses.",
        level: "B2 Upper Intermediate",
        price: "₹16,999",
        image: "/images/courses/b2.jpg",
        link: "/courses/intermediate-b2"
      }
    ]
  },

  "intermediate-b2": {
    title: "German B2 Course for Upper Intermediate Learners",
    level: "B2 Upper Intermediate",
    description: "Master professional-level conversations, long texts, and Goethe B2 exam tasks in this two-part course: B2.1 and B2.2.",
    duration: "14–16 Weeks (B2.1 + B2.2)",
    lessons: 20,
    maxStudents: 15,
    price: "₹33,000 (for both parts)",
    discount: "None",
    image: "/images/courses/b2.jpg",
    overview: [
      "Daily Zoom classes (Mon–Fri)",
      "Two modules: B2.1 and B2.2",
      "In-depth grammar and writing practice",
      "Discussions, presentations, debates",
      "Full Goethe B2 exam preparation"
    ],
    learningPoints: [
      "Understand demanding academic/professional texts",
      "Debate, present, and argue clearly",
      "Write essays, reports, and formal emails",
      "Express subtle meanings and opinions",
      "Prepare confidently for Goethe B2"
    ],
    curriculum: [{
      title: "Aspekte B1+ and B2 Curriculum",
      duration: "20 lessons",
      lessons: Array.from([
        "Leute heute", "Wohnwelten", "Wie geht’s denn so?", "Viel Spaß!", "Alles will gelernt sein",
        "Berufsbilder", "Für immer und ewig", "Kaufen, kaufen, kaufen", "Endlich Urlaub", "Natürlich Natur!",
        "Weiterbildung", "Medienwelten", "Kunst und Kultur", "Gesellschaft heute", "Gesund leben"
      ], title => ({ title, duration: "0.5–1 week" }))
    }],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "Amit helps you advance confidently through B2 with structured grammar, speaking, and cultural insight.",
      image: "/images/instructors/amit.jpg",
      rating: "4.9/5"
    },
    relatedCourses: [
      {
        title: "German C1 Course for Advanced Learners",
        description: "Achieve high-level fluency and prepare for university or work in Germany with C1.",
        level: "C1 Advanced",
        price: "₹16,999",
        image: "/images/courses/c1.jpg",
        link: "/courses/advanced-c1"
      }
    ]
  },

  "advanced-c1": {
    title: "German C1 Course for Advanced Learners",
    description: "Achieve professional fluency in German and prepare for university, work, or official exams with confidence.",
    level: "C1 Advanced",
    duration: "8–10 Weeks",
    lessons: 12,
    maxStudents: 15,
    price: "₹18,999",
    discount: "None",
    image: "/images/courses/c1.jpg",
    overview: [
      "Goethe C1 exam prep included",
      "High-level grammar, writing, and analysis",
      "Live sessions + mock tests",
      "Workplace & academic focus",
      "Presentation and argumentation training"
    ],
    learningPoints: [
      "Understand long and complex articles and reports",
      "Speak fluently in academic or professional situations",
      "Write structured essays and official documents",
      "Use idiomatic expressions and nuanced grammar",
      "Prepare for the Goethe C1 exam"
    ],
    curriculum: [{
      title: "Aspekte Neu C1 Curriculum",
      duration: "12 chapters",
      lessons: Array.from([
        "Erfolg", "Beruf und Arbeit", "Medien", "Kunst", "Sprache", "Wissenschaft", "Gesellschaft", "Politik",
        "Umwelt", "Technik", "Freizeit", "Wirtschaft"
      ], title => ({ title, duration: "0.5–1 week" }))
    }],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "Specialist in advanced German with focus on academic, workplace, and Goethe C1 exam readiness.",
      image: "/images/instructors/amit.jpg",
      rating: "4.9/5"
    },
    relatedCourses: [
      {
        title: "German C2 Course for Proficiency",
        description: "Reach near-native fluency with in-depth language mastery for official and academic use.",
        level: "C2 Proficiency",
        price: "₹19,999",
        image: "/images/courses/c2.jpg",
        link: "/courses/advanced-c2"
      }
    ]
  },

  "advanced-c2": {
    title: "German C2 Course for Proficiency",
    description: "Achieve native-like proficiency in German with advanced grammar, literary texts, academic writing, and expert speech preparation.",
    level: "C2 Proficiency",
    duration: "10–12 Weeks",
    lessons: 12,
    maxStudents: 12,
    price: "₹19,999",
    discount: "None",
    image: "/images/courses/c2.jpg",
    overview: [
      "Master C2-level grammar and writing",
      "Interpret literature and advanced media",
      "Write academic papers and critical essays",
      "Debate and present with precision",
      "Prepare for Goethe C2 (if applicable)"
    ],
    learningPoints: [
      "Understand and analyze complex academic content",
      "Participate in high-level discussions",
      "Write advanced structured texts and arguments",
      "Apply nuanced vocabulary in speech and writing",
      "Achieve Goethe C2 or academic fluency"
    ],
    curriculum: [{
      title: "Custom Advanced C2 Curriculum",
      duration: "12 themes",
      lessons: Array.from([
        "Academic Texts", "Philosophy", "Politics & Society", "Advanced Grammar", "Critical Writing",
        "Linguistic Theory", "Scientific Communication", "Cultural Topics", "Literary Analysis", "Debating Skills",
        "Professional Reports", "Creative Expression"
      ], title => ({ title, duration: "0.5–1 week" }))
    }],
    instructor: {
      name: "Amit",
      title: "Certified German Instructor (C2)",
      bio: "C2-level expert instructor with deep experience preparing advanced learners for university-level and professional German mastery.",
      image: "/images/instructors/amit.jpg",
      rating: "4.9/5"
    },
    relatedCourses: [
      {
        title: "Goethe C2 Exam Prep Course",
        description: "Short, exam-focused training for the official C2 certificate.",
        level: "C2 Proficiency",
        price: "₹4,999",
        image: "/images/courses/exam-prep.jpg",
        link: "/courses/exam-prep-c2"
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
  if (!category || !subcategory) {
    return courseVariations['beginner-a1'];
  }
  
  const key = `${category}-${subcategory}`;
  const variation = courseVariations[key] || {};
  
  return variation;
};
