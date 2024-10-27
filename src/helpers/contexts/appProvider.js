import React from 'react';

import { LanguageProvider } from './languageContext.js';
import { MobileMenuProvider } from '../mobileMenuProvider.jsx';

export const AppProvider = ({ children }) => {
  return (
    <LanguageProvider>
      <MobileMenuProvider>{children}</MobileMenuProvider>
    </LanguageProvider>
  );
};
