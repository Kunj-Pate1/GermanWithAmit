import { User, Calendar, Video, Award, Clock, Mail, Phone, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';

const CoachingPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german text-white py-16 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <User className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">1:1 German Coaching</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Personalized language coaching tailored to your unique goals and learning style.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          {/* Coaching Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Personalized Coaching?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <User className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Tailored to You</h3>
                </div>
                <p className="text-gray-600">
                  Lessons customized to your specific needs, whether it's conversation practice, grammar mastery, or exam preparation.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Flexible Scheduling</h3>
                </div>
                <p className="text-gray-600">
                  Choose times that work for your schedule. Morning, afternoon, or evening sessions available.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Award className="w-6 h-6 text-german-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Certified Expertise</h3>
                </div>
                <p className="text-gray-600">
                  Learn from an experienced German instructor with proven teaching methodologies.
                </p>
              </div>
            </div>
          </section>

          {/* Course Structure */}
          <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Course Structure</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-german-dark mr-2" />
                  Session Details
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>60-minute personalized sessions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Weekly or bi-weekly meetings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Recorded sessions available</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Video className="w-5 h-5 text-german-dark mr-2" />
                  What's Included
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Personalized lesson plans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Homework assignments with feedback</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Progress tracking and reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-german-dark"></div>
                    </div>
                    <span>Between-session support via email</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Pricing Options</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Single Session */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Single Session</h3>
                <p className="text-3xl font-bold text-german-dark mb-4">$75</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>One 60-minute session</li>
                  <li>Personalized feedback</li>
                  <li>Homework assignment</li>
                </ul>
                <button className="w-full bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all">
                  Book Now
                </button>
              </div>
              
              {/* Package 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-german-dark text-center transform scale-105 z-10">
                <div className="bg-german-dark text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">4-Session Package</h3>
                <p className="text-3xl font-bold text-german-dark mb-1">$260</p>
                <p className="text-gray-500 text-sm mb-4">($65 per session)</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>Four 60-minute sessions</li>
                  <li>Comprehensive progress tracking</li>
                  <li>Priority scheduling</li>
                  <li>Email support between sessions</li>
                </ul>
                <button className="w-full bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all">
                  Book Now
                </button>
              </div>
              
              {/* Package 8 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">8-Session Package</h3>
                <p className="text-3xl font-bold text-german-dark mb-1">$480</p>
                <p className="text-gray-500 text-sm mb-4">($60 per session)</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>Eight 60-minute sessions</li>
                  <li>Detailed progress reports</li>
                  <li>Flexible rescheduling</li>
                  <li>Bonus learning materials</li>
                </ul>
                <button className="w-full bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </section>

          {/* Enrollment Form */}
          <section className="bg-white rounded-xl shadow-sm p-8 border border-blue-50">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ready to Get Started?</h2>
            
            <form className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="package" className="block text-gray-700 font-medium mb-2">Preferred Package</label>
                <select 
                  id="package" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
                  required
                >
                  <option value="">Select a package</option>
                  <option value="single">Single Session ($75)</option>
                  <option value="4pack">4-Session Package ($260)</option>
                  <option value="8pack">8-Session Package ($480)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="goals" className="block text-gray-700 font-medium mb-2">Your Learning Goals</label>
                <textarea 
                  id="goals" 
                //   rows= "4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
                  placeholder="What do you hope to achieve with German coaching?"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">Preferred Availability</label>
                <textarea 
                  id="availability" 
                //   rows="2"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
                  placeholder="Days/times that typically work best for you"
                ></textarea>
              </div>
              
              <div className="flex items-center mb-6">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="w-4 h-4 text-german-dark rounded focus:ring-german-dark border-gray-300"
                  required
                />
                <label htmlFor="consent" className="ml-2 text-gray-700">
                  I agree to the terms and privacy policy
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-german-dark hover:bg-german text-white px-6 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Enroll Now
              </button>
            </form>
          </section>
          
          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Questions Before Enrolling?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:coaching@germanwithamit.com" className="flex items-center text-gray-700 hover:text-german-dark">
                <Mail className="w-5 h-5 mr-2" />
                coaching@germanwithamit.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-german-dark">
                <Phone className="w-5 h-5 mr-2" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachingPage;