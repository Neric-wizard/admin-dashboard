export default function ActivityTimeline() {
  const activities = [
    { text: "New user registered", time: "2 min ago", icon: "👤" },
    { text: "Order #123 completed", time: "15 min ago", icon: "📦" },
    { text: "Payment received", time: "1 hour ago", icon: "💰" },
  ];

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
      <h2 className="text-white font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xl">{item.icon}</span>
            <div>
              <p className="text-white text-sm">{item.text}</p>
              <p className="text-gray-400 text-xs">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}