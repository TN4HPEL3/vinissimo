import { NavLink } from 'react-router-dom';

import { isLinkActive } from '../../../helpers/isLinkActive.js';
import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';

import css from './MenuPageLinkAtom.module.css';

function MenuPageLinkAtom({ element, content }) {
  return (
    <NavLink
      className={isActive => css[isLinkActive(isActive)]}
      to={element}
      onClick={smoothScrollToTop}
    >
      {content}
    </NavLink>
  );
}

export { MenuPageLinkAtom };
