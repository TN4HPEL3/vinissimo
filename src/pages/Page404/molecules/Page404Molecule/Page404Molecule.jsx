import { Page404ErrorAtom } from '../../atoms/Page404ErrorAtom/Page404ErrorAtom.jsx';
import { Page404ContentAtom } from '../../atoms/Page404ContentAtom/Page404ContentAtom.jsx';
import { Page404ButtonMolecule } from '../Page404ButtonMolecule/Page404ButtonMolecule.jsx';

import css from './Page404Molecule.module.css';

function Page404Molecule() {
  return (
    <div className={css.page404Molecule}>
      <div className={css.page404Molecule__content}>
        <Page404ErrorAtom />
        <Page404ContentAtom />
        <div className={css.page404Molecule__image}></div>
      </div>
      <Page404ButtonMolecule />
    </div>
  );
}

export { Page404Molecule };
