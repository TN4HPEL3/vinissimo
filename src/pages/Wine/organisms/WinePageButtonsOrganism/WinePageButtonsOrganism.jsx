import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { MenuPageButtonMolecule } from '../../../Menu/molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

import css from '../../../Menu/organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism.module.css';

function WinePageButtonsOrganism() {
  const { t } = useLanguage();
  const { wineWineGlassesButton, wineWineBottlesButton } = t;
  return (
    <div className={css.menu__buttons}>
      <MenuPageButtonMolecule
        link="/wine/glasses"
        buttonText={wineWineGlassesButton}
      />
      <MenuPageButtonMolecule
        link="/wine/bottles"
        buttonText={wineWineBottlesButton}
      />
    </div>
  );
}

export { WinePageButtonsOrganism };
