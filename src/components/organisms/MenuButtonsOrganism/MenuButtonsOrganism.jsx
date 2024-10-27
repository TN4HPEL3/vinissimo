import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { MenuButtonMobileMolecule } from '../../molecules/MenuButtonMobileMolecule/MenuButtonMobileMolecule.jsx';
import { MenuPageButtonMolecule } from '../../../pages/Menu/molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

function MenuButtonsOrganism() {
  const screen = CheckMediaQuery();
  const { t } = useLanguage();
  const { menuWineBottlesButton, menuAlcoholButton, menuWineGlassesButton } = t;
  return screen === 'desktop' ? (
    <>
      <MenuPageButtonMolecule
        buttonText={menuWineBottlesButton}
        link="/wine/bottles"
      />
      <MenuPageButtonMolecule
        buttonText={menuWineGlassesButton}
        link="/wine/glasses"
      />
      <MenuPageButtonMolecule
        buttonText={menuAlcoholButton}
        link="/menu/alcohol"
      />
    </>
  ) : (
    <MenuButtonMobileMolecule />
  );
}

export { MenuButtonsOrganism };
