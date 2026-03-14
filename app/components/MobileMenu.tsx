"use client";

import { useState } from "react";
import { Menu, X, LayoutDashboard, Users, ShoppingCart, Settings, BarChart3 } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 left-3 z-50 bg-gray-800 p-2 rounded-lg border border-gray-700"
      >
        {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 pt-16">
          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center gap-3 text-white bg-purple-600/20 border border-purple-500/50 rounded-lg px-4 py-3">
              <LayoutDashboard size={18} className="text-purple-400" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg px-4 py-3 transition">
              <Users size={18} />
              <span>Users</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg px-4 py-3 transition">
              <ShoppingCart size={18} />
              <span>Orders</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg px-4 py-3 transition">
              <BarChart3 size={18} />
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg px-4 py-3 transition">
              <Settings size={18} />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}