import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight,
  BookOpen,
  Sun,
  Moon,
  Cloud,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type { LucideProps } from 'lucide-react';

interface Batch {
  id: number;
  name: string;
  icon: React.ComponentType<LucideProps>;
  timeIST: string;
  timeCEST: string;
  days: string;
  duration: string;
  startDate: string;
  level?: string;
}

interface LevelGroup {
  level: string;
  batches: Batch[];
}

const UpcomingBatches = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const batchesByLevel: LevelGroup[] = [
    {
      level: "A1 Beginner",
      batches: [
        {
          id: 1,
          name: "Morning Batch",
          icon: Sun,
          timeIST: "7:00 AM - 8:30 AM",
          timeCEST: "3:30 AM - 5:00 AM",
          days: "Mon-Fri",
          duration: "8 weeks",
          startDate: "July 10, 2024"
        },
        {
          id: 2,
          name: "Afternoon Batch",
          icon: Sun,
          timeIST: "2:00 PM - 3:30 PM",
          timeCEST: "10:30 AM - 12:00 PM",
          days: "Mon-Fri",
          duration: "8 weeks",
          startDate: "July 12, 2024"
        }
      ]
    },
    {
      level: "A2 Elementary",
      batches: [
        {
          id: 3,
          name: "Evening Batch",
          icon: Moon,
          timeIST: "6:30 PM - 8:00 PM",
          timeCEST: "2:00 PM - 3:30 PM",
          days: "Mon-Fri",
          duration: "10 weeks",
          startDate: "July 15, 2024"
        },
        {
          id: 4,
          name: "Weekend Batch",
          icon: Cloud,
          timeIST: "10:00 AM - 1:00 PM",
          timeCEST: "6:30 AM - 9:30 AM",
          days: "Sat-Sun",
          duration: "12 weeks",
          startDate: "July 20, 2024"
        }
      ]
    },
    {
      level: "B1 Intermediate",
      batches: [
        {
          id: 5,
          name: "Night Batch",
          icon: Moon,
          timeIST: "9:00 PM - 10:30 PM",
          timeCEST: "5:30 PM - 7:00 PM",
          days: "Mon-Fri",
          duration: "12 weeks",
          startDate: "August 5, 2024"
        },
        {
          id: 6,
          name: "Flexi Batch",
          icon: Cloud,
          timeIST: "Flexible Timings",
          timeCEST: "Flexible Timings",
          days: "Custom",
          duration: "Self-paced",
          startDate: "Rolling Admissions"
        }
      ]
    }
  ];

  const allBatches: Batch[] = [
    ...batchesByLevel[0].batches.map(b => ({ ...b, level: batchesByLevel[0].level })),
    ...batchesByLevel[1].batches.map(b => ({ ...b, level: batchesByLevel[1].level })),
    ...batchesByLevel[2].batches.map(b => ({ ...b, level: batchesByLevel[2].level })),
    ...Array.from({ length: 6 }, (_, i) => ({
      id: i + 7,
      name: `Batch ${i + 7}`,
      icon: i % 2 === 0 ? Sun : Moon,
      timeIST: `${i + 6}:00 AM - ${i + 7}:30 AM`,
      timeCEST: `${i + 2}:30 AM - ${i + 3}:30 AM`,
      days: i % 3 === 0 ? "Mon-Fri" : "Sat-Sun",
      duration: `${i + 4} weeks`,
      startDate: `August ${i + 10}, 2024`,
      level: 
        i % 3 === 0 ? "A1 Beginner" : 
        i % 3 === 1 ? "A2 Elementary" : 
        "B1 Intermediate"
    }))
  ];

  const nextLevel = () => {
    setCurrentLevelIndex((prev) => 
      prev === batchesByLevel.length - 1 ? 0 : prev + 1
    );
  };

  const prevLevel = () => {
    setCurrentLevelIndex((prev) => 
      prev === 0 ? batchesByLevel.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (showModal && modalRef.current) {
      // Scroll to modal with smooth behavior
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showModal]);

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-german-light flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-german-dark" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Upcoming <span className="text-german">Online Batches</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our live interactive classes from anywhere in the world
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows - Floating beside cards */}
          <button 
            onClick={prevLevel}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Previous level"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextLevel}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Next level"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Current Level Title */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            {batchesByLevel[currentLevelIndex].level}
          </h2>

          {/* Batch Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {batchesByLevel[currentLevelIndex].batches.map((batch) => {
              const Icon = batch.icon;
              return (
                <div key={batch.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    {/* Batch Header */}
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 rounded-full bg-blue-50">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{batch.name}</h3>
                    </div>
                    
                    {/* Batch Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3">
                          <Clock className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Timing</p>
                          <p className="text-gray-600">
                            IST: {batch.timeIST}<br />
                            CEST: {batch.timeCEST}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 mr-3">
                          <Calendar className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Starts</p>
                          <p className="text-gray-600">{batch.startDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 mr-3">
                          <Users className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Duration</p>
                          <p className="text-gray-600">{batch.duration}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <button className="w-full flex items-center justify-center bg-german-light hover:bg-german text-german-dark hover:text-white px-4 py-3 rounded-lg font-medium transition-colors border border-german">
                      Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {batchesByLevel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentLevelIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentLevelIndex === index ? 'bg-german w-6' : 'bg-gray-300'}`}
              aria-label={`Go to ${batchesByLevel[index].level}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
          >
            View All {allBatches.length} Batches
          </button>
        </div>

        {/* Modal with ref for scrolling */}
        {showModal && (
          <div 
            ref={modalRef}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-4 border-b">
                  <h2 className="text-2xl font-bold text-gray-900">All Upcoming Batches</h2>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {allBatches.map((batch) => {
                    const Icon = batch.icon;
                    return (
                      <div key={batch.id} className="border-b pb-6 last:border-b-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start space-x-4">
                            <div className="p-2 rounded-full bg-blue-50 mt-1">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{batch.level} - {batch.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">
                                {batch.days} • {batch.duration}
                              </p>
                            </div>
                          </div>
                          <div className="md:text-right">
                            <p className="text-gray-800 font-medium">{batch.timeIST} (IST)</p>
                            <p className="text-gray-600 text-sm">{batch.timeCEST} (CEST)</p>
                          </div>
                          <div>
                            <p className="text-gray-800">{batch.startDate}</p>
                          </div>
                          <button className="px-4 py-2 bg-german-light hover:bg-german text-german-dark hover:text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                            Enroll
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingBatches;