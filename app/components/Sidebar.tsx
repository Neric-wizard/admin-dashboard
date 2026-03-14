"use client";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AdminPanel
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <a href="#" className="block px-4 py-2 text-white bg-purple-600/20 rounded-lg">Dashboard</a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">Users</a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">Orders</a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">Analytics</a>
        <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">Settings</a>
      </nav>
    </aside>
  );
}