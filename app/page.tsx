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
      
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen w-full overflow-x-hidden">
        <div className="pt-16 lg:pt-6 px-3 sm:px-4 lg:px-6 pb-10">
          <Header />
          <QuickActions />
          <StatsCards />
          
          {/* Chart + Activity - stack on mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
            <div className="lg:col-span-2 w-full overflow-x-auto">
              <SalesChart />
            </div>
            <div className="lg:col-span-1 w-full">
              <ActivityTimeline />
            </div>
          </div>
          
          {/* Recent Orders */}
          <div className="mt-4 lg:mt-6 w-full overflow-x-auto">
            <RecentOrders />
          </div>
          
          {/* User Management */}
          <div className="mt-4 lg:mt-6 w-full overflow-x-auto">
            <UserManagement />
          </div>
        </div>
      </main>
    </div>
  );
}