"use client";

import { createContext, useContext, useState } from "react";

const RecruiterModeContext = createContext();

export function RecruiterModeProvider({ children }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  return (
    <RecruiterModeContext.Provider value={{ isRecruiterMode, setIsRecruiterMode }}>
      {children}
    </RecruiterModeContext.Provider>
  );
}

export function useRecruiterMode() {
  const context = useContext(RecruiterModeContext);
  if (!context) {
    throw new Error("useRecruiterMode must be used within RecruiterModeProvider");
  }
  return context;
}