import { NavLink } from 'react-router-dom';

function NavigationListItemAtom({ element }) {
  return <NavLink to={element}>{element}</NavLink>;
}

export { NavigationListItemAtom };
