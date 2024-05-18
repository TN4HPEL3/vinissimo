import { MobileMenuOrganism } from '../../organisms/MobileMenuOrganism/MobileMenuOrganism';

import css from './MobileMenuTemplate.module.css';

function MobileMenuTemplate({ isOpen, handleClick }) {
  return (
    <nav
      className={`${css['mobile-menu']} ${
        isOpen ? css['mobile-menu--open'] : ''
      }`}
    >
      <MobileMenuOrganism isOpen={isOpen} handleClick={handleClick} />
    </nav>
  );
}

export { MobileMenuTemplate };
