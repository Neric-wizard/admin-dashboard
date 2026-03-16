"use client";

import { LayoutGrid, List } from "lucide-react";
import { useState, useEffect } from "react";

export default function DensityToggle() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    // Apply density class to html element
    if (isCompact) {
      document.documentElement.classList.add('compact');
    } else {
      document.documentElement.classList.remove('compact');
    }
  }, [isCompact]);

  return (
    <button
      onClick={() => setIsCompact(!isCompact)}
      className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
      title={isCompact ? "Switch to comfortable view" : "Switch to compact view"}
    >
      {isCompact ? <List size={18} /> : <LayoutGrid size={18} />}
    </button>
  );
}