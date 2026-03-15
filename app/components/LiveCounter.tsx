"use client";

import { useEffect, useState } from "react";
import { Users, TrendingUp } from "lucide-react";

export default function LiveCounter() {
  const [onlineCount, setOnlineCount] = useState(247);
  const [change, setChange] = useState("+12");

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuation between -3 and +8
      const fluctuation = Math.floor(Math.random() * 12) - 3;
      setOnlineCount(prev => Math.max(180, Math.min(320, prev + fluctuation)));
      
      // Random change indicator
      const randomChange = Math.floor(Math.random() * 20) - 5;
      setChange(randomChange > 0 ? `+${randomChange}` : randomChange.toString());
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const changeColor = change.startsWith('+') ? 'text-green-400' : 'text-red-400';
  const changeIcon = change.startsWith('+') ? '▲' : '▼';

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Live Users</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white">{onlineCount}</span>
              <span className="flex items-center gap-1 text-sm">
                <span className={`${changeColor}`}>{changeIcon}</span>
                <span className={changeColor}>{change}%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>
    </div>
  );
}