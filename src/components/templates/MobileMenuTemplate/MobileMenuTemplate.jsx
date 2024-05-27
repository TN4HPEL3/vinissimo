import { useContext } from 'react';

import { mobileMenuContext } from '../../../helpers/mobileMenuProvider.jsx';
import { MobileMenuOrganism } from '../../organisms/MobileMenuOrganism/MobileMenuOrganism.jsx';

import css from './MobileMenuTemplate.module.css';

function MobileMenuTemplate() {
  const { isOpen } = useContext(mobileMenuContext);
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
