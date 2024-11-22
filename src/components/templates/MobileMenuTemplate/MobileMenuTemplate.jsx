import { useContext, useEffect } from 'react';

import { mobileMenuContext } from '../../../helpers/mobileMenuProvider.jsx';
import { MobileMenuOrganism } from '../../organisms/MobileMenuOrganism/MobileMenuOrganism.jsx';

import css from './MobileMenuTemplate.module.css';

function MobileMenuTemplate() {
  const { isOpen } = useContext(mobileMenuContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`${css['mobile-menu']} ${
        isOpen ? css['mobile-menu--open'] : ''
      }`}
    >
      <MobileMenuOrganism />
    </nav>
  );
}

export { MobileMenuTemplate };
