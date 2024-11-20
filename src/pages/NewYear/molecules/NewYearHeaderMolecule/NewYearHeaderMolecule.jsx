import { NewYearDateAtom } from '../../atoms/NewYearDateAtom/NewYearDateAtom.jsx';
import { NewYearTitleAtom } from '../../atoms/NewYearTitleAtom/NewYearTitleAtom.jsx';
import { MenuPageButtonMolecule } from '../../../Menu/molecules/MenuPageButtonsMolecule/MenuPageButtonMolecule.jsx';

import css from './NewYearHeaderMolecule.module.css';

function NewYearHeaderMolecule() {
  return (
    <>
      <NewYearTitleAtom />
      <div>
        <NewYearDateAtom />
      </div>
      <div className={css.newYear__buttons}>
        <MenuPageButtonMolecule link="/new-year/basic" buttonText="basic" />
        <MenuPageButtonMolecule link="/new-year/de-lux" buttonText="de lux" />
      </div>
    </>
  );
}

export { NewYearHeaderMolecule };
