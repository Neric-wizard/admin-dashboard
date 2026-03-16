"use client";

import { Bell, X, CheckCheck } from "lucide-react";
import { useState } from "react";

export default function NotificationCenter() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New user registered", time: "2 min ago", read: false },
    { id: 2, text: "Order #123 completed", time: "15 min ago", read: false },
    { id: 3, text: "Payment of $249 received", time: "1 hour ago", read: true },
    { id: 4, text: "Server backup completed", time: "3 hours ago", read: true },
    { id: 5, text: "New comment on order #456", time: "5 hours ago", read: false },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 min-w-[18px] h-[18px] bg-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 border-2 border-gray-900">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop with high z-index */}
          <div 
            className="fixed inset-0 z-[100]" 
            onClick={() => setOpen(false)} 
          />
          
          {/* Dropdown with even higher z-index */}
          <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl z-[101]">
            
            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-white font-semibold">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
                >
                  <CheckCheck size={14} />
                  Mark all read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => markAsRead(n.id)}
                    className={`p-4 border-b border-gray-700 last:border-0 hover:bg-gray-700/50 transition cursor-pointer ${
                      !n.read ? 'bg-purple-900/10 border-l-2 border-l-purple-500' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <p className={`text-sm ${n.read ? 'text-gray-400' : 'text-white'}`}>
                        {n.text}
                      </p>
                      {!n.read && (
                        <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-1.5"></span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{n.time}</p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Bell size={24} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No notifications</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-700 text-center">
              <button className="text-xs text-gray-400 hover:text-white transition">
                View all notifications
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}