"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-950 lg:hidden">
      {/* Mobile Header - fixed at top */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 p-4 z-20">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AdminPanel
          </h1>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-gray-800 rounded-lg"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-10 pt-20 p-4">
          <nav className="space-y-3">
            <a href="#" className="block p-4 bg-purple-600/20 rounded-xl text-white font-medium">Dashboard</a>
            <a href="#" className="block p-4 hover:bg-gray-800 rounded-xl text-gray-300">Users</a>
            <a href="#" className="block p-4 hover:bg-gray-800 rounded-xl text-gray-300">Orders</a>
            <a href="#" className="block p-4 hover:bg-gray-800 rounded-xl text-gray-300">Analytics</a>
          </nav>
        </div>
      )}
      
      {/* Scrollable Content - with padding top for fixed header */}
      <div className="pt-20 p-4 pb-8 min-h-screen">
        {/* Quick Stats - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800/50 rounded-xl p-4">
            <p className="text-gray-400 text-xs">Users</p>
            <p className="text-2xl font-bold text-white">12.3K</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4">
            <p className="text-gray-400 text-xs">Revenue</p>
            <p className="text-2xl font-bold text-white">$45K</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4">
            <p className="text-gray-400 text-xs">Orders</p>
            <p className="text-2xl font-bold text-white">1.2K</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4">
            <p className="text-gray-400 text-xs">Visitors</p>
            <p className="text-2xl font-bold text-white">89K</p>
          </div>
        </div>
        
        {/* Recent Orders */}
        <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
          <h2 className="text-white font-bold mb-3">Recent Orders</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white">Sarah Chen</span>
              <span className="text-green-400">$129</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Michael O.</span>
              <span className="text-yellow-400">$249</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Amina D.</span>
              <span className="text-blue-400">$79</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">David O.</span>
              <span className="text-green-400">$399</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Fatima A.</span>
              <span className="text-red-400">$59</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">John M.</span>
              <span className="text-yellow-400">$189</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Grace O.</span>
              <span className="text-green-400">$299</span>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-purple-600 text-white rounded-xl py-3 text-center font-medium">+ New Order</button>
          <button className="bg-gray-700 text-white rounded-xl py-3 text-center font-medium">Export</button>
        </div>
      </div>
    </div>
  );
}