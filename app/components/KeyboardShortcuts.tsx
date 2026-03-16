"use client";

import { Keyboard } from "lucide-react";
import { useState } from "react";

export default function KeyboardShortcuts() {
  const [show, setShow] = useState(false);

  const shortcuts = [
    { key: "G + D", description: "Dashboard" },
    { key: "G + U", description: "Users" },
    { key: "G + O", description: "Orders" },
    { key: "/", description: "Focus search" },
    { key: "E", description: "Export view" },
    { key: "?", description: "Help" },
  ];

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
        title="Keyboard shortcuts"
      >
        <Keyboard size={18} />
      </button>

      {show && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-10 sm:pt-20"
          onClick={() => setShow(false)}
        >
          <div 
            className="bg-gray-800 rounded-xl border border-gray-700 w-11/12 max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-bold text-lg">Keyboard Shortcuts</h3>
                <button 
                  onClick={() => setShow(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Shortcuts List */}
            <div className="p-5 space-y-3 max-h-[60vh] overflow-y-auto">
              {shortcuts.map((s, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="bg-gray-900 px-3 py-1.5 rounded text-sm font-mono text-purple-400 w-20 text-center">
                    {s.key}
                  </span>
                  <span className="text-gray-300 text-sm">{s.description}</span>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-gray-700 text-center">
              <p className="text-xs text-gray-500">Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}