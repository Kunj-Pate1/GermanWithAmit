
import { Check } from 'lucide-react';

const StudySection = () => {
  const steps = [
    {
      number: "01",
      title: "Communication First Approach- Speak from Day 1",
      description: "At German With Amit, we focus on speaking first. From your very first class, you’ll practice real-life conversations, roleplays, and dialogues — building fluency and confidence from day one.",
    },
    {
      number: "02",
      title: "Complete Language Mastery",
      description: "We integrate all four essential skills — speaking, reading, writing, and listening — into every lesson. No skill is left behind, ensuring a complete and balanced learning experience.",
    },
    {
      number: "03",
      title: " Real Audio, Video & Visual Practice",
      description: "Train your ear and comprehension with native audio, videos, and visual prompts. Learn how German is used in daily life — not just textbook examples.",
    },
    {
      number: "04",
      title: "Weekly Reviews & Progress Tests to Stay on Track",
      description: "Stay motivated and measure your growth with weekly grammar revision, speaking boosters, quizzes, and fluency checkpoints — all designed to help you stay on target.",
    }
  ];

  const benefits = [
    "Speaking First Approach & Conversation based curriculum",
    "Lifetime Recording Access",
    "Audio Excercises",
    "Goethe/TELC Exam Training",
    "Trilingual Support- Hindi + English + German",
    "Scholarship & Study Abroad Guidance",
    "Premium Learning Materials",
    "Mock Test and Real time feedback",
    "Qualified, Passionate Trainers",
  ];

  return (
    <section id="study" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Effective <span className="text-german">Study Method</span>
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
            Our German teaching method helps you learn to speak German fluently, master all four skills, and stay on track with real-life practice and weekly reviews.
            </p>
            
            <div className="space-y-6 mb-8">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-german-light flex items-center justify-center text-german-dark font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Learn With Us?</h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 bg-german-light rounded-full p-1">
                    <Check className="h-4 w-4 text-german-dark" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Pro Tip:</span> Consistency is key! Just 20 minutes of German practice per day is more effective than several hours once a week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySection;
