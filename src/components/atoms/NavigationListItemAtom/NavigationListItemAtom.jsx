import { NavLink } from 'react-router-dom';

function NavigationListItemAtom({ element, text }) {
  return <NavLink to={element}>{text}</NavLink>;
}

export { NavigationListItemAtom };
