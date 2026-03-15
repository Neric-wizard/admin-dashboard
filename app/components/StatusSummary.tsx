"use client";

export default function StatusSummary() {
  const stats = [
    { label: "Total Orders", value: "1,234", color: "bg-blue-500" },
    { label: "Completed", value: "892", color: "bg-green-500" },
    { label: "Processing", value: "234", color: "bg-yellow-500" },
    { label: "Pending", value: "108", color: "bg-purple-500" },
  ];

  const completionRate = Math.round((892 / 1234) * 100);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4">
      <h3 className="text-white text-sm font-medium mb-3">Order Status</h3>
      
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-400">Completion rate</span>
          <span className="text-green-400">{completionRate}%</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-900/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-2 h-2 rounded-full ${stat.color}`} />
              <span className="text-gray-400 text-xs">{stat.label}</span>
            </div>
            <p className="text-white font-bold text-lg">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}