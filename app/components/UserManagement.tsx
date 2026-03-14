"use client";

import { useState } from "react";
import { MoreHorizontal, Download, Search, UserPlus, Shield, Edit2, Trash2 } from "lucide-react";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const users = [
    { id: 1, name: "Sarah Chen", email: "sarah@techstart.com", role: "Admin", status: "Active", lastActive: "2 min ago", avatar: "SC", color: "from-purple-500 to-pink-500" },
    { id: 2, name: "Michael Okonkwo", email: "michael@scaleup.com", role: "Editor", status: "Active", lastActive: "15 min ago", avatar: "MO", color: "from-blue-500 to-cyan-500" },
    { id: 3, name: "Amina Diallo", email: "amina@build.africa", role: "Viewer", status: "Active", lastActive: "1 hour ago", avatar: "AD", color: "from-green-500 to-emerald-500" },
    { id: 4, name: "David Okafor", email: "david@paystack.com", role: "Admin", status: "Active", lastActive: "3 hours ago", avatar: "DO", color: "from-orange-500 to-red-500" },
    { id: 5, name: "Fatima Ahmed", email: "fatima@startup.com", role: "Editor", status: "Inactive", lastActive: "2 days ago", avatar: "FA", color: "from-gray-500 to-gray-600" },
    { id: 6, name: "John Mensah", email: "john@tech.co", role: "Viewer", status: "Active", lastActive: "5 hours ago", avatar: "JM", color: "from-purple-500 to-pink-500" },
    { id: 7, name: "Grace Okonkwo", email: "grace@innovate.com", role: "Admin", status: "Active", lastActive: "8 hours ago", avatar: "GO", color: "from-blue-500 to-cyan-500" },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Role", "Status", "Last Active"];
    const csvData = users.map(user => [user.name, user.email, user.role, user.status, user.lastActive]);
    
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
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <p className="text-gray-400 text-sm mt-1">Manage users, roles and permissions</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={exportToCSV}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2"
          >
            <Download size={16} />
            Export CSV
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <UserPlus size={16} />
            Add User
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search users by name, email or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
        />
      </div>

      {/* WRAPPED CONTENT FOR MOBILE SCROLLING */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle px-4 sm:px-0">
          <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div key={user.id} className="bg-gray-900/30 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition min-w-[600px] sm:min-w-full">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold text-lg`}>
                        {user.avatar}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{user.name}</h3>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full">
                            <Shield size={12} />
                            {user.role}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            user.status === "Active" 
                              ? "bg-green-500/10 text-green-400" 
                              : "bg-gray-500/10 text-gray-400"
                          }`}>
                            {user.status}
                          </span>
                          <span className="text-xs text-gray-500">
                            Active {user.lastActive}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-purple-400 hover:bg-gray-700 rounded-lg transition">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-lg transition">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-8">No users found matching "{searchTerm}"</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          Showing {filteredUsers.length} of {users.length} users
        </p>
        <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition">
          View All Users →
        </button>
      </div>
    </div>
  );
}