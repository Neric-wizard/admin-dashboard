import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import QuickActions from "./components/QuickActions";
import StatsCards from "./components/StatsCards";
import SalesChart from "./components/SalesChart";
import RecentOrders from "./components/RecentOrders";
import ActivityTimeline from "./components/ActivityTimeline";
import UserManagement from "./components/UserManagement";
import MobileMenu from "./components/MobileMenu";
import MobileDashboard from "./components/MobileDashboard";

export default function Home() {
  return (
    <>
      {/* Mobile View (hidden on desktop) */}
      <div className="lg:hidden">
        <MobileDashboard />
      </div>
      
      {/* Desktop View (hidden on mobile) */}
      <div className="hidden lg:block min-h-screen bg-gray-950">
        <MobileMenu />
        <Sidebar />
        <main className="ml-64 p-3 sm:p-4">
          <Header />
          <QuickActions />
          <StatsCards />
          
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
        </main>
      </div>
    </>
  );
}