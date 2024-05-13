import { publicAccess } from '../../../helpers/publicAccess';

import css from './HeroAtom.module.css';

function HeroAtom() {
  return (
    <img
      className={css.hero__image}
      alt="Beef tartare"
      src={publicAccess('/IMG_9598.jpeg')}
    />
  );
}

export { HeroAtom };
