"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000, users: 2400 },
  { name: 'Tue', sales: 3000, users: 1398 },
  { name: 'Wed', sales: 5000, users: 3800 },
  { name: 'Thu', sales: 4780, users: 3908 },
  { name: 'Fri', sales: 5890, users: 4800 },
  { name: 'Sat', sales: 4390, users: 3800 },
  { name: 'Sun', sales: 4490, users: 4300 },
];

export default function SalesChart() {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4">
      <h2 className="text-white font-semibold mb-4">Sales Overview</h2>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#fff'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              dot={{ fill: '#8b5cf6', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="#ec4899" 
              strokeWidth={2}
              dot={{ fill: '#ec4899', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}