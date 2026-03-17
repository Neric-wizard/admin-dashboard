"use client";

import { Layout, LayoutGrid } from "lucide-react";
import { useView } from "../context/ViewContext";

export default function BentoGridToggle() {
  const { isBento, setIsBento } = useView();

  return (
    <button
      onClick={() => setIsBento(!isBento)}
      className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition flex items-center gap-2"
      title={isBento ? "Switch to grid view" : "Switch to bento view"}
    >
      {isBento ? <LayoutGrid size={18} /> : <Layout size={18} />}
      <span className="text-xs hidden sm:inline">
        {isBento ? "Grid" : "Bento"}
      </span>
    </button>
  );
}