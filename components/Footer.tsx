import { Dir } from "node:fs"
import { Twitter } from "lucide-react";

export default function Footer() {

return (
    
  <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">AI Companies Directory</h3>
            <p className="text-gray-400">Your trusted source for AI Company insights and analysis.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Markets</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Analysis</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <a href="https://twitter.com/fahimintech" className="text-gray-400 hover:text-white">
              <Twitter className="inline-block mr-2" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 AI Companies Directory. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
}