import { ShieldCheck, Lock, Mail, User, Globe, ChartNoAxesColumn, Send, Edit, Bell } from 'lucide-react';
import Navbar from '@/components/Navbar';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german text-white py-16 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trust is important to us. Here's how we protect your data.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
          {/* Last Updated */}
          <div className="bg-blue-50 rounded-lg p-4 mb-8 flex items-center">
            <Bell className="text-german-dark mr-3 flex-shrink-0" />
            <p className="text-gray-700">
              <span className="font-semibold">Last Updated:</span> January 1, 2025
            </p>
          </div>

          {/* Information Collection */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <User className="w-6 h-6 text-german-dark" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">What Information We Collect</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <User className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="font-bold text-gray-800">Personal Information</h3>
                </div>
                <p className="text-gray-600">
                  Name, email address, contact details you provide when engaging with us.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <Globe className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="font-bold text-gray-800">Demographic Data</h3>
                </div>
                <p className="text-gray-600">
                  Location, preferences, interests to better understand your needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <ChartNoAxesColumn className="w-5 h-5 text-german-dark" />
                  </div>
                  <h3 className="font-bold text-gray-800">Additional Information</h3>
                </div>
                <p className="text-gray-600">
                  Details from surveys or offers to enhance your experience.
                </p>
              </div>
            </div>
          </section>

          {/* Why We Collect */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Send className="w-6 h-6 text-german-dark" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Why We Collect Information</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Understand Your Needs:</span> Improve our services by getting to know you better.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Internal Enhancement:</span> Maintain accurate records to improve our offerings.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Personalization:</span> Tailor our services to match your preferences.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Communication:</span> Send relevant updates and conduct market research.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Security & Rights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Data Security */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lock className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Your Data's Security</h2>
              </div>
              <p className="text-gray-700">
                We implement robust security measures to prevent unauthorized access, alteration, or disclosure of your information.
              </p>
            </section>
            
            {/* Third Party */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Third-Party Disclosure</h2>
              </div>
              <p className="text-gray-700">
                We never sell or trade your personal information without consent, except when required by law or essential for service provision.
              </p>
            </section>
            
            {/* Your Rights */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Edit className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Your Rights Matter</h2>
              </div>
              <p className="text-gray-700">
                You can access, correct, or delete your data, update preferences, or opt-out of communications at any time.
              </p>
            </section>
            
            {/* Changes & Contact */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Changes & Contact</h2>
              </div>
              <p className="text-gray-700">
                We may update this policy and will notify you of significant changes. Contact us at support@germanwithamit.com with any questions.
              </p>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Have Questions About Your Privacy?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're here to help you understand how your data is used and protected.
            </p>
            <a 
              href="mailto:support@germanwithamit.com" 
              className="inline-block bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;