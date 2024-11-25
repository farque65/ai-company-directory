"use client";

import CompanyCard from "@/components/CompanyCard";
import FilterModal from "@/components/FilterModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { companies } from "@/lib/data";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFunding, setSelectedFunding] = useState<string[]>([]);

  const filteredCompanies = companies.filter((company) => {

    if (!searchQuery && selectedCategories.length === 0 && selectedFunding.length === 0) {
      return true;
    }

    if (!company.name || !company.description || company.categories?.length === 0  || !company.fundingStage) {
      return false;
    }
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategories = selectedCategories.length === 0 || 
      selectedCategories.some(cat => company.categories?.includes(cat));
    
    const matchesFunding = selectedFunding.length === 0 ||
      selectedFunding.includes(company.fundingStage);

    return matchesSearch && matchesCategories && matchesFunding;
  });

  const featuredCompanies = companies.filter((company) => {

    if (!company.name || !company.description || company.categories?.length === 0  || !company.fundingStage) {
      return false;
    }
    
    return company.categories?.includes('Drug Discovery') || company.categories?.includes('Healthcare');
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-4">
            AI Companies Directory
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover and explore innovative companies in artificial intelligence
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search companies..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-rows-1 mb-4 md:mb-12 lg:mb-20">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Featured Companies</h2>
            <p className="text-muted-foreground mb-2">
              These companies are the top picks from our team
            </p>
            <ul>
              {featuredCompanies.map((company) => (
                <li key={company.id} className="flex mt-4">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium font-bold">{company.name}</h2>
                    <a className=" text-indigo-500 inline-flex items-center" href={company.website} target="_blank" rel="noopener noreferrer">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/*
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Trending Companies</h2>
            <p className="text-muted-foreground">
              Discover the companies that are trending in the AI space
            </p>
          </div>
          */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No companies found matching your criteria
            </p>
          </div>
        )}

        <FilterModal
          open={showFilters}
          onOpenChange={setShowFilters}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedFunding={selectedFunding}
          setSelectedFunding={setSelectedFunding}
        />
      </div>
      <Footer />
    </main>
  );
}