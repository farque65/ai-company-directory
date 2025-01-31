import React from "react";
import { Company } from "../lib/data";

export function FeaturedCompanies({ companies }: { companies: Company[] }) {

  return (
    <section className="w-full bg-gray-900 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
          Featured Companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-[#00ff00] transition-colors"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-36 md:h-48 object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-white font-semibold text-base md:text-lg">
                  {company.name}
                </h3>
                <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">
                  {company.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
