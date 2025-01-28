"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const companies = [
  {
    name: "Meta",
    logo: "/meta-logo.png",
  },
  {
    name: "Mercedes",
    logo: "/Mercedes-Logo.svg",
  },
  {
    name: "Pure Storage",
    logo: "/Pure-storage-vector-logo.svg",
  },
];

export const CompanyCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 md:py-24 bg-[#3c423a]">
      <div className="container px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {companies.map((company, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <div className="p-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-auto mx-auto object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};