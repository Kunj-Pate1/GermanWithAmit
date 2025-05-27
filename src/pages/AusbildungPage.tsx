import { Building, GraduationCap, Briefcase, Globe, Clock, Calendar, Mail, MapPin } from 'lucide-react';
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
              Your complete guide to vocational training opportunities in Germany
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
                  Ausbildung is Germany's renowned dual vocational training system that combines classroom learning with on-the-job training. It's a perfect pathway to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Gain recognized qualifications in your chosen field</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Earn while you learn (average salary €800-€1,200/month)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Secure excellent job prospects in Germany</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Potentially obtain long-term residency in Germany</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 text-german-dark mr-2" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Duration</h4>
                    <p className="text-gray-600">Typically 2-3.5 years depending on the profession</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Requirements</h4>
                    <p className="text-gray-600">School leaving certificate, basic German (B1/B2), and company acceptance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fields Available</h4>
                    <p className="text-gray-600">350+ recognized training occupations across all sectors</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Fields */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Popular Ausbildung Fields</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Field 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <GraduationCap className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Healthcare</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nursing, medical assistant, physiotherapy, pharmacy technician
                </p>
                <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                  High Demand
                </div>
              </div>
              
              {/* Field 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Briefcase className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Technology</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  IT specialist, mechatronics technician, electronics technician
                </p>
                <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                  Excellent Pay
                </div>
              </div>
              
              {/* Field 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Building className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Business</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Industrial clerk, bank clerk, hotel specialist, retail management
                </p>
                <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                  International Options
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Application Process Timeline</h2>
            
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
                    <h3 className="text-xl font-bold text-gray-800">Research & Preparation</h3>
                    <p className="text-gray-600">August - October</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Identify suitable programs, check requirements, and begin learning German (if needed)
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Document Preparation</h3>
                    <p className="text-gray-600">November - December</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Prepare CV, cover letters, certificates, and translations. Obtain recognition of foreign qualifications if needed.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Application Period</h3>
                    <p className="text-gray-600">January - April</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Apply directly to companies offering Ausbildung positions. Most applications open in January.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Interviews & Selection</h3>
                    <p className="text-gray-600">March - June</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Attend interviews and assessments. Successful candidates receive training contracts.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-german-dark text-white z-10 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-5/12 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-gray-800">Program Start</h3>
                    <p className="text-gray-600">August/September</p>
                  </div>
                  <div className="hidden md:block md:w-2/12"></div>
                  <div className="md:w-5/12 md:pl-8 mt-4 md:mt-0">
                    <p className="text-gray-700">
                      Begin your Ausbildung! Most programs start in August or September each year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Support Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-german-dark mr-2" />
                  Application Assistance
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>CV and cover letter preparation for German standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Document translation and certification guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Application strategy and company matching</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 text-german-dark mr-2" />
                  Preparation Programs
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Intensive German courses (A2 to B2+)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Interview preparation and mock interviews</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Cultural orientation and living in Germany guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-german-dark to-german rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your German Ausbildung Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact us for personalized guidance on finding and applying for the perfect vocational training program in Germany.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a 
                href="mailto:ausbildung@germanwithamit.com" 
                className="bg-white hover:bg-blue-50 text-german-dark px-6 py-3 rounded-lg font-medium transition-all"
              >
                Email Us
              </a>
              <a 
                href="/contact" 
                className="bg-transparent hover:bg-blue-900 border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AusbildungPage;