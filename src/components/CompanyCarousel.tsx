import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const CompanyCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const companies = [
    {
      name: "Meta",
      logo: "/meta-logo.png"
    },
    {
      name: "Pure Storage",
      logo: "/pure-storage-logo.png"
    },
    {
      name: "Mercedes",
      logo: "/mercedes-logo.png"
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <p className="text-center text-lg text-white/70 mb-8">Built by experts from:</p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {companies.map((company, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <div className="p-4">
                <div className="rounded-lg h-24 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};