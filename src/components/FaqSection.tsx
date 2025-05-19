
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircleQuestion } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

// const faqs: FaqItem[] = [
//   {
//     question: "How long does it take to learn German?",
//     answer: "Learning time varies based on your starting level, study intensity, and language aptitude. Generally, reaching A1 level takes around 80-100 hours, B1 level around 300-400 hours, and C1 level around 700-800 hours of study. Our structured courses are designed to optimize your learning time."
//   },
//   {
//     question: "What level should I start with?",
//     answer: "We offer a free assessment test to determine your current level. Complete beginners should start with our A1 course, while those with some knowledge can take our placement test to find the perfect starting point."
//   },
//   {
//     question: "Are your courses suitable for preparing for official exams?",
//     answer: "Yes, our courses are aligned with the Common European Framework of Reference for Languages (CEFR) and prepare you for official exams like the Goethe-Zertifikat, TestDaF, and telc Deutsch."
//   },
//   {
//     question: "How are the online classes conducted?",
//     answer: "Our online classes take place via Zoom with small groups of 4-8 students to ensure personalized attention. Classes include interactive exercises, conversation practice, and multimedia resources that make learning engaging and effective."
//   },
//   {
//     question: "Do you offer individual lessons?",
//     answer: "Yes, we offer one-on-one tutoring tailored to your specific needs and learning pace. Individual lessons can focus on general German, business German, exam preparation, or specific areas you want to improve."
//   },
//   {
//     question: "What's your refund policy?",
//     answer: "We offer a 7-day satisfaction guarantee. If you're not satisfied with the course after your first week, we'll provide a full refund. For more details, please refer to our Terms and Conditions."
//   }
// ];
const faqs: FaqItem[] = [
  {
    question: "Who is GermanWithAmit?",
    answer: "GermanWithAmit is more than just a name—it's a online German learning plattform. Founded by Amit Bansal, a DAAD scholar and certified German trainer, the platform empowers learners through real-world language skills, personal mentorship, and a community-driven approach."
  },
  {
    question: "What levels of German do you teach",
    answer: "I offer training for all major levels of German, from complete beginner to advanced. Whether you're starting with A1 or A2 as a beginner, moving into intermediate levels like B1 and B2, or aiming for advanced proficiency with C1 (available on request), there's a path for you. You can join at any stage—even if you’re starting from scratch!"
  },
  {
    question: "Is it online or offline?",
    answer: "All classes are online and accessible from anywhere. You’ll get live, interactive sessions — not pre-recorded content."
  },
  {
    question: "Do you prepare students for certification exams (Goethe, ÖSD, etc.)?",
    answer: "Yes! My courses are specifically designed to prepare you for exams like Goethe-Institut, ÖSD, and TestDaF. Mock tests and targeted training are included."
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes! You can book a free trial group class to experience how our sessions work and get your questions answered. Prefer personal attention? You can also book a 1:1 demo session with one of our trainers for just ₹500—which will later be adjusted in your course fee if you decide to enroll."
  },
  {
    question: "What are the class timings?",
    answer: "Flexible batch timings are available, including evening and weekend slots — great for students and working professionals."
  },
  {
    question: "How can I enroll?",
    answer: "Simply fill out the contact form or message me on WhatsApp. I’ll guide you through the next steps based on your level and goals."
  },
  {
    question: "Are the classes online or in-person?",
    answer: "We offer both online and in-person classes to suit your preferences and schedule. Online classes use interactive platforms for optimal learning."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <MessageCircleQuestion className="text-german" />
          <p className="text-german font-medium">Frequently Asked Questions</p>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got Questions?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Find answers to commonly asked questions about our German language courses
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div 
                className={`border rounded-lg transition-all duration-300 ${openIndex === index ? 'bg-white shadow-md' : 'bg-white hover:bg-gray-50'}`}
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                  <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-5 pt-0 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Still have questions? <a href="#contact" className="text-german hover:text-german-dark font-medium">Contact us</a> and we'll be happy to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
