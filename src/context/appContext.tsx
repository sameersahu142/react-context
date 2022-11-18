import React, { createContext, useContext, useState } from 'react';
import { appContextInterface, contextProps } from '../interface/interface';

export const AppContext = createContext<appContextInterface>({ isOpen: true });

function AppContextProvider({ children }: contextProps) {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <AppContext.Provider value={{ isOpen }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);