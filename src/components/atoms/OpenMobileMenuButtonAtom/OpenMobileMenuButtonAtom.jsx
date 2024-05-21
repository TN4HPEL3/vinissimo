import { useContext } from 'react';

import { IconAtom } from '../IconAtom/IconAtom';
import { mobileMenuContext } from '../../../helpers/mobileMenuProvider';

import css from './OpenMobileMenuButtonAtom.module.css';

function OpenMobileMenuButtonAtom() {
  const { open } = useContext(mobileMenuContext);
  return (
    <button className={[css['header__mobile-menu-button']]} onClick={open}>
      <IconAtom id="burger-menu" />
    </button>
  );
}

export { OpenMobileMenuButtonAtom };
