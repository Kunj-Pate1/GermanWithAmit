import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GraduationCap, Video, Globe, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const PartnersSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const logos = [
    {
      src: "/images/partner_logos/Fintiba_logo.png",
      link: "http://partner.fintiba.com/germanwithamit" // Placeholder for http://partner.fintiba.com/germanwithamit
    },
    {
      src: "/images/partner_logos/Lernpunkt_logo.png",
      link: "https://www.google.com/search?q=cbs+studienkolleg&oq=cbs+studi&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGDkyDggBEEUYJxg7GIAEGIoFMg0IAhAuGMcBGNEDGIAEMgcIAxAAGIAEMg0IBBAuGMcBGNEDGIAEMg0IBRAuGMcBGNEDGIAEMg0IBhAuGMcBGNEDGIAEMgYIBxBFGDzSAQgzMDg3ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8" // Placeholder for https://www.google.com/...
    },
    {
      src: "/images/partner_logos/CBS_logo.png",
      link: "https://www.cbs.de/studienkolleg/prep4university];" // Placeholder for https://www.cbs.de/...
    },
  ];
  const mediaItems = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DGalbrOhI0t/?igsh=MTVjNWtkc2kydGIxdQ==",
      title: "Meeting with German Ambassador",
      type: "instagram"
    },
    {
      id: 2,
      url: "https://youtube.com/shorts/mUxd0SggY4Y", // Replace with actual YouTube short URL
      title: "Podcast with German Embassy",
      type: "youtube"
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DGp4ML1M-ox/?igsh=MXRrc2hrNW82cm9kbA==",
      title: "Proverbs with Mr Kasper",
      type: "instagram"
    }
  ];

  function extractCode(url, type) {
    if (!url) return "";
    
    if (type === "youtube") {
      try {
        const parsed = new URL(url);
        if (parsed.hostname.includes('youtube.com')) {
          const pathSegments = parsed.pathname.split('/').filter(Boolean);
          if (pathSegments[0] === 'shorts' && pathSegments[1]) {
            return pathSegments[1];
          }
        }
        return "";
      } catch (e) {
        console.error("Invalid YouTube URL:", e);
        return "";
      }
    } else { // instagram
      try {
        const parsed = new URL(url);
        const pathSegments = parsed.pathname.split('/').filter(Boolean);
        const reelIndex = pathSegments.indexOf('reel');
        if (reelIndex !== -1 && reelIndex + 1 < pathSegments.length) {
          return pathSegments[reelIndex + 1].split('?')[0];
        }
        return "";
      } catch (e) {
        console.error("Invalid URL:", e);
        return "";
      }
    }
  }

  
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">
            Trusted by Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56e0fe] to-[#076bfd]">Organizations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our quality curriculum and teaching methodology have been recognized by prominent institutions.
          </p>
        </div>
       
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center mb-16">
          {/* Partner logos */}

        {logos.map((logo, i) => (
            <div key={i} className="h-48 w-64 flex items-center justify-center">
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.src}
                  alt={`Logo ${i + 1}`}
                  className="max-h-full max-w-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          ))}

        </div>
 

        <div>
        <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          A Proud Milestone for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56e0fe] to-[#076bfd]">German with Amit</span>
        </h2>
      </div>
      
      <div 
        ref={ref} 
        className={`max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-blue-100 transition-all duration-700 ${
          isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/3 flex justify-center">
            {/* Creative Image Display with img tag */}
            <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-r from-[#56e0fe] to-[#076bfd]">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                <img 
                  src="/images/meeting1.png" 
                  alt="Meeting with German Ambassador"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-blue-100">
                <Award className="w-5 h-5 text-[#076bfd]" />
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
              Bridging Language and Diplomacy
            </h3>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Got featured on German Embassy in India</span> — Honored to be invited by the German Ambassador and share my German language journey. I also had the privilege to record a podcast with the German Embassy in Delhi, alongside Mr. Kaspar.
            </p>
          </div>
        </div>
        
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56e0fe] rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            {/* <CarouselContent className="-ml-2 md:-ml-4"> */}
            <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
              {mediaItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group">
                      {item.type === "instagram" ? (
                        <iframe
                          src={`https://www.instagram.com/p/${extractCode(item.url, "instagram")}/embed/captioned/`}
                          className="w-full h-full"
                          style={{ border: 0, overflow: "hidden", margin: 0 }}
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency={true}
                          sandbox="allow-scripts allow-same-origin"
                          onError={(e) => console.error("Iframe failed to load:", item.url, e)}
                        />
                      ) : (
                        <iframe
                          src={`https://www.youtube.com/embed/${extractCode(item.url, "youtube")}`}
                          className="w-full h-full"
                          style={{ border: 0 }}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 text-center">{item.title}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
        </div>
    </section>
  );
}

export default PartnersSection
