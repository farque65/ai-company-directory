"use client";

import CompanyCard from "@/components/CompanyCard";
import { Badge } from "@/components/ui/badge";
import FilterModal from "@/components/FilterModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { companies, Company } from "@/lib/data";
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

        <div className="grid grid-rows-1 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Featured Companies</h2>
            <p className="text-muted-foreground mb-2">
              These companies are the top picks from our team
            </p>
            <section>
              <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                  {featuredCompanies.map((_company: any) => (
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <h2 className="title-font font-medium text-3xl text-gray-900">{_company.name}</h2>
                        <div>
                        {_company?.categories.map((_category: any)=> {
                          <Badge variant="secondary">{_category}</Badge>
                        })}
                        </div>
                        <p className="leading-relaxed">
                          <a className=" text-indigo-500 inline-flex items-center" href={_company.website} target="_blank" rel="noopener noreferrer">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">All Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company: Company) => {
            return <CompanyCard key={`${company.id}-${company.name}`} company={company} />;
          })}
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