import { IconAtom } from '../../../../components/atoms/IconAtom/IconAtom.jsx';

import css from './MenuPageArrowButtonMolecule.module.css';

function MenuPageArrowLeftButtonMolecule({ onClick }) {
  return (
    <button
      className={css['menu__button__arrow--left']}
      onClick={onClick}
      type="button"
    >
      <IconAtom id="right-arrow" />
    </button>
  );
}

export { MenuPageArrowLeftButtonMolecule };
