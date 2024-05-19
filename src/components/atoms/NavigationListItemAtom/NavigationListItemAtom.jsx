import { NavLink } from 'react-router-dom';

import css from './NavigationListItemAtom.module.css';

function NavigationListItemAtom({ element, text }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? [css['header__navigation__link--active']]
          : [css['header__navigation__link']]
      }
      to={element}
    >
      {text}
    </NavLink>
  );
}

export { NavigationListItemAtom };
