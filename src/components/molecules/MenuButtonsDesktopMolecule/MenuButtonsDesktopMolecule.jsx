import { ButtonAtom } from '../../atoms/buttonAtom/ButtonAtom';

function MenuButtonsDesktopMolecule({
  handleClick,
  winesBottlesBtnText,
  wineGlassBtnText,
  alcoholBtnText,
}) {
  return (
    <>
      <ButtonAtom handleClick={handleClick} text={winesBottlesBtnText} />
      <ButtonAtom handleClick={handleClick} text={wineGlassBtnText} />
      <ButtonAtom handleClick={handleClick} text={alcoholBtnText} />
    </>
  );
}

export { MenuButtonsDesktopMolecule };
