import { MenuPageLinkAtom } from '../../atoms/MenuPageLinkAtom.jsx';
import { ButtonAtom } from '../../../../components/atoms/buttonAtom/ButtonAtom.jsx';

function MenuPageButtonMolecule({ link, buttonText }) {
  return (
    <MenuPageLinkAtom
      element={link}
      content={<ButtonAtom text={buttonText} />}
    />
  );
}

export { MenuPageButtonMolecule };
