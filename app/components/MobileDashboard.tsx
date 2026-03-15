"use client";

import { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import StatsCards from "./StatsCards";
import RecentOrders from "./RecentOrders";

export default function MobileDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 p-4 z-20">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-gray-800 rounded-lg z-30 relative"
          >
            {menuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
          
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
          
          <button className="relative p-2 text-gray-400 z-30">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - FIXED: Now appears BELOW the header */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-10"
            onClick={() => setMenuOpen(false)}
          ></div>
          
          {/* Menu panel - appears from left, below header */}
          <div className="fixed top-[73px] left-0 bottom-0 w-64 bg-gray-900 z-20 border-r border-gray-800 p-4 overflow-y-auto">
            <nav className="space-y-2">
              <a href="#" className="block p-4 bg-purple-600/20 rounded-xl text-white font-medium">Dashboard</a>
              <a href="#" className="block p-4 hover:bg-gray-800 rounded-xl text-gray-300">Users</a>
              <a href="#" className="block p-4 hover:bg-gray-800 rounded-xl text-gray-300">Orders</a>
              <a href="#" className="block p-4 hover:bg-gray-800 rounded-xl text-gray-300">Analytics</a>
              <a href="#" className="block p-4 hover:bg-gray-800 rounded-xl text-gray-300">Settings</a>
            </nav>
          </div>
        </>
      )}
      
      {/* Scrollable Content */}
      <div className="pt-20 p-4 pb-8">
        <StatsCards />
        
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button className="bg-purple-600 text-white rounded-lg py-2 text-xs">New</button>
          <button className="bg-gray-700 text-white rounded-lg py-2 text-xs">Export</button>
          <button className="bg-gray-700 text-white rounded-lg py-2 text-xs">Import</button>
          <button className="bg-gray-700 text-white rounded-lg py-2 text-xs">Filter</button>
        </div>
        
        <div className="mt-6">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}