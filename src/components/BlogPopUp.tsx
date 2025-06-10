import { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, BookOpen, Clock, User, Calendar } from 'lucide-react';
import { BlogPost, blogPosts } from '@/lib/blogData';

interface BlogPopupProps {
  blogId: string;
  onClose: () => void;
}

const BlogPopup = ({ blogId, onClose }: BlogPopupProps) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [currentBlogIndex, setCurrentBlogIndex] = useState<number>(0);

  useEffect(() => {
    const foundBlog = blogPosts.find(post => post.id === blogId);
    const foundIndex = blogPosts.findIndex(post => post.id === blogId);
    
    if (foundBlog) {
      setBlog(foundBlog);
      setCurrentBlogIndex(foundIndex);
    }
  }, [blogId]);

  const navigateToAdjacentPost = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentBlogIndex > 0 ? currentBlogIndex - 1 : blogPosts.length - 1;
    } else {
      newIndex = currentBlogIndex < blogPosts.length - 1 ? currentBlogIndex + 1 : 0;
    }
    
    setBlog(blogPosts[newIndex]);
    setCurrentBlogIndex(newIndex);
  };

  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          <button 
            onClick={() => navigateToAdjacentPost('prev')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous post"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigateToAdjacentPost('next')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next post"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Blog content */}
        <div className="p-8">
          {/* Blog header with meta info */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {blog.category}
              </span>
              <div className="flex items-center ml-4">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">{blog.author}</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">{blog.date}</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.title}</h1>
            <p className="text-gray-600 italic">{blog.metaDescription}</p>
          </div>

          {/* Featured image */}
          {blog.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Featured Image: {blog.image}</span>
              </div>
            </div>
          )}

          {/* Introduction */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700">{blog.content.introduction}</p>
          </div>

          {/* Sections */}
          {blog.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
              
              {typeof section.content === 'string' ? (
                <p className="text-gray-700 mb-4">{section.content}</p>
              ) : (
                section.content.table && (
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-gray-50">
                          {section.content.table.headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.content.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700 border-b">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              )}

              {section.tips && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded-r-lg">
                  <ul className="list-disc pl-5 space-y-2">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-700">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700">{blog.content.conclusion}</p>
          </div>

          {/* Call to action */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="whitespace-pre-line text-gray-800 font-medium">{blog.content.callToAction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPopup;