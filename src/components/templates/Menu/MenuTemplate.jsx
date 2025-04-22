import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { MenuListOrganism } from '../../organisms/MenuListOrganism/MenuListOrganism.jsx';
import { MenuButtonsOrganism } from '../../organisms/MenuButtonsOrganism/MenuButtonsOrganism.jsx';

import css from './MenuTemplate.module.css';

function MenuTemplate() {
  const { t } = useLanguage();
  const {
    menuTitle,
    menuStartersTitle,
    menuMainsTitle,
    menuSidesTitle,
    menuDessertsTitle,
    menu,
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
        <div className={css.menu__buttons}>
          <MenuButtonsOrganism />
        </div>
      </div>
    </SectionTemplate>
  );
}

export { MenuTemplate };
