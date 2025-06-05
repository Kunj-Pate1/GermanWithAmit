import { GraduationCap, BookOpen, Globe, User, Home, Phone, Mail, Check, Flag, Briefcase, FlaskConical, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';

const StudienkollegPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german text-white py-16 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Studienkolleg – Your Bridge to Studying in Germany</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Powered by German With Amit in partnership with CBS International Business School, Cologne 🇩🇪
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          {/* What is Studienkolleg */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What is Studienkolleg?</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  If you're dreaming of a Bachelor's degree in Germany but completed only 12 years of school (like most students in India), you've probably run into the term "Studienkolleg."
                </p>
                <p className="text-gray-700 mb-4">
                  Studienkolleg (STK) is a foundation course offered in Germany that prepares international students for university admission. It's designed for students whose school-leaving certificate is not equivalent to the German Abitur, which is required for direct entry into German universities.
                </p>
                <p className="text-gray-700">
                  At German With Amit, we're making this pathway clearer, simpler, and more accessible — thanks to our official partnership with CBS International Business School in Cologne.
                </p>
              </div>
              <div className="md:w-1/3 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 text-german-dark mr-2" />
                  Why Studienkolleg?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-german-dark" />
                    </div>
                    <span>Become eligible for German universities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-german-dark" />
                    </div>
                    <span>Build academic German/English skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-german-dark" />
                    </div>
                    <span>Adapt to German academic culture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-german-dark" />
                    </div>
                    <span>Prepare for university entrance exam (FSP)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CBS Partner Section */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">CBS Cologne – Our Official Studienkolleg Partner</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-6">
                  Through our partnership with CBS International Business School, students gain access to one of Germany's officially recognized Studienkolleg programs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Government-approved FSP exam on campus</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Offered in English and German</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Students from 110+ countries</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Guaranteed seat at CBS after FSP</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Scholarships available</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-german-dark mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Full integration support</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Flag className="w-6 h-6 text-german-dark mr-2" />
                  What is the Feststellungsprüfung (FSP)?
                </h3>
                <p className="text-gray-700">
                  The Feststellungsprüfung is the final exam of the Studienkolleg program — and it's your official ticket to German university admission. At CBS, this exam is conducted in-house, meaning you don't need to worry about external institutions or government testing centers.
                </p>
                <p className="text-gray-700 mt-4">
                  Pass the FSP, and you're ready to apply to Bachelor's programs across Germany.
                </p>
              </div>
            </div>
          </section>

          {/* Studienkolleg Tracks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Choose Your Studienkolleg Track</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* W-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Briefcase className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">💼 W-Course</h3>
                </div>
                <p className="text-gray-600">
                  Business, Economics & Social Sciences. For careers in business, finance, management, and law.
                </p>
              </div>
              
              {/* T-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FlaskConical className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🔬 T-Course</h3>
                </div>
                <p className="text-gray-600">
                  Science, Tech, Engineering & Math. For engineering, computer science, math, or physical sciences.
                </p>
              </div>
              
              {/* M-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BookOpen className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🧬 M-Course</h3>
                </div>
                <p className="text-gray-600">
                  Medical & Life Sciences. For medicine, pharmacy, biology, or veterinary studies.
                </p>
              </div>
              
              {/* S/G-Course */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Palette className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">🎨 S/G-Course</h3>
                </div>
                <p className="text-gray-600">
                  Arts, Languages & Humanities. For degrees in humanities, linguistics, history, arts, and related fields.
                </p>
              </div>
            </div>
          </section>

          {/* Support Services */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">From India to Germany – We've Got You Covered</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <User className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Counseling & Selection</h3>
                  <p className="text-gray-600">Guidance for Studienkolleg and course selection</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Application Support</h3>
                  <p className="text-gray-600">Guidance for CBS and other universities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Flag className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Visa & SOP</h3>
                  <p className="text-gray-600">Complete documentation support</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Globe className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Language Training</h3>
                  <p className="text-gray-600">German & English preparation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Home className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Preparation</h3>
                  <p className="text-gray-600">Mentorship and checklists</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <Phone className="w-5 h-5 text-german-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">Help after you reach Germany</p>
                </div>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Start Your Studienkolleg Journey</h2>
            
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

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
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
                    I authorize German With Amit to contact me via Email, SMS, WhatsApp, and Call. <span className="text-red-500">*</span>
                  </label>
                </div>
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
            <h3 className="text-2xl font-bold mb-3">Ready to Begin Your German Education Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of students taking the smarter route to Germany with German With Amit and CBS Cologne.
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

export default StudienkollegPage;