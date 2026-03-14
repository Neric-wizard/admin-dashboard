"use client";

import { PlusCircle, Download, Upload, Filter } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
      <button className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg sm:rounded-xl py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-1 sm:gap-2">
        <PlusCircle size={16} className="sm:w-5 sm:h-5" />
        <span className="hidden xs:inline">New</span> Order
      </button>
      
      <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg sm:rounded-xl py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium hover:bg-gray-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-1 sm:gap-2">
        <Download size={16} className="sm:w-5 sm:h-5" />
        Export
      </button>
      
      <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg sm:rounded-xl py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium hover:bg-gray-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-1 sm:gap-2">
        <Upload size={16} className="sm:w-5 sm:h-5" />
        Import
      </button>
      
      <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg sm:rounded-xl py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium hover:bg-gray-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-1 sm:gap-2">
        <Filter size={16} className="sm:w-5 sm:h-5" />
        Filter
      </button>
    </div>
  );
}