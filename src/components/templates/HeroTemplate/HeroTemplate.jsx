import { HeroOrganism } from '../../organisms/HeroOrganism/HeroOrganism.jsx';

import css from './HeroTemplate.module.css';

function HeroTemplate() {
  return (
    <div className={css.hero}>
      <HeroOrganism />
    </div>
  );
}

export { HeroTemplate };
