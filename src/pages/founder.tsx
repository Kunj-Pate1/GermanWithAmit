// import { GraduationCap, Globe, Award, BookOpen, Mic, Briefcase, Users, Heart, ArrowRight, Quote } from 'lucide-react';
// import { useState, useRef, useEffect } from 'react';
// import Navbar from '@/components/Navbar';

// const MeetOurFounder = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const milestonesRef = useRef([]);
//   const containerRef = useRef(null);

//   const milestones = [
//     {
//       year: "Early Life",
//       icon: <Heart className="w-5 h-5" />,
//       title: "Born and Raised in Delhi",
//       description: "Growing up in India's capital shaped Amit's multicultural perspective and passion for languages.",
//       image: "/founder/delhi1.jpg",
//       color: "bg-red-100 text-red-600"
//     },
//     {
//       year: "2010-2014",
//       icon: <GraduationCap className="w-5 h-5" />,
//       title: "Bachelor's in German Studies",
//       description: "Pursued his passion for German language and culture at Delhi University.",
//       image: "/founder/uni1.jpg",
//       color: "bg-blue-100 text-blue-600"
//     },
//     {
//       year: "2014",
//       icon: <Award className="w-5 h-5" />,
//       title: "First DAAD Scholarship",
//       description: "Received the prestigious DAAD scholarship for intensive language study in Germany.",
//       image: "/founder/daad1.jpg",
//       color: "bg-amber-100 text-amber-600"
//     },
//     {
//       year: "2015-2017",
//       icon: <Globe className="w-5 h-5" />,
//       title: "Master's Degree & European Journey",
//       description: "Completed his Master's while living in multiple German cities.",
//       image: "/founder/europe1.jpg",
//       color: "bg-emerald-100 text-emerald-600"
//     },
//     {
//       year: "2017",
//       icon: <Briefcase className="w-5 h-5" />,
//       title: "Account Manager at Amazon",
//       description: "Managed the German market for Amazon, gaining valuable corporate experience.",
//       image: "/founder/amazon1.jpg",
//       color: "bg-purple-100 text-purple-600"
//     },
//     {
//       year: "2018",
//       icon: <Mic className="w-5 h-5" />,
//       title: "Translator for PM's Mann Ki Baat",
//       description: "Served as translator for Indian Prime Minister's broadcast.",
//       image: "/founder/pm1.jpg",
//       color: "bg-indigo-100 text-indigo-600"
//     },
//     {
//       year: "2019",
//       icon: <BookOpen className="w-5 h-5" />,
//       title: "Certified BAMF-Trainer",
//       description: "Became certified German language trainer under Germany's Federal Office for Migration and Refugees.",
//       image: "/founder/bamf1.jpg",
//       color: "bg-cyan-100 text-cyan-600"
//     },
//     {
//       year: "2020",
//       icon: <Users className="w-5 h-5" />,
//       title: "Founded GermanWithAmit",
//       description: "Launched the platform that would grow to 130,000+ followers worldwide.",
//       image: "/founder/startup1.jpg",
//       color: "bg-fuchsia-100 text-fuchsia-600"
//     },
//     {
//       year: "Present",
//       icon: <Award className="w-5 h-5" />,
//       title: "Guest Professor & Growing Community",
//       description: "Now teaches at Delhi University while continuing to grow GermanWithAmit.",
//       image: "/founder/now1.jpg",
//       color: "bg-green-100 text-green-600"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = milestonesRef.current.indexOf(entry.target);
//             setActiveIndex(index);
//           }
//         });
//       },
//       {
//         root: containerRef.current,
//         threshold: 0.6,
//         rootMargin: '0px 0px -20% 0px'
//       }
//     );

//     milestonesRef.current.forEach((item) => {
//       if (item) observer.observe(item);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <Navbar />
      
//       <div className="min-h-screen bg-white py-16">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-br from-german-dark to-german text-white">
//           <div className="container mx-auto px-6 max-w-6xl">
//             <div className="flex flex-col lg:flex-row items-center gap-12">
//               <div className="lg:w-1/2">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                   Meet <span className="text-blue-200">Amit</span>
//                 </h1>
//                 <p className="text-xl text-blue-100 mb-8 max-w-lg">
//                   Educator, linguist, and cultural bridge builder transforming German learning for 130,000+ students worldwide
//                 </p>
                
//                 <div className="mb-8">
//                   <Quote className="w-6 h-6 text-blue-200 mb-2" />
//                   <p className="italic text-blue-100 text-lg">
//                     "GermanWithAmit was born from a dream to show how learning German can open doors, change lives, and build bridges to new opportunities."
//                   </p>
//                 </div>
                
//                 <div className="flex flex-wrap gap-4">
//                   <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-colors">
//                     Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
//                   </button>
//                   <button className="border border-white/30 hover:border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
//                     Watch Founder's Story
//                   </button>
//                 </div>
//               </div>
              
//               <div className="lg:w-1/2 relative">
//                 <div className="relative aspect-square overflow-hidden rounded-lg shadow-2xl">
//                   <img 
//                     src="/founder/hero-portrait.jpg" 
//                     alt="Amit, Founder of GermanWithAmit" 
//                     className="w-full h-full object-cover absolute inset-0"
//                   />
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 bg-white text-blue-900 px-4 py-2 rounded-lg shadow-lg font-medium">
//                   130,000+ Students Worldwide
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Two Column Layout */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-6 max-w-7xl">
//             <div className="flex flex-col lg:flex-row gap-12">
//               {/* Left Column - Founder Details */}
//               <div className="lg:w-2/5 sticky top-20 h-fit">
//                 <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
//                   <div className="aspect-square w-full mb-6 rounded-lg overflow-hidden">
//                     <img 
//                       src="/founder/hero-portrait.jpg" 
//                       alt="Amit teaching German" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
                  
//                   <h2 className="text-2xl font-bold text-gray-900 mb-4">Amit's Teaching Philosophy</h2>
//                   <p className="text-gray-600 mb-6">
//                     Combining academic rigor with cultural immersion, Amit's approach makes German language learning accessible and engaging for students worldwide.
//                   </p>
                  
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-4">
//                       <div className="bg-blue-100 p-2 rounded-full">
//                         <Users className="w-5 h-5 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-900">130,000+ Students</h3>
//                         <p className="text-gray-600 text-sm">Transforming language learning worldwide</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start gap-4">
//                       <div className="bg-amber-100 p-2 rounded-full">
//                         <Award className="w-5 h-5 text-amber-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-900">5 Scholarships</h3>
//                         <p className="text-gray-600 text-sm">Recognized excellence in German studies</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start gap-4">
//                       <div className="bg-emerald-100 p-2 rounded-full">
//                         <BookOpen className="w-5 h-5 text-emerald-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-900">BAMF Certified</h3>
//                         <p className="text-gray-600 text-sm">Official German language trainer</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Right Column - Timeline */}
//               <div className="lg:w-3/5" ref={containerRef}>
//                 <div className="text-center mb-16">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-3">The Journey</h2>
//                   <p className="text-gray-600">
//                     From Delhi to Germany - The milestones that shaped GermanWithAmit
//                   </p>
//                 </div>

//                 <div className="relative pl-10">
//                   {/* Vertical timeline line */}
//                   <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>

//                   {milestones.map((milestone, index) => (
//                     <div 
//                       key={index}
//                       ref={(el) => (milestonesRef.current[index] = el)}
//                       className={`relative mb-12 transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
//                     >
//                       {/* Animated icon */}
//                       <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center -translate-x-1/2 transform ${milestone.color} border-4 border-white shadow-lg z-10 transition-all duration-500 ${activeIndex === index ? 'scale-110 -translate-y-1' : ''}`}>
//                         <div className={`relative ${activeIndex === index ? 'animate-pulse' : ''}`}>
//                           {milestone.icon}
//                         </div>
//                       </div>

//                       {/* Glow effect when active */}
//                       {activeIndex === index && (
//                         <div className="absolute left-0 top-0 w-10 h-10 rounded-full -translate-x-1/2 transform bg-white mix-blend-screen opacity-30 z-0 animate-ping"></div>
//                       )}

//                       {/* Milestone card */}
//                       <div 
//                         className={`bg-white rounded-xl shadow-sm overflow-hidden border transition-all duration-300 ${activeIndex === index ? 'border-blue-200 shadow-md scale-[1.01]' : 'border-gray-100'} ml-8`}
//                       >
//                         <div className="md:flex">
//                           <div className="md:w-2/5 h-48 bg-gray-100 relative overflow-hidden">
//                             <img 
//                               src={milestone.image} 
//                               alt={milestone.title}
//                               className={`w-full h-full object-cover transition-transform duration-700 ${activeIndex === index ? 'scale-100' : 'scale-105'}`}
//                             />
//                           </div>
//                           <div className="p-6 md:w-3/5">
//                             <span className={`text-xs font-semibold px-2 py-1 rounded-full ${milestone.color.replace('bg-', 'bg-opacity-20 ')} mb-2 inline-block`}>
//                               {milestone.year}
//                             </span>
//                             <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
//                             <p className="text-gray-600">{milestone.description}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>

//       {/* Call to Action */}
//         <section className="py-16 bg-german text-white">
//           <div className="container mx-auto px-6 max-w-4xl text-center">
//             <h2 className="text-3xl font-bold mb-6">Join Amit's Language Revolution</h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               Experience German learning transformed by Amit's unique journey and teaching philosophy.
//             </p>
//             <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg transform hover:scale-105 duration-200">
//               Start Learning Today <ArrowRight className="inline ml-2 w-5 h-5" />
//             </button>
//           </div>
//         </section>
//     </>
//   );
// };

// export default MeetOurFounder;

import { GraduationCap, Globe, Award, BookOpen, Mic, Briefcase, Users, Heart, ArrowRight, Quote } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const MeetOurFounder = () => {
  return (
    <>
      <Navbar />
      
      {/* Section 1: Hero */}
      <section className="min-h-[80vh] py-16 bg-gradient-to-br from-german-dark to-german text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl h-full flex items-center">
          <div className="relative z-10 py-20 lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Meet <span className="text-blue-200">Amit</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
              Educator, linguist, and cultural bridge builder transforming German learning for 130,000+ students worldwide
            </p>
            
            <div className="mb-8 max-w-lg">
              <Quote className="w-8 h-8 text-blue-200 mb-3" />
              <p className="italic text-blue-100 text-lg md:text-xl">
                "GermanWithAmit was born from a dream to show how learning German can open doors, change lives, and build bridges to new opportunities."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-all hover:scale-105">
                Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 hover:border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all hover:scale-105">
                Watch Founder's Story
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 bottom-0 w-full lg:w-1/3 h-full">
          <img 
            src="/founder/hero-portrait.jpg" 
            alt="Amit, Founder of GermanWithAmit" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-6 left-6 bg-white text-blue-900 px-4 py-2 rounded-lg shadow-xl font-bold text-sm md:text-base">
            130,000+ Students Worldwide
          </div>
        </div>
      </section>

      {/* Section 2: Early Life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Column */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Early Life</span> in Delhi
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Growing up in India's capital shaped Amit's multicultural perspective and passion for languages. His childhood in Delhi exposed him to diverse cultures that would later inform his unique teaching approach.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                From an early age, Amit showed exceptional linguistic abilities, mastering Hindi, English, and later German with equal passion. His teachers recognized his gift for making complex language concepts accessible to others.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Multicultural Foundation</h3>
                  <p className="text-gray-600">Delhi's diversity shaped his teaching philosophy</p>
                </div>
              </div>
            </div>
            
            {/* Image Collage */}
            <div className="lg:w-1/2 relative h-96">
              <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-xl overflow-hidden shadow-lg z-10">
                <img src="/founder/delhi1.jpg" alt="Delhi childhood" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/delhi2.jpg" alt="Young Amit" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/4 right-0 w-1/3 h-1/3 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/delhi3.jpg" alt="Delhi culture" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 rounded-full overflow-hidden shadow-lg border-4 border-white z-20">
                <img src="/founder/delhi4.jpg" alt="School days" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Academic Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Collage - Reversed order */}
            <div className="lg:w-1/2 relative h-96 order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-xl overflow-hidden shadow-lg z-10">
                <img src="/founder/uni1.jpg" alt="University days" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/uni2.jpg" alt="Studying" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/4 left-0 w-1/3 h-1/3 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/uni3.jpg" alt="Classroom" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 rounded-full overflow-hidden shadow-lg border-4 border-white z-20">
                <img src="/founder/uni4.jpg" alt="Graduation" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Text Column */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Academic <span className="text-blue-600">Excellence</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Amit pursued his passion for German language and culture at Delhi University, earning his Bachelor's in German Studies with honors. His academic journey was marked by multiple DAAD scholarships.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                His Master's degree took him to Germany, where he immersed himself in the language and culture, living in multiple cities and developing the authentic teaching methods he's known for today.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">5 Scholarships</h3>
                  <p className="text-gray-600">Recognized excellence in German studies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Professional Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Column */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blue-600">Milestones</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Amit's corporate experience at Amazon managing the German market gave him unique insights into business German. His role as translator for the Indian Prime Minister's broadcast showcased his elite language skills.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Becoming a certified BAMF-Trainer under Germany's Federal Office for Migration and Refugees established his credentials as an official German language trainer.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Corporate & Government Experience</h3>
                  <p className="text-gray-600">Real-world language application</p>
                </div>
              </div>
            </div>
            
            {/* Image Collage */}
            <div className="lg:w-1/2 relative h-96">
              <div className="absolute top-0 left-0 w-3/5 h-3/5 rounded-xl overflow-hidden shadow-lg z-10">
                <img src="/founder/amazon1.jpg" alt="Amazon workplace" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/pm1.jpg" alt="Translation work" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/bamf1.jpg" alt="Certification" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 rounded-full overflow-hidden shadow-lg border-4 border-white z-20">
                <img src="/founder/professional4.jpg" alt="Teaching" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: GermanWithAmit */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Collage - Reversed order */}
            <div className="lg:w-1/2 relative h-96 order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-3/5 h-3/5 rounded-xl overflow-hidden shadow-lg z-10">
                <img src="/founder/startup1.jpg" alt="Teaching online" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/now1.jpg" alt="Current work" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-xl overflow-hidden shadow-lg">
                <img src="/founder/community1.jpg" alt="Student community" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 rounded-full overflow-hidden shadow-lg border-4 border-white z-20">
                <img src="/founder/teaching1.jpg" alt="In classroom" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Text Column */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building <span className="text-blue-600">GermanWithAmit</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2020, GermanWithAmit has grown to serve over 130,000 students worldwide. The platform combines Amit's academic rigor, corporate experience, and cultural insights into a transformative learning experience.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Today, Amit continues to teach at Delhi University while expanding the GermanWithAmit community, proving that language learning can be both academically sound and genuinely enjoyable.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="bg-fuchsia-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-fuchsia-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">130,000+ Students</h3>
                  <p className="text-gray-600">Global community of learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-german text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your German Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Amit's revolution in language learning and experience German taught with passion, expertise, and cultural depth.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl transform duration-200">
            Start Learning Today <ArrowRight className="inline ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
};

export default MeetOurFounder;