import { createContext, useState } from 'react';

const mobileMenuContext = createContext();

function MobileMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <mobileMenuContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </mobileMenuContext.Provider>
  );
}

export { MobileMenuProvider, mobileMenuContext };
