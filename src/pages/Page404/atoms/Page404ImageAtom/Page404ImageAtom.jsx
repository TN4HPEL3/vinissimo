import { publicAccess } from '../../../../helpers/publicAccess.js';

import css from './Page404ImageAtom.module.css';

function Page404ImageAtom() {
  return (
    <img
      className={css.page404ImageAtom}
      src={publicAccess('/Rabarbar.jpeg')}
      alt={'Bottle of the wine with glass'}
    ></img>
  );
}

export { Page404ImageAtom };
