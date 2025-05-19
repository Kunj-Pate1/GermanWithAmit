import { Globe, GraduationCap, Euro, Briefcase, Map, BookOpen, MessageSquare, ArrowRight, Check, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const StudyInGermany = () => {
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

  return (
    <>
          <Navbar />
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-german-dark to-german text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-center bg-no-repeat"></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-800/30 px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5 mr-2" />
              <span>International Student Program</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Study in Germany in English <br />
              <span className="text-blue-200">Bachelor's & Master's Programs</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              <span className="font-semibold">No German? No Problem.</span> Germany offers world-class education in English at public and private universities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center justify-center">
                Explore Programs <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Germany Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 mr-3 text-blue-600" />
              Why Study in Germany?
            </h2>
            <p className="text-xl text-gray-600">
              Discover the advantages that make Germany Europe's top study destination for international students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-600">
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
      <div className="py-20 bg-gray-50">
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
                <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                Free Program Matching
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
                  <button type="submit" className="w-full bg-blue-500 hover:bg-blue-800 text-white py-4 px-6 rounded-lg font-bold text-lg">
                    Get Program Recommendations
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                After submission, our advisors will contact you with suitable programs and application support.
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