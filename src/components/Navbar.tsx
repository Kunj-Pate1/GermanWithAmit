import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ChevronDown, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Youtube } from 'lucide-react';

// Category data structures
interface NavItem {
  name: string;
  path?: string;
  subcategories?: NavItem[];
}

const courseCategories: NavItem[] = [
  {
    name: "Regular Courses",
    subcategories: [
      { name: "A1 Level", path: "/courses/beginner/a1" },
      { name: "A2 Level", path: "/courses/beginner/a2" },
      { name: "B1 Level", path: "/courses/intermediate/b1" },
      { name: "B2.1 Level", path: "/courses/intermediate/b2.1" },
      { name: "B2.2 Level", path: "/courses/intermediate/b2.2" },
      { name: "C1 Level", path: "/courses/advanced/c1" },
      { name: "C2 Level", path: "/courses/advanced/c2" }
    ]
  },
  {
    name: "Combo Courses",
    path: "/combo-course"
  },
  {
    name: "Exam Preparation Course",
    path: "/course/exam"
  },
  {
    name: "Self-paced Courses",
    path: "/courses/selfpaced"
  },
  {
    name: "1:1 German Coaching",
    path: "/courses/coaching"
  }
];

const movingCategories: NavItem[] = [
  { name: "Study In Germany", path: "/study" },
  { name: "Nursing In Germany", path: "/nursing" },
  { name: "Ausbildung In Germany", path: "/Ausbildung-in-Germany" },
  { name: "Studienkolleg In Germany", path: "/Studienkolleg-in-Germany" }
];

const SocialTopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-german-dark to-gray-800 text-white py-0.5 px-4 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-1 md:mb-0">
          <a 
            href="https://www.instagram.com/german_with_amit/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.facebook.com/people/germanwithamit/100083756738989/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a 
            href="https://www.youtube.com/@GermanwithAmit" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
        
        <div className="flex space-x-3 md:space-x-6">
          <Link 
            to="/blogs" 
            className="text-xs md:text-sm font-medium hover:text-blue-300 transition-colors duration-300 relative group"
          >
            Our Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface NavLinksProps {
  className?: string;
  activeSection: string;
  handleNavigation: (href: string) => void;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopNavLinks = ({ activeSection, handleNavigation }: NavLinksProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#courses', dropdown: true, id: "course" },
    { name: 'Moving To Germany', href: '#study', dropdown: true, id: "moving" },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMouseEnter = (itemId: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  return (
    <div className="flex space-x-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);
        
        if (item.dropdown) {
          return (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`px-3 py-2 font-medium relative group transition-all duration-300 flex items-center ${
                  isActive 
                    ? 'text-german-dark font-semibold' 
                    : 'text-german-dark hover:text-german'
                }`}
              >
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                <div 
                  className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transform origin-left transition-all duration-300 ${
                    isActive ? 'bg-white scale-x-100' : 'bg-white/50 scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>

              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-1 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl p-2 min-w-[280px] rounded-lg z-50"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-1">
                      {item.id === "course" && courseCategories.map((category) => (
                        <div key={category.name} className="relative group">
                          {category.path ? (
                            <button
                              onClick={() => handleNavigation(category.path || '#')}
                              className="w-full px-3 py-2 text-sm rounded-md transition-colors duration-150 flex items-center text-left hover:bg-german-light/20"
                            >
                              {category.name}
                            </button>
                          ) : (
                            <div className="relative group">
                              <div className="w-full px-3 py-2 text-sm rounded-md transition-colors duration-150 flex items-center justify-between hover:bg-german-light/20">
                                {category.name}
                                <ChevronRight className="h-4 w-4" />
                              </div>
                              <div className="absolute left-full top-0 ml-1 hidden group-hover:block">
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl p-2 min-w-[240px] rounded-lg"
                                >
                                  {category.subcategories?.map((subcat) => (
                                    <button
                                      key={subcat.name}
                                      onClick={() => handleNavigation(subcat.path || '#')}
                                      className="w-full px-3 py-2 text-sm rounded-md transition-colors duration-150 text-left hover:bg-german-light/20"
                                    >
                                      {subcat.name}
                                    </button>
                                  ))}
                                </motion.div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {item.id === "moving" && movingCategories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => handleNavigation(category.path || '#')}
                          className="w-full px-3 py-2 text-sm rounded-md transition-colors duration-150 flex items-center text-left hover:bg-german-light/20"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        
        return (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.href)}
            className={`px-3 py-2 font-medium relative group transition-all duration-300 ${
              isActive 
                ? 'text-german-dark font-semibold' 
                : 'text-german-dark hover:text-german'
            }`}
          >
            {item.name}
            <div 
              className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transform origin-left transition-all duration-300 ${
                isActive ? 'bg-white scale-x-100' : 'bg-white/50 scale-x-0 group-hover:scale-x-100'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

const MobileNavLinks = ({ className = "", activeSection, handleNavigation, setIsMenuOpen }: NavLinksProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#courses', dropdown: true, id: "courses" },
    { name: 'Moving to Germany', href: '#', dropdown: true, id: "moving" },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={className}>
      {navItems.map((item, index) => {
        const isActive = activeSection === item.href.substring(1);
        
        if (item.dropdown) {
          return (
            <div key={item.name} className="space-y-1">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setOpenCategory(openCategory === item.id ? null : item.id)}
                className={`flex justify-between items-center w-full px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-german-dark font-semibold' 
                    : 'text-german-dark hover:text-german'
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${openCategory === item.id ? 'rotate-180' : ''}`} 
                />
              </motion.button>
              
              <AnimatePresence>
                {openCategory === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 pl-2 border-l border-white/20"
                  >
                    {(item.id === "courses" ? courseCategories : movingCategories).map((category, catIndex) => (
                      <div key={category.name} className="py-1">
                        {category.path ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: catIndex * 0.05 }}
                          >
                            <button
                              onClick={() => {
                                handleNavigation(category.path || '#');
                                setIsMenuOpen?.(false);
                              }}
                              className="block px-3 py-2 text-white/90 hover:text-white rounded text-left w-full"
                            >
                              {category.name}
                            </button>
                          </motion.div>
                        ) : (
                          <>
                            <motion.button
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: catIndex * 0.05 }}
                              onClick={() => setOpenSubCategory(openSubCategory === category.name ? null : category.name)}
                              className="flex justify-between items-center w-full px-3 py-2 text-white/90 hover:text-white rounded"
                            >
                              <span>{category.name}</span>
                              <ChevronDown 
                                className={`h-4 w-4 transition-transform ${openSubCategory === category.name ? 'rotate-180' : ''}`} 
                              />
                            </motion.button>
                            
                            <AnimatePresence>
                              {openSubCategory === category.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="ml-3 pl-2 border-l border-white/20"
                                >
                                  {category.subcategories?.map((subcat, subIndex) => (
                                    <motion.div
                                      key={subcat.name}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: subIndex * 0.05 }}
                                    >
                                      <button
                                        onClick={() => {
                                          handleNavigation(subcat.path || '#');
                                          setIsMenuOpen?.(false);
                                        }}
                                        className="block px-3 py-2 text-white/80 hover:text-white text-left w-full"
                                      >
                                        {subcat.name}
                                      </button>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <button
              onClick={() => {
                handleNavigation(item.href);
                setIsMenuOpen?.(false);
              }}
              className={`block px-4 py-3 font-medium relative rounded-lg transition-all duration-300 w-full text-left ${
                isActive 
                  ? 'text-german-dark font-semibold' 
                  : 'text-german-dark hover:text-german'
              }`}
            >
              {item.name}
              {isActive && (
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                  layoutId="mobileActiveIndicator"
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                />
              )}
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = async (href: string) => {
    setIsNavigating(true);
    
    try {
      if (href.startsWith('#')) {
        if (window.location.pathname === '/') {
          await new Promise(resolve => setTimeout(resolve, 100));
          const section = document.getElementById(href.substring(1));
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/');
          await new Promise(resolve => setTimeout(resolve, 300));
          const section = document.getElementById(href.substring(1));
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        navigate(href);
      }
    } finally {
      setIsNavigating(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      const sections = ['hero', 'courses', 'study', 'partners', 'content', 'reviews', 'faq', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const inView = rect.top <= 150 && rect.top + rect.height > 150;
          if (inView) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <>
      <SocialTopBar />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-[25px] left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-r backdrop-blur-md shadow-md py-2' 
            : 'bg-gradient-to-r bg-white backdrop-blur-sm py-3'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button onClick={() => handleNavigation('/')}>
                <img 
                  src="/lovable-uploads/12bc9f5a-e0b8-4f7a-af64-a2f7b0a6f279.png" 
                  alt="German with Amit Logo" 
                  className="h-12 md:h-16" 
                />
              </button>
            </motion.div>

            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={toggleMenu}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </motion.div>
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <DesktopNavLinks 
                activeSection={activeSection} 
                handleNavigation={handleNavigation}
              />
              <div className="relative ml-2">
                <AnimatePresence>
                  {searchActive && (
                    <motion.div 
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute right-0 top-full mt-2"
                    >
                      <input 
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-full border border-german-light/30 bg-white/10 backdrop-blur-md text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-german-light"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden pt-4 pb-3 bg-gradient-to-b from-german-dark to-german shadow-lg absolute top-full left-0 w-full overflow-hidden"
              >
                <MobileNavLinks 
                  className="flex flex-col space-y-1 px-4" 
                  activeSection={activeSection}
                  handleNavigation={handleNavigation}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Global Loading Overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-0 bg-white/90 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Loader2 className="h-12 w-12 text-german" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;