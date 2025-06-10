import { BookOpen, Clock, PenSquare, Mail, Coffee, Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BlogPopup from '@/components/BlogPopUp';
import { blogPosts } from '@/lib/blogData';
import { useState } from 'react';

const categories = [
  { name: "Learning Tips", count: 12 },
  { name: "Cultural Insights", count: 8 },
  { name: "Language Facts", count: 5 },
  { name: "Resources", count: 6 },
  { name: "Study Techniques", count: 9 }
];

const BlogsPage = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog posts based on search query
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.introduction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
        {/* Hero Section */}
        <div className="bg-german  text-white py-16 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">German Language Blog</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Insights, tips, and stories to accelerate your German learning journey
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Blog Content */}
            <div className="lg:w-2/3">
              {/* Featured Post */}
              <div 
                className="bg-white rounded-xl shadow-md overflow-hidden mb-12 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedBlogId(blogPosts[0].id)}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 bg-blue-100 h-64 md:h-auto">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Featured Image</span>
                    </div>
                  </div>
                  <div className="p-8 md:w-1/2">
                    <div className="uppercase tracking-wide text-sm text-blue-800 font-semibold mb-1">
                      {blogPosts[0].category}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 mb-6">{blogPosts[0].metaDescription}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{blogPosts[0].author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{blogPosts[0].date}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <button className="flex items-center text-blue-800 font-medium hover:text-blue-600 transition-colors">
                      Read full article <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                      onClick={() => setSelectedBlogId(post.id)}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <Tag className="w-4 h-4 text-blue-800 mr-2" />
                          <span className="text-sm text-blue-800 font-medium">{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.metaDescription}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-1" />
                            <span className="mr-3">{post.author}</span>
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <button className="text-blue-800 hover:text-blue-600 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2">
                <button className="px-4 py-2 bg-blue-800 text-white rounded-lg">1</button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-lg">Next</button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-blue-800 transition-colors text-left"
                        onClick={() => setSearchQuery(category.name)}
                      >
                        <span>{category.name}</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Grammar', 'Vocabulary', 'Pronunciation', 'A1-C2', 'Deutschland', 'Österreich', 'Schweiz', 'Slang', 'Exams', 'Books'].map((tag, index) => (
                    <button
                      key={index}
                      className="text-sm bg-blue-50 hover:bg-blue-100 text-blue-800 px-3 py-1 rounded-full transition-colors"
                      onClick={() => setSearchQuery(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-blue-800 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Newsletter</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get the latest articles and learning resources delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Popup */}
      {selectedBlogId && (
        <BlogPopup 
          blogId={selectedBlogId} 
          onClose={() => setSelectedBlogId(null)} 
        />
      )}
    </>
  );
};

export default BlogsPage;