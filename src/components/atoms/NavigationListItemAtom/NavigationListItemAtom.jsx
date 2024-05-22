import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { isLinkActive } from '../../../helpers/isLinkActive';
import { mobileMenuContext } from '../../../helpers/mobileMenuProvider';

import css from './NavigationListItemAtom.module.css';

function NavigationListItemAtom({ element, text }) {
  const { close } = useContext(mobileMenuContext);
  return (
    <NavLink
      onClick={close}
      className={isActive => css[isLinkActive(isActive)]}
      to={element}
    >
      {text}
    </NavLink>
  );
}

export { NavigationListItemAtom };
