"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type FilterContextType = {
  resetFilters: () => void;
  resetSignal: boolean;
};

const FilterContext = createContext<FilterContextType | null>(null);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [resetSignal, setResetSignal] = useState(false);

  function resetFilters() {
    setResetSignal((prev) => !prev);
  }

  return <FilterContext.Provider value={{ resetFilters, resetSignal }}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
