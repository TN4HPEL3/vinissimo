import { ButtonAtom } from '../../atoms/buttonAtom/ButtonAtom';

function MenuButtonsDesktopMolecule({
  handleClick,
  wineBottleBtnText,
  wineGlassBtnText,
  alcoholBtnText,
}) {
  return (
    <>
      <ButtonAtom handleClick={handleClick} text={wineBottleBtnText} />
      <ButtonAtom handleClick={handleClick} text={wineGlassBtnText} />
      <ButtonAtom handleClick={handleClick} text={alcoholBtnText} />
    </>
  );
}

export { MenuButtonsDesktopMolecule };
