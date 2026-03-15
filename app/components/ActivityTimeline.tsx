export default function ActivityTimeline() {
  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
      <h2 className="text-white font-bold mb-3 text-sm">Activity</h2>
      <div className="space-y-2">
        <p className="text-gray-300 text-xs">New user registered</p>
        <p className="text-gray-300 text-xs">Order completed</p>
        <p className="text-gray-300 text-xs">Payment received</p>
      </div>
    </div>
  );
}