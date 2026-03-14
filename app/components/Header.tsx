"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-3 sm:p-4 mb-4 sm:mb-8 rounded-xl sm:rounded-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
        
        {/* Search - full width on mobile */}
        <div className="w-full sm:flex-1 sm:max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg sm:rounded-xl py-2 sm:py-3 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Profile - align right on mobile */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-2">
          <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
          </button>
          
          <button className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 hover:bg-gray-700 transition">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
              NN
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-white text-sm font-medium">Neric</p>
              <p className="text-gray-400 text-xs">Developer</p>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}