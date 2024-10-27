import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { MenuPageButtonMolecule } from '../../molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

import css from './MenuPageButtonsOrganism.module.css';

function MenuPageButtonsOrganism() {
  const { t } = useLanguage();
  const { menuPageFoodButton, menuPageAlcoholButton } = t;
  return (
    <div className={css.menu__buttons}>
      <MenuPageButtonMolecule
        link="/menu/food"
        buttonText={menuPageFoodButton}
      />
      <MenuPageButtonMolecule
        link="/menu/alcohol"
        buttonText={menuPageAlcoholButton}
      />
    </div>
  );
}

export { MenuPageButtonsOrganism };
