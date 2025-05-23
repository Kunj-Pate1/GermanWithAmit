import { useRef, useState } from "react";
import { Card } from '@/components/ui/card';
import { useInView } from "@/hooks/useInView";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Generate certificates data for 11 images
const certificates = Array.from({ length: 11 }, (_, i) => {
  const names = ["Anna Schmidt", "Marco Weber", "Julia Meyer", "Thomas Müller", 
                "Sophia Wagner", "Leon Fischer", "Emma Becker", "Lukas Hoffmann",
                "Hannah Schulz", "Paul König", "Laura Bauer"];
  const types = ["Goethe B2", "Telc C1", "Goethe C1", "TestDaF", "Goethe A2", 
                "Telc B1", "DSH", "ÖSD B2", "Goethe B1", "Telc A2", "ÖSD C1"];
  const grades = ["Very Good", "Excellent", "Very Good", "TDN 5", "Excellent", 
                "Good", "Passed", "Very Good", "Good", "Excellent", "Passed"];

  return {
    studentName: names[i],
    certificateType: types[i],
    imageUrl: `/images/certificates/cert${i+1}.jpeg`,
    grade: grades[i]
  };
});

export function StudentResultsSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    imageUrl: string;
    // studentName: string;
    // certificateType: string;
  }>(null);
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-[#076bfd] font-medium mb-4">
            Proven Success
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Our Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-german to-german">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating the achievements of our students who excelled in their German language certifications
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`animate-scale ${isInView ? 'in-view' : ''} relative`}
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {certificates.map((certificate, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <Card 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer"
                    onClick={() => setSelectedCertificate({
                      imageUrl: certificate.imageUrl,
                    //   studentName: certificate.studentName,
                    //   certificateType: certificate.certificateType
                    })}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={certificate.imageUrl} 
                        // alt={`${certificate.studentName} - ${certificate.certificateType}`} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                      {/* <div className="absolute top-0 right-0 bg-[#076bfd] text-white px-3 py-1 text-sm font-bold">
                        {certificate.grade}
                      </div> */}
                    </div>
                    <div className="p-4">
                      {/* <h3 className="font-bold mb-1">{certificate.studentName}</h3>
                      <p className="text-gray-600 text-sm">{certificate.certificateType}</p> */}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50" />
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-medium text-lg text-gray-700 mb-4">
            These are just a few examples from our vast collection of student successes
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <span className="text-[#076bfd] font-bold">99%</span>
            <span className="text-gray-700">Success rate in official German exams</span>
          </div>
        </div>

        {/* Modal for full image view */}
        <Dialog 
          open={!!selectedCertificate} 
          onOpenChange={(open) => !open && setSelectedCertificate(null)}
        >
          <DialogContent className="max-w-[40vw] max-h-[90vh] p-0 overflow-hidden">
            {selectedCertificate && (
              <div className="relative">
                <img 
                  src={selectedCertificate.imageUrl} 
                //   alt={`${selectedCertificate.studentName} - ${selectedCertificate.certificateType}`}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">
                    {selectedCertificate.studentName}
                  </h3>
                  <p className="text-white/90">
                    {selectedCertificate.certificateType}
                  </p>
                </div> */}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
