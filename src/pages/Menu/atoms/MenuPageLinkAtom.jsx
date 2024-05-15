import { NavLink } from 'react-router-dom';

import css from './MenuPageLinkAtom.module.css';

function MenuPageLinkAtom({ element, content }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? [css['link--active']] : [css['link']]
      }
      to={element}
    >
      {content}
    </NavLink>
  );
}

export { MenuPageLinkAtom };
