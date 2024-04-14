import { Page404ErrorAtom } from '../atoms/Error/Page404ErrorAtom';
import { Page404ImageAtom } from '../atoms/Image/Page404ImageAtom';
import { Page404ButtonAtom } from '../atoms/Button/Page404ButtonAtom';
import { Page404ContentAtom } from '../atoms/Content/Page404ContentAtom';

import css from './Page404Molecule.module.css';

function Page404Molecule() {
  return (
    <div className={css.page404Molecule}>
      <div className={css.page404Molecule__content}>
        <Page404ErrorAtom />
        <Page404ContentAtom />
        <Page404ButtonAtom />
      </div>
      <div className={css.page404Molecule__image}>
        <Page404ImageAtom />
      </div>
    </div>
  );
}

export { Page404Molecule };
