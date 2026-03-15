"use client";

import { useState } from "react";
import { Search, Shield, Edit2, Trash2, Download } from "lucide-react";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const users = [
    { id: 1, name: "Sarah Chen", email: "sarah@tech.com", role: "Admin", status: "Active", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: 2, name: "Michael O.", email: "michael@scale.com", role: "Editor", status: "Active", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: 3, name: "Amina D.", email: "amina@build.com", role: "Viewer", status: "Active", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: 4, name: "David O.", email: "david@pay.com", role: "Admin", status: "Active", avatar: "DO", color: "from-orange-500 to-red-500" },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // CSV Export Function
  const exportToCSV = () => {
    // Create CSV content
    const headers = ["Name", "Email", "Role", "Status"];
    const csvData = filteredUsers.map(user => [user.name, user.email, user.role, user.status]);
    
    // Convert to CSV string
    let csvContent = headers.join(",") + "\n";
    csvData.forEach(row => {
      csvContent += row.join(",") + "\n";
    });

    // Create download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4 mt-4">
      {/* Header with Export Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold">Users</h2>
        <button 
          onClick={exportToCSV}
          className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1.5 rounded-lg transition"
        >
          <Download size={14} />
          Export CSV
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2 pl-8 pr-3 text-sm text-white"
        />
      </div>

      {/* Users List */}
      <div className="space-y-2 max-h-[300px] overflow-y-auto">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-gray-900/30 rounded-lg p-3 border border-gray-700">
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                {user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-sm font-medium truncate">{user.name}</h3>
                  <div className="flex gap-1">
                    <button className="p-1 text-gray-400 hover:text-purple-400">
                      <Edit2 size={12} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-400">
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-400 text-xs truncate">{user.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1 text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full">
                    <Shield size={10} />
                    {user.role}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
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