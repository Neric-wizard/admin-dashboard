"use client";

import { Clock, UserPlus, ShoppingBag, CreditCard } from "lucide-react";

export default function ActivityTimeline() {
  const activities = [
    { icon: <UserPlus size={16} />, text: "New user registered", time: "2 min ago", color: "from-purple-500 to-pink-500" },
    { icon: <ShoppingBag size={16} />, text: "Order #ORD-002 completed", time: "15 min ago", color: "from-blue-500 to-cyan-500" },
    { icon: <CreditCard size={16} />, text: "Payment of $249 received", time: "15 min ago", color: "from-green-500 to-emerald-500" },
    { icon: <UserPlus size={16} />, text: "New user registered", time: "1 hour ago", color: "from-purple-500 to-pink-500" },
    { icon: <ShoppingBag size={16} />, text: "Order #ORD-001 completed", time: "2 hours ago", color: "from-blue-500 to-cyan-500" },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mt-8">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Clock size={20} className="text-purple-400" />
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activity.color} bg-opacity-20 flex items-center justify-center text-white`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">{activity.text}</p>
              <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 text-purple-400 hover:text-purple-300 text-sm font-medium border-t border-gray-700 pt-4 transition">
        View All Activity →
      </button>
    </div>
  );
}