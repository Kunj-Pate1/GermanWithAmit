import { ArrowLeftRight, BookOpen, Clock, Mail, ShieldAlert, FileText, Lightbulb, AlertTriangle, Handshake } from 'lucide-react';
import Navbar from '@/components/Navbar';

const RefundPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german text-white py-16 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Handshake className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Clear guidelines for your course registration and payments
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
          {/* Introduction */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-center">
            <p className="text-lg text-gray-700">
              We're excited you chose <span className="font-bold text-german-dark">GermanWithAmit</span> for your language journey! Please review our policies carefully.
            </p>
          </div>

          {/* Course Registration */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FileText className="w-6 h-6 text-german-dark" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Course Registration & Payment</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <Clock className="w-5 h-5 text-german-dark" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Payment Due:</span> Course fee is payable at registration. Late payments may result in loss of participation rights.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <BookOpen className="w-5 h-5 text-german-dark" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Course Materials:</span> Unless specified, materials like books are not included in the course fee.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ArrowLeftRight className="w-6 h-6 text-german-dark" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Cancellation & Refund Policy</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-50 p-2 rounded-lg mr-3">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">General Policy</h3>
                    <p className="text-gray-700">
                      No refunds or cancellations are permitted under normal circumstances.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <AlertTriangle className="w-5 h-5 text-german-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Emergency Exceptions</h3>
                    <p className="text-gray-700">
                      For serious emergencies (illness, family crisis, natural disasters), fees may be transferred to a future course, subject to availability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <Mail className="w-5 h-5 text-german-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Cancellation Requests</h3>
                    <p className="text-gray-700">
                      Must be submitted in writing to <span className="font-medium">director@germanwithamit.com</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg mr-3">
                    <ArrowLeftRight className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Our Cancellations</h3>
                    <p className="text-gray-700">
                      If we cancel a course, full refunds will be issued within 14 days of cancellation notice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Policies */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Participant Responsibilities */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Participant Responsibilities</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></div>
                  <span className="text-gray-700">Attend classes regularly and complete assignments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-german-dark mt-2 mr-2"></div>
                  <span className="text-gray-700">Maintain a positive learning environment</span>
                </li>
              </ul>
            </section>
            
            {/* Intellectual Property */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lightbulb className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Intellectual Property</h2>
              </div>
              <p className="text-gray-700">
                All course materials are protected by copyright laws. Reproduction or distribution without permission is prohibited.
              </p>
            </section>
            
            {/* Termination */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <ShieldAlert className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Termination of Service</h2>
              </div>
              <p className="text-gray-700">
                We reserve the right to terminate access for non-compliance with these terms.
              </p>
            </section>
            
            {/* Liability */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Limitation of Liability</h2>
              </div>
              <p className="text-gray-700">
                We're not liable for indirect or consequential damages from service use.
              </p>
            </section>
          </div>

          {/* Amendments & Contact */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Policy Amendments</h2>
              </div>
              <p className="text-gray-700">
                We may modify these terms and will notify you of significant changes.
              </p>
            </section>
            
            <section className="bg-white rounded-xl shadow-sm p-6 border border-blue-50">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-german-dark" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
              </div>
              <p className="text-gray-700">
                Questions? Email us at <span className="font-medium">director@germanwithamit.com</span>
              </p>
            </section>
          </div>

          {/* Closing CTA */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Start Your German Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're excited to help you achieve your language learning goals!
            </p>
            <button className="bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all">
              Explore Our Courses
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicyPage;