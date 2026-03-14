"use client";

import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-2 mb-3 rounded-lg">
      <div className="flex items-center justify-between gap-2">
        <div className="relative flex-1 max-w-[200px]">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-1.5 pl-7 pr-2 text-xs text-white"
          />
        </div>
        <button className="relative p-1.5 text-gray-400 hover:text-white">
          <Bell size={16} />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
        </button>
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
          NN
        </div>
      </div>
    </header>
  );
}