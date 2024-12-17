"use client";

import { Company } from "@/lib/data";
import Image from "next/image";

interface CompanyCardProps {
  company: Company;
  onClick: (company: Company) => void;
  featured?: boolean;
}

export function CompanyCard({ company, onClick, featured = false }: CompanyCardProps) {
  return (
    <div
      onClick={() => onClick(company)}
      className={`group cursor-pointer rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow ${
        featured ? "col-span-2" : ""
      }`}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={company.image || "/default-image.png"}
          alt={company.name || "Company name"}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            {company.categories?.join(", ")}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{company.description}</p>
      </div>
    </div>
  );
}