"use client";

import { useState } from "react";

export default function RecentOrders() {
  const orders = [
    { id: "#001", customer: "Sarah Chen", amount: "$129", status: "Done" },
    { id: "#002", customer: "Michael O.", amount: "$249", status: "Process" },
    { id: "#003", customer: "Amina D.", amount: "$79", status: "Pending" },
    { id: "#004", customer: "David O.", amount: "$399", status: "Done" },
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-3">
      <h2 className="text-white font-bold mb-3 text-sm">Recent Orders</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[300px]">
          {orders.map((order) => (
            <div key={order.id} className="flex justify-between py-2 border-b border-gray-700 last:border-0">
              <span className="text-white text-sm">{order.customer}</span>
              <span className="text-green-400 text-sm">{order.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}