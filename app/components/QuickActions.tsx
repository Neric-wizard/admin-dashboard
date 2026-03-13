"use client";

import { PlusCircle, Download, Upload, Filter } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <button className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl py-4 px-4 font-medium hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
        <div className="flex items-center justify-center gap-2">
          <PlusCircle size={20} />
          <span>New Order</span>
        </div>
      </button>
      
      <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl py-4 px-4 font-medium hover:bg-gray-700 transition-all transform hover:scale-105">
        <div className="flex items-center justify-center gap-2">
          <Download size={20} />
          <span>Export</span>
        </div>
      </button>
      
      <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl py-4 px-4 font-medium hover:bg-gray-700 transition-all transform hover:scale-105">
        <div className="flex items-center justify-center gap-2">
          <Upload size={20} />
          <span>Import</span>
        </div>
      </button>
      
      <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl py-4 px-4 font-medium hover:bg-gray-700 transition-all transform hover:scale-105">
        <div className="flex items-center justify-center gap-2">
          <Filter size={20} />
          <span>Filter</span>
        </div>
      </button>
    </div>
  );
}