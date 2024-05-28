import { smoothScrollToTop } from '../../../helpers/smoothScroll';
import { HeroOrganism } from '../../organisms/HeroOrganism/HeroOrganism';

import css from './HeroTemplate.module.css';

function HeroTemplate() {
  smoothScrollToTop();
  return (
    <div className={css.hero}>
      <HeroOrganism />
    </div>
  );
}

export { HeroTemplate };
