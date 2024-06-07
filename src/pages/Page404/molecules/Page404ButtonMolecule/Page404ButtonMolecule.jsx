import { NavLink } from 'react-router-dom';

import { Page404ButtonAtom } from '../../atoms/Page404ButtonAtom/Page404ButtonAtom.jsx';

function Page404ButtonMolecule() {
  return (
    <NavLink to="">
      <Page404ButtonAtom />
    </NavLink>
  );
}

export { Page404ButtonMolecule };
