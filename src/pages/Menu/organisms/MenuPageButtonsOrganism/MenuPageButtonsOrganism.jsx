import { MenuPageButtonMolecule } from '../../molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

import css from './MenuPageButtonsOrganism.module.css';

function MenuPageButtonsOrganism() {
  return (
    <div className={css.menu__buttons}>
      <MenuPageButtonMolecule link="/menu/food" buttonText="jedzenie" />
      <MenuPageButtonMolecule link="/menu/alcohol" buttonText="alkohole" />
    </div>
  );
}

export { MenuPageButtonsOrganism };
