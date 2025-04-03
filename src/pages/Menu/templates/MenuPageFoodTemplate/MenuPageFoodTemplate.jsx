import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { MenuListOrganism } from '../../../../components/organisms/MenuListOrganism/MenuListOrganism.jsx';
import { MenuPageButtonsOrganism } from '../../organisms/MenuPageButtonsOrganism/MenuPageButtonsOrganism.jsx';

import css from './MenuPageFoodTemplate.module.css';

function MenuPageFoodTemplate() {
  const { t } = useLanguage();
  const {
    menuStartersTitle,
    menuDessertsTitle,
    menuSoupsTitle,
    menuMainsTitle,
    menuSidesTitle,
    menu,
  } = t;
  return (
    <div className={css.menu}>
      <MenuPageButtonsOrganism />
      <div className={css.menu__content}>
        <div>
          <MenuListOrganism
            category={'starters'}
            data={menu}
            title={menuStartersTitle}
          />
        </div>
        <div>
          <MenuListOrganism
            category={'mains'}
            data={menu}
            title={menuMainsTitle}
          />
          <MenuListOrganism
            category={'sides'}
            data={menu}
            title={menuSidesTitle}
          />
          <MenuListOrganism
            category={'desserts'}
            data={menu}
            title={menuDessertsTitle}
          />
        </div>
      </div>
    </div>
  );
}

export { MenuPageFoodTemplate };
