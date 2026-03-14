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
      <main className="lg:ml-64 p-3 sm:p-4">
        <Header />
        <QuickActions />
        <StatsCards />
        
        {/* Chart + Activity - Stack on mobile, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div className="lg:col-span-1">
            <ActivityTimeline />
          </div>
        </div>
        
        <RecentOrders />import Sidebar from "./components/Sidebar";
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
      {/* Mobile Menu Button - visible on small screens */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>
      
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Main Content - full width on mobile, with margin on desktop */}
      <main className="lg:ml-64 min-h-screen">
        {/* Add padding top for mobile menu */}
        <div className="pt-14 lg:pt-0">
          <div className="p-3 sm:p-4">
            <Header />
            <QuickActions />
            <StatsCards />
            
            {/* Chart + Activity */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div className="lg:col-span-1">
                <ActivityTimeline />
              </div>
            </div>
            
            <RecentOrders />
            <UserManagement />
          </div>
        </div>
      </main>
    </div>
  );
}
        <UserManagement />
      </main>
    </div>
  );
}