import { CheckMediaQuery } from '../../../helpers/checkMediaQuery';
import { MenuPageButtonMolecule } from '../../../pages/Menu/molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule';
import { MenuButtonMobileMolecule } from '../../molecules/MenuButtonMobileMolecule/MenuButtonMobileMolecule';

function MenuButtonsOrganism({ text }) {
  const screen = CheckMediaQuery();
  const { winesBottlesBtnText, alcoholBtnText, wineGlassBtnText } = text;

  return screen === 'desktop' ? (
    <>
      <MenuPageButtonMolecule
        buttonText={winesBottlesBtnText}
        link="/wine/bottles"
      />
      <MenuPageButtonMolecule
        buttonText={wineGlassBtnText}
        link="/wine/glasses"
      />
      <MenuPageButtonMolecule
        buttonText={alcoholBtnText}
        link="/menu/alcohol"
      />
    </>
  ) : (
    <MenuButtonMobileMolecule
      winesBottlesBtnText={winesBottlesBtnText}
      alcoholBtnText={alcoholBtnText}
      wineGlassBtnText={wineGlassBtnText}
    />
  );
}

export { MenuButtonsOrganism };
