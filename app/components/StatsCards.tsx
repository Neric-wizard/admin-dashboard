"use client";

import { Users, DollarSign, ShoppingCart, Eye } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Users",
      value: "12,345",
      change: "+12%",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Revenue",
      value: "$45.2K",
      change: "+8%",
      icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-400" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+23%",
      icon: <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Visitors",
      value: "89.3K",
      change: "+5%",
      icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 hover:bg-gray-800 transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center`}>
              {stat.icon}
            </div>
            <span className="text-green-400 text-xs sm:text-sm font-medium bg-green-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-400 text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">{stat.title}</h3>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}