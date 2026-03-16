"use client";

import { useState } from "react";
import { Search, Download } from "lucide-react";

export default function RecentOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const orders = [
    { id: "#001", customer: "Sarah Chen", amount: "$129", status: "Done", date: "2m" },
    { id: "#002", customer: "Michael O.", amount: "$249", status: "Process", date: "15m" },
    { id: "#003", customer: "Amina D.", amount: "$79", status: "Pending", date: "1h" },
    { id: "#004", customer: "David O.", amount: "$399", status: "Done", date: "3h" },
  ];

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCurrentView = () => {
    const headers = ["Customer", "Order ID", "Amount", "Status", "Time"];
    const csvData = filteredOrders.map(order => [order.customer, order.id, order.amount, order.status, order.date]);
    
    let csvContent = headers.join(",") + "\n";
    csvData.forEach(row => {
      csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    a.click();
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold">Recent Orders</h2>
        
        {/* Export Button */}
        <button 
          onClick={exportCurrentView}
          className="flex items-center gap-1 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 text-xs px-3 py-1.5 rounded-lg transition border border-purple-500/30"
        >
          <Download size={14} />
          Export View
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2 pl-8 pr-3 text-sm text-white"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-2">
        {filteredOrders.map((order) => (
          <div key={order.id} className="flex justify-between py-2 border-b border-gray-700 last:border-0">
            <span className="text-white text-sm">{order.customer}</span>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-sm">{order.amount}</span>
              <span className="text-gray-400 text-xs">{order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}