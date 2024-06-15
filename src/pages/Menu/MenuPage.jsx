import { useContext } from 'react';

import { mobileMenuContext } from '../../helpers/mobileMenuProvider.jsx';
import { ArrowUpTemplate } from '../../components/templates/ArrowUpTemplate/ArrowUpTemplate.jsx';

function MenuPage({ children }) {
  const { isOpen } = useContext(mobileMenuContext);
  return (
    <>
      {children}
      {!isOpen && <ArrowUpTemplate />}
    </>
  );
}

export { MenuPage };
