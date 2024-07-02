import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { MenuListOrganism } from '../../organisms/MenuListOrganism/MenuListOrganism.jsx';
import { MenuButtonsOrganism } from '../../organisms/MenuButtonsOrganism/MenuButtonsOrganism.jsx';

import menu from '../../../data/menu.json';

import css from './MenuTemplate.module.css';

function MenuTemplate() {
  const { t } = useLanguage();
  const {
    menuTitle,
    menuStartersTitle,
    menuSoupsTitle,
    menuMainsTitle,
    menuSidesTitle,
    menuDessertsTitle,
    menuCheesesTitle,
  } = t;

  return (
    <SectionTemplate title={menuTitle}>
      <div className={css.menu}>
        <div className={css.menu__content}>
          <div>
            <MenuListOrganism
              category={'starters'}
              data={menu}
              title={menuStartersTitle}
            />
            <MenuListOrganism
              category={'soups'}
              data={menu}
              title={menuSoupsTitle}
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
            <MenuListOrganism
              category={'cheeses'}
              data={menu}
              title={menuCheesesTitle}
            />
          </div>
        </div>
        <div className={css.menu__buttons}>
          <MenuButtonsOrganism />
        </div>
      </div>
    </SectionTemplate>
  );
}

export { MenuTemplate };
