import { IconAtom } from '../IconAtom/IconAtom';

import css from './CloseMobileMenuButtonAtom.module.css';

function CloseMobileMenuButtonAtom({ handleClick }) {
  return (
    <button className={[css['mobile-menu__button']]} onClick={handleClick}>
      <IconAtom className={[css['mobile-menu__button__icon']]} id="close" />
    </button>
  );
}

export { CloseMobileMenuButtonAtom };
