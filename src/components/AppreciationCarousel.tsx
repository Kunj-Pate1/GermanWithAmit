import { motion, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

interface Appreciation {
  id: number;
  name: string;
  role: string;
  image: string;
  comment: string;
  rating: number;
}

const AppreciationsCarousel = () => {
  // Minimum 4 appreciation per column for best effect
  const appreciation: Appreciation[] = [
    { id: 1, name: "Rahul Sharma", role: "Student at TUM", image: "/appreciation/1.jpg", comment: "Great teacher!", rating: 5 },
    { id: 2, name: "Priya Patel", role: "Working Professional", image: "/appreciation/2.jpg", comment: "Excellent methods", rating: 5 },
    { id: 3, name: "Arjun Singh", role: "DAAD Scholar", image: "/appreciation/3.jpg", comment: "Very helpful", rating: 4 },
    { id: 4, name: "Neha Gupta", role: "Student", image: "/appreciation/4.jpg", comment: "Amazing experience", rating: 5 },
    { id: 5, name: "Vikram Joshi", role: "Engineer", image: "/appreciation/5.jpg", comment: "Highly recommend", rating: 4 },
    { id: 6, name: "Ananya Reddy", role: "Medical Student", image: "/appreciation/6.jpg", comment: "Perfect course", rating: 5 },
    { id: 7, name: "Sanjay Verma", role: "Researcher", image: "/appreciation/7.jpg", comment: "Great materials", rating: 5 },
    { id: 8, name: "Meera Kapoor", role: "Designer", image: "/appreciation/8.jpg", comment: "Very professional", rating: 4 },
    { id: 9, name: "Amit Khanna", role: "Developer", image: "/appreciation/9.jpg", comment: "Best decision", rating: 5 },
    { id: 10, name: "Divya Nair", role: "Architect", image: "/appreciation/10.jpg", comment: "Transformative", rating: 5 },
    { id: 11, name: "Rohan Mehta", role: "Consultant", image: "/appreciation/11.jpg", comment: "Exceptional", rating: 4 },
    { id: 12, name: "Kavita Joshi", role: "Professor", image: "/appreciation/12.jpg", comment: "Life-changing", rating: 5 },
  ];

  // Split into 3 columns
  const columns: Appreciation[][] = [[], [], []];
  appreciation.forEach((testimonial, index) => {
    columns[index % 3].push(testimonial);
  });

  // Create double-length columns for seamless looping
  const extendedColumns = columns.map(column => [...column, ...column]);

  const containerRef = useRef<HTMLDivElement>(null);
  const columnRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const requestRef = useRef<number>();
  const speed = 30; // pixels per second
  const directions = [1, -1, 1]; // Middle column scrolls opposite
  const startTimes = useRef<number[]>([0, 0, 0]);

  // Perfect seamless looping animation
  const animate = (time: number) => {
    if (!containerRef.current) return;

    columnRefs.forEach((ref, colIndex) => {
      if (!ref.current) return;

      // Initialize start time if not set
      if (!startTimes.current[colIndex]) {
        startTimes.current[colIndex] = time;
      }

      // Calculate elapsed time for this column
      const elapsed = (time - startTimes.current[colIndex]) / 1000;
      
      // Calculate position based on elapsed time
      const scrollHeight = ref.current.scrollHeight / 2; // Since we doubled content
      let position = (elapsed * speed * directions[colIndex]) % scrollHeight;
      
      // Ensure position is positive
      position = (position + scrollHeight) % scrollHeight;
      
      // Apply the transform
      ref.current.style.transform = `translateY(${-position}px)`;
      
      // Reset start time periodically to prevent precision loss
      if (elapsed > 10) {
        startTimes.current[colIndex] = time;
      }
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useAnimationFrame((time) => {
    if (!requestRef.current) {
      animate(time);
    }
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="py-16 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-german-dark to-german">Students Say</span>
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Hear from our community of successful German learners
        </p> */}

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[600px] overflow-hidden"
        >
          {extendedColumns.map((column, colIndex) => (
            <div 
              key={colIndex}
              ref={columnRefs[colIndex]}
              className="testimonial-column space-y-6"
              style={{ 
                willChange: 'transform',
                height: '100%'
              }}
            >
              {column.map((testimonial, idx) => (
                <motion.div
                  key={`${colIndex}-${testimonial.id}-${idx}`}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-german-light">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{testimonial.comment}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stronger gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 via-gray-50/90 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent pointer-events-none z-10"></div>
    </motion.div>
  );
};

export default AppreciationsCarousel;