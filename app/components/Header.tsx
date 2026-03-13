"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 mb-8 rounded-2xl">
      <div className="flex items-center justify-between">
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search orders, customers..."
              className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-xl transition">
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
          </button>
          
          {/* User Profile */}
          <button className="flex items-center gap-3 bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-2 hover:bg-gray-700 transition">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              NN
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">Neric</p>
              <p className="text-gray-400 text-xs">Developer</p>
            </div>
            <ChevronDown size={18} className="text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}