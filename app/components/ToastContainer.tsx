"use client";

import { CheckCircle, XCircle, Info, X } from "lucide-react";
import { useToast } from "../context/ToastContext";  // Changed from "./context" to "../context"

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  const icons = {
    success: <CheckCircle size={18} className="text-green-400" />,
    error: <XCircle size={18} className="text-red-400" />,
    info: <Info size={18} className="text-blue-400" />,
  };

  const colors = {
    success: "border-green-500/30 bg-green-500/10",
    error: "border-red-500/30 bg-red-500/10",
    info: "border-blue-500/30 bg-blue-500/10",
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${colors[toast.type]} backdrop-blur-sm shadow-lg animate-slide-in`}
        >
          {icons[toast.type]}
          <span className="text-white text-sm">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}