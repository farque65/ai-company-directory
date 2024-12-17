"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CompanyCard } from "@/components/company-card";
import { useCompanies } from "@/lib/featured-data";
import { Company } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface FeaturedCompaniesProps {
  onCompanyClick: (company: Company) => void;
}

export default function FeaturedCompanies({ onCompanyClick }: FeaturedCompaniesProps) {
  const { companies } = useCompanies();
  const featuredCompanies = companies.slice(0, 10);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative group">
      <div ref={sliderRef} className="keen-slider">
        {featuredCompanies.map((company) => (
          <div key={company.id} className="keen-slider__slide">
            <CompanyCard company={company} onClick={onCompanyClick} featured />
          </div>
        ))}
      </div>

      {instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            disabled={
              currentSlide ===
              (instanceRef?.current?.track?.details?.slides.length - instanceRef.current.options.slides.perView)
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </>
      )}
    </div>
  );
}
