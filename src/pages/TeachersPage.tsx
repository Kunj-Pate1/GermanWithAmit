import { User, GraduationCap, Languages, Award, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TeamPage = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Amit Sharma",
      role: "Founder & Senior Instructor",
      specialization: "Test Preparation, Business German",
      experience: "8 years teaching",
      languages: "German, English, Hindi",
      bio: [
        "As the founder of our school, I bring extensive experience preparing students for Goethe, TestDaF, and Telc exams. My corporate background helps professionals master business German for career advancement. I emphasize practical communication skills with cultural insights, having lived in Munich for 5 years.",
        "My teaching philosophy centers on making complex grammar concepts accessible through real-world applications. I've developed specialized techniques for exam preparation that focus on time management and common pitfalls."
      ],
      detailedBio: [
        "With over 450 students guided to success, I've refined a methodology that combines structured learning with cultural immersion. My Munich experience allows me to provide authentic insights into German business etiquette and social norms that you won't find in textbooks.",
        "Beyond exam preparation, I specialize in helping professionals navigate German workplace culture. From writing polished business emails to conducting effective meetings, my corporate German modules are designed for immediate practical application."
      ],
      image: "/images/Amit/9.png",
      badges: ["Goethe Certified", "Corporate Trainer", "Exam Specialist"],
      methodology: "Communicative approach with focus on real-life scenarios",
      education: "MA in German Linguistics, University of Delhi",
      achievements: [
        "98% exam pass rate among students",
        "Developed specialized business German curriculum",
        "Regular speaker at language education conferences",
        "Authored 3 German learning workbooks"
      ]
    },
    {
      id: 2,
      name: "Bharathi",
      role: "Children's Program Director",
      specialization: "Kids & School Students",
      experience: "5 years teaching",
      languages: "German, English, Hindi, Gujarati",
      bio: [
        "Hallo! Ich bin Bharathi ",
        "Willkommen! I’m Bharathi, a passionate German language trainer with over five years of experience helping learners dive into the world of Deutsch. I’m proudly C1-certified by the Goethe-Institut Bangalore, and over the years, I’ve had the joy of guiding students from all walks of life through the beautiful (and yes, sometimes challenging!) journey of learning German.",
        "My own Sprachreise began during my time living in Germany. Surrounded by the rhythm of the language and immersed in daily life – from shopping at local Wochenmärkte to navigating conversations with native speakers – I fell in love with more than just vocabulary and grammar. I discovered a deep connection to die deutsche Kultur, one that continues to inspire my work and teaching philosophy to this day.",
        "Currently working as a freelance trainer, I offer tailored lessons designed to suit your level, pace, and goals – whether you're prepping for a Goethe exam, moving to a German-speaking country, or simply curious about the language. My classes blend Struktur with Spaß – structured learning with plenty of creativity, cultural context, and yes, a few laughs along the way!",
        "I truly believe in the motto::",
        "“Fehler sind Helfer” – Mistakes are our helpers.",
        "Every misstep is just a stepping stone toward fluency.",
        "Teaching is more than just a job for me – it’s a passion that grows with each learner I meet. And trust me, learning German is kein Hexenwerk – it’s not rocket science! With the right guidance, motivation, and a little bit of Durchhaltevermögen (perseverance), it becomes an incredibly rewarding experience.",
        "When I’m not teaching, you’ll find me reading German novels, enjoying some Kaffee und Kuchen, or revisiting memories of cobbled streets, Christmas markets, and cozy German cafés.",
        "As the saying goes:",
        "“Aller Anfang ist schwer, aber jeder Schritt lohnt sich.”",
        "Every beginning is difficult, but every step is worth it.",
        "So, if you're ready to say “Ich lerne Deutsch!” with pride, I’d love to walk this journey with you.",
        "Auf geht’s – let’s begin! "
      ],
      detailedBio: [
        "I've developed a unique methodology that combines Montessori principles with language acquisition techniques specifically for young Indian learners. My classroom is a vibrant space where children naturally absorb German through play and creative activities.",
        "Each lesson incorporates multiple learning modalities - visual, auditory, and kinesthetic - to accommodate different learning styles and keep students engaged throughout their language journey."
      ],
      image: "/images/teachers/priya.jpg",
      badges: ["Child Educator", "Goethe A1-A2 Expert", "Bilingual Teaching"],
      methodology: "Play-based learning with multisensory techniques",
      education: "BA in Education with German Minor, Mumbai University",
      achievements: [
        "Created award-winning German learning app for kids",
        "Developed CBSE-aligned German curriculum for grades 1-8",
        "Conducted teacher training workshops in 5 states"
      ]
    },
    {
      id: 3,
      name: "Vedika",
      role: "Cultural Integration Specialist",
      specialization: "Conversational German, Relocation Prep",
      experience: "6 years teaching",
      languages: "German, English, Hindi, Marathi",
      bio: [
        "After living in Berlin for 3 years, I developed specialized programs to help students navigate daily life in Germany. My lessons cover everything from apartment hunting to doctor visits, enriched with cultural nuances.",
        "I host virtual Stammtisch (conversation tables) where students practice real dialogues. My strength is helping learners sound natural while building intercultural competence."
      ],
      detailedBio: [
        "My relocation preparation course goes beyond language, covering practical aspects of German bureaucracy, healthcare system, and social customs. Students appreciate my 'survival German' modules that help them settle in quickly.",
        "Having personally experienced the challenges of moving to Germany, I understand the emotional aspects of relocation and incorporate confidence-building exercises in my teaching."
      ],
      image: "/images/teachers/rahul.jpg",
      badges: ["Cultural Trainer", "DAAD Scholar", "Pronunciation Coach"],
      methodology: "Situational learning with cultural context",
      education: "MA in Intercultural Communication, Pune University",
      achievements: [
        "Helped 200+ families relocate to Germany",
        "Created most popular German relocation YouTube channel in India",
        "Developed 'German for Daily Life' video course"
      ]
    },
    {
      id: 4,
      name: "Sayali",
      role: "Academic German Coordinator",
      specialization: "Academic German, University Preparation",
      experience: "7 years teaching",
      languages: "German, English, Bengali",
      bio: [
        "As a former university lecturer in Germany, I help students master academic German for Studienkolleg and degree programs. My specialized modules cover research presentations, thesis writing, and lecture comprehension.",
        "I bridge the gap between conversational German and the formal language required in academic settings, helping students make this challenging transition."
      ],
      detailedBio: [
        "My academic German program is structured around the actual requirements of German universities. Students learn to analyze complex texts, participate in seminars, and write research papers with proper academic style.",
        "Having examined hundreds of student papers, I've developed targeted exercises that address the most common mistakes international students make in academic writing."
      ],
      image: "/images/teachers/ananya.jpg",
      badges: ["PhD in German", "Academic Advisor", "Writing Specialist"],
      methodology: "Content-based instruction with academic focus",
      education: "PhD in German Literature, Heidelberg University",
      achievements: [
        "100% university acceptance rate for prepared students",
        "Published research on academic language acquisition",
        "Developed scientific writing rubric adopted by 3 German universities"
      ]
    },
    {
      id: 5,
      name: "Linda",
      role: "Corporate Training Manager",
      specialization: "Corporate Group Training",
      experience: "4 years teaching",
      languages: "German, English, Punjabi",
      bio: [
        "I design customized German programs for Indian companies expanding into DACH regions. My industry-specific courses (IT, manufacturing, healthcare) feature realistic business scenarios through role-plays.",
        "Having developed specialized German for IT professionals, I understand the precise language needs of technical fields and help teams communicate effectively with German-speaking colleagues."
      ],
      detailedBio: [
        "My corporate training focuses on workplace communication - from technical vocabulary to meeting etiquette. I've created specialized modules for engineering, pharmaceutical, and financial services industries.",
        "What sets my approach apart is the integration of intercultural business communication. Professionals learn not just the language, but how to build relationships with German counterparts."
      ],
      image: "/images/teachers/vikram.jpg",
      badges: ["Corporate German", "HRDC Certified", "Group Dynamics"],
      methodology: "Task-based learning for professional contexts",
      education: "MBA with German Specialization, IIM Bangalore",
      achievements: [
        "Trained employees from 50+ Indian companies",
        "Developed industry-specific language benchmarks",
        "Created fastest-growing corporate German program in India"
      ]
    },
    {
      id: 6,
      name: "Neha Joshi",
      role: "Medical German Specialist",
      specialization: "Medical German, Nursing Exam Prep",
      experience: "5 years teaching",
      languages: "German, English, Hindi, Kannada",
      bio: [
        "As a certified medical interpreter, I've helped over 200 healthcare professionals pass German language requirements. My hospital-based vocabulary modules cover patient intake, treatment explanations, and documentation.",
        "I volunteer at German hospitals, which keeps my medical terminology current. Students appreciate my practical approach to mastering challenging pronunciation in medical contexts."
      ],
      detailedBio: [
        "My nursing exam preparation course has helped candidates achieve some of the highest scores on language proficiency tests. I focus on the specific vocabulary and communication skills needed in German healthcare settings.",
        "Beyond language, I prepare students for the cultural aspects of working in German medicine - from understanding hierarchy in hospitals to communicating with patients from diverse backgrounds."
      ],
      image: "/images/teachers/neha.jpg",
      badges: ["Medical German", "BfArM Certified", "Nursing Specialist"],
      methodology: "Contextual learning with medical scenarios",
      education: "MS in Medical Translation, Manipal University",
      achievements: [
        "100% of students passed B2-level medical German exams",
        "Created standardized patient dialogue database",
        "Developed mobile app for medical terminology"
      ]
    },
    {
      id: 7,
      name: "Arjun Kapoor",
      role: "Goethe Exam Strategist",
      specialization: "Goethe Exam Techniques",
      experience: "9 years teaching",
      languages: "German, English, Hindi",
      bio: [
        "With a 98% Goethe exam pass rate among my students, I've developed proven techniques for each test component. My intensive workshops focus on time management, common pitfalls, and high-yield vocabulary.",
        "I provide personalized feedback on mock tests and targeted exercises to maximize scores, helping students achieve their certification goals efficiently."
      ],
      detailedBio: [
        "My exam preparation system breaks down each section of Goethe tests into manageable skills. Students learn not just German, but how to take the tests strategically - a combination that leads to exceptional results.",
        "I've analyzed hundreds of exam papers to identify patterns in questions and grading. This allows me to teach students exactly what examiners look for in their responses."
      ],
      image: "/images/teachers/arjun.jpg",
      badges: ["Goethe Master Trainer", "Test Strategist", "Score Improver"],
      methodology: "Strategic test preparation with skill-building",
      education: "MA in German with TESOL Certification",
      achievements: [
        "Average 20% score improvement in 12 weeks",
        "Developed Goethe exam prediction algorithm",
        "Trained 500+ successful exam candidates"
      ]
    },
    {
      id: 8,
      name: "Sonia Reddy",
      role: "Family Relocation Coach",
      specialization: "Family Relocation, Kids Integration",
      experience: "4 years teaching",
      languages: "German, English, Telugu",
      bio: [
        "Specializing in family relocation support, I help children adapt to German schools while parents learn essential communication skills. My unique family package includes joint parent-child sessions and school-specific vocabulary building.",
        "As a mother who relocated with young children, I understand the challenges families face and provide compassionate, practical guidance through this transition."
      ],
      detailedBio: [
        "My family program addresses the language needs of each family member - from kindergarten vocabulary for young children to formal communication for parents dealing with schools and authorities.",
        "I've developed special materials to help children maintain their mother tongue while acquiring German, supporting bilingual development and smoother cultural adaptation."
      ],
      image: "/images/teachers/sonia.jpg",
      badges: ["Family Coach", "Child Integration", "Bilingual Parenting"],
      methodology: "Family-centered language acquisition",
      education: "Child Psychology Certification with German Focus",
      achievements: [
        "Helped 150+ families with school integration",
        "Created bilingual parenting guide",
        "Developed 'German Through Play' kindergarten program"
      ]
    }
  ];

  const openModal = (teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german py-20 px-4 md:px-6 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Teaching Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
              Passionate German language experts with diverse specializations
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{teamMembers.length} Dedicated Instructors</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span>35+ Years Combined Experience</span>
              </div>
              <div className="flex items-center">
                <Languages className="w-5 h-5 mr-2" />
                <span>10+ Languages Spoken</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-blue-50 overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-48 bg-blue-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-german-dark font-medium">{member.role}</p>
                    </div>

                    <div className="mb-4 flex-grow relative">
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.p 
                          className="text-gray-700"
                          initial={{ height: '7.5rem' }}
                          whileHover={{ height: 'auto' }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {member.bio[0]}
                        </motion.p>
                      </div>
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.badges.map((badge, i) => (
                        <span key={i} className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-blue-100 pt-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 text-gray-500 mr-2" />
                          <span>{member.experience}</span>
                        </div>
                        <div className="flex items-center">
                          <Languages className="w-4 h-4 text-gray-500 mr-2" />
                          <span>{member.languages.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-4">
                      <Button 
                        onClick={() => openModal(member)}
                        className="w-full bg-german-dark hover:bg-german text-white"
                      >
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Teaching Approach Section */}
          <section className="my-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Teaching Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <User className="w-5 h-5 text-german-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Learning Paths</h3>
                    <p className="text-gray-600">
                      Each student receives a customized plan based on their goals, whether it's passing an exam, business communication, or cultural integration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Award className="w-5 h-5 text-german-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Industry-Specific Expertise</h3>
                    <p className="text-gray-600">
                      Our specialists have developed programs for healthcare, IT, academia, and corporate environments with relevant vocabulary and scenarios.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <GraduationCap className="w-5 h-5 text-german-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Immersion</h3>
                    <p className="text-gray-600">
                      Language comes alive when you understand the cultural context. Our lessons incorporate German customs, humor, and social norms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Languages className="w-5 h-5 text-german-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Multilingual Support</h3>
                    <p className="text-gray-600">
                      Our team speaks 10+ Indian and international languages, helping students bridge concepts from their native languages to German.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Teacher Modal */}
        <AnimatePresence>
          {isModalOpen && selectedTeacher && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column - Image and Key Details */}
                    <div className="md:w-1/3 space-y-6">
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        <img 
                          src={selectedTeacher.image} 
                          alt={selectedTeacher.name}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Key Details</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Specialization</p>
                            <p className="font-medium">{selectedTeacher.specialization}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Teaching Experience</p>
                            <p className="font-medium">{selectedTeacher.experience}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Languages</p>
                            <p className="font-medium">{selectedTeacher.languages}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Methodology</p>
                            <p className="font-medium">{selectedTeacher.methodology}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Notable Achievements</h3>
                        <ul className="space-y-2">
                          {selectedTeacher.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-german-dark mr-2">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Bio and Detailed Info */}
                    <div className="md:w-2/3 space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{selectedTeacher.name}</h2>
                        <p className="text-german-dark font-medium text-lg mb-4">{selectedTeacher.role}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedTeacher.badges.map((badge, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                              {badge}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">About Me</h3>
                          {selectedTeacher.bio.map((para, i) => (
                            <p key={i} className="text-gray-700">{para}</p>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Teaching Philosophy</h3>
                        {selectedTeacher.detailedBio.map((para, i) => (
                          <p key={i} className="text-gray-700">{para}</p>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <p className="text-gray-700">{selectedTeacher.education}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button className="bg-german-dark hover:bg-german text-white px-8 py-4 text-lg">
                      Book a Consultation
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TeamPage;