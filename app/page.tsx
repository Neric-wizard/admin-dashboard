import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        
        <StatsCards />
      </main>
    </div>
  );
}