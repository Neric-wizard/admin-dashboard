"use client";

import { Users, DollarSign, ShoppingCart, Eye } from "lucide-react";

export default function StatsCards() {
  const stats = [
    { 
      title: "Users", 
      value: "12.3K", 
      change: "+12%", 
      icon: <Users size={18} />, 
      color: "from-purple-500 to-purple-600",
      live: true
    },
    { 
      title: "Revenue", 
      value: "$45K", 
      change: "+8%", 
      icon: <DollarSign size={18} />, 
      color: "from-pink-500 to-pink-600",
      live: true
    },
    { 
      title: "Orders", 
      value: "1.2K", 
      change: "+23%", 
      icon: <ShoppingCart size={18} />, 
      color: "from-blue-500 to-blue-600",
      live: true
    },
    { 
      title: "Visitors", 
      value: "89K", 
      change: "+5%", 
      icon: <Eye size={18} />, 
      color: "from-green-500 to-green-600",
      live: true
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4 hover:bg-gray-800/70 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center`}>
              {stat.icon}
            </div>
            <span className="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-1 rounded-full">
              {stat.change}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs">{stat.title}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
            {stat.live && (
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-gray-500">Live</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}