import { NavLink } from 'react-router-dom';

import { IconAtom } from '../../../atoms/IconAtom/IconAtom.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';

import css from './NavigationLogoMolecule.module.css';

function NavigationLogoMolecule() {
  const screen = CheckMediaQuery();
  return (
    <>
      <NavLink to="/" className={css.header__logo}>
        {screen === 'mobile' ? (
          <IconAtom id="logo-mobile" />
        ) : (
          <IconAtom id="logo-desktop" />
        )}
      </NavLink>
    </>
  );
}

export { NavigationLogoMolecule };
