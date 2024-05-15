import { MenuPageButtonMolecule } from '../../molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule';

import css from './MenuPageOrganism.module.css';

function MenuPageOrganism({ children }) {
  return (
    <div className={css.menu}>
      <div className={css.menu__buttons}>
        <MenuPageButtonMolecule link="/menu/food" buttonText="jedzenie" />
        <MenuPageButtonMolecule link="/menu/alcohol" buttonText="alkohol" />
      </div>
      {children}
    </div>
  );
}

export { MenuPageOrganism };
