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
      {/* Desktop View */}
      <div className="hidden lg:flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <MobileMenu />
          <main className="p-6">
            
            {/* SECTION 1: Header */}
            <Header />
            
            {/* SECTION 2: Quick Actions */}
            <QuickActions />
            
            {/* SECTION 3: Stats Cards */}
            <StatsCards />
            
            {/* SECTION 4: Sales Chart + Activity Timeline */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="col-span-2">
                <SalesChart />
              </div>
              <div className="col-span-1">
                <ActivityTimeline />
              </div>
            </div>
            
            {/* SECTION 5: Recent Orders */}
            <div className="mt-6">
              <RecentOrders />
            </div>
            
            {/* SECTION 6: User Management */}
            <div className="mt-6">
              <UserManagement />
            </div>
            
          </main>
        </div>
      </div>

      {/* Mobile View - We'll fix this later */}
      {/* <div className="block lg:hidden">
        <MobileDashboard />
      </div> */}
    </div>
  );
}