import { useContext } from 'react';

import { IconAtom } from '../IconAtom/IconAtom.jsx';
import { mobileMenuContext } from '../../../helpers/mobileMenuProvider.jsx';

import css from './CloseMobileMenuButtonAtom.module.css';

function CloseMobileMenuButtonAtom() {
  const { close } = useContext(mobileMenuContext);
  return (
    <button className={[css['mobile-menu__button']]} onClick={close}>
      <IconAtom className={[css['mobile-menu__button__icon']]} id="close" />
    </button>
  );
}

export { CloseMobileMenuButtonAtom };
