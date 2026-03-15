import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import QuickActions from "./components/QuickActions";
import StatsCards from "./components/StatsCards";
import SalesChart from "./components/SalesChart";
import RecentOrders from "./components/RecentOrders";
import ActivityTimeline from "./components/ActivityTimeline";
import UserManagement from "./components/UserManagement";
import MobileMenu from "./components/MobileMenu";
import DateRangePicker from "./components/DateRangePicker";
import StatusSummary from "./components/StatusSummary";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <MobileMenu />
      
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="pt-16 lg:pt-6 px-4 lg:px-6 pb-10">
          
          {/* Header with Date Picker */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <DateRangePicker />
          </div>
          
          <Header />
          <QuickActions />
          
          {/* Stats Cards with Tooltips */}
          <StatsCards />
          
          {/* Two column layout */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-6 mt-6">
            <div className="lg:col-span-2">
              <SalesChart />
            </div>
            <div className="lg:col-span-1">
              <ActivityTimeline />
            </div>
          </div>
          
          {/* Status Summary */}
          <div className="mt-6">
            <StatusSummary />
          </div>
          
          {/* Recent Orders */}
          <div className="mt-6">
            <RecentOrders />
          </div>
          
          {/* User Management */}
          <div className="mt-6">
            <UserManagement />
          </div>
        </div>
      </main>
    </div>
  );
}