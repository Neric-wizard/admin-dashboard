"use client";

import { useState } from "react";
import { Search, UserPlus, Shield, Edit2, Trash2, Download } from "lucide-react";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const users = [
    { id: 1, name: "Sarah Chen", email: "sarah@techstart.com", role: "Admin", status: "Active", lastActive: "2 min", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: 2, name: "Michael Okonkwo", email: "michael@scaleup.com", role: "Editor", status: "Active", lastActive: "15 min", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: 3, name: "Amina Diallo", email: "amina@build.africa", role: "Viewer", status: "Active", lastActive: "1 hr", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: 4, name: "David Okafor", email: "david@paystack.com", role: "Admin", status: "Active", lastActive: "3 hr", avatar: "DO", color: "from-orange-500 to-red-500" },
    { id: 5, name: "Fatima Ahmed", email: "fatima@startup.com", role: "Editor", status: "Inactive", lastActive: "2 days", avatar: "FA", color: "from-gray-500 to-gray-600" },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Role", "Status"];
    const csvData = users.map(user => [user.name, user.email, user.role, user.status]);
    
    let csvContent = headers.join(",") + "\n";
    csvData.forEach(row => {
      csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4 mt-6">
      {/* Header */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Users</h2>
          <div className="flex gap-2">
            <button 
              onClick={exportToCSV}
              className="bg-gray-700 p-2 rounded-lg text-white hover:bg-gray-600 transition"
              title="Export CSV"
            >
              <Download size={16} />
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg text-white hover:from-purple-700 hover:to-pink-700 transition">
              <UserPlus size={16} />
            </button>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600"
          />
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="bg-gray-900/30 rounded-lg p-3 border border-gray-700">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {user.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-sm truncate">{user.name}</h3>
                  <p className="text-gray-400 text-xs truncate">{user.email}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 text-[10px] bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full">
                      <Shield size={10} />
                      {user.role}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      user.status === "Active" 
                        ? "bg-green-500/10 text-green-400" 
                        : "bg-gray-500/10 text-gray-400"
                    }`}>
                      {user.status}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {user.lastActive}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-1.5 text-gray-400 hover:text-purple-400 rounded-lg hover:bg-gray-700">
                    <Edit2 size={14} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-red-400 rounded-lg hover:bg-gray-700">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center py-4 text-sm">No users found</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-700">
        <p className="text-gray-400 text-xs">
          {filteredUsers.length} of {users.length} users
        </p>
        <button className="text-purple-400 text-xs font-medium">
          View All →
        </button>
      </div>
    </div>
  );
}