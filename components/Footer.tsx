import { Terminal, Twitter } from "lucide-react";

export default function Footer() {

return (
    
  <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center">
          <Terminal className="text-[#00ff00]" size={24} />
          <span className="text-white text-xl font-bold">AI Market Watch</span>
        </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <a href="https://twitter.com/fahimintech" className="text-gray-400 hover:text-white">
              <Twitter className="inline-block mr-2" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 AI Market Watch. All rights reserved.</p>
          <a href="https://amrakori.com" target="_blank" className="underline hover:text-white">
            Made with ❤️ by  Amrakori
          </a>
        </div>
      </div>
    </footer>
    );
}