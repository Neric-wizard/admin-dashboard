"use client";

import { Users, DollarSign, ShoppingCart, Eye } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Users",
      value: "12.3K",
      change: "+12%",
      icon: <Users className="w-3 h-3 sm:w-4 text-purple-400" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Revenue",
      value: "$45K",
      change: "+8%",
      icon: <DollarSign className="w-3 h-3 sm:w-4 text-pink-400" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Orders",
      value: "1.2K",
      change: "+23%",
      icon: <ShoppingCart className="w-3 h-3 sm:w-4 text-blue-400" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Visitors",
      value: "89K",
      change: "+5%",
      icon: <Eye className="w-3 h-3 sm:w-4 text-green-400" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-2">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-2 sm:p-3"
        >
          <div className="flex items-center justify-between mb-1">
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center`}>
              {stat.icon}
            </div>
            <span className="text-green-400 text-[10px] font-medium bg-green-400/10 px-1 py-0.5 rounded-full">
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-400 text-[10px] mb-0.5">{stat.title}</h3>
          <p className="text-sm sm:text-base font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}