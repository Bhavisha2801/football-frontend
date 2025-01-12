import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the context type
interface SelectedDateContextType {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

// Create context
const SelectedDateContext = createContext<SelectedDateContextType | undefined>(undefined);

// Provider component
export const SelectedDateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);

  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </SelectedDateContext.Provider>
  );
};

// Custom hook to use the selected date context
export const useSelectedDate = (): SelectedDateContextType => {
  const context = useContext(SelectedDateContext);
  if (!context) {
    throw new Error("useSelectedDate must be used within a SelectedDateProvider");
  }
  return context;
};
