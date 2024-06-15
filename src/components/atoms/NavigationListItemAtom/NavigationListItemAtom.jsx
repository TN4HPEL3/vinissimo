import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { mobileMenuContext } from '../../../helpers/mobileMenuProvider.jsx';

import css from './NavigationListItemAtom.module.css';

function NavigationListItemAtom({ element, text, activeRoutes }) {
  const { close } = useContext(mobileMenuContext);
  const location = useLocation();
  const isActive = activeRoutes.includes(location.pathname);
  return (
    <NavLink
      onClick={() => {
        smoothScrollToTop();
        close();
        return;
      }}
      className={isActive ? [css['link--active']] : [css['link']]}
      to={element}
    >
      {text}
    </NavLink>
  );
}

export { NavigationListItemAtom };
