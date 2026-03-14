"use client";

import { PlusCircle, Download, Upload, Filter } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-3 sm:mb-4">
      <button className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg py-1.5 sm:py-2 px-1 text-[10px] sm:text-xs font-medium flex flex-col items-center justify-center gap-0.5">
        <PlusCircle size={12} className="sm:w-4 sm:h-4" />
        <span>New</span>
      </button>
      
      <button className="bg-gray-800/50 border border-gray-700 text-white rounded-lg py-1.5 sm:py-2 px-1 text-[10px] sm:text-xs font-medium flex flex-col items-center justify-center gap-0.5">
        <Download size={12} className="sm:w-4 sm:h-4" />
        <span>Export</span>
      </button>
      
      <button className="bg-gray-800/50 border border-gray-700 text-white rounded-lg py-1.5 sm:py-2 px-1 text-[10px] sm:text-xs font-medium flex flex-col items-center justify-center gap-0.5">
        <Upload size={12} className="sm:w-4 sm:h-4" />
        <span>Import</span>
      </button>
      
      <button className="bg-gray-800/50 border border-gray-700 text-white rounded-lg py-1.5 sm:py-2 px-1 text-[10px] sm:text-xs font-medium flex flex-col items-center justify-center gap-0.5">
        <Filter size={12} className="sm:w-4 sm:h-4" />
        <span>Filter</span>
      </button>
    </div>
  );
}