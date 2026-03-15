"use client";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

export default function DateRangePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState("Last 7 days");
  
  const options = ["Today", "Yesterday", "Last 7 days", "Last 30 days", "This month", "Last month", "Custom range"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-700 transition"
      >
        <Calendar size={16} className="text-purple-400" />
        <span>{range}</span>
        <ChevronDown size={14} className="text-gray-400" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-20 py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setRange(option);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}