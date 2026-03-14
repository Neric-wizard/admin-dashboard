"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function RecentOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const orders = [
    { id: "#ORD-001", customer: "Sarah Chen", amount: "$129", status: "Completed", date: "2 min", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: "#ORD-002", customer: "Michael Okonkwo", amount: "$249", status: "Processing", date: "15 min", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: "#ORD-003", customer: "Amina Diallo", amount: "$79", status: "Pending", date: "1 hr", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: "#ORD-004", customer: "David Okafor", amount: "$399", status: "Completed", date: "3 hr", avatar: "DO", color: "from-orange-500 to-red-500" },
    { id: "#ORD-005", customer: "Fatima Ahmed", amount: "$59", status: "Cancelled", date: "5 hr", avatar: "FA", color: "from-gray-500 to-gray-600" },
  ];

  const statusColors = {
    Completed: "text-green-400 bg-green-400/10",
    Processing: "text-yellow-400 bg-yellow-400/10",
    Pending: "text-blue-400 bg-blue-400/10",
    Cancelled: "text-red-400 bg-red-400/10",
  };

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4 mt-6">
      <div className="flex flex-col gap-3 mb-4">
        <h2 className="text-lg font-bold text-white">Recent Orders</h2>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-1">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${order.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                  {order.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{order.customer}</p>
                  <p className="text-gray-400 text-xs">{order.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-bold">{order.amount}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                    {order.status}
                  </span>
                  <span className="text-gray-500 text-[10px]">{order.date}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center py-4 text-sm">No orders found</p>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-700">
        <p className="text-gray-400 text-xs">
          {filteredOrders.length} of {orders.length}
        </p>
        <button className="text-purple-400 text-xs font-medium">
          View All →
        </button>
      </div>
    </div>
  );
}