"use client";

import { useState, useEffect } from "react";
import { Search, LayoutDashboard, Users, ShoppingCart, BarChart3, Settings } from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const pages = [
    { name: "Dashboard", icon: LayoutDashboard, shortcut: "G D" },
    { name: "Users", icon: Users, shortcut: "G U" },
    { name: "Orders", icon: ShoppingCart, shortcut: "G O" },
    { name: "Analytics", icon: BarChart3, shortcut: "G A" },
    { name: "Settings", icon: Settings, shortcut: "G S" },
  ];

  const filtered = pages.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50"
      onClick={() => setOpen(false)}
    >
      <div 
        className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-lg shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-700 flex items-center gap-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search pages... (Cmd+K)"
            className="bg-transparent border-none outline-none text-white w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <span className="text-xs text-gray-500">ESC</span>
        </div>
        <div className="p-2 max-h-80 overflow-y-auto">
          {filtered.map((page) => (
            <button
              key={page.name}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-700 rounded-lg transition"
              onClick={() => {
                setOpen(false);
                // Navigation would go here
              }}
            >
              <div className="flex items-center gap-3">
                <page.icon size={18} className="text-purple-400" />
                <span className="text-white">{page.name}</span>
              </div>
              <span className="text-xs text-gray-500">{page.shortcut}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}