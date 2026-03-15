"use client";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-1 sm:gap-2 my-3">
      <button className="bg-purple-600 text-white rounded-lg py-2 text-xs font-medium">New</button>
      <button className="bg-gray-700 text-white rounded-lg py-2 text-xs font-medium">Export</button>
      <button className="bg-gray-700 text-white rounded-lg py-2 text-xs font-medium">Import</button>
      <button className="bg-gray-700 text-white rounded-lg py-2 text-xs font-medium">Filter</button>
    </div>
  );
}