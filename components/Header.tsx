import React, { useState } from "react";
import { Terminal, Home, TwitterIcon, Info, Menu, X } from "lucide-react";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

export function NavLink({ icon, text, link }: { icon: React.ReactNode; text: string; link: string }) {
  return (
    <a href={link || "#"} className="flex items-center space-x-1 text-gray-300 hover:text-[#00ff00] transition-colors">
      {icon}
      <span>{text}</span>
    </a>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full bg-black border-b border-gray-800 px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="text-[#00ff00]" size={24} />
          <span className="text-white text-xl font-bold">AI Market Watch</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink icon={<Home size={18} />} text="Home" />
          <NavLink icon={<TwitterIcon size={18} />} text="Twitter" link="https://twitter.com/fahimintech" />
          <NavLink icon={<Info size={18} />} text="About" />
        </div>
        <button
          className="md:hidden text-gray-300 hover:text-[#00ff00] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800 py-4 px-4 z-50">
          <div className="flex flex-col space-y-4">
            <NavLink icon={<Home size={18} />} text="Home" />
            <NavLink icon={<TwitterIcon size={18} />} text="Twitter" />
            <NavLink icon={<Info size={18} />} text="About" />
          </div>
        </div>
      )}
    </nav>
  );
}

