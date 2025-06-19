import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card'; 

export interface Review {
  name: string;
  date: string;
  content: string;
  rating: number;
}

interface GoogleWidgetProps {
  reviews: Review[];
  title?: string;
  rating?: number;
  reviewCount?: number;
  logoUrl?: string;
}

export function GoogleWidget({
  reviews,
  title = 'Excellent',
  rating = 5,
  reviewCount = 414,
  logoUrl = 'https://www.gstatic.com/images/branding/product/1x/googleg_64dp.png'
}: GoogleWidgetProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start justify-center p-6 bg-white rounded-2xl shadow-lg">
      {/* Rating Summary Section */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex items-center mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
            />
          ))}
        </div>
        <div className="text-sm text-gray-600 mb-2">
          Based on <span className="font-semibold">{reviewCount} reviews</span>
        </div>
        {logoUrl && (
          <img 
            src={logoUrl} 
            alt="Rating logo" 
            className="w-10 h-10" 
          />
        )}
      </div>

      {/* Reviews Carousel Section */}
      <div className="flex items-center space-x-2 w-full md:w-[calc(100%-180px)]">
        <button 
          onClick={() => scroll('left')}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          aria-label="Scroll reviews left"
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto snap-x snap-mandatory w-full py-2 no-scrollbar scroll-smooth"
        >
          {reviews.map((review, index) => (
            <Card key={`${review.name}-${index}`} className="w-72 min-w-[18rem] snap-start flex-shrink-0">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-0.5`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-700 leading-snug line-clamp-3">
                  {review.content}
                </div>
                <button className="text-blue-600 text-sm hover:underline focus:outline-none">
                  Read more
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          aria-label="Scroll reviews right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}