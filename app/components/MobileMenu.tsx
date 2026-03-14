"use client";

import { useState } from "react";
import { Menu, X, LayoutDashboard, Users, ShoppingCart, Settings, BarChart3 } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded-xl border border-gray-700"
      >
        {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 p-6 pt-20">
          <nav className="space-y-4">
            <a href="#" className="flex items-center gap-3 text-white bg-purple-600/20 border border-purple-500/50 rounded-xl px-4 py-4">
              <LayoutDashboard size={20} className="text-purple-400" />
              <span className="text-lg">Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl px-4 py-4 transition">
              <Users size={20} />
              <span className="text-lg">Users</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl px-4 py-4 transition">
              <ShoppingCart size={20} />
              <span className="text-lg">Orders</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl px-4 py-4 transition">
              <BarChart3 size={20} />
              <span className="text-lg">Analytics</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl px-4 py-4 transition">
              <Settings size={20} />
              <span className="text-lg">Settings</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}