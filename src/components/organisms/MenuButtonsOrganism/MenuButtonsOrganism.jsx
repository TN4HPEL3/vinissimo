import { CheckMediaQuery } from '../../../helpers/checkMediaQuery';
import { MenuButtonMobileMolecule } from '../../molecules/MenuButtonMobileMolecule/MenuButtonMobileMolecule';
import { MenuButtonsDesktopMolecule } from '../../molecules/MenuButtonsDesktopMolecule/MenuButtonsDesktopMolecule';

function MenuButtonsOrganism({
  handleClick,
  handleChange,
  wineBottleBtnText,
  alcoholBtnText,
  wineGlassBtnText,
}) {
  const screen = CheckMediaQuery();
  return screen === 'desktop' ? (
    <MenuButtonsDesktopMolecule
      handleClick={handleClick}
      wineBottleBtnText={wineBottleBtnText}
      alcoholBtnText={alcoholBtnText}
      wineGlassBtnText={wineGlassBtnText}
    />
  ) : (
    <MenuButtonMobileMolecule
      handleChange={handleChange}
      wineBottleBtnText={wineBottleBtnText}
      alcoholBtnText={alcoholBtnText}
      wineGlassBtnText={wineGlassBtnText}
    />
  );
}

export { MenuButtonsOrganism };
