
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Instagram, Facebook, Youtube } from 'lucide-react';



const SocialTopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-german-dark to-gray-800 text-white py-0.5 px-4 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons - Top on mobile, left on desktop */}
        <div className="flex space-x-4 mb-1 md:mb-0">
          <a 
            href="https://www.instagram.com/german_with_amit/" target="_blank"
            className="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.facebook.com/people/germanwithamit/100083756738989/" target="_blank"
            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a 
            href= "https://www.youtube.com/@GermanwithAmit" target="_blank" 
            className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
        
        {/* Navigation Links - Bottom on mobile, right on desktop */}
        <div className="flex space-x-3 md:space-x-6">
          <a 
            href="/study" 
            className="text-xs md:text-sm font-medium hover:text-blue-300 transition-colors duration-300 relative group"
          >
            Study In Germany
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="/nursing" 
            className="text-xs md:text-sm font-medium hover:text-blue-300 transition-colors duration-300 relative group"
          >
            Nursing In Germany
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

const courseCategories = [
  {
    name: "Regular Courses",
    subcategories: [
      { 
        name: "A1 Level", 
        path: "/courses/beginner/a1",
      },
      { 
        name: "A2 Level", 
        path: "/courses/beginner/a2",
      },
      { 
        name: "B1 Level", 
        path: "/courses/intermediate/b1",
      },
      { 
        name: "B2 Level", 
        path: "/courses/intermediate/b2",
      },
      { 
        name: "C1", 
        path: "/courses/advanced/c1",
      },
      { 
        name: "C2", 
        path: "/courses/advanced/c2",
      }
    ]
  },
  {
    name: "Combo Courses",
    subcategories: [
      { 
        name: "A1 + A2 Level", 
        path: "/courses/a1a2",
      },
      { 
        name: "A1 + A2 + A3 Level", 
        path: "/courses/a1a2a3",
      },
      { 
        name: "A2 + B1 Level", 
        path: "/courses/a2b1",
      },
      { 
        name: "B2.1 + B2.2 Level", 
        path: "/courses/b21b22",
      }
    ]
  },
  {
    name: "Exam Preparation Course",
    path: "/course/exam"
  },
  // {
  //   name: "Grammar Courses",
  //   path: "/courses/grammar"
  // },
  {
    name: "Self-paced Courses",
    path: "/courses/selfpaced"
  },
  {
    name: "1:1 German Coaching",
    path: "/courses/coaching"
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

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
            <a href="/">
              <img 
                src="/lovable-uploads/12bc9f5a-e0b8-4f7a-af64-a2f7b0a6f279.png" 
                alt="German with Amit Logo" 
                className="h-12 md:h-16" 
              />
            </a>
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
            <DesktopNavLinks activeSection={activeSection} />
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
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
};

interface NavLinksProps {
  className?: string;
  activeSection: string;
  isMenuOpen?:boolean|null;
  setIsMenuOpen?:React.Dispatch<React.SetStateAction<boolean|null>>
}

const DesktopNavLinks = ({ activeSection }: NavLinksProps) => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#courses', dropdown: true },
    { name: 'Study', href: '#study' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="flex space-x-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);
        
        if (item.dropdown) {
          return (
            <DropdownMenu key={item.name}>
              <DropdownMenuTrigger asChild>
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
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl p-2 min-w-[280px] rounded-lg"
                sideOffset={8}
                align="start"
              >
                <DropdownMenuGroup>
                  {courseCategories.map((category) => (
                    <div key={category.name} className="relative">
                      {category.path ? (
                        <DropdownMenuItem asChild>
                          <a 
                            href={category.path} 
                            className="cursor-pointer hover:bg-german-light/20 w-full px-3 py-2 text-sm rounded-md transition-colors duration-150 flex items-center"
                          >
                            {category.name}
                          </a>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger 
                            className="font-medium hover:bg-german-light/20 px-3 py-2 text-sm rounded-md transition-colors duration-150 w-full text-left flex items-center justify-between"
                          >
                            {category.name}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent 
                              className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl p-2 min-w-[240px] rounded-lg ml-1"
                              alignOffset={-8}
                            >
                              {category.subcategories?.map((subcat) => (
                                <DropdownMenuItem key={subcat.name} asChild>
                                  <a 
                                    href={subcat.path} 
                                    className="cursor-pointer hover:bg-german-light/20 w-full px-3 py-2 text-sm rounded-md transition-colors duration-150"
                                  >
                                    {subcat.name}
                                  </a>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      )}
                    </div>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }
        
        return (
          <a
            key={item.name}
            href={item.href}
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
            <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
              isActive ? 'bg-white scale-100' : 'bg-white/0 scale-0'
            }`} 
            />
          </a>
        );
      })}
    </div>
  );
};

const MobileNavLinks = ({ className = "", activeSection,setIsMenuOpen,isMenuOpen }: NavLinksProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory,setOpenSubCategory] = useState<string|null>(null);
 
  
  
  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };
  const toggleSubCategory = (name:string)=>{
    setOpenSubCategory(openSubCategory === name ? null : name);
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#courses', dropdown: true },
    { name: 'Study', href: '#study' },
    { name: 'Partners', href: '#partners' },
    { name: 'Content', href: '#content' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {isMenuOpen && <div className={className}>
      {navItems.map((item, index) => {
        const isActive = activeSection === item.href.substring(1);
        
        if (item.dropdown) {
          return (
            <div key={item.name} className="space-y-1">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleCategory('courses')}
                className={`flex justify-between items-center w-full px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-german-dark font-semibold' 
                    : 'text-german-dark hover:text-german'
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${openCategory === 'courses' ? 'rotate-180' : ''}`} 
                />
              </motion.button>
              
              <AnimatePresence>
                {openCategory === 'courses' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 pl-2 border-l border-white/20"
                  >
                    {courseCategories.map((category, catIndex) => (
                      <div key={category.name} className="py-1">
                        {category.path ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: catIndex * 0.05 }}
                          >
                            <a 
                              href={category.path}
                              className="block px-3 py-2 text-white/90 hover:text-white rounded"
                            >
                              {category.name}
                            </a>
                          </motion.div>
                        ) : (
                          <>
                            <motion.button
                              initial={{ opacity: 0,x:-20 }}
                              animate={{ opacity: 1,x:0 }}
                              transition={{ delay: catIndex * 0.05 }}
                              onClick={() => {console.log(category.name);toggleSubCategory(category.name)}}
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
                                      <a 
                                        href={subcat.path}
                                        className="block px-3 py-2 text-white/80 hover:text-white"
                                      >
                                        {subcat.name}
                                      </a>
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
            transition={{ delay: index * 0 }}
          >
            <a
              href={item.href}
              onClick={()=>setIsMenuOpen(false)}
              className={`block px-4 py-3 font-medium relative rounded-lg transition-all duration-300 ${
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
            </a>
          </motion.div>
        );
      })}
    </div>}
    </>
  );
};

export default Navbar;