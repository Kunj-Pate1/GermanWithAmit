import { Building, GraduationCap, Briefcase, Globe, Clock, Calendar, Mail, MapPin, Check, Euro, Flag, Scroll, User, Home, Phone, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';

const AusbildungPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german text-white py-16 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Building className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ausbildung in Germany</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Learn & Earn with German With Amit – Your Pathway to a Successful Career in Germany
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          {/* Introduction */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What is Ausbildung?</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Ausbildung (German for "vocational training") is a government-recognized program that combines theoretical classroom instruction with practical on-the-job experience at a real company. It's a fantastic alternative to traditional university education—and it's absolutely free!
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>You earn a monthly stipend of €1,000–€1,200 (₹90,000 to ₹1,00,000) while receiving industry-specific training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>After completion, you receive a certified qualification, job placement, and are eligible for Permanent Residency (PR) in Germany</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 text-german-dark mr-2" />
                  Key Benefits of Ausbildung
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Euro className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Earn While You Learn</h4>
                      <p className="text-gray-600">Monthly stipend up to €1,200</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">No Tuition Fees</h4>
                      <p className="text-gray-600">Sponsored by German companies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Hands-On Training</h4>
                      <p className="text-gray-600">Practical skills + work experience</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Flag className="w-5 h-5 text-german-dark mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Path to German PR</h4>
                      <p className="text-gray-600">Long-term employment and residency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Fields */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Ausbildung Courses Available for International Students</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              At German With Amit, we guide you to choose from over 300+ Ausbildung programs across high-demand sectors in Germany:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Nursing */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <GraduationCap className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🏥 Nursing</h3>
                </div>
                <p className="text-gray-600">
                  Start a rewarding career in healthcare. High demand across Germany.
                </p>
                <div className="mt-4">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                    High Demand
                  </div>
                </div>
              </div>

              {/* Hotel Management */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Briefcase className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🏨 Hotel Management & Hospitality</h3>
                </div>
                <p className="text-gray-600">
                  Perfect for 12th pass students looking for global careers in hospitality.
                </p>
                <div className="mt-4">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                    International Options
                  </div>
                </div>
              </div>

              {/* Mechatronics */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Building className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🛠️ Mechatronics</h3>
                </div>
                <p className="text-gray-600">
                  Train in a high-tech blend of mechanics, electronics, and IT.
                </p>
                <div className="mt-4">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                    Future-Proof
                  </div>
                </div>
              </div>

              {/* IT */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BookOpen className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🖥️ Information Technology (IT)</h3>
                </div>
                <p className="text-gray-600">
                  Ideal for those with a tech mindset. Software, systems & networks.
                </p>
                <div className="mt-4">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                    Excellent Pay
                  </div>
                </div>
              </div>

              {/* Retail Sales */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <User className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🛍️ Retail Sales</h3>
                </div>
                <p className="text-gray-600">
                  Learn sales, merchandising & customer service in top German brands.
                </p>
              </div>

              {/* Business Admin */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Home className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">💼 Office & Business Administration</h3>
                </div>
                <p className="text-gray-600">
                  Start a stable career in HR, finance, and office management.
                </p>
                <div className="mt-4">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                    Stable Career
                  </div>
                </div>
              </div>

              {/* Logistics */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🚚 Logistics & Supply Chain</h3>
                </div>
                <p className="text-gray-600">
                  Master warehouse operations and international logistics.
                </p>
              </div>

              {/* Construction */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Scroll className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">👷‍♂️ Construction</h3>
                </div>
                <p className="text-gray-600">
                  Work in infrastructure, architecture, and site management.
                </p>
                <div className="mt-4">
                  <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                    High Demand
                  </div>
                </div>
              </div>

              {/* Cosmetology */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <User className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">💇 Cosmetology & Hairdressing</h3>
                </div>
                <p className="text-gray-600">
                  Hands-on training in salons and beauty services.
                </p>
              </div>

              {/* Banking */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Euro className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🧾 Banking & Finance</h3>
                </div>
                <p className="text-gray-600">
                  Open a career in banking, loans, and financial services.
                </p>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ausbildung Journey with German With Amit</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              We make your Ausbildung dream simple, step-by-step:
            </p>
            
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-100 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Eligibility Check</h3>
                    <p className="text-gray-600">First Step</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We assess your education, age, documents, and career goals
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">German Language Training</h3>
                    <p className="text-gray-600">3-6 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Complete A1 to B2 level training with real-time speaking practice and cultural workshops
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Exam Preparation</h3>
                    <p className="text-gray-600">1-2 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Intensive coaching to pass Goethe B1/B2 certification exams
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Company Interviews</h3>
                    <p className="text-gray-600">2-3 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      We train and schedule your interviews with German employers
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Visa & Documentation</h3>
                    <p className="text-gray-600">1-2 months</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Full guidance in contract handling, visa process, and embassy interviews
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">6</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Fly to Germany</h3>
                    <p className="text-gray-600">Final Step</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Start your Ausbildung program fully prepared—with a job and future in hand!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ausbildung Eligibility Criteria</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              To qualify for Ausbildung in Germany, you need:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
                  <p className="text-gray-600">Minimum 10+2 or 10+Diploma (55% marks)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Globe className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">German Proficiency</h3>
                  <p className="text-gray-600">Certified B1/B2 (Goethe or equivalent)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <User className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Age</h3>
                  <p className="text-gray-600">18 to 25 years</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Scroll className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Documents</h3>
                  <p className="text-gray-600">Passport and good health/background</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all">
                Check My Eligibility Now
              </button>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose German With Amit?</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Unlike big agencies, German With Amit offers personalized coaching and direct mentorship. You don't just learn German—you prepare to live and work in Germany with confidence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <User className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Direct Mentorship</h3>
                </div>
                <p className="text-gray-600">
                  From Amit, a certified German language expert with industry experience
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Home className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Small Batch Sizes</h3>
                </div>
                <p className="text-gray-600">
                  Focused attention with limited students per batch for better learning
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Flag className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Cultural Training</h3>
                </div>
                <p className="text-gray-600">
                  Real-world cultural training with German natives for smooth integration
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">100% Transparency</h3>
                </div>
                <p className="text-gray-600">
                  Clear processes with no hidden fees or false promises
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Briefcase className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visa Assistance</h3>
                </div>
                <p className="text-gray-600">
                  Complete support until you land in Germany with your visa
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Phone className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Ongoing Support</h3>
                </div>
                <p className="text-gray-600">
                  Help available even after you reach Germany for any challenges
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Hear from Our Students</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Riya Sharma, Delhi</h3>
                    <p className="text-gray-600 text-sm">Nursing Ausbildung</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I got into an Ausbildung program for nursing thanks to Amit sir's guidance. The language training and interview prep were perfect!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-german-dark w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Akshay Patil, Mumbai</h3>
                    <p className="text-gray-600 text-sm">IT Ausbildung</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "From learning A1 to getting my B2 certificate and landing in Germany—it was all possible because of German With Amit."
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">FAQs – Ausbildung in Germany</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Is Ausbildung free for Indian students?</h3>
                <p className="text-gray-600">
                  Yes, Ausbildung has no tuition fees. In fact, you get paid while you train.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Do I need to know German?</h3>
                <p className="text-gray-600">
                  Absolutely. B1 or B2 German proficiency is mandatory for most programs.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Will I get a job after Ausbildung?</h3>
                <p className="text-gray-600">
                  Yes, job placement is guaranteed upon successful completion of your program.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">How long does Ausbildung last?</h3>
                <p className="text-gray-600">
                  Most programs are between 2 to 3.5 years, depending on the course.
                </p>
              </div>
              
              <div className="pb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I apply for PR after Ausbildung?</h3>
                <p className="text-gray-600">
                  Yes, after working in Germany for a few years post-Ausbildung, you can apply for Permanent Residency.
                </p>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Apply for Ausbildung in Germany</h2>
            
            <form className="max-w-2xl mx-auto">
              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="mt-1 text-sm text-gray-500">Please enter a valid email address</p>
              </div>

              {/* Mobile */}
              <div className="mb-6">
                <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="mt-1 text-sm text-gray-500">10-15 digits required</p>
              </div>

              {/* Highest Qualification */}
              <div className="mb-6">
                <label htmlFor="qualification" className="block text-gray-700 font-medium mb-2">
                  Highest Qualification <span className="text-red-500">*</span>
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your qualification</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Diploma (10 + 3)">Diploma (10 + 3)</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Ausbildung Field */}
              <div className="mb-6">
                <label htmlFor="ausbildungField" className="block text-gray-700 font-medium mb-2">
                  Select Ausbildung Field <span className="text-red-500">*</span>
                </label>
                <select
                  id="ausbildungField"
                  name="ausbildungField"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a field</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Hotel Management & Hospitality">Hotel Management & Hospitality</option>
                  <option value="Mechatronics">Mechatronics</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Retail Sales">Retail Sales</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                  <option value="Construction">Construction</option>
                  <option value="Cosmetology & Hairdressing">Cosmetology & Hairdressing</option>
                  <option value="Banking & Finance">Banking & Finance</option>
                </select>
              </div>

              {/* German Proficiency */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  German Language Proficiency <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {['No Experience', 'A1', 'A2', 'B1', 'B2 or Above'].map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="radio"
                        id={`proficiency-${level.replace(/\s+/g, '-')}`}
                        name="germanProficiency"
                        value={level}
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor={`proficiency-${level.replace(/\s+/g, '-')}`} className="ml-2 block text-gray-700">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* City/State */}
              <div className="mb-6">
                <label htmlFor="cityState" className="block text-gray-700 font-medium mb-2">
                  City / State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Passport */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Do you have a valid passport? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {['Yes', 'No', 'Applying soon'].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        type="radio"
                        id={`passport-${option.replace(/\s+/g, '-')}`}
                        name="passport"
                        value={option}
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor={`passport-${option.replace(/\s+/g, '-')}`} className="ml-2 block text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* How did you hear */}
              <div className="mb-6">
                <label htmlFor="hearAbout" className="block text-gray-700 font-medium mb-2">
                  How did you hear about German With Amit?
                </label>
                <input
                  type="text"
                  id="hearAbout"
                  name="hearAbout"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Consent */}
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <label htmlFor="consent" className="ml-2 block text-gray-700">
                    I authorize German With Amit and its representatives to contact me via Email, SMS, WhatsApp, and Call. I understand this overrides any registration under DND/NDNC. <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              {/* Additional Questions */}
              <div className="mb-6">
                <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
                  Additional Questions or Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-german-dark hover:bg-german text-white px-8 py-3 rounded-lg font-medium transition-all"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </section>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-german-dark to-german rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your Ausbildung Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you want to build a career in healthcare, IT, hospitality, or skilled trades, German With Amit is your trusted guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a 
                href="mailto:info@germanwithamit.com" 
                className="bg-white hover:bg-blue-50 text-german-dark px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" /> Email Us
              </a>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="bg-transparent hover:bg-blue-900 border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              📲 WhatsApp: +91-XXXXXXXXXX<br />
              🌐 Website: www.germanwithamit.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AusbildungPage;