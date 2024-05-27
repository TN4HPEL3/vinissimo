import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { HeroOrganism } from '../../organisms/HeroOrganism/HeroOrganism.jsx';

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
