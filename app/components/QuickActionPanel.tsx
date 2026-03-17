"use client";

import { useState } from "react";
import { Plus, Download, Filter, Users, FileText, Zap } from "lucide-react";
import { useToast } from "../context/ToastContext";

export default function QuickActionPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { showToast } = useToast();

  const actions = [
    { icon: Plus, label: "Add User", color: "from-purple-500 to-pink-500", action: () => showToast("User added successfully!", "success") },
    { icon: Download, label: "Export Data", color: "from-blue-500 to-cyan-500", action: () => showToast("Data export started", "info") },
    { icon: Filter, label: "Filter Results", color: "from-green-500 to-emerald-500", action: () => showToast("Filters applied", "success") },
    { icon: Users, label: "View Users", color: "from-orange-500 to-red-500", action: () => showToast("Navigating to users", "info") },
    { icon: FileText, label: "New Report", color: "from-indigo-500 to-purple-500", action: () => showToast("Report generated", "success") },
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition shadow-purple-600/20"
      >
        <Zap size={20} className={isOpen ? "rotate-45 transition-transform" : ""} />
      </button>

      {/* Action Panel */}
      {isOpen && (
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-2 shadow-2xl min-w-[200px]">
          <div className="space-y-1">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg transition group"
              >
                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${action.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition`}>
                  <action.icon size={12} className="text-white" />
                </div>
                <span className="text-white text-sm flex-1 text-left">{action.label}</span>
                <span className="text-gray-500 text-xs">⌘{index+1}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}