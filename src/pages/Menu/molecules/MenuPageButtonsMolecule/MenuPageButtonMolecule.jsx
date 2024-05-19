import { MenuPageLinkAtom } from '../../atoms/MenuPageLinkAtom';
import { ButtonAtom } from '../../../../components/atoms/buttonAtom/ButtonAtom';

function MenuPageButtonMolecule({ link, buttonText }) {
  return (
    <MenuPageLinkAtom
      element={link}
      content={<ButtonAtom text={buttonText} />}
    />
  );
}

export { MenuPageButtonMolecule };
