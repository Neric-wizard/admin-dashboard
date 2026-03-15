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
      {/* Desktop View - ONLY this shows on desktop */}
      <div className="hidden lg:flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <MobileMenu />
          <main className="p-6">
            <Header />
            <QuickActions />
            <StatsCards />
            
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="col-span-2">
                <SalesChart />
              </div>
              <div className="col-span-1">
                <ActivityTimeline />
              </div>
            </div>
            
            <div className="mt-6">
              <RecentOrders />
            </div>
            
            <div className="mt-6">
              <UserManagement />
            </div>
          </main>
        </div>
      </div>

      {/* Mobile View - ONLY this shows on mobile */}
      <div className="block lg:hidden">
        {/* We'll handle mobile separately */}
        <div>Mobile view coming soon</div>
      </div>
    </div>
  );
}