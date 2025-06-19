import { Star, Video, ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { LoadScript } from '@react-google-maps/api';
import { useInView } from 'react-intersection-observer';
import AppreciationsCarousel from './AppreciationCarousel';
import { GoogleWidget } from './GoogleReviewWidget';

const reviews = [
  {
    name: 'John Doe',
    date: 'May 15, 2023',
    content: 'Great service! The team was very professional and delivered exactly what they promised.',
    rating: 5
  },
  {
    name: 'John Doe',
    date: 'May 15, 2023',
    content: 'Great service! The team was very professional and delivered exactly what they promised.',
    rating: 5
  },
  {
    name: 'John Doe',
    date: 'May 15, 2023',
    content: 'Great service! The team was very professional and delivered exactly what they promised.',
    rating: 5
  },
  {
    name: 'John Doe',
    date: 'May 15, 2023',
    content: 'Great service! The team was very professional and delivered exactly what they promised.',
    rating: 5
  },
  {
    name: 'John Doe',
    date: 'May 15, 2023',
    content: 'Great service! The team was very professional and delivered exactly what they promised.',
    rating: 5
  },
  {
    name: 'John Doe',
    date: 'May 15, 2023',
    content: 'Great service! The team was very professional and delivered exactly what they promised.',
    rating: 5
  },
  {
    name: 'John Doe',
    date: 'May 15, 2023',
    content: 'Great service! The team was very professional and delivered exactly what they promised.',
    rating: 5
  },
];


interface ReviewProps {
  name: string;
  level: string;
  comment: string;
  rating?: number;
  initials: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  videoUrl?: string;
}

interface PlaceReview {
  author_name?: string;
  text?: string;
  rating?: number;
}

interface CombinedReviewProps extends ReviewProps {
  source: 'internal' | 'google';
}

const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const defaultReviews: ReviewProps[] = [
  {
    name: "Julia König",
    level: "B1 Student",
    comment: "Being in this course was the best thing I did for my German learning. From basics to advanced conversations, everything is covered in detail.",
    rating: 5,
    initials: "JK",
    metrics: [
      { label: "31%", value: "31%", description: "Increase in vocabulary" },
      { label: "7X", value: "7X", description: "Speaking confidence" },
      { label: "2X", value: "2X", description: "Learning speed" }
    ]
  },
  {
    name: "Michael Schmidt",
    level: "A2 Student",
    comment: "Through this course, I got methods and tips that, if followed properly, can allow me to master German grammar quickly. Can't recommend it enough!",
    rating: 5,
    initials: "MS",
    videoUrl: "https://example.com/video1.mp4",
    metrics: [
      { label: "6X", value: "6X", description: "Increase in fluency" },
      { label: "13%", value: "13%", description: "Grammar improvement" },
      { label: "4X", value: "4X", description: "Confidence boost" }
    ]
  },
  {
    name: "Sarah Weber",
    level: "C1 Student",
    comment: "Through the course, I gained a valuable understanding of German culture and business German. The module on professional communication transformed my career.",
    rating: 4,
    initials: "SW",
    metrics: [
      { label: "2.7M", value: "2.7M", description: "Words practiced" },
      { label: "712", value: "712", description: "Hours of practice" },
      { label: "39K", value: "39K", description: "Vocabulary words" }
    ]
  },
  {
    name: "Thomas Müller",
    level: "A1 Student",
    comment: "Started as a complete beginner and now I can handle basic conversations. The interactive exercises make learning German fun and engaging.",
    rating: 5,
    initials: "TM",
    videoUrl: "https://example.com/video2.mp4",
    metrics: [
      { label: "92%", value: "92%", description: "Course completion" },
      { label: "8X", value: "8X", description: "Practice sessions" },
      { label: "5X", value: "5X", description: "Speaking confidence" }
    ]
  },
];

const videoReviews = [
  {
    id: "1",
    name: "Nitish",
    level: "Youtube Short",
    thumbnail: "/images/avatars/nitish.png",
    youtubeId: "5g1zxasmHMg",
  },
  {
    id: "2",
    name: "Tanya",
    level: "Youtube Short",
    thumbnail: "/images/avatars/tanya.png",
    youtubeId: "c4ZjjDoFkAs",
  },
  {
    id: "3",
    name: "Amit",
    level: "Youtube Short",
    thumbnail: "/images/avatars/amit.png",
    youtubeId: "_gKyoBwRiHo",
  },
  {
    id: "4",
    name: "Nitin",
    level: "Youtube Short",
    thumbnail: "/images/avatars/nitin.png",
    youtubeId: "mOnnBla0Ctc",
  },
  {
    id: "5",
    name: "Komal",
    level: "YouTube Short",
    thumbnail: "images/avatars/komal.png",
    youtubeId: "mjzpJvTRlU8"
  },
  {
    id: "6",
    name: "Sanjana",
    level: "YouTube Short",
    thumbnail: "images/avatars/sanjana.png",
    youtubeId: "Z9ZUs3a1nZE"
  },
  {
    id: "7",
    name: "Parul",
    level: "YouTube Short",
    thumbnail: "images/avatars/parul.png",
    youtubeId: "wTQfZgKCnlA"
  },
  {
    id: "8",
    name: "Kalpana",
    level: "YouTube Short",
    thumbnail: "images/avatars/kalpana.png",
    youtubeId: "-__RrgkTqCE"
  },
  {
    id: "9",
    name: "Rajat",
    level: "YouTube Short",
    thumbnail: "images/avatars/rajat.png",
    youtubeId: "hjeGr3pQ4JI"
  },
  {
    id: "10",
    name: "Kalash",
    level: "YouTube Short",
    thumbnail: "images/avatars/kalash.png",
    youtubeId: "0GJzMZOjZj8"
  },
  {
    id: "11",
    name: "Muskaan",
    level: "YouTube Short",
    thumbnail: "images/avatars/muskaan.png",
    youtubeId: "_AXKS9OKZwE"
  },
  {
    id: "12",
    name: "Jagriti",
    level: "YouTube Short",
    thumbnail: "images/avatars/jagriti.png",
    youtubeId: "Gahc6SjTnzA"
  }
];


const StudentMetrics = ({ metrics }: { metrics: ReviewProps['metrics'] }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t">
      {metrics.map((metric, idx) => (
        <div key={idx} className="text-center">
          <div className="text-xl md:text-2xl font-bold text-german-dark">
            {metric.value}
          </div>
          <div className="text-xs text-gray-500 line-clamp-2">
            {metric.description}
          </div>
        </div>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: CombinedReviewProps }) => {
  return (
    <Card className={`h-full border-none shadow-md hover:shadow-xl transition-all ${
      review.source === 'internal' ? 'bg-german-light/30' : 'bg-white'
    }`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="h-14 w-14 border-2 border-german">
            <AvatarFallback className="bg-german text-white text-lg">
              {review.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-lg">{review.name}</p>
            <p className="text-sm text-gray-600">{review.level}</p>
            {review.rating && (
              <div className="flex mt-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${
                      i < review.rating 
                        ? review.source === 'internal' 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-[#56e0fe] fill-[#56e0fe]'
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 mb-auto">{review.comment}</p>
        
        {review.source === 'internal' && review.metrics.length > 0 && (
          <StudentMetrics metrics={review.metrics} />
        )}
        
        {review.source === 'google' && (
          <div className="mt-4 flex items-center">
            <img 
              src="/images/google.jpg" 
              alt="Google review" 
              className="h-5 w-5 mr-2"
            />
            <span className="text-sm text-gray-500">Google Review</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const VideoReviewCircle = ({ review }: { review: typeof videoReviews[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    
    // 3 second delay
    hoverTimerRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    // Clear timer if mouse leaves before delay completes
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    
    // Only close if mouse leaves both trigger and dialog
    if (isOpen) {
      const isHoveringDialog = dialogRef.current?.contains(document.activeElement);
      if (!isHoveringDialog) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      // Clean up timer on unmount
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div 
        className="relative flex flex-col items-center group w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <DialogTrigger asChild>
          <button className="flex flex-col items-center w-full">
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-br from-german-light via-german to-german-dark group-hover:from-german group-hover:to-german-dark transition-all mx-auto">
              <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden relative">
                <img 
                  src={review.thumbnail} 
                  alt={review.name} 
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Video className="w-6 h-6 text-german-dark" />
                </div>
              </div>
            </div>
            <p className="text-xs mt-2 text-gray-600 text-center">{review.name}</p>
            <p className="text-xs text-gray-400 text-center">{review.level}</p>
          </button>
        </DialogTrigger>
      </div>
      
      <DialogContent 
        ref={dialogRef}
        className="p-0 bg-transparent border-none shadow-none max-w-[360px] w-full mx-2"
        onInteractOutside={(e) => e.preventDefault()}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="relative" style={{ width: '100%', paddingBottom: '177.78%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${review.youtubeId}?autoplay=0`}
              title={`Testimonial from ${review.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-bold text-white text-shadow-md">{review.name}</h3>
                <p className="text-sm text-white/80 text-shadow-md">{review.level}</p>
              </div>
            </div>
          </div>
          
          <DialogClose 
            className="absolute top-3 right-3 bg-black/50 rounded-full p-1.5 hover:bg-black/70 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X className="w-4 h-4 text-white" />
          </DialogClose>
          
          <div className="absolute top-2 left-2 right-2 flex gap-1">
            <div className="h-1 bg-white/30 flex-1 rounded-full">
              <div className="h-full bg-white rounded-full animate-progress" style={{ animationDuration: '5s' }}></div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const StudentNumber = () => (
  <div className="bg-german rounded-lg p-6 text-white mb-10 max-w-xs mx-auto">
    <div className="text-xl md:text-2xl font-bold mb-2">10,000+ Students</div>
    <div className="text-md italic ">Trust us to make German Easy and Enjoyable!</div>
  </div>
);

const ReviewSection = () => {
  const [combinedReviews, setCombinedReviews] = useState<CombinedReviewProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [showDefaultReviews, setShowDefaultReviews] = useState(false);

  const fetchGoogleReviews = () => {
    if (!window.google) {
      setShowDefaultReviews(true);
      setIsLoading(false);
      return;
    }

    const dummyDiv = document.createElement("div");
    const map = new window.google.maps.Map(dummyDiv);
    const service = new window.google.maps.places.PlacesService(map);

    service.getDetails(
      {
        placeId: GOOGLE_PLACE_ID,
        fields: ["reviews"],
      },
      (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.reviews?.length) {
          const googleReviews: CombinedReviewProps[] = place.reviews
            .filter((r: PlaceReview) => r.author_name && r.text && r.rating)
            .map((r: PlaceReview) => ({
              name: r.author_name || 'Anonymous',
              level: "Student",
              comment: r.text || '',
              rating: r.rating || 0,
              initials: r.author_name?.split(' ').map(n => n[0]).join('') || 'A',
              metrics: [],
              source: 'google',
              videoUrl: undefined
            }));
          
          setCombinedReviews(googleReviews);
          setShowDefaultReviews(false);
        } else {
          console.warn("Could not load reviews from SDK", status);
          setShowDefaultReviews(true);
        }
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    setCombinedReviews([]);
  }, []);

  const displayReviews = showDefaultReviews 
    ? defaultReviews.map(r => ({ ...r, source: 'internal' as const }))
    : combinedReviews;

  return (
    <section id="reviews" className="py-20 bg-german-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories from GermanWithAmit Students</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-10">
          They started just like you — now they’re telling their success stories.
          </p>
          
          <StudentNumber />
          
          <div className="mb-10 px-4">
            <Carousel
              opts={{
                align: "start", 
                loop: true
              }}
              className="w-full max-w-xl mx-auto"
            >
              <CarouselContent className="-ml-1">
                {videoReviews.map((review) => (
                  <CarouselItem key={review.id} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4">
                    <div className="p-1">
                      <VideoReviewCircle review={review} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 space-x-2">
                <CarouselPrevious className="static transform-none" />
                <CarouselNext className="static transform-none" />
              </div>
            </Carousel>
          </div>
        </div>

        <AppreciationsCarousel />

        <LoadScript 
          googleMapsApiKey={GOOGLE_API_KEY} 
          libraries={["places"]} 
          onLoad={fetchGoogleReviews}
          onError={() => {
            setShowDefaultReviews(true);
            setIsLoading(false);
          }}
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#076bfd]" />
            </div>
          ) : (
            <div ref={ref} className={`animate-scale ${inView ? "in-view" : ""} relative`}>
              <Carousel
                opts={{
                  align: "start", 
                  loop: true
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
                  {displayReviews.map((review, index) => (
                    <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                      <div className="p-1">
                        <ReviewCard review={review} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-6">
                  <CarouselPrevious className="static mx-2 transform-none" />
                  <CarouselNext className="static mx-2 transform-none" />
                </div>
              </Carousel>
            </div>
          )}
        </LoadScript>
        
        {/* Text Review Cards  */}
         <section>
          <GoogleWidget 
            reviews={reviews}
            title="Excellent"
            rating={4.7}
            reviewCount={116}
            logoUrl="https://www.gstatic.com/images/branding/product/1x/googleg_64dp.png"
          />
        </section>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-german">
            Join over 5,000+ students who have successfully learned German with us!
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReviewSection;