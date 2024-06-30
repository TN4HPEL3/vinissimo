import React, { createContext, useState, useContext } from 'react';

import pl from '../../data/translation/pl.json';
import eng from '../../data/translation/eng.json';

const LanguageContext = createContext();

const translations = {
  pl,
  eng,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'pl'
  );

  const changeLanguage = lang => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
