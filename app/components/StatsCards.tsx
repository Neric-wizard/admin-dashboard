"use client";

import { Users, DollarSign, ShoppingCart, Eye } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Users",
      value: "12.3K",
      change: "+12%",
      icon: <Users className="w-4 h-4 sm:w-5 text-purple-400" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Revenue",
      value: "$45.2K",
      change: "+8%",
      icon: <DollarSign className="w-4 h-4 sm:w-5 text-pink-400" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Orders",
      value: "1.2K",
      change: "+23%",
      icon: <ShoppingCart className="w-4 h-4 sm:w-5 text-blue-400" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Visitors",
      value: "89.3K",
      change: "+5%",
      icon: <Eye className="w-4 h-4 sm:w-5 text-green-400" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4 hover:bg-gray-800 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center`}>
              {stat.icon}
            </div>
            <span className="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-0.5 rounded-full">
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-400 text-xs mb-0.5">{stat.title}</h3>
          <p className="text-xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}