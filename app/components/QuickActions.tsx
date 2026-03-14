"use client";

import { PlusCircle, Download, Upload, Filter } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
      <button className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg py-3 px-2 text-xs font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex flex-col items-center justify-center gap-1">
        <PlusCircle size={18} />
        <span>New Order</span>
      </button>
      
      <button className="bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 px-2 text-xs font-medium hover:bg-gray-700 transition-all flex flex-col items-center justify-center gap-1">
        <Download size={18} />
        <span>Export</span>
      </button>
      
      <button className="bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 px-2 text-xs font-medium hover:bg-gray-700 transition-all flex flex-col items-center justify-center gap-1">
        <Upload size={18} />
        <span>Import</span>
      </button>
      
      <button className="bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 px-2 text-xs font-medium hover:bg-gray-700 transition-all flex flex-col items-center justify-center gap-1">
        <Filter size={18} />
        <span>Filter</span>
      </button>
    </div>
  );
}