import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import QuickActions from "./components/QuickActions";
import StatsCards from "./components/StatsCards";
import SalesChart from "./components/SalesChart";
import RecentOrders from "./components/RecentOrders";
import ActivityTimeline from "./components/ActivityTimeline";
import UserManagement from "./components/UserManagement";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <main className="ml-64 p-8">
        <Header />
        <QuickActions />
        <StatsCards />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div className="lg:col-span-1">
            <ActivityTimeline />
          </div>
        </div>
        
        <RecentOrders />
        <UserManagement />  {/* New section */}
      </main>
    </div>
  );
}