"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function RecentOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const orders = [
    { id: "#001", customer: "Sarah Chen", amount: "$129", status: "Done", date: "2m", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: "#002", customer: "Michael O.", amount: "$249", status: "Process", date: "15m", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: "#003", customer: "Amina D.", amount: "$79", status: "Pending", date: "1h", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: "#004", customer: "David O.", amount: "$399", status: "Done", date: "3h", avatar: "DO", color: "from-orange-500 to-red-500" },
  ];

  const statusColors = {
    Done: "text-green-400 bg-green-400/10",
    Process: "text-yellow-400 bg-yellow-400/10",
    Pending: "text-blue-400 bg-blue-400/10",
  };

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-3 mt-3">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-bold text-white">Orders</h2>
        <div className="relative w-32">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={12} />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-1 pl-6 pr-2 text-xs text-white"
          />
        </div>
      </div>

      <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar">
        {filteredOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between py-1 border-b border-gray-700 last:border-0">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${order.color} flex items-center justify-center text-white font-bold text-[10px]`}>
                {order.avatar}
              </div>
              <div>
                <p className="text-white text-xs font-medium">{order.customer}</p>
                <p className="text-gray-400 text-[8px]">{order.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-white text-xs font-bold">{order.amount}</p>
              <span className={`text-[8px] px-1 py-0.5 rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                {order.status}
              </span>
              <span className="text-gray-500 text-[8px]">{order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}