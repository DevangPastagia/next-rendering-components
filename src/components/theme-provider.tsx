"use client";

import { createContext, useContext } from "react";

type theme = {
  color: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: theme = {
  color: {
    primary: "#9b72ed",
    secondary: "#ffffff",
  },
};

const ThemeContext = createContext<theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
