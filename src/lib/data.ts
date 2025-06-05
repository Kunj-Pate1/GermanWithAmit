
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
  }[];
  relatedCourses: {
    title: string;
    description: string;
    level: string;
    price: string;
    image: string;
    link: string;
  }[];
  whatYouCanDo: {
    title: string;
    description: string;
    abilities: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

// Default course data
const courseVariations: Record<string, Partial<CourseInfo>> = {
  "beginner-a1": {
    title: "German A1 Course for Absolute Beginners",
    description: "Learn German from scratch with daily live classes, structured materials, and full Goethe A1 exam prep – all in 7 weeks.",
    level: "A1 Beginner",
    duration: "7-8 Weeks",
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
        title: "Netzwerk Neu Based A1 Curriculum",
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
            title: "Friends, Colleagues and Me",
            duration: "1 week",
            details: {
              topics: ["Professions", "Making Plans", "Hobbies", "Days of the week","Working Hours"],
              grammar: ["Irrelgular verbs", "Yes/No Questions", "Definite articles*die, der, das)", "Singular/Plural Nouns", "Verbs Haben & Sie"],
              pronunciation: ["Sentence melody in questions and answers"],
              culture: ["Clubs and social groups in Germany"]
            }
          },
          {
            title: "In Hamburg",
            duration: "1 week",
            details: {
              topics: ["Places", "Buildings", "Transportation", "Directions", "Seasons","Months"],
              grammar: ["Indefinite articles (ein, eine)" , "Negation (kein)", "Imperative with Sie", "Adjectives with sein."],
              pronunciation: ["Long and short vowels"],
              culture: ["Events in Hamburg and seasons in German-speaking countries."]
            }
          },
          {
            title: "Enjoy Your Meal!",
            duration: "1 week",
            details: {
              topics: ["Shopping", "Dinning", "Ordering Food", "Food Preferences"],
              grammar: ["Accusative case", "Verbs with accusative", "Mögen & Möchten", "Sentence structure"],
              pronunciation: ["Umlauts (ä, ö, ü)"],
              culture: ["Food Related Professions"]
            }
          },
          {
            title: "Daily Life and Family",
            duration: "1 week",
            details: {
              topics: ["Telling Time", "Making appointments", "Family", "Apologizing for Delays"],
              grammar: ["Time expressions (am, um, von…bis)", "Possessive articles (nominative & accusative)", "Modal verbs (müssen, können, wollen)"],
              pronunciation: ["The r sound"],
              culture: ["Punctuality in German culture"]
            }
          },
          {
            title: "Time with Friends",
            duration: "1 week",
            details: {
              topics: ["Leisure activities", "Dates", "Birthdays", "Invitations", "Restaurant orders"],
              grammar: ["Ordinal numbers", "Separable verbs","Personal pronouns (accusative)", "Prepositions (accusative)", "Past tense of haben & sein"],
              pronunciation: ["Diphthongs (ei, eu, au)"],
              culture: ["Pubs and events in German-speaking countries"]
            }
          },
          {
            title: "Work Life",
            duration: "1 week",
            details: {
              topics: ["Daily work life", "Workplace conversations", "Location references",  "Writing emails"],
              grammar: ["Sentence connectors (und, oder, aber)", "Dative case", "Prepositions with dative"],
              pronunciation: ["s vs sch, st"],
              culture: ["Workplace small talk in Germany"]
            }
          },
          {
            title: "Fit and Healthy",
            duration: "1 week",
            details: {
              topics: ["Body parts", "Giving Instructions", "Medical Advice","Health Tips"],
              grammar: ["Imperatives (du, ihr, Sie)", "Modal verbs (sollen, müssen, Dürfen)"],
              pronunciation: ["p/b, t/d, k/g"],
              culture: ["Home Remedies and Health Traditions"]
            }
          },
          {
            title: "My Apartment",
            duration: "1 week",
            details: {
              topics: ["Understanding Rental ads", "Describing Apartments, Furtniture and Colors"],
              grammar: ["Sein + Adjective", "Prepositions(accusative & Dative"],
              pronunciation: ["Long and SHort E"],
              culture: ["Housing STyles in Germany"]
            }
          },
          {
            title: "Studies and Work",
            duration: "1 week",
            details: {
              topics: ["Daily Routines", "Past Events", "Job Search","Phone calls", "Career Discussions"],
              grammar: ["Present Perfect tense", "Past Participles(haben & sein)"],
              pronunciation: ["The h sound"],
              culture: ["Seasonal Jobs in Germany"]
            }
          },
          {
            title: "I Like That Jacket!",
            duration: "1 week",
            details: {
              topics: ["Clothing", "Shopping", "Compliments", "Department Store Navigation"],
              grammar: ["Demonstrative pronouns (dieser, dieses, diese)", "Past participles (separable & inseparable verbs)", "Personal pronouns (dative)"],
              pronunciation: ["Stress in verbs with prefixes"],
              culture: ["Berlin as a fashion trend city"]
            }
          },
          {
            title: "Off on Vacation",
            duration: "1 week",
            details: {
              topics: ["Planning trips", "Directions", "Travel experiences", "Postcards", "Weather"],
              grammar: ["Pronouns (man)", "Sentence connectors (denn)", "Question words (wer, wen, wem, was)", "Dative time expressions"],
              pronunciation: ["f,v,w"],
              culture: ["Travel destinations in Germany"]
            }
          }
        ]
      }
    ],
    instructor:[
      {
        name: "Amit Bansal",
        title: "Certified German Instructor (C2)",
        bio: "With over 8 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
        image: "/images/Amit/amit_laptop.jpg",
        rating: "4.9/5"
      },
      {
        name: "Linda Selijimi",
        title: "Native Tutor",
        bio: "Former university professor with expertise in German grammar, literature, and business communication.",
        image: "/images/teachers/linda.webp",
        rating: "4.9/5"
      },
      {
        name: "Riya Suneja",
        title: "Certified German Instructor (C1)",
        bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
        image: "/images/teachers/riya.webp",
        rating: "4.9/5"
      },
      {
        name: "Chhavi Gupta",
        title: "Certified German Instructor (C1)",
        bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
        image: "/images/teachers/chhavi.webp",
        rating: "4.9/5"
      }
    ],
    relatedCourses: [
      {
        title: "German A2 Course for Elementary Learners",
        description: "Take the next step after A1 with daily classes and confidence-building practice.",
        level: "A2 Elementary",
        price: "₹16,999",
        image: "/images/courses/a2.jpg",
        link: "/courses/beginner/a2"
      }
    ],
    whatYouCanDo: {
      title: "What You Can Achieve After This Course",
      description: "After completing this A1 level course, you'll be able to:",
      abilities: [
        "Introduce yourself and others",
        "Ask and answer simple questions about personal details",
        "Interact in a simple way if the other person talks slowly and clearly",
        "Understand and use familiar everyday expressions",
        "Write simple notes and messages"
      ]
    },
    faqs: [
      {
        question: "How long will I have access to the course materials?",
        answer: "You'll have lifetime access to all course materials, including any future updates."
      },
      {
        question: "What if I miss a live class?",
        answer: "All live classes are recorded and available for you to watch at any time."
      },
      // ... more FAQs ...
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
    image: "/images/course/course_a2.png",
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
        title: "Netzwerk Neu Based A2 Curriculum",
        duration: "12 chapters",
        lessons: [
          {
            title: "Und was machst du?",
            duration: "1 week",
            details: {
              topics: [
                "sich vorstellen",
                "über Vergangenes berichten",
                "sich verabreden",
                "etwas begründen",
                "Informationen auf einer Homepage verstehen",
                "ein Restaurant vorstellen"
              ],
              grammar: [
                "Genitiv: Name + s",
                "Wiederholung: Perfekt",
                "Nebensatz mit 'weil'"
              ],
              pronunciation: ["Wörter mit allen Sinnen lernen"],
              culture: ["Essen ohne Licht"]
            }
          },
          {
            title: "Nach der Schulzeit",
            duration: "1 week",
            details: {
              topics: [
                "Berichte aus der Schulzeit verstehen",
                "über die Schulzeit sprechen",
                "Kommentare schreiben",
                "eine Radiosendung verstehen",
                "über Erfahrungen sprechen",
                "die eigene Meinung sagen",
                "etwas präsentieren",
                "Informationen über ein Schulsystem verstehen",
                "über Schultypen sprechen"
              ],
              grammar: [
                "Modalverben im Präteritum",
                "Wiederholung: Artikel",
                "Possessivartikel im Dativ"
              ],
              pronunciation: ["wichtige Redemittel auswendig lernen"],
              culture: ["Schultypen in Deutschland"]
            }
          },
          {
            title: "Immer online?",
            duration: "1 week",
            details: {
              topics: [
                "über Vor- und Nachteile sprechen",
                "Vergleiche formulieren",
                "ein Interview machen",
                "Meinungen in Texten verstehen",
                "die eigene Meinung äußern",
                "über Filme sprechen",
                "Filmbeschreibungen verstehen",
                "einen Film kommentieren",
                "einen Film verstehen und schreiben"
              ],
              grammar: [
                "Adjektive: Komparativ und Superlativ",
                "Vergleiche mit 'als' und 'wie'",
                "Nebensätze mit 'dass'"
              ],
              pronunciation: ["lange Texte lesen"],
              culture: ["Kino! Kino!"]
            }
          },
          {
            title: "Große und kleine Gefühle",
            duration: "1 week",
            details: {
              topics: [
                "über Gefühle sprechen",
                "Glückwünsche ausdrücken",
                "sich bedanken",
                "Freude oder Bedauern ausdrücken",
                "über ein Ereignis sprechen",
                "über eine Veranstaltung sprechen",
                "Blogs verstehen und schreiben"
              ],
              grammar: [
                "Nebensatz mit 'wenn'",
                "reflexive Verben"
              ],
              pronunciation: ["emotionales Sprechen"],
              culture: ["Ein Fest im Norden"]
            }
          },
          {
            title: "Leben in der Stadt",
            duration: "1 week",
            details: {
              topics: [
                "ein Vorstellungsgespräch verstehen",
                "nach Dingen fragen",
                "Gespräche bei Banken und Behörden verstehen",
                "höflich um etwas bitten",
                "einer Stadt-Tour folgen",
                "eine Stadt beschreiben"
              ],
              grammar: [
                "Adjektive nach dem bestimmten Artikel",
                "Präpositionen 'ohne' + Akkusativ und 'mit' + Dativ",
                "Konjunktiv II: 'könnte'"
              ],
              pronunciation: ["freundliche Bitten"],
              culture: ["Rund um den Ring: Wien"]
            }
          },
          {
            title: "Arbeitswelten",
            duration: "1 week",
            details: {
              topics: [
                "ein Gespräch am Fahrkartenschalter führen",
                "über Freizeitangebote sprechen",
                "Textinformationen entnehmen",
                "Personen vorstellen",
                "Berufswünsche äußern",
                "über einen Traumberuf schreiben",
                "ein Telefongespräch vorbereiten"
              ],
              grammar: [
                "Adjektive nach dem unbestimmten Artikel",
                "Wiederholung: 'oder / noch'"
              ],
              pronunciation: ["auf Deutsch telefonieren"],
              culture: ["Telefonieren am Arbeitsplatz"]
            }
          },
          {
            title: "Ganz schön mobil",
            duration: "1 week",
            details: {
              topics: [
                "Informationen erfragen",
                "eine Wegbeschreibung verstehen und geben",
                "über Vor- und Nachteile sprechen",
                "die eigene Meinung sagen",
                "über den Weg zur Arbeit sprechen",
                "eine Grafik beschreiben",
                "kurze Geschichten verstehen und schreiben"
              ],
              grammar: [
                "indirekte Fragesätze: W-Fragen und Ja-/Nein-Fragen mit 'ob'",
                "Ortsangaben: Präpositionen"
              ],
              pronunciation: ["schwierige Wörter"],
              culture: ["Der Weg zur Arbeit in D-A-CH"]
            }
          },
          {
            title: "Gelernt ist gelernt!",
            duration: "1 week",
            details: {
              topics: [
                "Lernprobleme verstehen und beschreiben",
                "Ratschläge verstehen und geben",
                "Berichte über den Berufsalltag verstehen",
                "Informationen erfragen und antworten",
                "ein Interview verstehen",
                "eine kurze Präsentation halten"
              ],
              grammar: [
                "Konjunktiv II: 'sollte' (Ratschläge)",
                "Interrogativartikel: 'Was für ein/e?'"
              ],
              pronunciation: ["b, d und g am Wortende"],
              culture: ["Der Verein 'Nachbarn für Nachbarn'"]
            }
          },
          {
            title: "Sportlich, sportlich",
            duration: "1 week",
            details: {
              topics: [
                "Begeisterung, Hoffnung und Enttäuschung ausdrücken",
                "Kommentare verstehen und schreiben",
                "Lob und Widerspruch ausdrücken",
                "Vorschläge machen und reagieren",
                "ein Reiseziel vorstellen"
              ],
              grammar: [
                "Sätze verbinden: 'deshalb', 'trotzdem'",
                "Verben mit Dativ und Akkusativ"
              ],
              pronunciation: ["schwierige Texte verstehen"],
              culture: ["Ein Ort für Sport"]
            }
          },
          {
            title: "Zusammen leben",
            duration: "1 week",
            details: {
              topics: [
                "um einen Gefallen bitten",
                "sich beschweren",
                "sich entschuldigen",
                "Ortsangaben machen",
                "ein Fest verstehen",
                "Erfahrungsberichte verstehen",
                "über Vergangenes berichten",
                "eine Stadt präsentieren",
                "über Haustiere sprechen",
                "Informationen verstehen und verbessern"
              ],
              grammar: [
                "Wechselpräpositionen",
                "Positions- und Richtungsverben",
                "Nebensatz mit 'als' und 'wenn'"
              ],
              pronunciation: ["Satzakzent"],
              culture: ["Die Deutschen und ihre Haustiere"]
            }
          },
          {
            title: "Wie die Zeit vergeht!",
            duration: "1 week",
            details: {
              topics: [
                "Aussagen über Zeitprobleme verstehen",
                "Wünsche äußern",
                "Ratschläge geben",
                "gemeinsam etwas planen",
                "anderen etwas fragen",
                "Texte erschließen",
                "Informationen austauschen",
                "über Sprichwörter sprechen"
              ],
              grammar: [
                "Konjunktiv II",
                "Verben mit Präposition"
              ],
              pronunciation: ["Satzakzent"],
              culture: ["Leben wie in einer anderen Zeit"]
            }
          },
          {
            title: "Gute Unterhaltung!",
            duration: "1 week",
            details: {
              topics: [
                "einen Festivalbesuch planen",
                "nachfragen",
                "über Musik sprechen",
                "einen Musiker / eine Musikerin / eine Band vorstellen",
                "Zeitungsmeldungen verstehen",
                "Informationen über Malerei verstehen",
                "über ein Bild sprechen und schreiben"
              ],
              grammar: [
                "Indefinitpronomen",
                "Relativsätze im Nominativ und Akkusativ",
                "Rückfragen"
              ],
              pronunciation: ["ein Bild beschreiben"],
              culture: ["Malerei gestern und heute"]
            }
          }
        ]
      }
    ],
    instructor:[
      {
        name: "Amit Bansal",
        title: "Certified German Instructor (C2)",
        bio: "With over 8 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
        image: "/images/Amit/amit_laptop.jpg",
        rating: "4.9/5"
      },
      {
        name: "Linda Selijimi",
        title: "Native Tutor",
        bio: "Former university professor with expertise in German grammar, literature, and business communication.",
        image: "/images/teachers/linda.webp",
        rating: "4.9/5"
      },
      {
        name: "Riya Suneja",
        title: "Certified German Instructor (C1)",
        bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
        image: "/images/teachers/riya.webp",
        rating: "4.9/5"
      },
      {
        name: "Chhavi Gupta",
        title: "Certified German Instructor (C1)",
        bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
        image: "/images/teachers/chhavi.webp",
        rating: "4.9/5"
      }
    ],
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
        title: "German Combo Course A1 + A2 +B1 Course for Dedicated Learners",
        description: "Take the first step to consistent learning with daily classes and confidence-building practice.",
        level: "A1 + A2 + B1 Combo",
        price: "₹16,999",
        image: "/images/courses/a2.jpg",
        link: "/courses/beginner-a2"
      },
      {
        title: "German Combo Course A2 + B1 Course for Intermediate Learners",
        description: "Take the first step to consistent learning with daily classes and confidence-building practice.",
        level: "A2 + B1 Combo",
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
      title: "Netzwerk Neu Based B1 Curriculum",
      duration: "12 chapters",
      lessons: [
        {
          title: "Gute Reise!",
          duration: "1 week",
          details: {
            topics: [
              "über Vorlieben und Abneigungen sprechen",
              "Gespräche über die Reiseplanung führen",
              "Informationen zu Reisezielen verstehen",
              "eine Urlaubsgeschichte schreiben",
              "Durchsagen verstehen",
              "einen Blogeintrag verstehen"
            ],
            grammar: [
              "Infinitiv mit zu",
              "Nebensätze mit da/weil und obwohl"
            ],
            pronunciation: ["n, ng, nk"],
            culture: [
              "Arbeiten auf der Alm",
              "Film: Ranger im Nationalpark Schwarzwald"
            ]
          }
        },
        {
          title: "Das ist ja praktisch!",
          duration: "1 week",
          details: {
            topics: [
              "über Kaufverhalten und Dienstleistungen sprechen",
              "Folgen ausdrücken",
              "etwas reklamieren",
              "Informationen über neue Technik verstehen",
              "Gründe und Gegengründe ausdrücken",
              "einen Kommentar schreiben",
              "Werbeanzeigen vergleichen",
              "über Werbestrategien sprechen"
            ],
            grammar: [
              "Verb lassen",
              "Folgekonnektoren: deshalb, deswegen, darum, daher, sodass, so … dass",
              "Genitiv",
              "Präpositionen wegen und trotz + Genitiv"
            ],
            pronunciation: ["ts und tst"],
            culture: [
              "Werbung in Deutschland",
              "Die Netzwerk-WG: Zu Besuch im Repair Café"
            ]
          }
        },
        {
          title: "Veränderungen",
          duration: "1 week",
          details: {
            topics: [
              "über Veränderungen im Leben sprechen",
              "über Vergangenes berichten",
              "über Glück sprechen",
              "Zeitangaben machen",
              "eine Radiosendung verstehen",
              "von Veränderungen erzählen",
              "über gutes Benehmen sprechen"
            ],
            grammar: [
              "Präteritum",
              "Zeitangaben mit Präpositionen im Dativ und Genitiv"
            ],
            pronunciation: ["mehrere Konsonanten hintereinander"],
            culture: [
              "Höflichkeit in D-A-CH",
              "Film: Boxen – mehr als nur ein Sport"
            ]
          }
        },
        {
          title: "Arbeitswelt",
          duration: "1 week",
          details: {
            topics: [
              "Gespräche bei der Arbeit verstehen",
              "Irreales ausdrücken",
              "sich entschuldigen",
              "auf Entschuldigungen reagieren",
              "Bewerbungstipps verstehen",
              "über Bewerbungen sprechen",
              "Informationen geben",
              "Tipps austauschen"
            ],
            grammar: [
              "Konjunktiv II",
              "irreale Bedingungssätze",
              "Pronomen und Pronominaladverbien",
              "Verben mit Präposition + Nebensatz"
            ],
            pronunciation: ["freundlich oder unfreundlich?"],
            culture: [
              "Bewerbungsgespräch in Deutschland",
              "Film: Arbeiten im Ausland"
            ]
          }
        },
        {
          title: "Umweltfreundlich?",
          duration: "1 week",
          details: {
            topics: [
              "etwas vergleichen",
              "über Ideen sprechen",
              "Ziele ausdrücken",
              "über das Wetter sprechen",
              "über Start-ups und Umweltschutz diskutieren",
              "eine Umweltaktion vorstellen"
            ],
            grammar: [
              "Komparativ und Superlativ von Nomen",
              "Nebensätze mit damit und um ... zu"
            ],
            pronunciation: ["lange Sätze sprechen"],
            culture: [
              "Das Wetter in D-A-CH",
              "Engagement für Mensch und Natur",
              "Film: Foodsharing"
            ]
          }
        },
        {
          title: "Blick nach vorn",
          duration: "1 week",
          details: {
            topics: [
              "Pläne und Vorsätze verstehen",
              "Ratschläge geben",
              "über Zukunftsvorstellungen sprechen",
              "Ziele besprechen und schreiben",
              "über Lieder sprechen"
            ],
            grammar: [
              "Futur I",
              "Relativsätze mit Präposition",
              "Vokale vor s/ß"
            ],
            pronunciation: ["deutliche Betonung"],
            culture: [
              "Das Lied Kaum erwarten",
              "Blick in die Zukunft"
            ]
          }
        },
        {
          title: "Zwischenmenschliches",
          duration: "1 week",
          details: {
            topics: [
              "Freundschaftsgeschichten verstehen",
              "zeitliche Abfolgen ausdrücken",
              "von Freundschaften erzählen",
              "Konflikte und Konfliktgespräche führen",
              "ein Paar vorstellen",
              "über Fabeln sprechen"
            ],
            grammar: [
              "Plusquamperfekt",
              "Temporale Nebensätze: bevor, bis, nachdem, seit/seitdem, während"
            ],
            pronunciation: ["Intonation bei Modalpartikeln"],
            culture: [
              "Berühmte Paare",
              "Film: Zusammenleben – WG 50+"
            ]
          }
        },
        {
          title: "Rund um Körper und Geist",
          duration: "1 week",
          details: {
            topics: [
              "Hilfe anbieten und ablehnen",
              "jemanden warnen",
              "über Musik und Gefühle sprechen",
              "Diskussion im Radio verstehen"
            ],
            grammar: [
              "nicht/kein/nur + brauchen + zu + Infinitiv",
              "Reflexivpronomen"
            ],
            pronunciation: ["Satzmelodie"],
            culture: [
              "Sinnesorte in D-A-CH",
              "Die Netzwerk-WG: Tanzen ist Leidenschaft"
            ]
          }
        },
        {
          title: "Kunststücke",
          duration: "1 week",
          details: {
            topics: [
              "Informationen aus Zeitungstexten weitergeben",
              "ein Kursprogramm verstehen",
              "Kunst beschreiben",
              "Impro-Geschichten und Interviews verstehen"
            ],
            grammar: [
              "Stellung von nicht",
              "Adjektive ohne Artikel",
              "Vokal am Wortanfang"
            ],
            pronunciation: ["Wortakzent"],
            culture: [
              "Kunst in Innsbruck",
              "Volkslieder",
              "Film: Theater – Wie entsteht ein Bühnenstück?"
            ]
          }
        },
        {
          title: "Miteinander",
          duration: "1 week",
          details: {
            topics: [
              "über soziales Engagement sprechen",
              "über ein Projekt schreiben",
              "über Institutionen und die EU sprechen",
              "eine Präsentation halten"
            ],
            grammar: [
              "Passiv (Präsens, Präteritum, Perfekt)",
              "Passiv mit Modalverb"
            ],
            pronunciation: ["Kontrastakzente in Fragen mit oder"],
            culture: [
              "Mini-München",
              "Europäische Union",
              "Film: Interkulturelles Dolmetschen – Was ist das?"
            ]
          }
        },
        {
          title: "Stadt, Land, Fluss",
          duration: "1 week",
          details: {
            topics: [
              "über das Leben in der Stadt sprechen",
              "einen Magazintext verstehen",
              "einen Bericht schreiben",
              "über lebenswerte Städte diskutieren",
              "einen Stadtbesuch planen"
            ],
            grammar: [
              "Artikelwörter als Pronomen",
              "irgendein/eine/welche",
              "Adjektive als Nomen",
              "Relativsätze mit was und wo"
            ],
            pronunciation: ["Texte vorlesen – Satzzeichen helfen"],
            culture: [
              "Leipzig, Zürich",
              "Film: Tübingen – ein Stadtporträt"
            ]
          }
        },
        {
          title: "Geld regiert die Welt?",
          duration: "1 week",
          details: {
            topics: [
              "Bankgespräche führen",
              "Informationen auf Webseiten verstehen",
              "über Tätigkeiten sprechen",
              "schwierige Situationen beschreiben",
              "informativen Text schreiben"
            ],
            grammar: [
              "Sätze mit je … desto/umso",
              "Partizip II als Adjektiv"
            ],
            pronunciation: ["Wortakzent"],
            culture: [
              "Die Fuggerei in Augsburg",
              "Film: Tauschring"
            ]
          }
        }
      ]
    }
  ],
  instructor:[
    {
      name: "Amit Bansal",
      title: "Certified German Instructor (C2)",
      bio: "With over 8 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/Amit/amit_laptop.jpg",
      rating: "4.9/5"
    },
    {
      name: "Linda Selijimi",
      title: "Native Tutor",
      bio: "Former university professor with expertise in German grammar, literature, and business communication.",
      image: "/images/teachers/linda.webp",
      rating: "4.9/5"
    },
    {
      name: "Riya Suneja",
      title: "Certified German Instructor (C1)",
      bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
      image: "/images/teachers/riya.webp",
      rating: "4.9/5"
    },
    {
      name: "Chhavi Gupta",
      title: "Certified German Instructor (C1)",
      bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
      image: "/images/teachers/chhavi.webp",
      rating: "4.9/5"
    }
  ],
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

"intermediate-b2.1": {
  title: "German B2.1 Course for Upper-Intermediate Learners",
  description: "Strengthen your language skills with advanced grammar, rich vocabulary, and practical exam preparation for Goethe B2.1",
  level: "B2.1 Upper-Intermediate",
  duration: "10–12 Weeks",
  lessons: 12,
  maxStudents: 15,
  price: "₹19,499",
  discount: "None",
  image: "/images/courses/b2.jpg",
  overview: [
    "Daily live classes with communicative focus",
    "Thorough Goethe B2.1 exam training",
    "In-depth grammar and vocabulary expansion",
    "Interactive speaking and writing exercises"
  ],
  learningPoints: [
    "Discuss complex topics fluently and spontaneously",
    "Understand the main ideas of complex texts",
    "Produce clear, detailed texts on various subjects",
    "Use idiomatic expressions and connect ideas coherently",
    "Prepare effectively for the B2.1 exam"
  ],
  curriculum: [
    {
      title: "Aspekte Neu Based B2.1 Curriculum",
      duration: "12 chapters",
      lessons: [
        {
          title: "Leute heute",
          duration: "1 week",
          details: {
            topics: [
              "Lebensträume",
              "Freundschaft",
              "Heldentum",
              "Glück und Erfolg"
            ],
            grammar: [
              "Tempusformen (Vergangenheit)",
              "Verben mit Ergänzungen"
            ],
            pronunciation: [], // Not specified in original
            culture: [] // Not specified
          }
        },
        {
          title: "Wohnwelten",
          duration: "1 week",
          details: {
            topics: [
              "Wohntypen",
              "Wohlfühlen im Wohnraum",
              "Obdachlosigkeit",
              "außergewöhnliche Hotels",
              "Hotel Mama"
            ],
            grammar: [
              "Trennbare und untrennbare Verben",
              "n-Deklination"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Wie geht’s denn so?",
          duration: "1 week",
          details: {
            topics: [
              "Gesundheit",
              "Ernährung",
              "Lachen",
              "Stressbewältigung"
            ],
            grammar: [
              "Pluralbildung der Nomen",
              "Adjektivdeklination"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Viel Spaß!",
          duration: "1 week",
          details: {
            topics: [
              "Freizeitgestaltung",
              "Spiele",
              "Abenteuerberichte",
              "Filmkritik"
            ],
            grammar: [
              "Komparativ und Superlativ",
              "Konnektoren (kausal, konzessiv, konsekutiv)"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Alles will gelernt sein",
          duration: "1 week",
          details: {
            topics: [
              "Lernorte",
              "lebenslanges Lernen",
              "Denkaufgaben",
              "Lerntechniken"
            ],
            grammar: [
              "Infinitiv mit und ohne zu",
              "Modalverben (Tempus und Bedeutung)"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Berufsbilder",
          duration: "1 week",
          details: {
            topics: [
              "Berufswünsche",
              "Geschäftsideen",
              "Bewerbungstipps",
              "ungewöhnliche Berufe"
            ],
            grammar: [
              "Zukünftiges ausdrücken (Präsens, Futur I)",
              "Verben mit Präpositionen",
              "Präpositionaladverbien",
              "Fragewörter"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Für immer und ewig",
          duration: "1 week",
          details: {
            topics: [
              "Lebensformen",
              "große Liebe",
              "virtuelle Beziehungen"
            ],
            grammar: [
              "Reflexive Verben",
              "Relativsätze"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Kaufen, kaufen, kaufen",
          duration: "1 week",
          details: {
            topics: [
              "Konsum",
              "Werbung",
              "Reklamationen",
              "Kaufentscheidungen"
            ],
            grammar: [
              "Finalsätze",
              "Konjunktiv II"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Endlich Urlaub",
          duration: "1 week",
          details: {
            topics: [
              "Reisetypen",
              "Weltreisen",
              "Reiseangebote",
              "Hamburg als Reiseziel"
            ],
            grammar: [
              "Temporalsätze",
              "temporale Präpositionen"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        },
        {
          title: "Natürlich Natur!",
          duration: "1 week",
          details: {
            topics: [
              "Umweltprobleme",
              "Tierschutz",
              "Wasser als Ressource"
            ],
            grammar: [
              "Passiv",
              "lokale Präpositionen (mit Wechselpräpositionen)"
            ],
            pronunciation: [], // Not specified
            culture: [] // Not specified
          }
        }
      ]
    }
  ],
  instructor:[
    {
      name: "Amit Bansal",
      title: "Certified German Instructor (C2)",
      bio: "With over 8 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/Amit/amit_laptop.jpg",
      rating: "4.9/5"
    },
    {
      name: "Linda Selijimi",
      title: "Native Tutor",
      bio: "Former university professor with expertise in German grammar, literature, and business communication.",
      image: "/images/teachers/linda.webp",
      rating: "4.9/5"
    },
    {
      name: "Riya Suneja",
      title: "Certified German Instructor (C1)",
      bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
      image: "/images/teachers/riya.webp",
      rating: "4.9/5"
    },
    {
      name: "Chhavi Gupta",
      title: "Certified German Instructor (C1)",
      bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
      image: "/images/teachers/chhavi.webp",
      rating: "4.9/5"
    }
  ],
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

"intermediate-b2.2": {
  title: "German B2.2 Course for Upper-Intermediate Learners",
  description: "Strengthen your language skills with advanced grammar, rich vocabulary, and practical exam preparation for Goethe B2.",
  level: "B2.2 Upper-Intermediate",
  duration: "10–12 Weeks",
  lessons: 12,
  maxStudents: 15,
  price: "₹19,499",
  discount: "None",
  image: "/images/courses/b2.jpg",
  overview: [
    "Daily live classes with communicative focus",
    "Thorough Goethe B2.2 exam training",
    "In-depth grammar and vocabulary expansion",
    "Interactive speaking and writing exercises"
  ],
  learningPoints: [
    "Discuss complex topics fluently and spontaneously",
    "Understand the main ideas of complex texts",
    "Produce clear, detailed texts on various subjects",
    "Use idiomatic expressions and connect ideas coherently",
    "Prepare effectively for the B2.2 exam"
  ],
  curriculum: [
    {
      title: "Aspekte Neu Based B2.2 Curriculum",
      duration: "12 chapters",
      lessons: [
        {
          title: "Heimat ist ...",
          duration: "1 week",
          details: {
            topics: [
              "Heimat",
              "Migration",
              "Integration",
              "kulturelle Identität"
            ],
            grammar: [
              "Wortstellung im Satz",
              "Negation"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Sprich mit mir!",
          duration: "1 week",
          details: {
            topics: [
              "Kommunikation",
              "Körpersprache",
              "Sprachförderung",
              "Smalltalk"
            ],
            grammar: [
              "Vergleichssätze",
              "das Wort 'es'"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Arbeit ist das halbe Leben?",
          duration: "1 week",
          details: {
            topics: [
              "Beruf",
              "Teamarbeit",
              "Bewerbung",
              "Arbeitszufriedenheit"
            ],
            grammar: [
              "Zweiteilige Konnektoren",
              "Konnektoren mit zu + Infinitiv",
              "Alternativen"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Zusammen leben",
          duration: "1 week",
          details: {
            topics: [
              "Gewaltprävention",
              "Armut",
              "Internetverhalten",
              "Zukunftswünsche"
            ],
            grammar: [
              "Relativsätze mit wer",
              "Nomen-Verb-Verbindungen"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Wer Wissen schafft, macht Wissenschaft",
          duration: "1 week",
          details: {
            topics: [
              "Kinder und Wissenschaft",
              "Lügen",
              "Zukunftsvisionen",
              "Büroalltag"
            ],
            grammar: [
              "Passiv",
              "Passiversatzformen",
              "Indefinitpronomen"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Fit für ...",
          duration: "1 week",
          details: {
            topics: [
              "Onlinekauf",
              "Telefonieren",
              "Umgang mit Kollegen",
              "Prüfungsvorbereitung"
            ],
            grammar: [
              "Passiv mit sein",
              "Vergleichssätze mit als, als ob und als wenn im Konjunktiv II"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Kulturwelten",
          duration: "1 week",
          details: {
            topics: [
              "UNESCO-Welterbe",
              "Kunstraub",
              "Sprachensterben",
              "Buchrezensionen"
            ],
            grammar: [
              "Textzusammenhang",
              "Modalität mit müssen"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Das macht(e) Geschichte",
          duration: "1 week",
          details: {
            topics: [
              "Geschichte erleben",
              "Mauerfall",
              "historische Irrtümer",
              "Grenzen"
            ],
            grammar: [
              "Nomen, Verben und Adjektive mit Präposition",
              "indirekte Rede mit Konjunktiv I"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Mit viel Gefühl ...",
          duration: "1 week",
          details: {
            topics: [
              "Musik",
              "Farben",
              "Gefühle",
              "Entscheidungen"
            ],
            grammar: [
              "Nominalisierung von Verben",
              "Modalpartikeln"
            ],
            pronunciation: [],
            culture: []
          }
        },
        {
          title: "Ein Blick in die Zukunft",
          duration: "1 week",
          details: {
            topics: [
              "Roboter",
              "Gesundheit",
              "Berufe der Zukunft",
              "Zukunftsszenarien"
            ],
            grammar: [
              "Partizipien als Adjektive",
              "während",
              "Präpositionen mit Genitiv"
            ],
            pronunciation: [],
            culture: []
          }
        }
      ]
    }
  ],
  instructor:[
    {
      name: "Amit Bansal",
      title: "Certified German Instructor (C2)",
      bio: "With over 8 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/Amit/amit_laptop.jpg",
      rating: "4.9/5"
    },
    {
      name: "Linda Selijimi",
      title: "Native Tutor",
      bio: "Former university professor with expertise in German grammar, literature, and business communication.",
      image: "/images/teachers/linda.webp",
      rating: "4.9/5"
    },
    {
      name: "Riya Suneja",
      title: "Certified German Instructor (C1)",
      bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
      image: "/images/teachers/riya.webp",
      rating: "4.9/5"
    },
    {
      name: "Chhavi Gupta",
      title: "Certified German Instructor (C1)",
      bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
      image: "/images/teachers/chhavi.webp",
      rating: "4.9/5"
    }
  ],
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
      title: "Aspekte Neu Based C1 Curriculum",
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
  instructor:[
    {
      name: "Amit Bansal",
      title: "Certified German Instructor (C2)",
      bio: "With over 8 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/Amit/amit_laptop.jpg",
      rating: "4.9/5"
    },
    {
      name: "Linda Selijimi",
      title: "Native Tutor",
      bio: "Former university professor with expertise in German grammar, literature, and business communication.",
      image: "/images/teachers/linda.webp",
      rating: "4.9/5"
    },
    {
      name: "Riya Suneja",
      title: "Certified German Instructor (C1)",
      bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
      image: "/images/teachers/riya.webp",
      rating: "4.9/5"
    },
    {
      name: "Chhavi Gupta",
      title: "Certified German Instructor (C1)",
      bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
      image: "/images/teachers/chhavi.webp",
      rating: "4.9/5"
    }
  ],
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
      title: "Aspekte Neu Based C2 Curriculum",
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
  instructor:[
    {
      name: "Amit Bansal",
      title: "Certified German Instructor (C2)",
      bio: "With over 8 years of experience teaching German, Amit specializes in immersive, result-driven language education with daily live classes and exam training.",
      image: "/images/Amit/amit_laptop.jpg",
      rating: "4.9/5"
    },
    {
      name: "Linda Selijimi",
      title: "Native Tutor",
      bio: "Former university professor with expertise in German grammar, literature, and business communication.",
      image: "/images/teachers/linda.webp",
      rating: "4.9/5"
    },
    {
      name: "Riya Suneja",
      title: "Certified German Instructor (C1)",
      bio: "Focuses on conversational German and professional contexts. Helps students with job applications in Germany.",
      image: "/images/teachers/riya.webp",
      rating: "4.9/5"
    },
    {
      name: "Chhavi Gupta",
      title: "Certified German Instructor (C1)",
      bio: "Specializes in beginner courses and pronunciation training. Makes learning German fun and accessible.",
      image: "/images/teachers/chhavi.webp",
      rating: "4.9/5"
    }
  ],
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

  
  if (!category || !subcategory) {
    return courseVariations['beginner-a1'];
  }
  
  const key = `${category}-${subcategory}`;
  const variation = courseVariations[key] || {};
  
  return variation;
};
