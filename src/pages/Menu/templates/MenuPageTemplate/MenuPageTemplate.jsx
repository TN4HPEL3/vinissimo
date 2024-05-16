import { MenuPageButtonMolecule } from '../../molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule';

import css from './MenuPageTemplate.module.css';

function MenuPageTemplate({ children, className }) {
  return (
    <div className={className}>
      <div className={css.menu__buttons}>
        <MenuPageButtonMolecule link="/menu/food" buttonText="jedzenie" />
        <MenuPageButtonMolecule link="/menu/alcohol" buttonText="alkohole" />
      </div>
      {children}
    </div>
  );
}

export { MenuPageTemplate };
