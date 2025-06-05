import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AppreciationsCarousel = () => {
  const TOTAL_IMAGES = 35;
  const COLUMN_COUNT = 3;
  const SCROLL_SPEED = 40;
  const ITEM_HEIGHT = 280; // Height of each item including margin

  // Generate all image items
  const generateItems = () => {
    return Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
      id: `img-${i+1}`,
      src: `/images/Appreciation/img${i+1}.jpg`,
      alt: `Appreciation ${i+1}`
    }));
  };

  // Initialize columns with duplicate items for seamless looping
  const initializeColumns = () => {
    const allItems = generateItems();
    const itemsPerColumn = Math.ceil(TOTAL_IMAGES / COLUMN_COUNT);
    
    return Array(COLUMN_COUNT).fill(0).map((_, colIndex) => {
      const start = colIndex * itemsPerColumn;
      const end = Math.min(start + itemsPerColumn, TOTAL_IMAGES);
      const columnItems = allItems.slice(start, end);
      // Duplicate items to allow seamless looping
      return [...columnItems, ...columnItems];
    });
  }; 

  const [columns, setColumns] = useState(initializeColumns());
  const columnRefs = Array(COLUMN_COUNT).fill(0).map(() => useRef<HTMLDivElement>(null));
  const animationRef = useRef<number>();
  const positions = useRef(Array(COLUMN_COUNT).fill(0));

  //Animation loop with all columns scrolling up
  const animate = () => {
    columnRefs.forEach((ref, colIndex) => {
      if (!ref.current) return;

      // All columns scroll up (negative direction)
      positions.current[colIndex] -= SCROLL_SPEED / 60;

      // Calculate when to reset position for seamless looping
      const columnHeight = ITEM_HEIGHT * (columns[colIndex].length / 2);
      if (positions.current[colIndex] <= -columnHeight) {
        positions.current[colIndex] = 0;
      }

      // Apply transform (positive Y since we're scrolling up)
      ref.current.style.transform = `translateY(${positions.current[colIndex]}px)`;
    });

    animationRef.current = requestAnimationFrame(animate);
  }; 


  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="py-16 bg-german-light/30 relative overflow-hidden">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-german-dark to-german">Students Say</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Hear from our Community from around the world!! 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[600px] overflow-hidden">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              ref={columnRefs[colIndex]}
              className="space-y-6"
              style={{ willChange: 'transform' }}
            >
              {column.map((item, idx) => (
                <motion.div
                  key={`${colIndex}-${item.id}-${idx}`}
                  className="rounded-xl shadow-sm "
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-full h-64 overflow-hidden rounded-lg">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-50 to-transparent z-10"></div> */}
    </div>
  );
};

export default AppreciationsCarousel;