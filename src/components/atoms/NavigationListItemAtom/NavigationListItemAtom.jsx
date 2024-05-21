import { NavLink } from 'react-router-dom';

import { isLinkActive } from '../../../helpers/isLinkActive';

import css from './NavigationListItemAtom.module.css';

function NavigationListItemAtom({ element, text }) {
  return (
    <NavLink className={isActive => css[isLinkActive(isActive)]} to={element}>
      {text}
    </NavLink>
  );
}

export { NavigationListItemAtom };
