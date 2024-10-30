"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories, fundingStages } from "@/lib/data";

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedFunding: string[];
  setSelectedFunding: (funding: string[]) => void;
}

export default function FilterModal({
  open,
  onOpenChange,
  selectedCategories,
  setSelectedCategories,
  selectedFunding,
  setSelectedFunding,
}: FilterModalProps) {
  const toggleCategory = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  const toggleFunding = (funding: string) => {
    setSelectedFunding(
      selectedFunding.includes(funding)
        ? selectedFunding.filter((f) => f !== funding)
        : [...selectedFunding, funding]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Companies</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <h4 className="font-medium leading-none">Categories</h4>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium leading-none">Funding Stage</h4>
            <div className="grid grid-cols-2 gap-4">
              {fundingStages.map((stage) => (
                <div key={stage} className="flex items-center space-x-2">
                  <Checkbox
                    id={stage}
                    checked={selectedFunding.includes(stage)}
                    onCheckedChange={() => toggleFunding(stage)}
                  />
                  <Label htmlFor={stage}>{stage}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}