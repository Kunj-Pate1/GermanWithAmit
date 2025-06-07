


import { Globe, GraduationCap, Euro, Briefcase, Map, BookOpen, MessageSquare, ArrowRight, Check, ChevronRight, Play, Youtube, Instagram, X, ChevronDown, ChevronUp, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const StudyInGermany = () => {
  const [showUniPopup, setShowUniPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('public');
  const [expandedSection, setExpandedSection] = useState(null);

  const stats = [
    { value: "3,900+", label: "English Programs" },
    { value: "0-€3,000", label: "Annual Tuition" },
    { value: "18 Months", label: "Work Visa" },
    { value: "Top 5%", label: "Global Universities" }
  ];

  const benefits = [
    { 
      icon: <Euro className="w-8 h-8" />,
      title: "Affordable Education",
      desc: "Public universities charge no tuition, only small semester fees (€150-€400)"
    },
    { 
      icon: <GraduationCap className="w-8 h-8" />,
      title: "World-Class Degrees",
      desc: "German degrees rank among the most respected worldwide"
    },
    { 
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Bridge",
      desc: "18-month post-study work visa to launch your European career"
    },
    { 
      icon: <Map className="w-8 h-8" />,
      title: "European Hub",
      desc: "Travel to 26+ countries with your student residence permit"
    }
  ];

  const universities = {
    public: [
      {
        name: "Technical University of Munich",
        ranking: "#1 in Germany",
        fees: "€150/semester",
        programs: "132 English programs",
        highlight: "Top for Engineering & Technology"
      },
      {
        name: "Ludwig Maximilian University of Munich",
        ranking: "#2 in Germany",
        fees: "€150/semester",
        programs: "89 English programs",
        highlight: "Excellent research facilities"
      },
      {
        name: "Heidelberg University",
        ranking: "#3 in Germany",
        fees: "€170/semester",
        programs: "67 English programs",
        highlight: "Oldest university in Germany"
      },
      {
        name: "Humboldt University of Berlin",
        ranking: "#4 in Germany",
        fees: "€160/semester",
        programs: "58 English programs",
        highlight: "Strong in Arts & Humanities"
      },
      {
        name: "Free University of Berlin",
        ranking: "#5 in Germany",
        fees: "€160/semester",
        programs: "72 English programs",
        highlight: "Excellent international network"
      }
    ],
    private: [
      {
        name: "WHU - Otto Beisheim School of Management",
        ranking: "#1 Private Business School",
        fees: "€18,000/year",
        programs: "12 English programs",
        highlight: "Triple crown accreditation"
      },
      {
        name: "ESMT Berlin",
        ranking: "#2 Private Business School",
        fees: "€20,000/year",
        programs: "8 English programs",
        highlight: "Founded by 25 global companies"
      },
      {
        name: "Jacobs University Bremen",
        ranking: "#1 Private Comprehensive",
        fees: "€15,000/year",
        programs: "24 English programs",
        highlight: "100% English curriculum"
      },
      {
        name: "SRH Berlin University",
        ranking: "Top 10 Private",
        fees: "€10,000/year",
        programs: "36 English programs",
        highlight: "Strong industry connections"
      },
      {
        name: "Constructor University",
        ranking: "Top 5 Private",
        fees: "€12,000/year",
        programs: "18 English programs",
        highlight: "International student body"
      }
    ]
  };

  const reels = [
    { id: 1, title: "Campus Tour TUM", views: "15k" },
    { id: 2, title: "Student Life Berlin", views: "22k" },
    { id: 3, title: "Application Tips", views: "35k" },
    { id: 4, title: "Blocked Account Guide", views: "28k" }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Hero Section with Video */}
        <div className="relative bg-gradient-to-b from-german-dark to-german text-white overflow-hidden py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-center bg-no-repeat"></div>
          </div>
          
          <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-blue-800/30 px-4 py-2 rounded-full mb-6">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>International Student Program</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Study in Germany in English <br />
                  <span className="text-blue-200">Bachelor's & Master's Programs</span>
                </h1>
                
                <p className="text-xl mb-8 max-w-2xl">
                  <span className="font-semibold">No German? No Problem.</span> Germany offers world-class education in English at public and private universities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-german px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center justify-center">
                    Explore Programs <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setShowUniPopup(true)}
                    className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                  >
                    Top Universities <ChevronDown className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                  {/* <iframe 
                    className="w-full h-64 md:h-96"
                    src= "/images/course/studyingermany.png"
                    title="Why Study in Germany?" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe> */}
                  <img src=" /images/course/studyingermany.jpg" className="w-full h-64 md:h-96" alt="Study In Germany Image" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-all">
                    {/* <Play className="w-12 h-12 text-white" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="container mx-auto px-6 -mt-12 relative z-20">
          <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl font-bold text-german mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Germany Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 mr-3 text-german" />
                Why Study in Germany?
              </h2>
              <p className="text-xl text-gray-600">
                Discover the advantages that make Germany Europe's top study destination for international students
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="bg-german w-14 h-14 rounded-full flex items-center justify-center mb-4 text-german-light">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Program Types */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Your Pathway Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Public Universities Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md border-t-4 border-blue-600">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Public Universities</h3>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No tuition fees (only semester contributions €150-€400)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1,800+ English programs available</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>World-class research facilities</span>
                      </li>
                    </ul>
                    <button className="text-blue-600 font-semibold flex items-center">
                      Browse Public Universities <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Private Universities Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md border-t-4 border-purple-600">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-2 rounded-full mr-4">
                        <GraduationCap className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold">Private Universities</h3>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Tuition €3,000-€20,000/year</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>More flexible admission requirements</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Strong industry connections</span>
                      </li>
                    </ul>
                    <button className="text-purple-600 font-semibold flex items-center">
                      Browse Private Universities <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Reels Showcase */}
        {/* <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <Instagram className="w-8 h-8 mr-3 text-pink-600" />
                Student Life in Germany
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Follow our Instagram for daily updates and student stories
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {reels.map(reel => (
                  <div key={reel.id} className="relative aspect-[9/16] bg-gray-200 rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div>
                        <p className="text-white font-medium">{reel.title}</p>
                        <p className="text-white/80 text-sm flex items-center">
                          <Play className="w-4 h-4 mr-1" /> {reel.views} views
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-white/30" />
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://www.instagram.com/german_with_amit?igsh=MTI1dTJneTU4NjFvMA=="
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
              >
                <Instagram className="w-5 h-5 mr-2" /> Follow Us
              </a>
            </div>
          </div>
        </div> */}

        {/* Blocked Account - Creative Expanded Section */}
        <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                <div className="inline-flex items-center bg-german text-white px-6 py-2 rounded-full">
                  <Euro className="w-6 h-6 mr-2" />
                  Understanding Your Blocked Account
                </div>
              </h2>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Visual Timeline */}
                <div className="p-8 border-b">
                  <h3 className="text-2xl font-bold mb-6 text-german">Your Financial Journey</h3>
                  <div className="relative">
                    <div className="absolute left-4 h-full w-0.5 bg-german-dark"></div>
                    <div className="space-y-8">
                      <div className="relative flex items-start">
                        <div className="absolute left-4 -ml-2.5 mt-1.5 w-5 h-5 rounded-full bg-german ring-4 ring-blue-200"></div>
                        <div className="ml-10">
                          <h4 className="font-bold text-lg">Step 1: Open Blocked Account</h4>
                          <p className="text-gray-600">Deposit €11,208 (current requirement) before visa application</p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-4 -ml-2.5 mt-1.5 w-5 h-5 rounded-full bg-german ring-4 ring-blue-200"></div>
                        <div className="ml-10">
                          <h4 className="font-bold text-lg">Step 2: Visa Approval</h4>
                          <p className="text-gray-600">German embassy verifies your blocked account</p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="absolute left-4 -ml-2.5 mt-1.5 w-5 h-5 rounded-full bg-german ring-4 ring-blue-200"></div>
                        <div className="ml-10">
                          <h4 className="font-bold text-lg">Step 3: Monthly Access</h4>
                          <p className="text-gray-600">Withdraw €934/month for living expenses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Interactive FAQ */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-german">Frequently Asked Questions</h3>
                  
                  <div className="space-y-4">
                    <div 
                      className={`border rounded-xl overflow-hidden transition-all ${expandedSection === 'purpose' ? 'border-blue-300' : 'border-gray-200'}`}
                    >
                      <button 
                        onClick={() => toggleSection('purpose')}
                        className="w-full flex justify-between items-center p-4 text-left font-medium"
                      >
                        <span>Why is a blocked account required?</span>
                        {expandedSection === 'purpose' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                      {expandedSection === 'purpose' && (
                        <div className="p-4 pt-0 text-gray-600 bg-blue-50">
                          <p>German immigration law requires international students to prove they have sufficient funds to cover living expenses for one year. This ensures students can focus on their studies without financial hardship. The blocked account is the most commonly accepted proof of financial resources.</p>
                        </div>
                      )}
                    </div>
                    
                    <div 
                      className={`border rounded-xl overflow-hidden transition-all ${expandedSection === 'amount' ? 'border-blue-300' : 'border-gray-200'}`}
                    >
                      <button 
                        onClick={() => toggleSection('amount')}
                        className="w-full flex justify-between items-center p-4 text-left font-medium"
                      >
                        <span>How much money do I need to deposit?</span>
                        {expandedSection === 'amount' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                      {expandedSection === 'amount' && (
                        <div className="p-4 pt-0 text-gray-600 bg-blue-50">
                          <p>As of 2024, the required amount is <strong>€11,208</strong> for one year. This is calculated based on Germany's estimated living costs of <strong>€934 per month</strong>. The amount is adjusted periodically, so check for updates before applying.</p>
                        </div>
                      )}
                    </div>
                    
                    <div 
                      className={`border rounded-xl overflow-hidden transition-all ${expandedSection === 'access' ? 'border-blue-300' : 'border-gray-200'}`}
                    >
                      <button 
                        onClick={() => toggleSection('access')}
                        className="w-full flex justify-between items-center p-4 text-left font-medium"
                      >
                        <span>When can I access my money?</span>
                        {expandedSection === 'access' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                      {expandedSection === 'access' && (
                        <div className="p-4 pt-0 text-gray-600 bg-blue-50">
                          <p>After arriving in Germany and opening a local bank account, you can access <strong>€934 per month</strong>. The money is released in monthly installments to ensure you have consistent funds throughout your stay.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Fintiba Partnership */}
                <div className="bg-german text-white p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-center">
                      <img 
                        src="/images/partner_logos/Fintiba_logo.png" 
                        alt="Fintiba" 
                        className="h-20 object-contain"  // Increased from h-12 to h-20
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Our Partnership with Fintiba</h3>
                    <p className="mb-6">We've partnered with Fintiba, Germany's most trusted blocked account provider, to simplify your financial preparation:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                        <span>100% online setup in minutes</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Includes mandatory health insurance</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Lower fees than traditional banks</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Free consultation with our experts</span>
                      </div>
                    </div>
                    
                    <div className="flex direction-row gap-6">
                    <button className="bg-white text-german hover:bg-german-light px-6 py-3 rounded-lg font-bold transition-all">
                      Start Your Blocked Account
                    </button>
                    <button className="bg-white text-german hover:bg-german-light px-6 py-3 rounded-lg font-bold transition-all">
                      Join Finitiba's Live Webinars with Experts
                      {/* link to https://fintiba.com/get-ready-for-germany/ */}
                    </button>

                    </div>
                    
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* University Popup Modal */}
        {showUniPopup && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Top German Universities
                </h3>
                <button 
                  onClick={() => setShowUniPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex border-b mb-6">
                  <button
                    onClick={() => setActiveTab('public')}
                    className={`px-6 py-3 font-medium ${activeTab === 'public' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  >
                    Public Universities
                  </button>
                  <button
                    onClick={() => setActiveTab('private')}
                    className={`px-6 py-3 font-medium ${activeTab === 'private' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  >
                    Private Universities
                  </button>
                </div>
                
                <div className="space-y-6">
                  {universities[activeTab].map((uni, index) => (
                    <div key={index} className="border rounded-xl overflow-hidden hover:shadow-md transition-all">
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-xl font-bold mb-2">{uni.name}</h4>
                            <div className="flex flex-wrap gap-4 mb-4">
                              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {uni.ranking}
                              </span>
                              <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                {uni.fees}
                              </span>
                              <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                {uni.programs}
                              </span>
                            </div>
                          </div>
                          <button className="text-german hover:text-blue-800 flex items-center">
                            View Programs <ArrowRight className="ml-1 w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-start bg-blue-50 p-3 rounded-lg">
                          <Info className="w-5 h-5 text-german mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-blue-800">{uni.highlight}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setShowUniPopup(false)}
                    className="bg-german hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Form Section */}
        <div className="py-20 text-white from-german-dark to-german" style={{backgroundColor: "rgb(14 165 233 / var(--tw-bg-opacity, 1))"}}>
          <div className="container mx-auto px-6 from-german-dark to-german">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 from-german-dark to-german">
                <h2 className="text-3xl font-bold mb-4">Find Your Perfect Program</h2>
                <p className="text-xl text-blue-200">
                  Get personalized university recommendations based on your profile
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-german" />
                  Free Consultation & Program Matching
                </h3>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2">Full Name*</label>
                    <input type="text" className="w-full p-3 border rounded-lg" required />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Phone Number*</label>
                    <input type="tel" className="w-full p-3 border rounded-lg" required />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Email Address*</label>
                    <input type="email" className="w-full p-3 border rounded-lg" required />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">City*</label>
                    <input type="text" className="w-full p-3 border rounded-lg" required />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">University Preference*</label>
                    <select className="w-full p-3 border rounded-lg" required>
                      <option value="">Select</option>
                      <option value="public">Public University</option>
                      <option value="private">Private University</option>
                      <option value="unsure">Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium mb-2">German Language Level</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option value="">Select</option>
                      <option value="none">No knowledge</option>
                      <option value="a1">A1 Beginner</option>
                      <option value="a2">A2 Basic</option>
                      <option value="b1">B1 Intermediate</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-medium mb-2">Planning to Learn German?*</label>
                    <div className="grid grid-cols-3 gap-4">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="learn-german" value="yes" className="h-4 w-4" required />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="learn-german" value="no" className="h-4 w-4" required />
                        <span>No</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="learn-german" value="maybe" className="h-4 w-4" required />
                        <span>Maybe</span>
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-german-dark hover:bg-german text-white py-4 px-6 rounded-lg font-bold text-lg">
                      Get Free Consultation
                    </button>
                  </div>
                </form>
                
                <p className="text-sm text-gray-500 mt-4">
                  After submission, our advisors will contact you within 24 hours with suitable programs and application support, including guidance on blocked accounts and visa procedures.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default StudyInGermany;