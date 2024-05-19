import { IconAtom } from '../../../../components/atoms/IconAtom/IconAtom';

import css from './MenuPageArrowButtonMolecule.module.css';

function MenuPageArrowRightButtonMolecule({ onClick }) {
  return (
    <button
      className={css['menu__button__arrow--right']}
      onClick={onClick}
      type="button"
    >
      <IconAtom id="right-arrow" />
    </button>
  );
}

export { MenuPageArrowRightButtonMolecule };
