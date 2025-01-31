import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Company } from "@/lib/data";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-900 border-b border-gray-800">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          {company.image && (
              <Image
              src={company.image}
              alt={company.name ? company.name:"Company image"}
              fill
              className="object-cover"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1 text-white">{company.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Founded: {company.founded}
            </p>
          </div>
          <Badge variant="secondary">{company.fundingStage}</Badge>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          {company.description}
        </p>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          asChild
        >
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Visit Website
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}