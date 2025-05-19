import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, Star, Clock, Users, Home, HeartPulse, Plane, GraduationCap, Briefcase,  ShieldCheck, Calendar, Banknote, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';


const NursingGermanyProgram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programData = {
    title: "Kickstart Your Nursing Career in Germany",
    tagline: "Work. Earn. Settle.",
    description: "Leave behind your ₹15K salary and step into a future that pays up to ₹3.5 Lakhs/month in Germany.",
    level: "International Program",
    duration: "6-12 months process",
    price: "₹1,50,000",
    discount: "₹2,00,000",
    image: "/nursing-germany.jpg",
    
    highlights: [
      "Starting salary up to ₹3.5 Lakhs/month",
      "Permanent contracts with social benefits",
      "4 weeks paid vacation yearly",
      "Public health insurance & pension",
      "Pathway to Permanent Residency",
      "Family reunification options",
      "Subsidized accommodation available"
    ],
    
    whyGermany: [
      "Massive shortage of 50,000+ nurses",
      "Recognized qualifications for Indian nurses",
      "Stable, respected healthcare profession",
      "Excellent work-life balance",
      "Strong worker protections",
      "High quality training facilities"
    ],
    
    familyBenefits: [
      "Spouse can work full-time",
      "Children get free education",
      "Family health coverage",
      "Safe environment for families",
      "Multicultural communities"
    ],
    
    eligibility: [
      "BSc/GNM/Post-Basic Nursing graduates",
      "Final-year nursing students",
      "Working nurses seeking relocation",
      "A2/B1 German proficiency (or willing to learn)"
    ],
    
    process: [
      { title: "Application Review", duration: "2 weeks" },
      { title: "Document Verification", duration: "3-4 weeks" },
      { title: "Language Training", duration: "3-6 months" },
      { title: "Job Placement", duration: "1-2 months" },
      { title: "Visa Processing", duration: "4-8 weeks" },
      { title: "Relocation Support", duration: "Ongoing" }
    ],
    
    instructor: {
      name: "Dr. Anika Müller",
      title: "International Nursing Placement Director",
      image: "/instructor-nursing.jpg",
      rating: "4.9 (128 reviews)",
      bio: "With 15 years experience placing international nurses in German hospitals, Dr. Müller has helped over 500 Indian healthcare professionals build successful careers in Europe."
    },
    
    relatedPrograms: [
      {
        title: "German Language for Nurses",
        description: "Specialized medical German course with healthcare vocabulary",
        level: "A1 to B2",
        price: "₹35,000",
        image: "/german-for-nurses.jpg",
        link: "/programs/language-nursing"
      },
      {
        title: "Nursing Specialization Program",
        description: "Advanced training in geriatric or ICU nursing for Germany",
        level: "Advanced",
        price: "₹75,000",
        image: "/nursing-specialization.jpg",
        link: "/programs/specialization"
      }
    ]
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-german-dark to-german py-16">
        <div className="container mx-auto px-4 md:px-6 p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white order-2 lg:order-1">
              <div className="mb-4 flex items-center">
                <span className="px-3 py-1 rounded-full bg-blue-600/30 text-white text-sm font-medium flex items-center">
                  <Plane className="w-4 h-4 mr-1" /> {programData.level}
                </span>
                <div className="ml-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-4 h-4 text-yellow-300 fill-yellow-300" 
                    />
                  ))}
                  <span className="ml-2 text-sm">4.8 star rating</span>
                </div>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
              >
                {programData.title}
              </motion.h1>
              
              <p className="text-xl font-medium mb-2 text-blue-100 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" /> {programData.tagline}
              </p>
              
              <p className="text-lg md:text-xl mb-6 text-blue-50">
                {programData.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-800/30 px-3 py-1 rounded-full">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{programData.duration}</span>
                </div>
                <div className="flex items-center bg-blue-800/30 px-3 py-1 rounded-full">
                  <HeartPulse className="w-5 h-5 mr-2" />
                  <span>Guaranteed Job Placement</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-800 hover:bg-blue-50 font-bold">
                  Apply Now
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Download Program Guide
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-xl border-2 border-white/20"
              >
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={programData.image} 
                      alt="Nurses working in German hospital" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-xl flex items-center">
                        <Banknote className="w-5 h-5 mr-2" /> Salary Potential
                      </h3>
                      <p className="text-lg">₹2.8 - ₹3.5 Lakhs/month</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-gray-900">{programData.price}</div>
                    <div className="text-lg text-gray-500 line-through">{programData.discount}</div>
                  </div>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 font-bold">
                    Start Your Application
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <HeartPulse className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Why Choose Nursing in Germany?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {programData.highlights.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-4 h-4 text-blue-700" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-12">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-blue-700" /> 
                Germany's Nursing Shortage
              </h3>
              <p className="text-gray-700 mb-4">
                Germany currently needs over 50,000 qualified nurses to fill critical gaps in their healthcare system. 
                This massive shortage creates exceptional opportunities for international nurses with recognized qualifications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-blue-700 font-bold text-2xl mb-1">50,000+</div>
                  <div className="text-sm">Job Openings</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-blue-700 font-bold text-2xl mb-1">3-6</div>
                  <div className="text-sm">Months Processing</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-blue-700 font-bold text-2xl mb-1">100%</div>
                  <div className="text-sm">Placement Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-blue-700 font-bold text-2xl mb-1">PR</div>
                  <div className="text-sm">In 2-3 Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="benefits" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="benefits" className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2" /> Benefits
              </TabsTrigger>
              <TabsTrigger value="family" className="flex items-center">
                {/* <Family className="w-4 h-4 mr-2" />  */}
                Family
              </TabsTrigger>
              <TabsTrigger value="eligibility" className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" /> Eligibility
              </TabsTrigger>
              <TabsTrigger value="process" className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Process
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="benefits" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Career Benefits in Germany</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programData.whyGermany.map((point, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <div className="bg-blue-100 p-1 rounded-full mr-3">
                        <Check className="w-4 h-4 text-blue-700" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="family">
              <h2 className="text-2xl font-bold mb-6">Family Reunification Benefits</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programData.familyBenefits.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3">
                        <Check className="w-4 h-4 text-blue-700" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-blue-50 p-4 rounded-lg flex items-start">
                  <Home className="w-5 h-5 text-blue-700 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Housing Support:</strong> Many German hospitals provide subsidized accommodation 
                    or assistance finding family-friendly housing near your workplace.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="eligibility">
              <h2 className="text-2xl font-bold mb-6">Who Can Apply?</h2>
              <div className="space-y-4">
                {programData.eligibility.map((point, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <GraduationCap className="w-5 h-5 text-blue-700" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-700" />
                  Required Documents
                </h3>
                <ul className="list-disc list-inside pl-5 space-y-2">
                  <li>Nursing degree/diploma certificates</li>
                  <li>Registration with Indian Nursing Council</li>
                  <li>Experience certificates (if applicable)</li>
                  <li>Passport copy</li>
                  <li>German language certificates (if available)</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="process">
              <h2 className="text-2xl font-bold mb-6">Application Process Timeline</h2>
              <div className="space-y-4">
                {programData.process.map((step, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 text-blue-700 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-sm text-gray-500">{step.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Instructor Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Your Placement Advisor</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 p-8 rounded-xl">
              <Avatar className="w-32 h-32 border-4 border-blue-200">
                <AvatarImage src={programData.instructor.image} alt={programData.instructor.name} />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold mb-1">{programData.instructor.name}</h3>
                <p className="text-blue-700 mb-4">{programData.instructor.title}</p>
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{programData.instructor.rating}</span>
                </div>
                <p className="text-gray-700 mb-4">{programData.instructor.bio}</p>
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="bg-blue-500 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Ready for Your German Nursing Career?</h2>
            <p className="text-xl text-center mb-8 text-blue-100">Fill the form to get your personalized pathway</p>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-700" />
                Application Form
              </h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700">Full Name*</label>
                  <input type="text" className="w-full p-2 border rounded" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700">Phone Number*</label>
                  <input type="tel" className="w-full p-2 border rounded" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700">Email Address*</label>
                  <input type="email" className="w-full p-2 border rounded" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700">City*</label>
                  <input type="text" className="w-full p-2 border rounded" required />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700">German Language Level*</label>
                  <select className="w-full p-2 border rounded" required>
                    <option value="">Select</option>
                    <option value="A1">A1 Beginner</option>
                    <option value="A2">A2 Elementary</option>
                    <option value="B1">B1 Intermediate</option>
                    <option value="B2">B2 Upper Intermediate</option>
                    <option value="none">Not started yet</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700">Current Status*</label>
                  <select className="w-full p-2 border rounded" required>
                    <option value="">Select</option>
                    <option value="student">Nursing Student</option>
                    <option value="fresh">Fresh Graduate</option>
                    <option value="experienced">Working Nurse</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-gray-700">Upload Resume (PDF/DOC)*</label>
                  <input type="file" className="w-full p-2 border rounded" accept=".pdf,.doc,.docx" required />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 font-bold">
                    Submit Application
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                After submission, you'll receive a free consultation and eligibility assessment from our expert advisors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Programs */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Complementary Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {programData.relatedPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-0">
                <div className="aspect-[16/9] relative">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-700 text-white text-xs rounded-full">
                      {program.level}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-700">{program.price}</span>
                    <Link to={program.link} className="flex items-center text-blue-700 hover:underline">
                      View Details 
                      {/* <ArrowRight className="ml-1 w-4 h-4" /> */}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NursingGermanyProgram;