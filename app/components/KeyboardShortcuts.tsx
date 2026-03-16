"use client";

import { Keyboard } from "lucide-react";
import { useState } from "react";

export default function KeyboardShortcuts() {
  const [show, setShow] = useState(false);

  const shortcuts = [
    { key: "G + D", description: "Go to Dashboard" },
    { key: "G + U", description: "Go to Users" },
    { key: "G + O", description: "Go to Orders" },
    { key: "/", description: "Focus search" },
    { key: "E", description: "Export current view" },
    { key: "?", description: "Show shortcuts" },
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShow(false)}>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h3 className="text-white font-bold mb-4 text-lg">Keyboard Shortcuts</h3>
            <div className="space-y-3">
              {shortcuts.map((s, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                  <span className="bg-gray-900 px-3 py-1 rounded text-sm font-mono text-purple-400">{s.key}</span>
                  <span className="text-gray-300 text-sm">{s.description}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShow(false)}
              className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}