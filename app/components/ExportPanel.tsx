"use client";

import { Download, FileJson, FileSpreadsheet, Archive } from "lucide-react";
import { useState } from "react";

export default function ExportPanel() {
  const [format, setFormat] = useState("csv");
  const [dateRange, setDateRange] = useState("last30");

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-5">
      <h3 className="text-white font-medium mb-4 flex items-center gap-2">
        <Download size={18} className="text-purple-400" />
        Data Export
      </h3>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button 
          onClick={() => setFormat("csv")}
          className={`p-3 rounded-lg border flex flex-col items-center gap-2 transition ${
            format === "csv" 
              ? "bg-purple-600/20 border-purple-500 text-purple-400" 
              : "bg-gray-900/50 border-gray-700 text-gray-400 hover:bg-gray-800"
          }`}
        >
          <FileSpreadsheet size={20} />
          <span className="text-xs">CSV</span>
        </button>
        
        <button 
          onClick={() => setFormat("json")}
          className={`p-3 rounded-lg border flex flex-col items-center gap-2 transition ${
            format === "json" 
              ? "bg-purple-600/20 border-purple-500 text-purple-400" 
              : "bg-gray-900/50 border-gray-700 text-gray-400 hover:bg-gray-800"
          }`}
        >
          <FileJson size={20} />
          <span className="text-xs">JSON</span>
        </button>
      </div>
      
      <select 
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-2 text-sm text-white mb-4"
      >
        <option value="last7">Last 7 days</option>
        <option value="last30">Last 30 days</option>
        <option value="last90">Last 90 days</option>
        <option value="year">This year</option>
        <option value="custom">Custom range...</option>
      </select>
      
      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg py-3 font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition">
        <Archive size={16} />
        Export Data Package
      </button>
    </div>
  );
}

