"use client";

import { Clock, UserPlus, ShoppingBag, CreditCard, Activity } from "lucide-react";

export default function ActivityTimeline() {
  const activities = [
    { icon: <UserPlus size={16} />, text: "New user registered", time: "2 min ago", color: "from-purple-500 to-pink-500" },
    { icon: <ShoppingBag size={16} />, text: "Order #ORD-002 completed", time: "15 min ago", color: "from-blue-500 to-cyan-500" },
    { icon: <CreditCard size={16} />, text: "Payment of $249 received", time: "15 min ago", color: "from-green-500 to-emerald-500" },
    { icon: <UserPlus size={16} />, text: "New user registered", time: "1 hour ago", color: "from-purple-500 to-pink-500" },
    { icon: <ShoppingBag size={16} />, text: "Order #ORD-001 completed", time: "2 hours ago", color: "from-blue-500 to-cyan-500" },
  ];

  const totalActivities = activities.length;
  const unreadCount = activities.filter((_, i) => i < 3).length;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4">
      {/* Header with counter */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-purple-400" />
          <h2 className="text-white font-semibold">Recent Activity</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
            {totalActivities} events
          </span>
          {unreadCount > 0 && (
            <span className="bg-pink-500/20 text-pink-400 text-xs px-2 py-1 rounded-full animate-pulse">
              {unreadCount} new
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 group hover:bg-gray-700/30 p-2 rounded-lg transition">
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${activity.color} bg-opacity-20 flex items-center justify-center text-white flex-shrink-0`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">{activity.text}</p>
              <p className="text-gray-400 text-xs mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-purple-400 hover:text-purple-300 text-xs font-medium border-t border-gray-700 pt-3 transition">
        View All Activity →
      </button>
    </div>
  );
}