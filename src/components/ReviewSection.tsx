import { Star, Video, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

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
  image?: string;
  videoUrl?: string;
}

const reviews: ReviewProps[] = [
  {
    name: "Julia König",
    level: "B1 Student",
    comment: "Being in this course was the best thing I did for my German learning. From basics to advanced conversations, everything is covered in detail.",
    rating: 5,
    initials: "JK",
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    id: "2",
    name: "Podcast with German Embassy",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    youtubeId: "mjzpJvTRlU8"
  },
  {
    id: "4",
    name: "Meeting with German Ambassador",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    youtubeId: "Z9ZUs3a1nZE"
  },
  {
    id: "6",
    name: "Proverbs with Mr Kasper",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    youtubeId: "wTQfZgKCnlA"
  },
  {
    id: "8",
    name: "Proverbs with Mr Kasper",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    youtubeId: "-__RrgkTqCE"
  },
  {
    id: "10",
    name: "Proverbs with Mr Kasper",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    youtubeId: "hjeGr3pQ4JI"
  },
  {
    id: "12",
    name: "Proverbs with Mr Kasper",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    youtubeId: "-__RrgkTqCE"
  },
  {
    id: "14",
    name: "Proverbs with Mr Kasper",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    youtubeId: "0GJzMZOjZj8"
  },
  {
    id: "16",
    name: "Proverbs with Mr Kasper",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    youtubeId: "_AXKS9OKZwE"
  },
  {
    id: "18",
    name: "Proverbs with Mr Kasper",
    level: "YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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

const ReviewCard = ({ review, index }: { review: ReviewProps; index: number }) => {
  return (
    <Card className="h-full bg-german-light/30 border-none shadow-md hover:shadow-xl transition-all">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="h-14 w-14 border-2 border-german">
            <AvatarImage src={review.image} alt={review.name} />
            <AvatarFallback className="bg-german text-white text-lg">{review.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-lg">{review.name}</p>
            <p className="text-sm text-gray-600">{review.level}</p>
            {review.rating && (
              <div className="flex mt-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 mb-auto">{review.comment}</p>
        
        <StudentMetrics metrics={review.metrics} />
      </CardContent>
    </Card>
  );
};

const VideoReviewCircle = ({ review }: { review: typeof videoReviews[0] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex flex-col items-center group w-full">
          <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-br from-german-light via-german to-german-dark group-hover:from-german group-hover:to-german-dark transition-all mx-auto">
            <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden relative">
              <img 
                src={review.thumbnail} 
                alt={review.name} 
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                  <Video className="w-4 h-4 text-german" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs mt-2 text-gray-600 text-center">{review.name}</p>
          <p className="text-xs text-gray-400 text-center">{review.level}</p>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full p-0 bg-black border-none overflow-hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full h-[80vh]"
        >
          <CarouselContent className="h-full">
            {videoReviews.map((video) => (
              <CarouselItem key={video.id} className="h-full">
                <AspectRatio ratio={9/16} className="bg-black h-full">
                  <div className="w-full h-full flex flex-col">
                  
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      title={`Testimonial from ${video.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-medium text-white">{video.name}</h3>
                      <p className="text-sm text-gray-300">{video.level}</p>
                      
                    </div>
                  </div>
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

const StudentNumber = () => (
  <div className="bg-german rounded-lg p-6 text-white mb-10 max-w-xs mx-auto">
    <div className="text-4xl md:text-5xl font-bold mb-2">13,693+</div>
    <div className="text-xl italic font-medium">students have taken this course!</div>
  </div>
);

const ReviewSection = () => {
  const [activeTab, setActiveTab] = useState<'written' | 'video'>('written');
  
  return (
    <section id="reviews" className="py-20 bg-german-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-10">
            Hear from our students who have transformed their German language skills through our courses.
          </p>
          
          <StudentNumber />
          
          {/* Video Reviews Carousel */}
          <div className="mb-10 px-4">
            <Carousel
              opts={{
                align: "start", loop: true
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

        {/* Written Reviews Carousel */}
        <Carousel
          opts={{
            align: "start", loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                <div className="p-1">
                  <ReviewCard review={review} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static mx-2 transform-none" />
            <CarouselNext className="static mx-2 transform-none" />
          </div>
        </Carousel>
        
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