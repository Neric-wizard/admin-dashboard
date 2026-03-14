"use client";

import { MoreHorizontal, Search } from "lucide-react";
import { useState } from "react";

export default function RecentOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const orders = [
    { id: "#ORD-001", customer: "Sarah Chen", amount: "$129.00", status: "Completed", date: "2 min ago", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: "#ORD-002", customer: "Michael Okonkwo", amount: "$249.00", status: "Processing", date: "15 min ago", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: "#ORD-003", customer: "Amina Diallo", amount: "$79.00", status: "Pending", date: "1 hour ago", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: "#ORD-004", customer: "David Okafor", amount: "$399.00", status: "Completed", date: "3 hours ago", avatar: "DO", color: "from-orange-500 to-red-500" },
    { id: "#ORD-005", customer: "Fatima Ahmed", amount: "$59.00", status: "Cancelled", date: "5 hours ago", avatar: "FA", color: "from-gray-500 to-gray-600" },
    { id: "#ORD-006", customer: "John Mensah", amount: "$189.00", status: "Processing", date: "6 hours ago", avatar: "JM", color: "from-purple-500 to-pink-500" },
    { id: "#ORD-007", customer: "Grace Okonkwo", amount: "$299.00", status: "Completed", date: "8 hours ago", avatar: "GO", color: "from-blue-500 to-cyan-500" },
  ];

  const statusColors = {
    Completed: "text-green-400 bg-green-400/10 border border-green-400/20",
    Processing: "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20",
    Pending: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
    Cancelled: "text-red-400 bg-red-400/10 border border-red-400/20",
  };

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-white">Recent Orders</h2>
        
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* WRAPPED CONTENT FOR MOBILE SCROLLING */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle px-4 sm:px-0">
          <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0 min-w-[600px] sm:min-w-full">
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
              ))
            ) : (
              <p className="text-gray-400 text-center py-8">No orders found matching "{searchTerm}"</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          Showing {filteredOrders.length} of {orders.length} orders
        </p>
        <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition">
          View All →
        </button>
      </div>
    </div>
  );
}