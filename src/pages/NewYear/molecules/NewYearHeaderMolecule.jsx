import { NewYearDateAtom } from '../atoms/NewYearDateAtom.jsx';
import { NewYearTitleAtom } from '../atoms/NewYearTitleAtom.jsx';
import { MenuPageButtonMolecule } from '../../Menu/molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

function NewYearHeaderMolecule() {
  return (
    <>
      <NewYearTitleAtom />
      <NewYearDateAtom />
      <MenuPageButtonMolecule link="/new-year/basic" buttonText="basic" />
      <MenuPageButtonMolecule link="/new-year/de-lux" buttonText="de lux" />
    </>
  );
}

export { NewYearHeaderMolecule };
