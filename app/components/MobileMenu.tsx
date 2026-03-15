"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button - visible only on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-3 right-3 z-50 bg-gray-800 p-2.5 rounded-lg border border-gray-700"
      >
        {isOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/70 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 p-5 pt-16 lg:hidden">
            <nav className="space-y-3">
              <a href="#" className="block p-3 bg-purple-600/20 rounded-lg text-white font-medium">Dashboard</a>
              <a href="#" className="block p-3 hover:bg-gray-800 rounded-lg text-gray-300">Users</a>
              <a href="#" className="block p-3 hover:bg-gray-800 rounded-lg text-gray-300">Orders</a>
              <a href="#" className="block p-3 hover:bg-gray-800 rounded-lg text-gray-300">Analytics</a>
              <a href="#" className="block p-3 hover:bg-gray-800 rounded-lg text-gray-300">Settings</a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}