import { 
    Calendar, 
    Clock, 
    Users, 
    ArrowRight,
    BookOpen,
    Sun,
    Moon,
    Cloud
  } from 'lucide-react';
  
  const UpcomingBatches = () => {
    // Batch timing data

    //Add multiple timings for a batch morning/eveing
    //Duration 
    //Timing in both IST and CEST
    //Multiple cards Carousal / View more

    const batchTimings = [
      {
        id: 1,
        name: "Morning Batch",
        icon: Sun,
        time: "7:00 AM - 8:30 AM",
        days: "Mon-Fri",
        level: "A1 Beginner",
        startDate: "July 10, 2024"
      },
      {
        id: 2,
        name: "Evening Batch",
        icon: Moon,
        time: "6:30 PM - 8:00 PM",
        days: "Mon-Fri",
        level: "B1 Intermediate",
        startDate: "July 15, 2024"
      },
      {
        id: 3,
        name: "Night Batch",
        icon: Cloud,
        time: "9:00 PM - 10:30 PM",
        days: "Mon-Fri",
        level: "A2 Elementary",
        startDate: "August 5, 2024"
      }
    ];
  
    return (
      <section id="courses" className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
  
          {/* Batch Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {batchTimings.map((batch) => {
              const Icon = batch.icon;
              return (
                <div key={batch.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    {/* Batch Header */}
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 rounded-full bg-blue-50">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{batch.level}</h3>
                    </div>
                    
                    {/* Batch Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3">
                          <Clock className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Timing</p>
                          <p className="text-gray-600">{batch.time} ({batch.days})</p>
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
                          <p className="text-gray-800 font-medium">Batch</p>
                          <p className="text-gray-600">{batch.name}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <button className="w-full flex items-center justify-center bg-german-light hover:bg-german text-german-dark hover:text-white px-4 py-3 rounded-lg font-medium transition-colors border border-german">
                      Get Details <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default UpcomingBatches;