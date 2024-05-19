import { NavLink } from 'react-router-dom';

import { isLinkActive } from '../../../helpers/isLinkActive';

import css from './MenuPageLinkAtom.module.css';

function MenuPageLinkAtom({ element, content }) {
  return (
    <NavLink className={isActive => css[isLinkActive(isActive)]} to={element}>
      {content}
    </NavLink>
  );
}

export { MenuPageLinkAtom };
