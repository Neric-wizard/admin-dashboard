"use client";

import { useState } from "react";
import { Calendar, TrendingUp, Activity } from "lucide-react";

export default function ActivityHeatmap() {
  const [selectedMonth, setSelectedMonth] = useState("March 2026");
  
  // Generate 30 days of random activity data
  const days = Array.from({ length: 30 }, (_, i) => {
    const date = i + 1;
    // Random activity level between 0-100
    const level = Math.floor(Math.random() * 100);
    // Determine intensity class
    let intensity = "bg-gray-800";
    if (level > 80) intensity = "bg-purple-500";
    else if (level > 60) intensity = "bg-purple-500/80";
    else if (level > 40) intensity = "bg-purple-500/60";
    else if (level > 20) intensity = "bg-purple-500/40";
    else if (level > 10) intensity = "bg-purple-500/20";
    
    return {
      date,
      level,
      intensity,
      events: Math.floor(level / 10) + 2
    };
  });

  // Calculate stats
  const avgActivity = Math.floor(days.reduce((acc, d) => acc + d.level, 0) / days.length);
  const peakDay = Math.max(...days.map(d => d.level));
  const totalEvents = days.reduce((acc, d) => acc + d.events, 0);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Activity Heatmap</h2>
            <p className="text-gray-400 text-sm">30-day user activity pattern</p>
          </div>
        </div>
        <select 
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-gray-700 text-white rounded-lg px-3 py-2 text-sm border border-gray-600"
        >
          <option>March 2026</option>
          <option>February 2026</option>
          <option>January 2026</option>
        </select>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900/50 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-xs mb-1">Avg Daily</p>
          <p className="text-2xl font-bold text-white">{avgActivity}</p>
          <p className="text-green-400 text-xs">↑ 8%</p>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-xs mb-1">Peak Day</p>
          <p className="text-2xl font-bold text-white">{peakDay}</p>
          <p className="text-blue-400 text-xs">Day {days.find(d => d.level === peakDay)?.date}</p>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-xs mb-1">Total Events</p>
          <p className="text-2xl font-bold text-white">{totalEvents}</p>
          <p className="text-purple-400 text-xs">This month</p>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 text-sm">Activity intensity</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Low</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 rounded bg-gray-800"></div>
              <div className="w-4 h-4 rounded bg-purple-500/20"></div>
              <div className="w-4 h-4 rounded bg-purple-500/40"></div>
              <div className="w-4 h-4 rounded bg-purple-500/60"></div>
              <div className="w-4 h-4 rounded bg-purple-500/80"></div>
              <div className="w-4 h-4 rounded bg-purple-500"></div>
            </div>
            <span className="text-xs text-gray-500">High</span>
          </div>
        </div>

        {/* Days of week labels */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center text-gray-500 text-xs">{day}</div>
          ))}
        </div>

        {/* Heatmap cells - arranged in 5 rows of 7 days */}
        <div className="space-y-1">
          {[0, 1, 2, 3, 4].map(row => (
            <div key={row} className="grid grid-cols-7 gap-1">
              {[0, 1, 2, 3, 4, 5, 6].map(col => {
                const dayIndex = row * 7 + col;
                const day = days[dayIndex];
                if (!day) return <div key={col} className="aspect-square rounded opacity-0"></div>;
                
                return (
                  <div
                    key={col}
                    className={`aspect-square rounded ${day.intensity} hover:scale-110 transition-transform cursor-pointer relative group`}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 border border-gray-700">
                      Day {day.date}: {day.events} events
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/20">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-medium mb-1">Activity Insights</h3>
            <p className="text-gray-300 text-sm">
              Peak activity on <span className="text-purple-400 font-medium">Tuesdays and Thursdays</span>. 
              Weekend engagement is 40% lower. Consider scheduling important updates mid-week.
            </p>
          </div>
        </div>
      </div>

      {/* Mini activity legend */}
      <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>High (80%+)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500/60"></div>
          <span>Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-800"></div>
          <span>Low</span>
        </div>
      </div>
    </div>
  );
}