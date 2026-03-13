"use client";

import { MoreHorizontal } from "lucide-react";

export default function RecentOrders() {
  const orders = [
    { id: "#ORD-001", customer: "Sarah Chen", amount: "$129.00", status: "Completed", date: "2 min ago", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: "#ORD-002", customer: "Michael Okonkwo", amount: "$249.00", status: "Processing", date: "15 min ago", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: "#ORD-003", customer: "Amina Diallo", amount: "$79.00", status: "Pending", date: "1 hour ago", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: "#ORD-004", customer: "David Okafor", amount: "$399.00", status: "Completed", date: "3 hours ago", avatar: "DO", color: "from-orange-500 to-red-500" },
    { id: "#ORD-005", customer: "Fatima Ahmed", amount: "$59.00", status: "Cancelled", date: "5 hours ago", avatar: "FA", color: "from-gray-500 to-gray-600" },
  ];

  const statusColors = {
    Completed: "text-green-400 bg-green-400/10 border border-green-400/20",
    Processing: "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20",
    Pending: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
    Cancelled: "text-red-400 bg-red-400/10 border border-red-400/20",
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Recent Orders</h2>
        <button className="text-gray-400 hover:text-white transition">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${order.color} flex items-center justify-center text-white font-bold text-sm`}>
                {order.avatar}
              </div>
              <div>
                <p className="text-white font-medium">{order.customer}</p>
                <p className="text-gray-400 text-sm">{order.id}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">{order.amount}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                {order.status}
              </span>
              <p className="text-gray-500 text-xs mt-1">{order.date}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 text-purple-400 hover:text-purple-300 text-sm font-medium border-t border-gray-700 pt-4 transition">
        View All Orders →
      </button>
    </div>
  );
}