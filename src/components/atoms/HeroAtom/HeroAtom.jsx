import { publicAccess } from '../../../helpers/publicAccess.js';

import css from './HeroAtom.module.css';

function HeroAtom() {
  return (
    <img
      className={css.hero__image}
      alt="Beef tartare"
      src={publicAccess('/IMG_3903.jpg')}
    />
  );
}

export { HeroAtom };
