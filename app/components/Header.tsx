"use client";

import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
      <div className="flex items-center justify-between gap-2">
        {/* Search - smaller on mobile */}
        <div className="relative flex-1 max-w-[200px] sm:max-w-md">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2 pl-8 pr-3 text-xs sm:text-sm text-white placeholder-gray-500"
          />
        </div>
        
        {/* Notification bell */}
        <button className="relative p-2 text-gray-400 hover:text-white">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
        </button>
        
        {/* User avatar */}
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
          NN
        </div>
      </div>
    </header>
  );
}