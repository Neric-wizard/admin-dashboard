import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import QuickActions from "./components/QuickActions";
import StatsCards from "./components/StatsCards";
import SalesChart from "./components/SalesChart";
import RecentOrders from "./components/RecentOrders";
import ActivityTimeline from "./components/ActivityTimeline";
import UserManagement from "./components/UserManagement";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MobileMenu />
      <Sidebar />
      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        <Header />
        <QuickActions />
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-4 lg:mt-8">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div className="lg:col-span-1">
            <ActivityTimeline />
          </div>
        </div>
        
        <RecentOrders />
        <UserManagement />
      </main>
    </div>
  );
}