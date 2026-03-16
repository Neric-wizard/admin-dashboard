"use client";

import { useState, useEffect } from "react";

export default function RealTimeIndicator() {
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [isLive, setIsLive] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLastUpdate(new Date().toLocaleTimeString());
    
    const interval = setInterval(() => {
      setLastUpdate(new Date().toLocaleTimeString());
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Don't render anything on server
  if (!mounted) {
    return (
      <div className="flex items-center gap-2 text-xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-gray-400">Live data</span>
        <span className="text-gray-600">•</span>
        <span className="text-gray-500">Updating...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-gray-400">Live data</span>
      <span className="text-gray-600">•</span>
      <span className="text-gray-500">Updated {lastUpdate}</span>
    </div>
  );
}