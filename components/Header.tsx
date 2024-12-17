import React from 'react';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">AI Companies Directory</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300">Markets</a>
              <a href="#" className="hover:text-gray-300">News</a>
              <a href="#" className="hover:text-gray-300">Analysis</a>
              <a href="#" className="hover:text-gray-300">Tools</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};