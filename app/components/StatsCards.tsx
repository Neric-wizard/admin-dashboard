"use client";

import { Users, DollarSign, ShoppingCart, Eye } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Users",
      value: "12.3K",
      change: "+12%",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Revenue",
      value: "$45K",
      change: "+8%",
      icon: <DollarSign className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Orders",
      value: "1.2K",
      change: "+23%",
      icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Visitors",
      value: "89K",
      change: "+5%",
      icon: <Eye className="w-6 h-6 text-green-400" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="bg-purple-600/20 p-4 rounded-xl mb-4">
      <h2 className="text-white text-lg mb-3">Stats Cards Should Show Here</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl border border-gray-700 p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center`}>
                {stat.icon}
              </div>
              <span className="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{stat.title}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}