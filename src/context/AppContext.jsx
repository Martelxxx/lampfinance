import { createContext, useContext, useState } from 'react';

// Create the context
export const AppContext = createContext(); // ✅ Ensure AppContext is explicitly exported

// Provider component
export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState('null');

  return (
    <AppContext.Provider value={{ activeSection, setActiveSection, activeSubSection, setActiveSubSection }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
