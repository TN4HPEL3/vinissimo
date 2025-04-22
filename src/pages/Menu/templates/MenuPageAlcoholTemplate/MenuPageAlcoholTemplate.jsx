import { smoothScrollToTop } from '../../../../helpers/smoothScroll.js';
import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism.jsx';
import { MenuAlcoholsFirstPageOrganism } from '../../organisms/MenuAlcoholsFirstPageOrganism/MenuAlcoholsFirstPageOrganism.jsx';

import css from './MenuPageAlcoholTemplate.module.css';

function MenuPageAlcoholTemplate() {
  smoothScrollToTop();
  return (
    <div className={css.menu}>
      <MenuPageButtonsOrganism />
      <div className={css['menu__alcohols__content--page']}>
        <MenuAlcoholsFirstPageOrganism />
      </div>
    </div>
  );
}

export { MenuPageAlcoholTemplate };
