"use client";

import { createContext, useContext, useState, useEffect } from "react";

type ViewContextType = {
  isBento: boolean;
  setIsBento: (value: boolean) => void;
  isCompact: boolean;
  setIsCompact: (value: boolean) => void;
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [isBento, setIsBento] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    if (isBento) {
      document.documentElement.classList.add('bento-mode');
    } else {
      document.documentElement.classList.remove('bento-mode');
    }
  }, [isBento]);

  useEffect(() => {
    if (isCompact) {
      document.documentElement.classList.add('compact');
    } else {
      document.documentElement.classList.remove('compact');
    }
  }, [isCompact]);

  return (
    <ViewContext.Provider value={{ isBento, setIsBento, isCompact, setIsCompact }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
}