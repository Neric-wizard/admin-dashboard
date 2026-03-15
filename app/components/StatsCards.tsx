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
      tooltip: "Total registered users",
      details: "1,245 new this month"
    },
    { 
      title: "Revenue", 
      value: "$45K", 
      change: "+8%", 
      icon: <DollarSign size={18} />, 
      color: "from-pink-500 to-pink-600",
      tooltip: "Monthly recurring revenue",
      details: "$3.2K from new customers"
    },
    { 
      title: "Orders", 
      value: "1.2K", 
      change: "+23%", 
      icon: <ShoppingCart size={18} />, 
      color: "from-blue-500 to-blue-600",
      tooltip: "Total orders this month",
      details: "89% completion rate"
    },
    { 
      title: "Visitors", 
      value: "89K", 
      change: "+5%", 
      icon: <Eye size={18} />, 
      color: "from-green-500 to-green-600",
      tooltip: "Unique site visitors",
      details: "32.5K returning users"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-gray-800/50 rounded-lg border border-gray-700 p-3 relative group cursor-help"
        >
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg border border-gray-700 opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
            <p className="font-medium mb-1">{stat.tooltip}</p>
            <p className="text-gray-400">{stat.details}</p>
          </div>
          
          <div className="flex items-center justify-between mb-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center`}>
              {stat.icon}
            </div>
            <span className="text-green-400 text-xs bg-green-400/10 px-1.5 py-0.5 rounded-full">
              {stat.change}
            </span>
          </div>
          <p className="text-gray-400 text-xs">{stat.title}</p>
          <p className="text-lg sm:text-xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}