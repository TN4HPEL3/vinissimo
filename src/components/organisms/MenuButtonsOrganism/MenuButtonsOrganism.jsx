import { CheckMediaQuery } from '../../../helpers/checkMediaQuery';
import { MenuButtonMobileMolecule } from '../../molecules/MenuButtonMobileMolecule/MenuButtonMobileMolecule';
import { MenuButtonsDesktopMolecule } from '../../molecules/MenuButtonsDesktopMolecule/MenuButtonsDesktopMolecule';

function MenuButtonsOrganism({ handleClick, handleChange, text }) {
  const screen = CheckMediaQuery();
  const { winesBottlesBtnText, alcoholBtnText, wineGlassBtnText } = text;

  return screen === 'desktop' ? (
    <MenuButtonsDesktopMolecule
      handleClick={handleClick}
      winesBottlesBtnText={winesBottlesBtnText}
      alcoholBtnText={alcoholBtnText}
      wineGlassBtnText={wineGlassBtnText}
    />
  ) : (
    <MenuButtonMobileMolecule
      handleChange={handleChange}
      winesBottlesBtnText={winesBottlesBtnText}
      alcoholBtnText={alcoholBtnText}
      wineGlassBtnText={wineGlassBtnText}
    />
  );
}

export { MenuButtonsOrganism };
