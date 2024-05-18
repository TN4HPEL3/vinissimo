import { NavLink } from 'react-router-dom';

import css from './MenuPageLinkAtom.module.css';

function MenuPageLinkAtom({ element, content }) {
  return (
    <NavLink className={isActive => isActiveLink(isActive)} to={element}>
      {content}
    </NavLink>
  );
}

export { MenuPageLinkAtom };

function isActiveLink({ isActive }) {
  return isActive ? [css['link--active']] : [css['link']];
}
