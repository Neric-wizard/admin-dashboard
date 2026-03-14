"use client";

import { useState } from "react";
import { Search, Shield, Edit2, Trash2 } from "lucide-react";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const users = [
    { id: 1, name: "Sarah Chen", email: "sarah@tech.com", role: "Admin", status: "Active", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: 2, name: "Michael O.", email: "michael@scale.com", role: "Editor", status: "Active", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: 3, name: "Amina D.", email: "amina@build.com", role: "Viewer", status: "Active", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: 4, name: "David O.", email: "david@pay.com", role: "Admin", status: "Active", avatar: "DO", color: "from-orange-500 to-red-500" },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-3 mt-3">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-bold text-white">Users</h2>
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
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-gray-900/30 rounded-lg p-2 border border-gray-700">
            <div className="flex items-start gap-2">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                {user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xs font-medium truncate">{user.name}</h3>
                  <div className="flex gap-1">
                    <button className="p-0.5 text-gray-400 hover:text-purple-400">
                      <Edit2 size={10} />
                    </button>
                    <button className="p-0.5 text-gray-400 hover:text-red-400">
                      <Trash2 size={10} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-400 text-[8px] truncate">{user.email}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="flex items-center gap-0.5 text-[8px] bg-purple-500/10 text-purple-400 px-1 py-0.5 rounded-full">
                    <Shield size={8} />
                    {user.role}
                  </span>
                  <span className={`text-[8px] px-1 py-0.5 rounded-full ${
                    user.status === "Active" ? "bg-green-500/10 text-green-400" : "bg-gray-500/10 text-gray-400"
                  }`}>
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}