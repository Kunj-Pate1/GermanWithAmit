import { BookOpen, Clock, PenSquare, Mail, Coffee } from 'lucide-react';
import Navbar from '@/components/Navbar';

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-german-dark to-german text-white py-16 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Insights, tips, and stories about language learning coming soon!
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
          {/* Coming Soon Notice */}
          <div className="bg-blue-50 rounded-lg p-6 mb-12 flex flex-col md:flex-row items-center">
            <div className="flex items-center mb-4 md:mb-0 md:mr-6">
              <Clock className="text-german-dark w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Our Blog Is Brewing</h2>
              <p className="text-gray-700">
                We're carefully crafting valuable content to help you on your language learning journey. 
                Check back soon for insightful articles, tips, and stories!
              </p>
            </div>
          </div>

          {/* Anticipated Content Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Blog Category 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <PenSquare className="w-6 h-6 text-german-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Language Learning Tips</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Practical advice and strategies to accelerate your German learning process.
              </p>
              <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                Coming Soon
              </div>
            </div>

            {/* Blog Category 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Coffee className="w-6 h-6 text-german-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Cultural Insights</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Discover German culture, traditions, and how language shapes everyday life.
              </p>
              <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block">
                Coming Soon
              </div>
            </div>
          </div>

          {/* Subscription CTA */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Want Early Access?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be the first to know when we publish new articles. Join our newsletter for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german focus:border-transparent"
              />
              <button className="bg-german-dark hover:bg-german text-white px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;