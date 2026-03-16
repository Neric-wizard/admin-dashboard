export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-800/50 rounded-xl p-4">
            <div className="h-8 w-8 bg-gray-700 rounded-lg mb-3"></div>
            <div className="h-3 w-16 bg-gray-700 rounded mb-2"></div>
            <div className="h-5 w-20 bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
      
      {/* Chart Skeleton */}
      <div className="bg-gray-800/50 rounded-xl p-4 h-64 mb-6">
        <div className="h-4 w-32 bg-gray-700 rounded mb-6"></div>
        <div className="h-40 w-full bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}