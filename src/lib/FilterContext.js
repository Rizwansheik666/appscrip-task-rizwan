"use client";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [filterVisible, setFilterVisible] = useState(true);
  return (
    <FilterContext.Provider value={{ filterVisible, setFilterVisible }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}