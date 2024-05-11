import { IconAtom } from '../IconAtom/IconAtom';

import css from './OpenMobileMenuButtonAtom.module.css';

function OpenMobileMenuButtonAtom({ handleClick }) {
  return (
    <button
      className={[css['header__mobile-menu-button']]}
      onClick={handleClick}
    >
      <IconAtom id="burger-menu" />
    </button>
  );
}

export { OpenMobileMenuButtonAtom };
