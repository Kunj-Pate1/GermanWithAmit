"use client";

import { Instagram } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ReelProps {
  id: string;
  title: string;
  url: string;
  views: string;
  date: string;
}

const reels: ReelProps[] = [
  {
    id: "1",
    title: "Fintiba:Your Gateway to Germany",
    url: "https://www.instagram.com/reel/DI85K1hsN8J/?igsh=MTJldXJlenE1bDNqaQ==",
    views: "12K",
    date: "2 weeks ago"
  },
  {
    id: "2",
    title: "Pfand,SuperMarket and German",
    url: "https://www.instagram.com/reel/DDwy7SXMYLl/",
    views: "8.5K",
    date: "1 month ago"
  },
  {
    id: "3",
    title: "German on Streets",
    url: "https://www.instagram.com/reel/DI_b_4Vs-x3/",
    views: "15K",
    date: "3 weeks ago"
  },
  {
    id: "4",
    title: "Car Parts in German",
    url: "https://www.instagram.com/reel/DIykuWLMxsy/",
    views: "7.2K",
    date: "2 months ago"
  },
  {
    id: "5",
    title: "Textbook vs RealBook German",
    url: "https://www.instagram.com/reel/DI3r_4pMZIL/",
    views: "10K",
    date: "3 months ago"
  }
];

function extractReelCode(url: string) {
  const match = url.match(/\/reel\/([^\/\?]*)/);
  return match ? match[1] : "";
}

const ContentSection = () => {
  return (
    <section id="content" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56e0fe] rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Instagram className="text-german" />
          <a
            href="https://www.instagram.com/german_with_amit?igsh=MTI1dTJneTU4NjFvMA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-german font-medium"
          >@germanwithamit</a>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn German on Instagram
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Follow us for daily tips, lessons, and fun German language content
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full touch-pan-x">
            <CarouselContent className="-ml-2 md:-ml-4">
              {reels.map((reel) => (
                <CarouselItem key={reel.id} className="pl-2 md:pl-4 basis-4/5 sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative aspect-[9/16] bg-gray-100">
                        <iframe
                          src={`https://www.instagram.com/reel/${extractReelCode(reel.url)}/embed/`}
                          className="w-full h-full"
                          style={{ border: 0, overflow: "hidden", margin: 0 }}
                          frameBorder="0"
                          // scrolling="no"
                          allowTransparency={true}
                        ></iframe>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-base line-clamp-2 mb-1">{reel.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{reel.views} views</span>
                          <span className="mx-2">•</span>
                          <span>{reel.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.instagram.com/german_with_amit?igsh=MTI1dTJneTU4NjFvMA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-german hover:text-german-dark transition-colors font-medium"
          >
            <Instagram size={18} />
            <span>Follow us on Instagram for more content</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;