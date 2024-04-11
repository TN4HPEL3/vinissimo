import { useState } from 'react';

import { Icon } from '../../atoms/Icon/Icon.jsx';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation.jsx';

import css from './MobileMenuButton.module.css';

function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <>
      <button className={css.mobileMenuButton} onClick={handleClick}>
        <Icon id="burger-menu" />
      </button>
      {isOpen && (
        <div>
          <button className={css.closeButton} onClick={handleClick}>
            X
          </button>
          <HeaderNavigation className={css.header__navigation} />
        </div>
      )}
    </>
  );
}

export { MobileMenuButton };
