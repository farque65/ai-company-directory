"use client";

import { useEffect, useState } from "react";
import { Company } from "./data";

const MOCK_COMPANIES: Company[] = [
  {
    id: "1",
    name: "OpenAI",
    description: "OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence benefits all of humanity.",
    categories: ["Machine Learning"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    website: "https://openai.com"
  },
  {
    id: "2",
    name: "DeepMind",
    description: "DeepMind is a world leader in artificial intelligence research and its application for positive impact.",
    categories: ["Machine Learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    website: "https://deepmind.com"
  },
  {
    id: "3",
    name: "Anthropic",
    description: "Anthropic is an AI research company working to ensure artificial intelligence systems are safe and ethical.",
    categories: ["Natural Language Processing"],
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=800&q=80",
    website: "https://anthropic.com"
  },
  {
    id: "4",
    name: "Cohere",
    description: "Cohere provides access to advanced Large Language Models and NLP tools through a simple API.",
    categories: ["Natural Language Processing"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    name: "Scale AI",
    description: "Scale AI provides high-quality training data for AI applications.",
    categories: ["Machine Learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  }
];

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchCompanies = () => {
      setTimeout(() => {
        setCompanies(MOCK_COMPANIES);
        setIsLoading(false);
      }, 1000);
    };

    fetchCompanies();
  }, []);

  return { companies, isLoading };
}